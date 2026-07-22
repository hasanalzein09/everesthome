import { Phone } from "lucide-react";
import type { Dictionary } from "../i18n";
import { phones } from "../i18n";
import Reveal from "./Reveal";

export default function CtaBand({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-forest">
      <div className="blob w-[420px] h-[420px] bg-accent/25 -top-32 -start-24" />
      <div className="blob w-[380px] h-[380px] bg-[#c08a3e]/20 -bottom-32 -end-24" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <p className="text-[#e8c9a8] text-sm font-bold tracking-[0.3em] uppercase mb-5">
            Everest Home
          </p>
          <h2 className="display-title text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            {dict.contact.title}
          </h2>
          <p className="mt-5 text-lg text-white/75 leading-relaxed max-w-2xl mx-auto">
            {dict.contact.description}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${phones[0].wa}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow inline-flex items-center justify-center gap-2 rounded-full bg-[#25d366] px-8 py-4 text-base font-bold text-white hover:brightness-110 transition-all"
            >
              {dict.contact.whatsapp}
              <span dir="ltr" className="font-extrabold">{phones[0].display}</span>
            </a>
            <a
              href={`tel:${phones[0].tel}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/25 px-8 py-4 text-base font-bold text-white hover:border-white/60 transition-colors"
            >
              <Phone size={18} />
              <span dir="ltr">{phones[1].display}</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
