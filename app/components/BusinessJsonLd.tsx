import type { Dictionary } from "../i18n";
import { phones, instagramUrl } from "../i18n";

export default function BusinessJsonLd({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: string;
}) {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://everesthome-lb.com";
  const pageUrl = locale === "ar" ? baseUrl : `${baseUrl}/${locale}`;

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${baseUrl}/#business`,
    name: "Everest Home",
    alternateName: "Everest Home – Furniture & Interior Design",
    description: dict.meta.description,
    url: pageUrl,
    telephone: phones.map((p) => p.tel),
    address: {
      "@type": "PostalAddress",
      addressRegion: "South Lebanon",
      addressCountry: "LB",
    },
    areaServed: { "@type": "Country", name: "Lebanon" },
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
    "@id": `${pageUrl}/#services`,
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
        areaServed: { "@type": "Country", name: "Lebanon" },
      },
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
    </>
  );
}
