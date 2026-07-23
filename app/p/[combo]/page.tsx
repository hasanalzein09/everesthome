import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "../../i18n";
import { allPseoServices, pseoCombos, parseCombo } from "../../seo-data";
import PseoPage from "../../components/PseoPage";
import BusinessJsonLd from "../../components/BusinessJsonLd";

const dict = getDictionary("ar");

export const dynamicParams = false;

export function generateStaticParams() {
  return pseoCombos.map((combo) => ({ combo: combo.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ combo: string }>;
}): Promise<Metadata> {
  const { combo } = await params;
  const parsed = parseCombo(combo);
  if (!parsed) return {};

  const { service, city } = parsed;
  const title = `${service.names.ar} في ${city.names.ar} | Everest Home`;
  const description = `${service.names.ar} في ${city.names.ar}: تصميم وتنفيذ حسب الطلب بجودة عالية من Everest Home. معاينة واستشارة مجانية — واتساب 03 371 324.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/p/${combo}/`,
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
      locale: "ar_LB",
      type: "website",
      url: `/p/${combo}/`,
      siteName: "Everest Home",
    },
    other: {
      "content-language": "ar-LB",
      "geo.region": "LB",
      "geo.placename": city.names.en,
    },
  };
}

export default async function ArabicComboPage({
  params,
}: {
  params: Promise<{ combo: string }>;
}) {
  const { combo } = await params;
  const parsed = parseCombo(combo);
  if (!parsed) notFound();

  const { service, city } = parsed;
  const otherServices = allPseoServices
    .filter((s) => s.slug !== service.slug)
    .map((s) => ({ slug: `${s.slug}-${city.slug}`, name: s.names.ar }));

  return (
    <>
      <BusinessJsonLd dict={dict} locale="ar" />
      <PseoPage
        dict={dict}
        locale="ar"
        service={service}
        city={city}
        otherServices={otherServices}
      />
    </>
  );
}
