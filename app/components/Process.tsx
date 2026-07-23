import type { Dictionary } from "../i18n";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

export default function Process({ dict }: { dict: Dictionary }) {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionTitle
            label={dict.process.label}
            title={dict.process.title}
            description={dict.process.description}
          />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dict.process.steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 90}>
              <div className="card-lift relative h-full rounded-[1.75rem] bg-card border border-foreground/5 p-7 pt-10 text-center shadow-sm">
                <span className="absolute -top-5 right-1/2 translate-x-1/2 w-11 h-11 rounded-2xl rotate-3 btn-gold flex items-center justify-center font-bold text-lg">
                  {step.number}
                </span>
                <h3 className="mt-2 text-xl font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-foreground/65 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
