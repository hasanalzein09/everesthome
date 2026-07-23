import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getDictionary,
  isLocale,
  routeLocales,
  type Locale,
} from "../../i18n";
import { pseoCombos, pseoServices, parseCombo } from "../../seo-data";
import PseoPage from "../../components/PseoPage";
import BusinessJsonLd from "../../components/BusinessJsonLd";

export const dynamicParams = false;

export function generateStaticParams() {
  return routeLocales.flatMap((locale) =>
    pseoCombos.map((combo) => ({ locale, combo: combo.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; combo: string }>;
}): Promise<Metadata> {
  const { locale, combo } = await params;
  const parsed = parseCombo(combo);
  if (!parsed || !isLocale(locale)) return {};

  const { service, city } = parsed;
  const loc = locale as Locale;
  const title = `${service.names[loc]} ${loc === "fr" ? "à" : "in"} ${city.names[loc]} | Everest Home`;
  const description =
    loc === "fr"
      ? `${service.names[loc]} à ${city.names[loc]} : conception et réalisation sur mesure par Everest Home. Visite et consultation gratuites — WhatsApp 03 371 324.`
      : `${service.names[loc]} in ${city.names[loc]}: custom design and build with high quality by Everest Home. Free visit and consultation — WhatsApp 03 371 324.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/${combo}/`,
      languages: {
        "ar-LB": `/p/${combo}/`,
        en: `/en/${combo}/`,
        fr: `/fr/${combo}/`,
        "x-default": `/p/${combo}/`,
      },
    },
    openGraph: {
      title,
      description,
      locale: loc === "fr" ? "fr_FR" : "en_US",
      type: "website",
      url: `/${locale}/${combo}/`,
      siteName: "Everest Home",
    },
    other: {
      "content-language": locale,
      "geo.region": "LB",
      "geo.placename": city.names.en,
    },
  };
}

export default async function LocaleComboPage({
  params,
}: {
  params: Promise<{ locale: string; combo: string }>;
}) {
  const { locale, combo } = await params;
  const parsed = parseCombo(combo);
  if (!parsed || !isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const loc = locale as Locale;
  const { service, city } = parsed;
  const otherServices = pseoServices
    .filter((s) => s.slug !== service.slug)
    .map((s) => ({ slug: `${s.slug}-${city.slug}`, name: s.names[loc] }));

  return (
    <>
      <BusinessJsonLd dict={dict} locale={loc} />
      <PseoPage
        dict={dict}
        locale={loc}
        service={service}
        city={city}
        otherServices={otherServices}
      />
    </>
  );
}
