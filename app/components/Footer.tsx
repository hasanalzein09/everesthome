import { Phone } from "lucide-react";
import type { Dictionary, Locale } from "../i18n";
import { phones, instagramHandle, instagramUrl } from "../i18n";

function InstagramIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const localeHref = (l: Locale) => (l === "ar" ? "/" : `/${l}/`);

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
    { href: "#faq", label: dict.nav.faq },
    { href: "#contact", label: dict.nav.contact },
  ];

  return (
    <footer className="bg-foreground text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-start">
            <h3 className="text-2xl font-extrabold">
              Everest <span className="text-gold">Home</span>
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
                href={localeHref(l)}
                hrefLang={l === "ar" ? "ar-LB" : l}
                className={`px-3 py-1.5 rounded-full border transition-colors ${
                  l === locale
                    ? "bg-gold text-foreground border-gold font-bold"
                    : "text-white/60 border-white/20 hover:text-white"
                }`}
              >
                {l === "ar" ? "العربية" : l.toUpperCase()}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-3">
            <span className="text-sm font-bold text-gold">Everest Home</span>
            <span className="flex items-center gap-2 text-sm text-white/75">
              <Phone size={14} className="text-gold" />
              {phones.map((phone, index) => (
                <span key={phone.tel}>
                  {index > 0 && <span className="text-white/30"> · </span>}
                  <a
                    href={`tel:${phone.tel}`}
                    dir="ltr"
                    className="hover:text-gold transition-colors"
                  >
                    {phone.display}
                  </a>
                </span>
              ))}
            </span>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              dir="ltr"
              className="flex items-center gap-2 text-sm text-white/75 hover:text-gold transition-colors"
            >
              <InstagramIcon size={14} />
              {instagramHandle}
            </a>
            <span className="text-sm text-white/75" dir="ltr">
              everesthome-lb.com
            </span>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10">
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
