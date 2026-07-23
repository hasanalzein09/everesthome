import type { Dictionary } from "../i18n";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

export default function Services({ dict }: { dict: Dictionary }) {
  return (
    <section id="services" className="py-20 lg:py-28 bg-muted/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionTitle
            label={dict.services.label}
            title={dict.services.title}
            description={dict.services.description}
          />
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {dict.services.items.map((service, index) => {
            const featured = index === 0;
            return (
              <Reveal
                key={service.title}
                delay={index * 90}
                className={featured ? "lg:col-span-2" : ""}
              >
                <article
                  id={`service-${index + 1}`}
                  className={`card-lift relative h-full rounded-[2rem] p-7 lg:p-9 shadow-sm border overflow-hidden ${
                    featured
                      ? "bg-forest text-white border-transparent"
                      : "bg-card border-foreground/5"
                  }`}
                >
                  {featured && (
                    <span className="absolute -top-6 -end-4 text-[9rem] font-bold text-gold/10 leading-none select-none">
                      01
                    </span>
                  )}
                  <div className="relative flex items-center gap-4 mb-4">
                    <span
                      className={`flex items-center justify-center w-14 h-14 rounded-2xl text-3xl ${
                        featured ? "bg-white/10" : "bg-accent/10"
                      }`}
                    >
                      {service.icon}
                    </span>
                    <div>
                      <span
                        className={`block text-xs font-bold tracking-widest ${
                          featured ? "text-gold" : "text-accent"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3
                        className={`text-xl lg:text-2xl font-bold ${
                          featured ? "text-white" : "text-foreground"
                        }`}
                      >
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <p
                    className={`relative leading-relaxed mb-5 ${
                      featured ? "text-white/75" : "text-foreground/70"
                    }`}
                  >
                    {service.desc}
                  </p>
                  <ul className="relative grid sm:grid-cols-2 gap-x-4 gap-y-2.5">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className={`flex items-start gap-2 text-sm before:content-['•'] before:font-bold before:text-base before:leading-5 ${
                          featured
                            ? "text-white/85 before:text-gold"
                            : "text-foreground/80 before:text-accent"
                        }`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
