import type { Dictionary, Locale } from "../i18n";
import { phones, instagramHandle, instagramUrl } from "../i18n";
import Reveal from "./Reveal";

const labels: Record<
  Locale,
  {
    title: string;
    company: string;
    type: string;
    typeValue: string;
    location: string;
    serving: string;
    servingValue: string;
    phone: string;
    instagram: string;
    languages: string;
    languagesValue: string;
  }
> = {
  ar: {
    title: "معلومات سريعة عن Everest Home",
    company: "الشركة",
    type: "نوع العمل",
    typeValue: "ورشة تصنيع مفروشات وتصميم داخلي",
    location: "الموقع",
    serving: "منطقة الخدمة",
    servingValue: "كل المناطق اللبنانية",
    phone: "الهاتف",
    instagram: "إنستغرام",
    languages: "اللغات",
    languagesValue: "العربية، الإنجليزية، الفرنسية",
  },
  en: {
    title: "Everest Home Quick Facts",
    company: "Company",
    type: "Business type",
    typeValue: "Custom furniture workshop & interior design studio",
    location: "Location",
    serving: "Service area",
    servingValue: "All of Lebanon",
    phone: "Phone",
    instagram: "Instagram",
    languages: "Languages",
    languagesValue: "Arabic, English, French",
  },
  fr: {
    title: "Everest Home en bref",
    company: "Entreprise",
    type: "Type d'activité",
    typeValue: "Atelier de meubles sur mesure & studio de design d'intérieur",
    location: "Adresse",
    serving: "Zone de service",
    servingValue: "Tout le Liban",
    phone: "Téléphone",
    instagram: "Instagram",
    languages: "Langues",
    languagesValue: "Arabe, anglais, français",
  },
};

export default function QuickFacts({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const l = labels[locale];

  const facts: { term: string; value: React.ReactNode }[] = [
    { term: l.company, value: <strong>Everest Home</strong> },
    { term: l.type, value: l.typeValue },
    { term: l.location, value: dict.contact.locationValue },
    { term: l.serving, value: l.servingValue },
    {
      term: l.phone,
      value: (
        <span dir="ltr">
          {phones.map((p, i) => (
            <span key={p.tel}>
              {i > 0 && " · "}
              <a href={`tel:${p.tel}`} className="hover:text-accent">
                {p.display}
              </a>
            </span>
          ))}
        </span>
      ),
    },
    {
      term: l.instagram,
      value: (
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent"
          dir="ltr"
        >
          {instagramHandle}
        </a>
      ),
    },
    { term: l.languages, value: l.languagesValue },
  ];

  return (
    <section className="py-14 lg:py-16 bg-muted/60">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-[2rem] bg-card border border-gold/25 shadow-sm overflow-hidden">
            <div className="px-7 py-5 border-b border-foreground/5 bg-espresso">
              <h2 className="text-lg font-bold text-gold">{l.title}</h2>
            </div>
            <dl className="divide-y divide-foreground/5">
              {facts.map((fact) => (
                <div
                  key={fact.term}
                  className="grid grid-cols-[130px_1fr] sm:grid-cols-[170px_1fr] gap-3 px-7 py-3.5"
                >
                  <dt className="text-sm font-bold text-foreground/50">
                    {fact.term}
                  </dt>
                  <dd className="text-sm font-medium text-foreground/85">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
