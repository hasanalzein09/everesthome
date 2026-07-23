import { ArrowDown, Phone } from "lucide-react";
import type { Dictionary } from "../i18n";
import HeroScene from "./HeroScene";
import Reveal from "./Reveal";

export default function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section id="home" className="relative overflow-hidden bg-espresso text-white">
      {/* Ambient glows */}
      <div className="blob w-[520px] h-[520px] bg-gold/10 -top-40 -end-40" />
      <div className="blob w-[420px] h-[420px] bg-forest/40 top-1/3 -start-40" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 lg:pt-20 pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-gold/10 text-gold text-sm font-semibold">
                <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                {dict.hero.badge}
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="display-title mt-7 text-5xl sm:text-6xl lg:text-7xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">
                  Everest
                </span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#e5cd9a] to-gold-deep">
                  Home
                </span>
                <span className="block mt-4 text-white/60 text-xl sm:text-2xl lg:text-3xl font-normal tracking-wide">
                  {dict.hero.titleAccent}
                </span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <div className="gold-line w-40 my-7" />
              <p className="text-lg text-white/70 leading-relaxed max-w-xl">
                {dict.hero.subtitle}
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 flex flex-col sm:flex-row gap-4">
                <a
                  href="#projects"
                  className="btn-gold btn-glow inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-bold"
                >
                  {dict.hero.ctaPrimary}
                  <ArrowDown size={18} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-semibold text-white/90 hover:border-gold hover:text-gold transition-colors"
                >
                  {dict.hero.ctaSecondary}
                  <Phone size={18} />
                </a>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-11 flex gap-8 sm:gap-0">
                {dict.hero.stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`sm:px-8 ${index === 0 ? "sm:ps-0" : ""} ${
                      index > 0 ? "sm:border-s sm:border-gold/20" : ""
                    }`}
                  >
                    <span className="block text-3xl sm:text-4xl font-bold text-gold">
                      {stat.value}
                    </span>
                    <span className="text-sm text-white/50">{stat.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative">
            <div className="absolute -inset-4 arch bg-gradient-to-b from-gold/25 via-transparent to-transparent blur-2xl" />
            <div className="relative arch border border-gold/30 bg-gradient-to-b from-[#2a2115] to-[#14100b] shadow-[0_50px_100px_-40px_rgba(0,0,0,0.8)] overflow-hidden">
              <HeroScene />
              <span className="absolute bottom-4 end-5 text-xs text-white/35 font-medium">
                {dict.hero.sceneHint}
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
