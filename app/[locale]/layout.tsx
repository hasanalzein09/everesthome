import { notFound } from "next/navigation";
import { routeLocales, isLocale, getDictionary } from "../i18n";
import BusinessJsonLd from "../components/BusinessJsonLd";

export function generateStaticParams() {
  return routeLocales.map((locale) => ({ locale }));
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

  return (
    <>
      <BusinessJsonLd dict={dict} locale={locale} />
      {children}
    </>
  );
}
