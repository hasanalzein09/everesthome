import type { Metadata } from "next";
import Script from "next/script";
import { Cairo, Amiri, Marcellus } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["latin", "arabic"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const marcellus = Marcellus({
  variable: "--font-marcellus",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://everesthome-lb.com"
  ),
  title: "Everest Home – Furniture & Interior Design",
  description:
    "Everest Home offers custom furniture, interior design, wooden decorations, bedrooms, living rooms and luxury home solutions across Lebanon.",
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport = {
  themeColor: "#1a1410",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      suppressHydrationWarning
      className={`${cairo.variable} ${amiri.variable} ${marcellus.variable} antialiased`}
    >
      <body className="min-h-screen font-sans texture-grain">
        <Script id="locale-attrs" strategy="beforeInteractive">
          {`(function(){try{var l=location.pathname.split("/")[1];var m={ar:["ar","rtl"],en:["en","ltr"],fr:["fr","ltr"]}[l];if(m){document.documentElement.lang=m[0];document.documentElement.dir=m[1];}}catch(e){}})();`}
        </Script>
        {children}
      </body>
    </html>
  );
}
