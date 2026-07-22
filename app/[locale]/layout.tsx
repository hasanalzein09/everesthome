import { notFound } from "next/navigation";
import {
  locales,
  isLocale,
  getDictionary,
  phones,
  instagramUrl,
} from "../i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://everesthome.pages.dev";

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${baseUrl}/#business`,
    name: "Everest Home",
    alternateName: "Everest Home – Furniture & Interior Design",
    description: dict.meta.description,
    url: `${baseUrl}/${locale}`,
    telephone: phones.map((p) => p.tel),
    address: {
      "@type": "PostalAddress",
      addressRegion: "South Lebanon",
      addressCountry: "LB",
    },
    areaServed: dict.contact.areas.map((area) => ({
      "@type": "Place",
      name: area,
    })),
    sameAs: [instagramUrl],
    inLanguage: locale,
    priceRange: "$$",
    knowsAbout: [
      "Custom furniture",
      "Interior design",
      "Wood decor",
      "Furniture painting",
      "Bedrooms",
      "Living rooms",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    name: "Everest Home",
    alternateName: "Everest Home – Furniture & Interior Design",
    url: baseUrl,
    inLanguage: ["ar-LB", "en", "fr"],
    publisher: { "@id": `${baseUrl}/#organization` },
  };

  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "@id": `${baseUrl}/${locale}/#services`,
    name: dict.services.title,
    inLanguage: locale,
    itemListElement: dict.services.items.map((service, index) => ({
      "@type": "Offer",
      position: index + 1,
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.desc,
        provider: { "@id": `${baseUrl}/#business` },
        areaServed: {
          "@type": "AdministrativeArea",
          name: "South Lebanon",
        },
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Everest Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: dict.meta.ogTitle,
        item: `${baseUrl}/${locale}`,
      },
    ],
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: "Everest Home",
    url: baseUrl,
    sameAs: [instagramUrl],
    contactPoint: phones.map((p) => ({
      "@type": "ContactPoint",
      telephone: p.tel,
      contactType: "customer service",
      areaServed: "LB",
      availableLanguage: ["ar", "en", "fr"],
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
