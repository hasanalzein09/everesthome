// Generates public/sitemap.xml with all main pages + pSEO combos (hreflang cluster)
import { writeFileSync } from "node:fs";

const BASE = "https://everesthome-lb.com";

const services = [
  "custom-furniture",
  "wood-decor",
  "painting-finishing",
  "interior-design",
  "bedrooms",
  "sofas-salons",
  "tables",
  "wardrobes-storage",
  "tv-wall-units",
  "reupholstery",
  "dining-buffet",
  "home-office",
  "entrance-console",
];
const cities = [
  "south-lebanon",
  "beirut",
  "mount-lebanon",
  "north-lebanon",
  "bekaa",
  "tyre",
  "nabatieh",
  "sidon",
  "tripoli",
  "jounieh",
  "zahle",
  "baalbek",
  "akkar",
];

const today = new Date().toISOString().slice(0, 10);

function urlEntry(paths, priority) {
  const links = [
    `    <xhtml:link rel="alternate" hreflang="ar-LB" href="${BASE}${paths.ar}"/>`,
    `    <xhtml:link rel="alternate" hreflang="en" href="${BASE}${paths.en}"/>`,
    `    <xhtml:link rel="alternate" hreflang="fr" href="${BASE}${paths.fr}"/>`,
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE}${paths.ar}"/>`,
  ].join("\n");

  return [paths.ar, paths.en, paths.fr]
    .map(
      (p) => `  <url>
    <loc>${BASE}${p}</loc>
${links}
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`
    )
    .join("\n");
}

const main = urlEntry({ ar: "/", en: "/en/", fr: "/fr/" }, "1.0");

const combos = services.flatMap((s) => cities.map((c) => `${s}-${c}`));
const pseo = combos
  .map((combo) =>
    urlEntry(
      { ar: `/p/${combo}/`, en: `/en/${combo}/`, fr: `/fr/${combo}/` },
      "0.8"
    )
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${main}
${pseo}
</urlset>
`;

writeFileSync("public/sitemap.xml", xml);
console.log(`sitemap.xml written: ${3 + combos.length * 3} URLs`);
