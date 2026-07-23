import type { Locale } from "../i18n";
import Reveal from "./Reveal";

interface Material {
  icon: string;
  name: string;
  desc: string;
}

const content: Record<
  Locale,
  {
    label: string;
    title: string;
    subtitle: string;
    materials: Material[];
    vsTitle: string;
    vsAnswer: string;
  }
> = {
  ar: {
    label: "Materials Guide",
    title: "الخامات والأقمشة اللي منشتغل فيها",
    subtitle: "منختار الخامة الصح لكل قطعة — وهيدا سر الجودة اللي بتدوم.",
    materials: [
      { icon: "🌳", name: "خشب زان (Beech)", desc: "الأقوى للهياكل والكراسي والطاولات — متين وبيتحمل الاستخدام اليومي لعشرات السنين." },
      { icon: "🪵", name: "خشب بلوط (Oak)", desc: "فخامة وعروق طبيعية واضحة — للقطع المميزة والديكورات الراقية." },
      { icon: "📋", name: "MDF عالي الجودة", desc: "سطح أملس مثالي للدهان وتصاميم CNC — للخزائن ووحدات التلفزيون والواجهات المدهونة." },
      { icon: "🍃", name: "قشرة طبيعية (Veneer)", desc: "شكل الخشب الطبيعي الفاخر بكلفة أقل — للواجهات الكبيرة والأبواب." },
      { icon: "🛋️", name: "مخمل (Velvet)", desc: "فخامة ونعومة — ترند الصالونات الراقية بألوان غنية." },
      { icon: "🌾", name: "كتان (Linen)", desc: "طبيعي ومريح وبيّاق — للستايل الهادئ والبيوت العصرية." },
      { icon: "☁️", name: "بوكليه (Bouclé)", desc: "ترند 2026 — ملمس قطني منفوش بيعطي دفء وفخامة هادئة." },
      { icon: "🧵", name: "جلد وأقمشة ضد البقع", desc: "عملي للعائلات والاستخدام الكثيف — سهل التنظيف وبيقاوم الأولاد والضيوف." },
    ],
    vsTitle: "زان ولا MDF؟ الجواب باختصار:",
    vsAnswer:
      "الزان للهياكل والقطع اللي بدها قوة وعمر طويل (كراسي، طاولات، أسرّة)، والـ MDF للأسطح المدهونة وتصاميم CNC والخزائن الكبيرة. منختار الخامة الصح حسب القطعة وميزانيتك — وما منساوم على الجودة أبداً.",
  },
  en: {
    label: "Materials Guide",
    title: "The Materials & Fabrics We Work With",
    subtitle: "We choose the right material for every piece — that is the secret of lasting quality.",
    materials: [
      { icon: "🌳", name: "Beech Wood", desc: "The strongest for frames, chairs and tables — durable enough for decades of daily use." },
      { icon: "🪵", name: "Oak Wood", desc: "Luxury with visible natural grain — for statement pieces and refined decor." },
      { icon: "📋", name: "High-grade MDF", desc: "A perfectly smooth surface for paint and CNC designs — wardrobes, TV units, painted fronts." },
      { icon: "🍃", name: "Natural Veneer", desc: "The look of premium natural wood at a lower cost — for large fronts and doors." },
      { icon: "🛋️", name: "Velvet", desc: "Luxury and softness — the trend of elegant salons in rich colors." },
      { icon: "🌾", name: "Linen", desc: "Natural, comfortable and breathable — for calm, modern homes." },
      { icon: "☁️", name: "Bouclé", desc: "The 2026 trend — a fluffy cotton texture that adds quiet warmth and luxury." },
      { icon: "🧵", name: "Leather & Stain-resistant Fabrics", desc: "Practical for families and heavy use — easy to clean, kid and guest proof." },
    ],
    vsTitle: "Beech or MDF? The short answer:",
    vsAnswer:
      "Beech for frames and pieces that need strength and a long life (chairs, tables, beds), MDF for painted surfaces, CNC designs and large wardrobes. We pick the right material for each piece and your budget — and we never compromise on quality.",
  },
  fr: {
    label: "Materials Guide",
    title: "Les matériaux et tissus avec lesquels nous travaillons",
    subtitle: "Nous choisissons le bon matériau pour chaque pièce — c'est le secret d'une qualité durable.",
    materials: [
      { icon: "🌳", name: "Hêtre", desc: "Le plus solide pour structures, chaises et tables — des décennies d'usage quotidien." },
      { icon: "🪵", name: "Chêne", desc: "Le luxe du veinage naturel — pour les pièces d'exception et le décor raffiné." },
      { icon: "📋", name: "MDF haute qualité", desc: "Surface lisse idéale pour la peinture et le CNC — dressings, meubles TV, façades peintes." },
      { icon: "🍃", name: "Placage naturel", desc: "L'aspect du bois noble à moindre coût — pour les grandes façades et portes." },
      { icon: "🛋️", name: "Velours", desc: "Luxe et douceur — la tendance des salons élégants aux couleurs riches." },
      { icon: "🌾", name: "Lin", desc: "Naturel, confortable et respirant — pour les intérieurs calmes et modernes." },
      { icon: "☁️", name: "Bouclé", desc: "La tendance 2026 — une texture cotonneuse qui apporte chaleur et luxe discret." },
      { icon: "🧵", name: "Cuir & tissus anti-taches", desc: "Pratique pour les familles — facile à nettoyer, résiste aux enfants et aux invités." },
    ],
    vsTitle: "Hêtre ou MDF ? La réponse courte :",
    vsAnswer:
      "Le hêtre pour les structures et pièces qui demandent solidité et longévité (chaises, tables, lits), le MDF pour les surfaces peintes, le CNC et les grands dressings. Nous choisissons le bon matériau selon la pièce et votre budget — sans jamais compromettre la qualité.",
  },
};

export default function MaterialsGuide({ locale }: { locale: Locale }) {
  const c = content[locale];

  return (
    <section id="materials" className="py-20 lg:py-28 bg-espresso text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12 lg:mb-16">
            <span className="eyebrow inline-block text-gold mb-3">{c.label}</span>
            <h2 className="display-title text-3xl sm:text-4xl lg:text-5xl font-bold">
              {c.title}
            </h2>
            <p className="mt-5 max-w-2xl mx-auto text-white/65 leading-relaxed text-lg">
              {c.subtitle}
            </p>
            <div className="mt-7 flex items-center justify-center gap-3">
              <span className="gold-line w-14" />
              <span className="w-1.5 h-1.5 rotate-45 bg-gold" />
              <span className="gold-line w-14" />
            </div>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {c.materials.map((material, index) => (
            <Reveal key={material.name} delay={index * 60}>
              <div className="card-lift h-full rounded-[1.5rem] bg-white/5 border border-gold/15 p-6">
                <span className="text-3xl">{material.icon}</span>
                <h3 className="mt-3 text-lg font-bold text-gold">
                  {material.name}
                </h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">
                  {material.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="rounded-[2rem] border border-gold/30 bg-gradient-to-l from-gold/10 to-transparent p-7 lg:p-10">
            <h3 className="text-xl lg:text-2xl font-bold text-gold mb-3">
              {c.vsTitle}
            </h3>
            <p className="text-white/80 leading-relaxed text-lg max-w-4xl">
              {c.vsAnswer}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
