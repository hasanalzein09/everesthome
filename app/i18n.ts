import ar from "@/messages/ar";
import en from "@/messages/en";
import fr from "@/messages/fr";

export const locales = ["ar", "en", "fr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ar";

export type Dictionary = typeof ar;

const dictionaries: Record<Locale, Dictionary> = { ar, en, fr };

export function getDictionary(locale: string): Dictionary {
  if (locale === "en" || locale === "fr") return dictionaries[locale];
  return dictionaries.ar;
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export const localeDir: Record<Locale, "rtl" | "ltr"> = {
  ar: "rtl",
  en: "ltr",
  fr: "ltr",
};

export const localeHreflang: Record<Locale, string> = {
  ar: "ar-LB",
  en: "en",
  fr: "fr",
};

export const phones = [
  { display: "03 371 324", tel: "+9613371324", wa: "9613371324" },
  { display: "03 949 839", tel: "+9613949839", wa: "9613949839" },
];

export const instagramHandle = "@everestt.home";
export const instagramUrl = "https://instagram.com/everestt.home";
