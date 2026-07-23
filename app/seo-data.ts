import type { Locale } from "./i18n";

export interface ServiceDef {
  slug: string;
  /** Index into dict.services.items, or -1 when the service has its own items list */
  dictIndex: number;
  names: Record<Locale, string>;
  intros: Record<Locale, string>;
  /** Standalone item list (used when dictIndex is -1) */
  items?: Record<Locale, string[]>;
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

export const pseoSubServices: ServiceDef[] = [
  {
    slug: "bedrooms",
    dictIndex: -1,
    names: { ar: "غرف نوم", en: "Bedrooms", fr: "Chambres" },
    intros: {
      ar: "غرف نوم كاملة بتصميم هادئ وراقي: سرير بظهر مميز، خزائن مدمجة حتى السقف، كومودينو وتسريحة — بتشطيبات دافئة وخامات مريحة تدوم.",
      en: "Complete bedrooms with a calm, elegant design: statement headboard bed, floor-to-ceiling wardrobes, nightstands and dresser — warm finishes and lasting materials.",
      fr: "Des chambres complètes au design apaisant et élégant : lit à tête remarquable, dressings jusqu'au plafond, chevets et coiffeuse — finitions chaleureuses et matériaux durables.",
    },
    items: {
      ar: ["أسرّة بظهور خشبية ومنجدة", "خزائن ملابس مدمجة حتى السقف", "كومودينو ووحدات جانبية", "تسريحات ومرايا", "غرف نوم أطفال عملية وآمنة", "إضاءة مخفية وتفاصيل راقية"],
      en: ["Beds with wooden and upholstered headboards", "Floor-to-ceiling built-in wardrobes", "Nightstands and side units", "Dressers and mirrors", "Practical and safe kids' bedrooms", "Hidden lighting and refined details"],
      fr: ["Lits à têtes en bois et capitonnées", "Dressings intégrés jusqu'au plafond", "Chevets et unités latérales", "Coiffeuses et miroirs", "Chambres d'enfants pratiques et sûres", "Éclairage dissimulé et détails raffinés"],
    },
  },
  {
    slug: "sofas-salons",
    dictIndex: -1,
    names: { ar: "كنب وصالونات", en: "Sofas & Living Rooms", fr: "Canapés & Salons" },
    intros: {
      ar: "كنب وصالونات مريحة بتصاميم عصرية: زوايا كبيرة بحرف L أو U، صالونات استقبال فخمة، وأقمشة مخمل وكتان تتحمل الاستخدام اليومي.",
      en: "Comfortable sofas and salons with modern designs: large L and U-shaped sectionals, luxury reception salons, and velvet and linen fabrics built for daily life.",
      fr: "Des canapés et salons confortables au design moderne : grands angles en L ou U, salons de réception luxueux, et tissus velours et lin pensés pour le quotidien.",
    },
    items: {
      ar: ["زوايا كنب L و U", "صالونات استقبال فخمة", "كنب سرير عملي", "أقمشة مخمل وكتان وجلد", "إعادة تنجيد الكنب القديم", "طاولات وسط متناسقة"],
      en: ["L and U-shaped sectional sofas", "Luxury reception salons", "Practical sofa beds", "Velvet, linen and leather fabrics", "Re-upholstery of old sofas", "Matching coffee tables"],
      fr: ["Canapés d'angle en L et U", "Salons de réception luxueux", "Canapés-lits pratiques", "Tissus velours, lin et cuir", "Retapissage d'anciens canapés", "Tables basses assorties"],
    },
  },
  {
    slug: "tables",
    dictIndex: -1,
    names: { ar: "طاولات", en: "Tables", fr: "Tables" },
    intros: {
      ar: "طاولات طعام ووسط بخشب متين وتصاميم ثابتة وأنيقة: أسطح رخام وسيراميك وخشب طبيعي، بقواعد معدن أو خشب وبكل المقاسات.",
      en: "Dining and coffee tables in solid wood with elegant, sturdy designs: marble, ceramic and natural wood tops, metal or wooden bases, in all sizes.",
      fr: "Tables à manger et tables basses en bois massif, designs élégants et robustes : plateaux marbre, céramique et bois naturel, pieds métal ou bois, toutes dimensions.",
    },
    items: {
      ar: ["طاولات طعام من 4 إلى 12 شخص", "طاولات وسط", "طاولات جانبية", "أسطح رخام وسيراميك وخشب", "قواعد معدن وخشب", "مقاسات مخصصة حسب المساحة"],
      en: ["Dining tables for 4 to 12 people", "Coffee tables", "Side tables", "Marble, ceramic and wood tops", "Metal and wooden bases", "Custom sizes for your space"],
      fr: ["Tables à manger de 4 à 12 personnes", "Tables basses", "Tables d'appoint", "Plateaux marbre, céramique et bois", "Pieds métal et bois", "Dimensions sur mesure"],
    },
  },
  {
    slug: "wardrobes-storage",
    dictIndex: -1,
    names: { ar: "خزائن ووحدات تخزين", en: "Wardrobes & Storage", fr: "Dressings & Rangements" },
    intros: {
      ar: "خزائن مدمجة ووحدات تخزين ذكية تستغل كل سنتمتر: غرف ملابس walk-in، خزائن حائط حتى السقف، وحلول عملية للمساحات الصغيرة.",
      en: "Built-in wardrobes and smart storage that uses every centimeter: walk-in closets, floor-to-ceiling units, and practical solutions for small spaces.",
      fr: "Dressings intégrés et rangements malins qui exploitent chaque centimètre : walk-in, unités jusqu'au plafond et solutions pratiques pour petits espaces.",
    },
    items: {
      ar: ["غرف ملابس walk-in", "خزائن مدمجة حتى السقف", "وحدات تخزين تلفزيون", "أدراج ورفوف داخلية منظمة", "حلول للمساحات الصغيرة", "أبواب سحابة ومفصلية"],
      en: ["Walk-in closets", "Floor-to-ceiling built-ins", "TV storage units", "Organized drawers and shelves", "Small-space solutions", "Sliding and hinged doors"],
      fr: ["Dressings walk-in", "Unités intégrées jusqu'au plafond", "Meubles TV avec rangement", "Tiroirs et étagères organisés", "Solutions petits espaces", "Portes coulissantes et battantes"],
    },
  },
  {
    slug: "tv-wall-units",
    dictIndex: -1,
    names: { ar: "وحدات تلفزيون وديكور جدران", en: "TV Walls & Media Units", fr: "Murs TV & Médias" },
    intros: {
      ar: "جدران تلفزيون مدمجة بتصميم معماري: ألواح خشبية ثلاثية الأبعاد، إضاءة مخفية، رفوف عرض، وإخفاء كامل للكابلات — الواجهة الأجمل لصالونك.",
      en: "Built-in TV walls with architectural design: 3D wooden panels, hidden lighting, display shelves, and fully concealed cables — the most beautiful face of your living room.",
      fr: "Murs TV intégrés au design architectural : panneaux bois 3D, éclairage dissimulé, étagères d'exposition et câbles entièrement cachés — la plus belle pièce de votre salon.",
    },
    items: {
      ar: ["وحدات تلفزيون مدمجة", "ألواح حائط خشبية 3D", "إضاءة LED مخفية", "إخفاء كامل للكابلات", "رفوف وديكورات عرض", "دمج soundbar ومدفأة"],
      en: ["Built-in TV units", "3D wooden wall panels", "Hidden LED lighting", "Full cable concealment", "Display shelves and decor", "Soundbar and fireplace integration"],
      fr: ["Meubles TV intégrés", "Panneaux muraux bois 3D", "Éclairage LED dissimulé", "Câbles entièrement cachés", "Étagères d'exposition", "Intégration soundbar et cheminée"],
    },
  },
  {
    slug: "reupholstery",
    dictIndex: -1,
    names: { ar: "تنجيد وإعادة تنجيد", en: "Re-upholstery", fr: "Retapissage" },
    intros: {
      ar: "جدّد كنبك وكراسيك بدل شراء جديد: تنجيد احترافي بأقمشة حديثة ضد البقع، إصلاح الإسفنج والنوابض، وتوفير كبير مقارنة بكلفة الجديد.",
      en: "Renew your sofas and chairs instead of buying new: professional re-upholstery with modern stain-resistant fabrics, foam and spring repair, and big savings compared to new furniture.",
      fr: "Rénovez vos canapés et chaises au lieu d'acheter du neuf : retapissage professionnel avec tissus modernes anti-taches, réparation mousse et ressorts, et de vraies économies.",
    },
    items: {
      ar: ["تنجيد كنب وكراسي", "تغيير إسفنج ونوابض", "أقمشة ضد البقع والأطفال", "تجديد صالونات كاملة", "تنجيد رؤوس أسرّة", "استشارة اختيار قماش مجانية"],
      en: ["Sofa and chair upholstery", "Foam and spring replacement", "Stain and kid-resistant fabrics", "Full salon renewal", "Headboard upholstery", "Free fabric consultation"],
      fr: ["Tapissage canapés et chaises", "Remplacement mousse et ressorts", "Tissus anti-taches et enfants", "Rénovation complète de salons", "Têtes de lit capitonnées", "Consultation tissu gratuite"],
    },
  },
  {
    slug: "dining-buffet",
    dictIndex: -1,
    names: { ar: "غرف طعام ونيش", en: "Dining Rooms & Buffets", fr: "Salles à manger & Buffets" },
    intros: {
      ar: "غرف طعام كاملة وقطع نيش وبوفيه بتصاميم تليق بالضيافة اللبنانية: طاولات سفرة كبيرة، كراسي مريحة، ووحدات عرض فخمة لأطقمك وأوانيك.",
      en: "Complete dining rooms and buffet pieces designed for Lebanese hospitality: large dining tables, comfortable chairs, and luxury display units for your sets and serveware.",
      fr: "Des salles à manger complètes et des buffets pensés pour l'hospitalité libanaise : grandes tables, chaises confortables et vitrines luxueuses pour vos services.",
    },
    items: {
      ar: ["طاولات سفرة من 6 إلى 14 شخص", "كراسي طعام منجدة مريحة", "نيش وبوفيه بزجاج وإضاءة", "وحدات عرض للأطقم والأواني", "كونسولات سفرة", "تصاميم كلاسيك ومودرن ونيو كلاسيك"],
      en: ["Dining tables for 6 to 14 people", "Comfortable upholstered dining chairs", "Buffets and vitrines with glass and lighting", "Display units for sets and serveware", "Dining consoles", "Classic, modern and neo-classic designs"],
      fr: ["Tables de 6 à 14 personnes", "Chaises de salle à manger capitonnées", "Buffets et vitrines avec verre et éclairage", "Vitrines pour services et vaisselle", "Consoles de salle à manger", "Designs classique, moderne et néo-classique"],
    },
  },
  {
    slug: "home-office",
    dictIndex: -1,
    names: { ar: "مكاتب منزلية", en: "Home Office Furniture", fr: "Bureau à domicile" },
    intros: {
      ar: "مكاتب منزلية عملية وأنيقة: مكاتب بمقاسات مخصصة، مكتبات ورفوف، ووحدات تخزين ملفات — لبيئة شغل مريحة ومرتبة داخل بيتك.",
      en: "Practical and elegant home offices: custom-size desks, libraries and shelving, and file storage units — for a comfortable, organized workspace at home.",
      fr: "Des bureaux à domicile pratiques et élégants : bureaux sur mesure, bibliothèques et étagères, rangements pour dossiers — pour un espace de travail confortable à la maison.",
    },
    items: {
      ar: ["مكاتب حسب المقاس", "مكتبات ورفوف كتب", "وحدات تخزين ملفات", "حلول إخفاء كابلات وشواحن", "تصميم زوايا شغل للمساحات الصغيرة", "مفروشات مكاتب وشركات"],
      en: ["Custom-size desks", "Libraries and bookshelves", "File storage units", "Cable and charger concealment", "Small-space work corner designs", "Office and company furniture"],
      fr: ["Bureaux sur mesure", "Bibliothèques et étagères", "Rangements pour dossiers", "Dissimulation des câbles et chargeurs", "Coins travail pour petits espaces", "Mobilier de bureaux et entreprises"],
    },
  },
  {
    slug: "entrance-console",
    dictIndex: -1,
    names: { ar: "مداخل وكونسول", en: "Entrance & Console Tables", fr: "Entrées & Consoles" },
    intros: {
      ar: "مدخل بيتك هو أول انطباع: كونسولات ومداخل بتصاميم فاخرة مع مرايا ووحدات استقبال تعكس ذوقك من أول خطوة.",
      en: "Your entrance is the first impression: luxury consoles and entryway designs with mirrors and reception units that reflect your taste from the first step.",
      fr: "Votre entrée est la première impression : consoles et entrées au design luxueux avec miroirs et meubles d'accueil qui reflètent votre goût dès le premier pas.",
    },
    items: {
      ar: ["كونسولات مداخل", "مرايا ديكور بإطارات خشبية", "وحدات استقبال وتخزين مفاتيح", "طاولات زاوية وجانبية", "إضاءة مداخل مخفية", "تفاصيل نحاس وذهب"],
      en: ["Entrance consoles", "Decor mirrors with wooden frames", "Reception and key storage units", "Corner and side tables", "Hidden entrance lighting", "Brass and gold details"],
      fr: ["Consoles d'entrée", "Miroirs décor à cadres en bois", "Meubles d'accueil et rangement clés", "Tables d'angle et d'appoint", "Éclairage d'entrée dissimulé", "Détails laiton et or"],
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
  {
    slug: "tripoli",
    names: { ar: "طرابلس", en: "Tripoli", fr: "Tripoli" },
    blurbs: {
      ar: "طرابلس والميناء وكل الفيحاء — ننفذ مشاريع مفروشات وديكور بجودة ورشتنا نفسها مع تنسيق كامل للمواعيد.",
      en: "Tripoli, Mina and the whole North coast — we deliver furniture and decor projects with the same workshop quality and fully coordinated scheduling.",
      fr: "Tripoli, Mina et toute la côte nord — mêmes projets de qualité avec une coordination complète des rendez-vous.",
    },
  },
  {
    slug: "jounieh",
    names: { ar: "جونيه", en: "Jounieh", fr: "Jounieh" },
    blurbs: {
      ar: "جونيه وكسروان — مشاريع شقق وفلل بتصاميم عصرية، من المعاينة المجانية حتى التركيب النهائي.",
      en: "Jounieh and Keserwan — apartment and villa projects with modern designs, from the free visit to final installation.",
      fr: "Jounieh et le Kesrouan — projets d'appartements et de villas au design moderne, de la visite gratuite à la pose finale.",
    },
  },
  {
    slug: "zahle",
    names: { ar: "زحلة", en: "Zahle", fr: "Zahlé" },
    blurbs: {
      ar: "زحلة عروس البقاع — مفروشات وديكورات خشبية تناسب بيوت البقاع العريقة، بخامات تتحمل وتدوم.",
      en: "Zahle, the bride of the Bekaa — furniture and wooden decor suited to Bekaa homes, with durable, long-lasting materials.",
      fr: "Zahlé, la mariée de la Bekaa — meubles et décors en bois adaptés aux maisons de la région, avec des matériaux durables.",
    },
  },
  {
    slug: "baalbek",
    names: { ar: "بعلبك", en: "Baalbek", fr: "Baalbek" },
    blurbs: {
      ar: "بعلبك والهرمل — نوصل خدماتنا لأبعد نقطة، بتخطيط مسبق للمعاينة والتسليم والتركيب.",
      en: "Baalbek and Hermel — we bring our services to the farthest point, with pre-planned visits, delivery and installation.",
      fr: "Baalbek et Hermel — nous apportons nos services jusqu'au point le plus éloigné, avec visites et installation planifiées.",
    },
  },
  {
    slug: "akkar",
    names: { ar: "عكار", en: "Akkar", fr: "Akkar" },
    blurbs: {
      ar: "عكار وكل الشمال الأقصى — نفس الجودة والاهتمام بالتفاصيل أينما كان مشروعك في لبنان.",
      en: "Akkar and the far North — the same quality and attention to detail wherever your project is in Lebanon.",
      fr: "Akkar et l'extrême Nord — la même qualité et attention aux détails où que soit votre projet au Liban.",
    },
  },
];

export interface Combo {
  service: ServiceDef;
  city: CityDef;
  slug: string;
}

export const allPseoServices: ServiceDef[] = [...pseoServices, ...pseoSubServices];

export const pseoCombos: Combo[] = allPseoServices.flatMap((service) =>
  pseoCities.map((city) => ({
    service,
    city,
    slug: `${service.slug}-${city.slug}`,
  }))
);

export function parseCombo(slug: string): Combo | null {
  for (const service of allPseoServices) {
    if (slug.startsWith(service.slug + "-")) {
      const citySlug = slug.slice(service.slug.length + 1);
      const city = pseoCities.find((c) => c.slug === citySlug);
      if (city) return { service, city, slug };
    }
  }
  return null;
}

export const inWord: Record<Locale, string> = { ar: "في", en: "in", fr: "à" };
