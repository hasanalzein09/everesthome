import type { Dictionary } from "../i18n";
import Reveal from "./Reveal";

const gradients = [
  "from-[#a85b38] to-[#7e4226]",
  "from-[#2e4034] to-[#1d2b22]",
  "from-[#c08a3e] to-[#8a5f22]",
  "from-[#6b4226] to-[#3f2716]",
];

export default function Projects({ dict }: { dict: Dictionary }) {
  return (
    <section id="projects" className="py-20 lg:py-28 bg-forest text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12 lg:mb-16">
            <span className="eyebrow inline-block text-gold mb-3">
              {dict.projects.label}
            </span>
            <h2 className="display-title text-3xl sm:text-4xl lg:text-5xl font-extrabold">
              {dict.projects.title}
            </h2>
            <p className="mt-5 max-w-2xl mx-auto text-white/70 leading-relaxed text-lg">
              {dict.projects.description}
            </p>
            <div className="mt-7 flex items-center justify-center gap-3">
              <span className="gold-line w-14" />
              <span className="w-1.5 h-1.5 rotate-45 bg-gold" />
              <span className="gold-line w-14" />
            </div>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {dict.projects.items.map((project, index) => (
            <Reveal key={project.title} delay={index * 90}>
              <div
                className={`card-lift h-full rounded-[1.75rem] bg-gradient-to-br ${gradients[index % gradients.length]} p-6 lg:p-7 min-h-[220px] flex flex-col justify-end shadow-lg`}
              >
                <span className="text-5xl font-bold text-gold/40 mb-auto">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-bold text-white mt-6">
                  {project.title}
                </h3>
                <p className="mt-1.5 text-sm text-white/70 leading-relaxed">
                  {project.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="rounded-[1.75rem] bg-white/10 backdrop-blur border border-white/10 p-6 lg:p-8 text-center">
            <p className="text-white/85 text-lg leading-relaxed">
              {dict.projects.note}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
