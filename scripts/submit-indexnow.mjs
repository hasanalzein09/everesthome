// Submits all sitemap URLs to IndexNow (Bing, Yandex, Naver, Seznam)
// Bing's index feeds ChatGPT Search and Microsoft Copilot.
import { readFileSync } from "node:fs";

const KEY = "0218de141b04e6167972ea700dc62832";
const HOST = "everesthome-lb.com";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const xml = readFileSync("public/sitemap.xml", "utf8");
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

console.log(`Submitting ${urls.length} URLs to IndexNow...`);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  }),
});

console.log(`IndexNow response: ${res.status} ${res.statusText}`);
if (res.status === 200 || res.status === 202) {
  console.log("✓ Submission accepted — URLs will be crawled within hours.");
} else {
  console.log("✗ Something went wrong:", await res.text());
}
