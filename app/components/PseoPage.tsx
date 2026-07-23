import { Check, Phone } from "lucide-react";
import type { Dictionary, Locale } from "../i18n";
import { phones } from "../i18n";
import type { ServiceDef, CityDef } from "../seo-data";
import { inWord } from "../seo-data";
import Header from "./Header";
import Footer from "./Footer";
import CtaBand from "./CtaBand";
import FloatingWhatsApp from "./FloatingWhatsApp";
import Reveal from "./Reveal";

interface PseoPageProps {
  dict: Dictionary;
  locale: Locale;
  service: ServiceDef;
  city: CityDef;
  otherServices: { slug: string; name: string }[];
}

const whyLocal: Record<Locale, string[]> = {
  ar: [
    "معاينة واستشارة مجانية في موقعك",
    "تصنيع محلي 100% بجودة عالية",
    "تسليم وتركيب في الموعد المتفق عليه",
  ],
  en: [
    "Free on-site visit and consultation",
    "100% local manufacturing, high quality",
    "Delivery and installation on schedule",
  ],
  fr: [
    "Visite et consultation gratuites sur site",
    "Fabrication 100% locale de haute qualité",
    "Livraison et installation dans les délais",
  ],
};

const otherServicesTitle: Record<Locale, string> = {
  ar: "خدمات أخرى في",
  en: "Other services in",
  fr: "Autres services à",
};

export default function PseoPage({
  dict,
  locale,
  service,
  city,
  otherServices,
}: PseoPageProps) {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://everesthome-lb.com";
  const prefix = locale === "ar" ? "/p" : `/${locale}`;
  const pageUrl = `${baseUrl}${prefix}/${service.slug}-${city.slug}/`;

  const serviceName = service.names[locale];
  const cityName = city.names[locale];
  const h1 = `${serviceName} ${inWord[locale]} ${cityName}`;

  const faqs = [
    {
      q:
        locale === "ar"
          ? `هل تصلون إلى ${cityName}؟`
          : locale === "en"
            ? `Do you serve ${cityName}?`
            : `Intervenez-vous à ${cityName} ?`,
      a:
        locale === "ar"
          ? `نعم، ننفذ مشاريع في ${cityName} وكل لبنان: معاينة، تصنيع، تسليم وتركيب — كل شيء من ورشتنا مباشرة إلى موقعك.`
          : locale === "en"
            ? `Yes, we deliver projects in ${cityName} and all of Lebanon: site visit, manufacturing, delivery and installation — everything from our workshop to your location.`
            : `Oui, nous réalisons des projets à ${cityName} et dans tout le Liban : visite, fabrication, livraison et installation — directement de notre atelier à votre adresse.`,
    },
    {
      q:
        locale === "ar"
          ? `كم تكلفة ${serviceName} في ${cityName}؟`
          : locale === "en"
            ? `How much does ${serviceName} cost in ${cityName}?`
            : `Combien coûte ${serviceName} à ${cityName} ?`,
      a:
        locale === "ar"
          ? "التكلفة تعتمد على الخامات والمقاسات ومستوى التشطيب. نقدم عرض سعر مفصل ومجاني بعد المعاينة أو استلام الصور والمقاسات."
          : locale === "en"
            ? "The cost depends on materials, dimensions, and finishing level. We provide a free detailed quote after a site visit or after receiving your photos and measurements."
            : "Le coût dépend des matériaux, des dimensions et du niveau de finition. Nous fournissons un devis détaillé gratuit après une visite ou sur photos et mesures.",
    },
    {
      q:
        locale === "ar"
          ? "كم مدة التنفيذ؟"
          : locale === "en"
            ? "How long does it take?"
            : "Quel est le délai de réalisation ?",
      a:
        locale === "ar"
          ? "معظم المشاريع تستغرق بين 3 و6 أسابيع من اعتماد التصميم حتى التركيب النهائي، مع تحديثات مستمرة وصور من المعمل."
          : locale === "en"
            ? "Most projects take 3 to 6 weeks from design approval to final installation, with continuous updates and workshop photos."
            : "La plupart des projets prennent 3 à 6 semaines, de la validation du design à l'installation, avec des mises à jour régulières.",
    },
  ];

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: h1,
    description: service.intros[locale],
    provider: { "@id": `${baseUrl}/#business` },
    areaServed: { "@type": "Place", name: cityName },
    inLanguage: locale,
    url: pageUrl,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: locale,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Everest Home", item: baseUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: dict.nav.services,
        item: locale === "ar" ? `${baseUrl}/#services` : `${baseUrl}/${locale}/#services`,
      },
      { "@type": "ListItem", position: 3, name: h1, item: pageUrl },
    ],
  };

  return (
    <>
      <Header dict={dict} locale={locale} />
      <main>
        <section className="relative overflow-hidden bg-forest text-white py-16 lg:py-24">
          <div className="blob w-[380px] h-[380px] bg-accent/25 -top-24 -end-24" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-[#e8c9a8] text-sm font-bold tracking-[0.25em] uppercase mb-4">
              Everest Home · {dict.contact.locationValue}
            </p>
            <h1 className="display-title text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              {h1}
            </h1>
            <p className="mt-5 text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
              {service.intros[locale]}
            </p>
            <p className="mt-3 text-white/65 leading-relaxed max-w-2xl mx-auto">
              {city.blurbs[locale]}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`https://wa.me/${phones[0].wa}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow inline-flex items-center justify-center gap-2 rounded-full bg-[#25d366] px-7 py-3.5 text-base font-bold text-white hover:brightness-110 transition-all"
              >
                {dict.contact.whatsapp}
                <span dir="ltr">{phones[0].display}</span>
              </a>
              <a
                href={`tel:${phones[1].tel}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/25 px-7 py-3.5 text-base font-bold text-white hover:border-white/60 transition-colors"
              >
                <Phone size={18} />
                <span dir="ltr">{phones[1].display}</span>
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
            <Reveal>
              <div className="card-lift h-full rounded-[2rem] bg-card border border-foreground/5 p-7 lg:p-9 shadow-sm">
                <h2 className="text-2xl font-extrabold text-foreground mb-3">
                  {serviceName}
                </h2>
                <p className="text-foreground/70 leading-relaxed mb-5">
                  {dict.services.items[service.dictIndex].desc}
                </p>
                <ul className="space-y-2.5">
                  {dict.services.items[service.dictIndex].items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-foreground/80 before:content-['•'] before:text-accent before:font-bold before:text-base before:leading-5"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <div className="flex flex-col gap-6">
              <Reveal delay={90}>
                <div className="card-lift rounded-[2rem] bg-muted p-7 lg:p-9">
                  <h2 className="text-xl font-extrabold text-foreground mb-4">
                    {dict.why.title}
                  </h2>
                  <ul className="space-y-3">
                    {whyLocal[locale].map((reason) => (
                      <li key={reason} className="flex items-start gap-3">
                        <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                          <Check size={14} strokeWidth={3} />
                        </span>
                        <span className="text-foreground/85 font-medium">{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={160}>
                <div className="card-lift rounded-[2rem] bg-card border border-foreground/5 p-7 lg:p-9 shadow-sm">
                  <h2 className="text-lg font-extrabold text-foreground mb-4">
                    {otherServicesTitle[locale]} {cityName}
                  </h2>
                  <div className="flex flex-wrap gap-2.5">
                    {otherServices.map((other) => (
                      <a
                        key={other.slug}
                        href={`${prefix}/${other.slug}/`}
                        className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold hover:bg-accent hover:text-white transition-colors"
                      >
                        {other.name}
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="pb-16 lg:pb-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="text-2xl font-extrabold text-foreground mb-6 text-center">
                {dict.faq.title}
              </h2>
            </Reveal>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Reveal key={index} delay={index * 60}>
                  <details className="group rounded-2xl bg-card border border-foreground/5 shadow-sm open:shadow-md transition-shadow">
                    <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-6 text-lg font-semibold text-foreground [&::-webkit-details-marker]:hidden">
                      {faq.q}
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center text-xl font-bold transition-transform duration-300 group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="px-6 pb-6 text-foreground/70 leading-relaxed">
                      {faq.a}
                    </p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CtaBand dict={dict} />
      </main>
      <Footer dict={dict} locale={locale} />
      <FloatingWhatsApp label={dict.contact.whatsapp} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
