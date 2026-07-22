import type { Dictionary } from "../i18n";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

export default function About({ dict }: { dict: Dictionary }) {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionTitle label={dict.about.label} title={dict.about.title} />
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          <Reveal className="lg:col-span-3">
            <div className="h-full rounded-[2rem] bg-card border border-foreground/5 p-8 lg:p-12 shadow-sm">
              <div className="space-y-6 text-foreground/80 leading-relaxed text-lg">
                {dict.about.paragraphs.map((paragraph, index) => (
                  <p key={index} className={index === 0 ? "font-semibold text-foreground" : ""}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {dict.about.stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 90}>
                <div className="card-lift h-full rounded-[1.5rem] bg-forest text-white p-6 flex flex-col justify-center text-center">
                  <span className="block text-3xl lg:text-4xl font-extrabold text-[#e8c9a8]">
                    {stat.value}
                  </span>
                  <span className="mt-1 text-sm text-white/70">{stat.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
