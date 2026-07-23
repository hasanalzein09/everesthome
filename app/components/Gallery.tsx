import { ImageIcon, Play } from "lucide-react";
import type { Dictionary } from "../i18n";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

export default function Gallery({ dict }: { dict: Dictionary }) {
  return (
    <section id="gallery" className="py-20 lg:py-28 bg-muted/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionTitle
            label={dict.gallery.label}
            title={dict.gallery.title}
            description={dict.gallery.description}
          />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {dict.gallery.placeholders.map((label, index) => {
            const isVideo = index % 3 !== 0;
            return (
              <Reveal key={label} delay={index * 70}>
                <div className="card-lift group relative aspect-[4/3] arch-sm overflow-hidden bg-gradient-to-br from-[#d8cbb8] to-[#c3b199] flex items-center justify-center border border-gold/25">
                  <span className="absolute top-4 start-4 z-10 px-3 py-1 rounded-full bg-espresso/80 text-gold text-xs font-bold backdrop-blur">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.7)_0,transparent_50%)]" />
                  <div className="relative flex flex-col items-center text-foreground/50 group-hover:text-accent transition-colors px-4 text-center">
                    {isVideo ? <Play size={38} /> : <ImageIcon size={38} />}
                    <span className="mt-3 text-sm font-semibold">{label}</span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
