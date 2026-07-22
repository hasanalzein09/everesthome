# Everest Home — Furniture & Interior Design

موقع ثلاثي اللغات (العربية / English / Français) لشركة **Everest Home** — أثاث مخصص وتصميم داخلي في جنوب لبنان.

## المميزات

- 🌍 **3 لغات** مع صفحات ثابتة منفصلة: `/ar` `/en` `/fr` + صفحة اختيار لغة على `/`
- 🎨 تصميم 2026: warm minimalism, bento grids, micro-interactions, scroll-reveal
- 🧊 **مشهد 3D تفاعلي** في الـ Hero (Three.js + React Three Fiber)
- 🔍 **SEO/GEO/AEO كامل**:
  - `hreflang` + canonical لكل لغة
  - JSON-LD: `HomeAndConstructionBusiness`, `Organization`, `FAQPage` (مع `inLanguage`)
  - `sitemap.xml` متعدد اللغات + `robots.txt` + `llms.txt` لمحركات الـ AI (ChatGPT/Gemini/Perplexity)
  - JSON-LD إضافي: `WebSite`, `OfferCatalog` (4 خدمات), `BreadcrumbList`
  - Geo meta tags (geo.region, geo.placename, ICBM) لجنوب لبنان
  - عناوين H1/H2 بصيغة أسئلة جاهزة لمحركات الإجابة (AEO)
- 📍 GEO محلي: التركيز على South Lebanon والمدن (صور، النبطية، بنت جبيل...)
- 📱 متجاوب بالكامل مع RTL/LTR حسب اللغة

## الأوامر

```bash
npm run dev    # تشغيل محلي
npm run build  # بناء النسخة الثابتة في out/
npm run lint   # فحص الكود
```

## تعديل المحتوى

- النصوص بثلاث لغات: `messages/ar.ts` · `messages/en.ts` · `messages/fr.ts`
- أرقام الهاتف وروابط التواصل: `app/i18n.ts` (ثوابت `phones`, `instagramUrl`)
- المشهد ثلاثي الأبعاد: `app/components/Scene3D.tsx`

## النشر على Cloudflare Pages

1. ارفع المشروع على GitHub/GitLab.
2. في Cloudflare Pages أنشئ مشروعاً جديداً واربطه بالمستودع:
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
3. (اختياري) أضف متغير بيئة `NEXT_PUBLIC_SITE_URL` بدومينك النهائي، مثل:
   `https://everesthome.com` — حتى تتحدث روابط canonical و hreflang والـ sitemap.
4. بعد أول نشر، حدّث الدومين داخل `public/sitemap.xml` و `public/robots.txt` إذا كان مختلفاً عن `everesthome.pages.dev`.

ملف `public/_headers` يضيف تلقائياً security headers وتخزين مؤقت طويل للأصول الثابتة.

## قبل الإطلاق

- [ ] استبدل صور الـ Gallery الوهمية بصور قبل/بعد وفيديوهات حقيقية
- [ ] تأكد من رابط الإنستغرام الصحيح
- [ ] حدّث الدومين في `sitemap.xml` و `robots.txt`
- [ ] فعّل `NEXT_PUBLIC_SITE_URL` في إعدادات Cloudflare
