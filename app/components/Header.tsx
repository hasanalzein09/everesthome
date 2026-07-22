"use client";

import { useEffect, useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import type { Dictionary, Locale } from "../i18n";

interface HeaderProps {
  dict: Dictionary;
  locale: Locale;
}

const localeLabels: Record<Locale, string> = {
  ar: "العربية",
  en: "EN",
  fr: "FR",
};

export default function Header({ dict, locale }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl shadow-[0_8px_30px_-12px_rgba(34,27,20,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#home" className="flex flex-col leading-tight">
            <span className="text-lg lg:text-xl font-extrabold text-foreground tracking-tight">
              Everest <span className="text-accent">Home</span>
            </span>
            <span className="hidden sm:block text-[10px] tracking-[0.2em] uppercase text-foreground/50">
              South Lebanon
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/75 hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-1 rounded-full border border-foreground/10 bg-card px-2 py-1">
              <Globe size={14} className="text-foreground/50 mx-1" />
              {(["ar", "en", "fr"] as Locale[]).map((l) => (
                <a
                  key={l}
                  href={`/${l}/`}
                  hrefLang={l === "ar" ? "ar-LB" : l}
                  className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-colors ${
                    l === locale
                      ? "bg-accent text-white"
                      : "text-foreground/60 hover:text-accent"
                  }`}
                >
                  {localeLabels[l]}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              className="btn-glow inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-light transition-colors"
            >
              {dict.nav.cta}
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-foreground/10">
          <nav className="flex flex-col px-6 py-5 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-base font-medium text-foreground/80 hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-2 pt-2">
              {(["ar", "en", "fr"] as Locale[]).map((l) => (
                <a
                  key={l}
                  href={`/${l}/`}
                  hrefLang={l === "ar" ? "ar-LB" : l}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold border ${
                    l === locale
                      ? "bg-accent text-white border-accent"
                      : "text-foreground/60 border-foreground/15"
                  }`}
                >
                  {localeLabels[l]}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-glow mt-1 inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white"
            >
              {dict.nav.cta}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
