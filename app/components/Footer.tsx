import type { Dictionary, Locale } from "../i18n";

export default function Footer({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const navLinks = [
    { href: "#home", label: dict.nav.home },
    { href: "#about", label: dict.nav.about },
    { href: "#services", label: dict.nav.services },
    { href: "#projects", label: dict.nav.projects },
    { href: "#gallery", label: dict.nav.gallery },
    { href: "#faq", label: dict.nav.faq },
    { href: "#contact", label: dict.nav.contact },
  ];

  return (
    <footer className="bg-foreground text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-start">
            <h3 className="text-2xl font-extrabold">
              Everest <span className="text-[#e8a87c]">Home</span>
            </h3>
            <p className="text-white/60 text-sm mt-1.5">{dict.footer.tagline}</p>
            <p className="text-white/40 text-xs mt-1">{dict.footer.madeIn}</p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/75">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 text-xs">
            {(["ar", "en", "fr"] as Locale[]).map((l) => (
              <a
                key={l}
                href={`/${l}/`}
                hrefLang={l === "ar" ? "ar-LB" : l}
                className={`px-3 py-1.5 rounded-full border transition-colors ${
                  l === locale
                    ? "bg-[#e8a87c] text-foreground border-[#e8a87c] font-bold"
                    : "text-white/60 border-white/20 hover:text-white"
                }`}
              >
                {l === "ar" ? "العربية" : l.toUpperCase()}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10">
          <p className="text-center text-xs leading-relaxed text-white/40 max-w-4xl mx-auto">
            {dict.services.items.map((s) => s.title).join(" · ")} — Everest Home,
            South Lebanon
          </p>
          <p className="mt-4 text-center text-sm text-white/50">
            © {new Date().getFullYear()} Everest Home. {dict.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
