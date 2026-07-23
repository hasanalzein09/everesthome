import type { Locale } from "./i18n";

export interface ServiceDef {
  slug: string;
  dictIndex: number;
  names: Record<Locale, string>;
  intros: Record<Locale, string>;
}

export interface CityDef {
  slug: string;
  names: Record<Locale, string>;
  blurbs: Record<Locale, string>;
}

export const pseoServices: ServiceDef[] = [
  {
    slug: "custom-furniture",
    dictIndex: 0,
    names: {
      ar: "مفروشات حسب الطلب",
      en: "Custom Furniture",
      fr: "Meubles sur mesure",
    },
    intros: {
      ar: "نصمم ونصنع مفروشات حسب الطلب بمقاسات مساحتك وذوقك — من غرف النوم والصالونات إلى الطاولات ووحدات التخزين، بخامات مختارة وتشطيب يدوم لسنوات.",
      en: "We design and build custom furniture to your exact measurements and taste — from bedrooms and salons to tables and storage units, with selected materials and a finish that lasts.",
      fr: "Nous concevons et fabriquons des meubles sur mesure selon vos dimensions et vos goûts — chambres, salons, tables et rangements, avec des matériaux sélectionnés et une finition durable.",
    },
  },
  {
    slug: "wood-decor",
    dictIndex: 1,
    names: {
      ar: "ديكور خشبي",
      en: "Wood Decor",
      fr: "Décor en bois",
    },
    intros: {
      ar: "ديكورات خشبية تضيف دفئاً وفخامة لأي مساحة: ألواح حائط ثلاثية الأبعاد، وحدات تلفزيون مدمجة، وتفاصيل CNC فاخرة بتشطيبات matte عصرية.",
      en: "Wooden decor that adds warmth and luxury to any space: 3D wall panels, built-in TV units, and premium CNC details with modern matte finishes.",
      fr: "Un décor en bois qui apporte chaleur et raffinement : panneaux muraux 3D, meubles TV intégrés et détails CNC haut de gamme aux finitions mates modernes.",
    },
  },
  {
    slug: "painting-finishing",
    dictIndex: 2,
    names: {
      ar: "دهان وتشطيبات موبيليا",
      en: "Furniture Painting & Finishing",
      fr: "Peinture & finitions de meubles",
    },
    intros: {
      ar: "دهان موبيليا احترافي بمواد PU ولاكيه عالية الجودة، تشطيبات matte ولامعة بألوان متعددة، وترميم كامل للأثاث القديم حتى يرجع جديد.",
      en: "Professional furniture painting with high-quality PU and lacquer, matte and gloss multi-color finishes, and full restoration that makes old furniture look new.",
      fr: "Peinture de mobilier professionnelle (PU et laque), finitions mates et brillantes multicolores, et restauration complète qui redonne vie aux meubles anciens.",
    },
  },
  {
    slug: "interior-design",
    dictIndex: 3,
    names: {
      ar: "تصميم داخلي",
      en: "Interior Design",
      fr: "Design d'intérieur",
    },
    intros: {
      ar: "تصميم داخلي متكامل من الاستشارة حتى التسليم المفتاحي: توزيع مساحات، اختيار أثاث وإضاءة، تناغم ألوان وخامات، وتصور ثلاثي الأبعاد قبل التنفيذ.",
      en: "Complete interior design from consultation to turnkey delivery: space planning, furniture and lighting selection, color harmony, and 3D visualization before execution.",
      fr: "Un design d'intérieur complet, de la consultation à la livraison clé en main : aménagement, sélection de meubles et luminaires, harmonie des couleurs et visualisation 3D.",
    },
  },
];

export const pseoCities: CityDef[] = [
  {
    slug: "south-lebanon",
    names: { ar: "جنوب لبنان", en: "South Lebanon", fr: "Liban Sud" },
    blurbs: {
      ar: "ورشتنا في الجنوب — نوصل بسرعة إلى أي منطقة من صور إلى النبطية، ونعرف ذوق البيوت الجنوبية ومتطلباتها.",
      en: "Our workshop is in the South — we reach any area from Tyre to Nabatieh quickly, and we know the taste and needs of southern homes.",
      fr: "Notre atelier est dans le Sud — nous intervenons rapidement de Tyr à Nabatieh, et connaissons le goût des maisons du sud.",
    },
  },
  {
    slug: "beirut",
    names: { ar: "بيروت", en: "Beirut", fr: "Beyrouth" },
    blurbs: {
      ar: "ننفذ مشاريع في بيروت وكل مناطق العاصمة — معاينة مجانية، جدولة واضحة، وتركيب احترافي بدون إزعاج.",
      en: "We deliver projects across Beirut and all areas of the capital — free site visit, clear scheduling, and professional, disruption-free installation.",
      fr: "Nous réalisons des projets dans tout Beyrouth — visite gratuite, planning clair et installation professionnelle sans nuisance.",
    },
  },
  {
    slug: "mount-lebanon",
    names: { ar: "جبل لبنان", en: "Mount Lebanon", fr: "Mont-Liban" },
    blurbs: {
      ar: "من جونيه إلى المتن وكسروان والشوف — نغطي كل مناطق جبل لبنان بمشاريع مفروشات وديكور كاملة.",
      en: "From Jounieh to Metn, Keserwan and the Chouf — we cover all of Mount Lebanon with complete furniture and decor projects.",
      fr: "De Jounieh au Metn, au Kesrouan et au Chouf — nous couvrons tout le Mont-Liban avec des projets complets.",
    },
  },
  {
    slug: "north-lebanon",
    names: { ar: "شمال لبنان", en: "North Lebanon", fr: "Liban Nord" },
    blurbs: {
      ar: "نخدم طرابلس وكل الشمال — نفس جودة التصنيع والتشطيب مع تخطيط مسبق للمعاينة والتركيب.",
      en: "We serve Tripoli and the whole North — the same manufacturing and finishing quality, with pre-planned visits and installation.",
      fr: "Nous servons Tripoli et tout le Nord — même qualité de fabrication et de finition, avec visites et installation planifiées.",
    },
  },
  {
    slug: "bekaa",
    names: { ar: "البقاع", en: "Bekaa", fr: "Bekaa" },
    blurbs: {
      ar: "زحلة وكل البقاع — مشاريع مفروشات وديكور بتخطيط دقيق للمواعيد والتسليم في الوقت المحدد.",
      en: "Zahle and the whole Bekaa — furniture and decor projects with precise scheduling and on-time delivery.",
      fr: "Zahlé et toute la Bekaa — des projets de meubles et décor avec un planning précis et une livraison ponctuelle.",
    },
  },
  {
    slug: "tyre",
    names: { ar: "صور", en: "Tyre", fr: "Tyr" },
    blurbs: {
      ar: "صور منطقتنا الأساسية — المعاينة خلال يوم، والتنفيذ من ورشتنا القريبة مباشرة إلى بيتك.",
      en: "Tyre is our home base — site visits within a day, and execution delivered straight from our nearby workshop to your home.",
      fr: "Tyr est notre base — visite sous 24h et réalisation livrée directement de notre atelier voisin à votre domicile.",
    },
  },
  {
    slug: "nabatieh",
    names: { ar: "النبطية", en: "Nabatieh", fr: "Nabatieh" },
    blurbs: {
      ar: "النبطية وبنت جبيل ومرجعيون وحاصبيا — قريبون منك بالمعاينة والتنفيذ والمتابعة بعد التسليم.",
      en: "Nabatieh, Bint Jbeil, Marjayoun and Hasbaya — close to you for visits, execution, and after-delivery follow-up.",
      fr: "Nabatieh, Bint Jbeil, Marjayoun et Hasbaya — proches de vous pour les visites, la réalisation et le suivi.",
    },
  },
  {
    slug: "sidon",
    names: { ar: "صيدا", en: "Sidon", fr: "Saïda" },
    blurbs: {
      ar: "صيدا والساحل الجنوبي — نصل إليك بسرعة من ورشتنا، مع خبرة طويلة بمشاريع البيوت الصيداوية.",
      en: "Sidon and the southern coast — we reach you quickly from our workshop, with long experience in Saida home projects.",
      fr: "Saïda et la côte sud — nous arrivons vite depuis notre atelier, avec une longue expérience des maisons de Saïda.",
    },
  },
];

export interface Combo {
  service: ServiceDef;
  city: CityDef;
  slug: string;
}

export const pseoCombos: Combo[] = pseoServices.flatMap((service) =>
  pseoCities.map((city) => ({
    service,
    city,
    slug: `${service.slug}-${city.slug}`,
  }))
);

export function parseCombo(slug: string): Combo | null {
  for (const service of pseoServices) {
    if (slug.startsWith(service.slug + "-")) {
      const citySlug = slug.slice(service.slug.length + 1);
      const city = pseoCities.find((c) => c.slug === citySlug);
      if (city) return { service, city, slug };
    }
  }
  return null;
}

export const inWord: Record<Locale, string> = { ar: "في", en: "in", fr: "à" };
