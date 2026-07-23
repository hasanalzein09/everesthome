import type { Dictionary, Locale } from "../i18n";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

export default function Faq({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://everesthome-lb.com";

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${baseUrl}/${locale}/#faq`,
    inLanguage: locale,
    mainEntity: dict.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionTitle
            label={dict.faq.label}
            title={dict.faq.title}
            description={dict.faq.description}
          />
        </Reveal>

        <div className="space-y-4">
          {dict.faq.items.map((item, index) => (
            <Reveal key={item.q} delay={index * 60}>
              <details className="group rounded-2xl bg-card border border-foreground/5 shadow-sm open:shadow-md transition-shadow">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-6 text-lg font-semibold text-foreground [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center text-xl font-bold transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="px-6 pb-6 text-foreground/70 leading-relaxed">
                  {item.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </section>
  );
}
