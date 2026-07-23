import { MapPin } from "lucide-react";
import type { Locale } from "../i18n";
import { allPseoServices, pseoCities } from "../seo-data";
import Reveal from "./Reveal";

const titles: Record<Locale, { title: string; subtitle: string }> = {
  ar: {
    title: "Everest Home في منطقتك",
    subtitle: "ننفذ مشاريع مفروشات وديكور في كل المناطق اللبنانية — اختر منطقتك:",
  },
  en: {
    title: "Everest Home in Your Area",
    subtitle: "We deliver furniture and decor projects across all Lebanese regions — choose your area:",
  },
  fr: {
    title: "Everest Home dans votre région",
    subtitle: "Nous réalisons des projets de meubles et décor dans tout le Liban — choisissez votre région :",
  },
};

export default function PseoLinks({ locale }: { locale: Locale }) {
  const prefix = locale === "ar" ? "/p" : `/${locale}`;

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <h2 className="display-title text-2xl sm:text-3xl font-extrabold text-foreground">
            {titles[locale].title}
          </h2>
          <p className="mt-3 text-foreground/65">{titles[locale].subtitle}</p>
        </Reveal>

        <Reveal delay={90}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
            {pseoCities.map((city) => (
              <a
                key={city.slug}
                href={`${prefix}/interior-design-${city.slug}/`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-forest text-white text-sm font-semibold hover:bg-accent transition-colors"
              >
                <MapPin size={14} />
                {city.names[locale]}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
            {allPseoServices.map((service) => (
              <a
                key={service.slug}
                href={`${prefix}/${service.slug}-south-lebanon/`}
                className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold hover:bg-accent hover:text-white transition-colors"
              >
                {service.names[locale]}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
