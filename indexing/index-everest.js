#!/usr/bin/env node
/**
 * Everest Home — Google Indexing API
 * يوزّع صفحات الموقع على 7 Service Accounts (كل حساب ~106 صفحة)
 * بدون أي dependencies — JWT يدوي + fetch المدمج بـ Node
 *
 * التشغيل:  node indexing/index-everest.js [--dry-run]
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const DIR = __dirname;
const KEYS = [
  'aichatbot2-34384-2a0f29e3afae.json',
  'astute-surge-481020-h6-ac143b16f05a.json',
  'babachatbot-d4982-596d8a073308.json',
  'galvanic-host-481020-q9-b8d6c53f7e9f.json',
  'gen-lang-client-0351836273-f2ef135dbd9f.json',
  'gen-lang-client-0518457756-7f30d7a0f308.json',
  // TODO: رجّعو لما ينضاف hasan-314@index2-480721.iam.gserviceaccount.com كـ Owner بالـ GSC
  // 'index2-480721-2670bdad25b9.json',
];
const URLS_FILE = path.join(DIR, 'urls.txt');
const REPORT_FILE = path.join(DIR, 'indexing-report.json');
const DRY_RUN = process.argv.includes('--dry-run');

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function base64url(buf) {
  return Buffer.from(buf).toString('base64')
    .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

async function getAccessToken(key) {
  const now = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const payload = base64url(JSON.stringify({
    iss: key.client_email,
    scope: 'https://www.googleapis.com/auth/indexing',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600,
  }));
  const unsigned = `${header}.${payload}`;
  const sign = crypto.createSign('RSA-SHA256');
  sign.update(unsigned);
  const signature = sign.sign(key.private_key).toString('base64')
    .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  const jwt = `${unsigned}.${signature}`;

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=${jwt}`,
  });
  const data = await res.json();
  if (!data.access_token) throw new Error(`auth failed for ${key.client_email}: ${JSON.stringify(data)}`);
  return data.access_token;
}

async function publishUrl(token, url) {
  const res = await fetch('https://indexing.googleapis.com/v3/urlNotifications:publish', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ url, type: 'URL_UPDATED' }),
  });
  const data = await res.json().catch(() => ({}));
  return { status: res.status, data };
}

async function runAccount(keyFile, urls, report) {
  const key = JSON.parse(fs.readFileSync(path.join(DIR, 'service-accounts', keyFile), 'utf8'));
  const email = key.client_email;
  const tag = email.split('@')[0];
  let token;
  try {
    token = await getAccessToken(key);
  } catch (e) {
    console.error(`[${tag}] ❌ AUTH FAILED: ${e.message}`);
    report.accounts[email] = { error: 'auth', urls: {} };
    return;
  }
  console.log(`[${tag}] 🔑 auth OK — ${urls.length} URLs`);
  report.accounts[email] = { total: urls.length, success: 0, failed: 0, quotaStopped: false, urls: {} };

  for (const url of urls) {
    if (DRY_RUN) {
      report.accounts[email].urls[url] = 'dry-run';
      report.accounts[email].success++;
      continue;
    }
    const { status, data } = await publishUrl(token, url);
    if (status === 200) {
      report.accounts[email].success++;
      report.accounts[email].urls[url] = 'ok';
      console.log(`[${tag}] ✅ ${url}`);
    } else {
      const reason = data?.error?.message || `HTTP ${status}`;
      report.accounts[email].failed++;
      report.accounts[email].urls[url] = `${status}: ${reason}`;
      console.log(`[${tag}] ❌ ${status} ${url} — ${reason}`);
      // 403 = مش owner بالـ Search Console | 429 = خلصت الـ quota
      if (status === 403 || status === 429) {
        report.accounts[email].quotaStopped = true;
        report.accounts[email].stopReason = `${status}: ${reason}`;
        console.log(`[${tag}] ⛔ stopping account (${status})`);
        break;
      }
    }
    fs.writeFileSync(REPORT_FILE, JSON.stringify(report, null, 2));
    await sleep(350); // احترام الـ rate limit
  }
  fs.writeFileSync(REPORT_FILE, JSON.stringify(report, null, 2));
  console.log(`[${tag}] done — ✅ ${report.accounts[email].success} / ❌ ${report.accounts[email].failed}`);
}

async function main() {
  let urls = fs.readFileSync(URLS_FILE, 'utf8').split('\n').map((s) => s.trim()).filter(Boolean);

  // resume: تخطّي الـ URLs اللي انبعتوا بنجاح من قبل
  let done = new Set();
  if (fs.existsSync(REPORT_FILE)) {
    try {
      const prev = JSON.parse(fs.readFileSync(REPORT_FILE, 'utf8'));
      for (const acc of Object.values(prev.accounts || {})) {
        for (const [u, st] of Object.entries(acc.urls || {})) if (st === 'ok') done.add(u);
      }
    } catch {}
  }
  const skipped = urls.length - urls.filter((u) => !done.has(u)).length;
  urls = urls.filter((u) => !done.has(u));
  console.log(`📄 ${urls.length} URLs متبقية (${skipped} done before) | ${KEYS.length} accounts${DRY_RUN ? ' | DRY RUN' : ''}`);
  if (urls.length === 0) { console.log('✅ كل الصفحات انبعتت — مافي شي جديد'); return; }

  // تقسيم متساوي: كل حساب شطر (round-robin لضمان توزيع اللغات والخدمات بالتساوي)
  const shards = KEYS.map(() => []);
  urls.forEach((u, i) => shards[i % KEYS.length].push(u));

  const report = {
    site: 'https://everesthome-lb.com',
    startedAt: new Date().toISOString(),
    totalUrls: urls.length,
    accounts: {},
  };

  await Promise.all(KEYS.map((k, i) => runAccount(k, shards[i], report)));

  report.finishedAt = new Date().toISOString();
  fs.writeFileSync(REPORT_FILE, JSON.stringify(report, null, 2));

  let ok = 0, fail = 0, stopped = 0;
  for (const [email, r] of Object.entries(report.accounts)) {
    ok += r.success || 0;
    fail += r.failed || 0;
    if (r.quotaStopped || r.error) stopped++;
  }
  console.log('\n========== SUMMARY ==========');
  console.log(`✅ success: ${ok} | ❌ failed: ${fail} | ⛔ accounts stopped: ${stopped}`);
  console.log(`📊 report: ${REPORT_FILE}`);
  if (stopped > 0) {
    console.log('\n⚠️  حسابات وقفت — غالباً السبب:');
    console.log('   403 = لازم تضيف الإيميل Owner بالـ Search Console');
    console.log('   429 = خلصت الـ quota اليومية (200/يوم) — كمّل بكرا');
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
