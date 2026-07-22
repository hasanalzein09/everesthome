import { Check } from "lucide-react";
import type { Dictionary } from "../i18n";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

export default function WhyUs({ dict }: { dict: Dictionary }) {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionTitle label={dict.why.label} title={dict.why.title} />
        </Reveal>

        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-4">
          {dict.why.reasons.map((reason, index) => (
            <Reveal key={reason} delay={index * 60}>
              <div className="card-lift flex items-start gap-3 rounded-2xl bg-card border border-foreground/5 p-5 shadow-sm">
                <span className="mt-0.5 flex-shrink-0 w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <Check size={16} strokeWidth={3} />
                </span>
                <span className="text-foreground/85 font-medium leading-relaxed">
                  {reason}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
