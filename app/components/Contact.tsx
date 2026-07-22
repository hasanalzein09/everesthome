import { MapPin, Phone } from "lucide-react";
import type { Dictionary } from "../i18n";
import { phones, instagramUrl } from "../i18n";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Contact({ dict }: { dict: Dictionary }) {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-muted/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionTitle
            label={dict.contact.label}
            title={dict.contact.title}
            description={dict.contact.description}
          />
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <Reveal>
            <div className="card-lift h-full rounded-[2rem] bg-card border border-foreground/5 p-8 lg:p-10 shadow-sm">
              <p className="text-foreground/75 text-lg leading-relaxed mb-8">
                {dict.contact.intro}
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="mt-1 w-11 h-11 rounded-2xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                    <MapPin size={20} />
                  </span>
                  <div>
                    <span className="block font-bold text-foreground">
                      {dict.contact.locationLabel}
                    </span>
                    <span className="text-foreground/70">
                      {dict.contact.locationValue}
                    </span>
                    <div className="mt-2">
                      <span className="block text-sm font-semibold text-foreground/60 mb-1">
                        {dict.contact.areasTitle}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {dict.contact.areas.map((area) => (
                          <span
                            key={area}
                            className="px-2.5 py-1 rounded-full bg-muted text-xs font-medium text-foreground/70"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="mt-1 w-11 h-11 rounded-2xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                    <Phone size={20} />
                  </span>
                  <div>
                    <span className="block font-bold text-foreground">
                      {dict.contact.phoneLabel}
                    </span>
                    <div className="flex flex-col gap-1 mt-1">
                      {phones.map((phone) => (
                        <a
                          key={phone.tel}
                          href={`tel:${phone.tel}`}
                          className="text-foreground/70 hover:text-accent transition-colors w-fit"
                          dir="ltr"
                        >
                          {phone.display}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="mt-1 w-11 h-11 rounded-2xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                    <InstagramIcon size={20} />
                  </span>
                  <div>
                    <span className="block font-bold text-foreground">
                      {dict.contact.instagramLabel}
                    </span>
                    <a
                      href={instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/70 hover:text-accent transition-colors"
                    >
                      {dict.contact.instagramValue}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="card-lift h-full rounded-[2rem] bg-forest text-white p-8 lg:p-10 shadow-sm flex flex-col justify-center">
              <h3 className="text-2xl font-extrabold mb-3">
                {dict.contact.whatsapp}
              </h3>
              <p className="text-white/70 leading-relaxed mb-8">
                {dict.contact.intro}
              </p>
              <div className="flex flex-col gap-3">
                {phones.map((phone) => (
                  <a
                    key={phone.wa}
                    href={`https://wa.me/${phone.wa}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glow inline-flex items-center justify-center gap-3 rounded-2xl bg-[#25d366] px-6 py-4 text-base font-bold text-white hover:brightness-110 transition-all"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                    </svg>
                    <span dir="ltr">{phone.display}</span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
