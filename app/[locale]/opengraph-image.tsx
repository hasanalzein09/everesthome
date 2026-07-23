import { ImageResponse } from "next/og";
import { routeLocales } from "../i18n";

export const alt = "Everest Home – Furniture & Interior Design, Lebanon";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return routeLocales.map((locale) => ({ locale }));
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const titles: Record<string, string> = {
    ar: "Custom Furniture & Interior Design",
    en: "Custom Furniture & Interior Design",
    fr: "Meubles sur mesure & Design d'intérieur",
  };

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(135deg, #2e4034 0%, #221b14 70%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              background: "#a85b38",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "30px",
              fontWeight: 800,
            }}
          >
            E
          </div>
          <span style={{ color: "#e8c9a8", fontSize: "26px", letterSpacing: "6px" }}>
            LEBANON
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ color: "white", fontSize: "84px", fontWeight: 800, lineHeight: 1 }}>
            Everest Home
          </span>
          <span style={{ color: "#e8c9a8", fontSize: "40px", fontWeight: 600, marginTop: "18px" }}>
            {titles[locale] ?? titles.en}
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "24px", color: "rgba(255,255,255,0.65)", fontSize: "24px" }}>
          <span>Custom Furniture</span>
          <span style={{ color: "#a85b38" }}>•</span>
          <span>Wood Decor</span>
          <span style={{ color: "#a85b38" }}>•</span>
          <span>Interior Design</span>
          <span style={{ color: "#a85b38" }}>•</span>
          <span>@everestt.home</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
