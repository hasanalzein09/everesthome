import type { Metadata } from "next";
import { getDictionary } from "./i18n";
import BusinessJsonLd from "./components/BusinessJsonLd";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Projects from "./components/Projects";
import Process from "./components/Process";
import Gallery from "./components/Gallery";
import Faq from "./components/Faq";
import PseoLinks from "./components/PseoLinks";
import CtaBand from "./components/CtaBand";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

const dict = getDictionary("ar");

export const metadata: Metadata = {
  title: dict.meta.title,
  description: dict.meta.description,
  keywords: dict.meta.keywords,
  alternates: {
    canonical: "/",
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
    url: "/",
    siteName: "Everest Home",
    alternateLocale: ["en_US", "fr_FR"],
  },
  twitter: {
    card: "summary_large_image",
    title: dict.meta.ogTitle,
    description: dict.meta.ogDescription,
  },
  other: {
    "content-language": "ar-LB",
    "geo.region": "LB-JA",
    "geo.placename": "South Lebanon",
    "geo.position": "33.2721;35.2033",
    ICBM: "33.2721, 35.2033",
  },
};

export default function HomePage() {
  return (
    <>
      <BusinessJsonLd dict={dict} locale="ar" />
      <Header dict={dict} locale="ar" />
      <main>
        <Hero dict={dict} />
        <Marquee
          items={[
            ...dict.services.items.map((s) => s.title),
            dict.hero.badge,
          ]}
        />
        <About dict={dict} />
        <Services dict={dict} />
        <WhyUs dict={dict} />
        <Projects dict={dict} />
        <Process dict={dict} />
        <Gallery dict={dict} />
        <Faq dict={dict} locale="ar" />
        <PseoLinks locale="ar" />
        <CtaBand dict={dict} />
        <Contact dict={dict} />
      </main>
      <Footer dict={dict} locale="ar" />
      <FloatingWhatsApp label={dict.contact.whatsapp} />
    </>
  );
}
