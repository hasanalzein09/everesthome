import type { Dictionary } from "../i18n";
import { phones, instagramUrl } from "../i18n";

const businessProfiles = [instagramUrl];

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
    "@type": ["HomeAndConstructionBusiness", "FurnitureStore"],
    additionalType: [
      // Wikidata: furniture manufacturer (Q1817883), furniture factory (Q60077401)
      "https://www.wikidata.org/wiki/Q1817883",
      "https://www.wikidata.org/wiki/Q60077401",
    ],
    "@id": `${baseUrl}/#business`,
    name: "Everest Home",
    alternateName: "Everest Home – Furniture Factory, Showroom & Interior Design",
    description: dict.meta.description,
    slogan: dict.meta.slogan,
    url: pageUrl,
    telephone: phones.map((p) => p.tel),
    address: {
      "@type": "PostalAddress",
      addressRegion: "South Lebanon",
      addressCountry: "LB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.2721,
      longitude: 35.2033,
    },
    areaServed: [
      { "@type": "Country", name: "Lebanon" },
      { "@type": "AdministrativeArea", name: "South Lebanon" },
      { "@type": "AdministrativeArea", name: "Mount Lebanon" },
      { "@type": "AdministrativeArea", name: "North Lebanon" },
      { "@type": "AdministrativeArea", name: "Bekaa" },
      { "@type": "AdministrativeArea", name: "Akkar" },
      { "@type": "AdministrativeArea", name: "Baalbek-Hermel" },
      { "@type": "AdministrativeArea", name: "Nabatieh" },
      { "@type": "City", name: "Beirut" },
      { "@type": "City", name: "Tyre" },
      { "@type": "City", name: "Sidon" },
      { "@type": "City", name: "Tripoli" },
      { "@type": "City", name: "Jounieh" },
      { "@type": "City", name: "Zahle" },
      { "@type": "City", name: "Baalbek" },
    ],
    sameAs: businessProfiles,
    inLanguage: locale,
    priceRange: "$$",
    knowsAbout: [
      "Furniture manufacturing",
      "Custom furniture factory",
      "Furniture showroom",
      "Custom furniture",
      "Made-to-order furniture",
      "Interior design",
      "Wood decor",
      "Furniture painting",
      "Furniture upholstery",
      "Bedrooms",
      "Living rooms",
      "Custom kitchens",
      "Wardrobes",
      "TV wall units",
      "Wooden doors",
      "Mashrabiya",
      "Commercial decor",
      "Pergola and outdoor furniture",
      "Bathroom vanities",
      "معمل مفروشات",
      "صالة عرض مفروشات",
      "مفروشات حسب الطلب",
      "تفصيل مفروشات",
      "تصميم داخلي",
      "ديكور خشبي",
      "تنجيد كنب",
      "دهان مفروشات",
      "غرف نوم",
      "صالونات",
      "مطابخ",
      "خزائن",
      "مشربية",
      "usine de meubles",
      "showroom meubles",
      "meubles sur mesure",
      "design d'intérieur",
    ],
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: "Everest Home",
    alternateName: "Everest Home – Furniture Factory, Showroom & Interior Design",
    description: dict.meta.description,
    url: baseUrl,
    sameAs: businessProfiles,
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
