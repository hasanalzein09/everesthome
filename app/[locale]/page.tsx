import type { Metadata } from "next";
import {
  getDictionary,
  isLocale,
  localeHreflang,
  type Locale,
} from "../i18n";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import About from "../components/About";
import QuickFacts from "../components/QuickFacts";
import Services from "../components/Services";
import WhyUs from "../components/WhyUs";
import MaterialsGuide from "../components/MaterialsGuide";
import Projects from "../components/Projects";
import Process from "../components/Process";
import Gallery from "../components/Gallery";
import Faq from "../components/Faq";
import PseoLinks from "../components/PseoLinks";
import CtaBand from "../components/CtaBand";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import ScrollProgress from "../components/ScrollProgress";
import BackToTop from "../components/BackToTop";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : "ar";
  const dict = getDictionary(safeLocale);

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    alternates: {
      canonical: `/${safeLocale}`,
      languages: {
        "ar-LB": "/",
        en: "/en/",
        fr: "/fr/",
        "x-default": "/",
      },
    },
    openGraph: {
      title: dict.meta.ogTitle,
      description: dict.meta.ogDescription,
      locale: dict.meta.ogLocale,
      type: "website",
      url: `/${safeLocale}`,
      siteName: "Everest Home",
      alternateLocale: ["ar_LB", "en_US", "fr_FR"].filter(
        (l) => l !== dict.meta.ogLocale
      ),
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.ogTitle,
      description: dict.meta.ogDescription,
    },
    other: {
      "content-language": localeHreflang[safeLocale],
      "geo.region": "LB",
      "geo.placename": "Lebanon",
      "geo.position": "33.2721;35.2033",
      ICBM: "33.2721, 35.2033",
    },
  };
}

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const safeLocale: Locale = isLocale(locale) ? locale : "ar";

  return (
    <>
      <ScrollProgress />
      <Header dict={dict} locale={safeLocale} />
      <main>
        <Hero dict={dict} />
        <Marquee
          items={[
            ...dict.services.items.map((s) => s.title),
            dict.hero.badge,
          ]}
        />
        <About dict={dict} />
        <QuickFacts dict={dict} locale={safeLocale} />
        <Services dict={dict} />
        <WhyUs dict={dict} />
        <MaterialsGuide locale={safeLocale} />
        <Projects dict={dict} />
        <Process dict={dict} />
        <Gallery dict={dict} />
        <Faq dict={dict} locale={safeLocale} />
        <PseoLinks locale={safeLocale} />
        <CtaBand dict={dict} />
        <Contact dict={dict} />
      </main>
      <Footer dict={dict} locale={safeLocale} />
      <FloatingWhatsApp label={dict.contact.whatsapp} />
      <BackToTop />
    </>
  );
}
