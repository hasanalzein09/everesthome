const languages = [
  { href: "/ar/", label: "العربية", hint: "تابع باللغة العربية", dir: "rtl" },
  { href: "/en/", label: "English", hint: "Continue in English", dir: "ltr" },
  { href: "/fr/", label: "Français", hint: "Continuer en français", dir: "ltr" },
];

export default function LanguageGateway() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16 text-center">
      <p className="text-sm font-semibold tracking-[0.3em] uppercase text-accent mb-4">
        South Lebanon
      </p>
      <h1 className="display-title text-5xl sm:text-7xl font-extrabold text-foreground">
        Everest Home
      </h1>
      <p className="mt-3 text-lg text-foreground/60 font-medium">
        Furniture &amp; Interior Design
      </p>

      <p className="mt-10 mb-6 text-foreground/70 max-w-md leading-relaxed">
        اختر لغتك · Choose your language · Choisissez votre langue
      </p>

      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl">
        {languages.map((lang) => (
          <a
            key={lang.href}
            href={lang.href}
            hrefLang={lang.href === "/ar/" ? "ar-LB" : lang.href.replaceAll("/", "")}
            dir={lang.dir}
            className="card-lift flex-1 rounded-3xl border border-foreground/10 bg-card px-8 py-7 text-center shadow-sm"
          >
            <span className="block text-2xl font-bold text-foreground">
              {lang.label}
            </span>
            <span className="mt-1 block text-sm text-foreground/60">
              {lang.hint}
            </span>
          </a>
        ))}
      </div>

      <p className="mt-12 text-xs text-foreground/40 tracking-wide">
        Custom furniture · Interior design · Wood decor · South Lebanon
      </p>
    </main>
  );
}
