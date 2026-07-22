import { ArrowDown, Phone } from "lucide-react";
import type { Dictionary } from "../i18n";
import HeroScene from "./HeroScene";
import Reveal from "./Reveal";

export default function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Ambient blobs */}
      <div className="blob w-[500px] h-[500px] bg-accent/10 -top-40 -end-40" />
      <div className="blob w-[420px] h-[420px] bg-forest/10 top-1/3 -start-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-20 pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-8 items-center">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/15 text-accent text-sm font-semibold">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                {dict.hero.badge}
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="display-title mt-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold">
                <span className="text-gradient">Everest Home</span>
                <span className="block mt-3 text-foreground/85 text-2xl sm:text-3xl lg:text-4xl font-bold">
                  {dict.hero.titleAccent}
                </span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 text-lg text-foreground/75 leading-relaxed max-w-xl">
                {dict.hero.subtitle}
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#projects"
                  className="btn-glow inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-white hover:bg-accent-light transition-colors"
                >
                  {dict.hero.ctaPrimary}
                  <ArrowDown size={18} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-foreground/15 px-7 py-3.5 text-base font-semibold text-foreground hover:border-accent hover:text-accent transition-colors"
                >
                  {dict.hero.ctaSecondary}
                  <Phone size={18} />
                </a>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="glass mt-10 inline-flex flex-wrap gap-x-10 gap-y-4 rounded-3xl border border-foreground/10 px-7 py-5 shadow-sm">
                {dict.hero.stats.map((stat) => (
                  <div key={stat.label}>
                    <span className="block text-2xl sm:text-3xl font-extrabold text-foreground">
                      {stat.value}
                    </span>
                    <span className="text-sm text-foreground/55">{stat.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative">
            <div className="absolute -inset-3 rounded-[3rem] bg-gradient-to-br from-accent/20 via-transparent to-forest/20 blur-xl" />
            <div className="relative rounded-[2.5rem] bg-gradient-to-br from-muted to-card border border-foreground/5 shadow-[0_40px_80px_-40px_rgba(34,27,20,0.25)] overflow-hidden">
              <HeroScene />
              <span className="absolute bottom-4 end-5 text-xs text-foreground/40 font-medium">
                {dict.hero.sceneHint}
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
