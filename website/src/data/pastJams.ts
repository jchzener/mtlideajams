// src/data/pastJams.ts

export interface LocalizedText {
  en: string;
  fr: string;
}

export interface LocalizedArray {
  en: string[];
  fr: string[];
}

export interface Resource {
  label: string;
  type: "book" | "talk" | "article" | "course";
  link?: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
}

export interface Jam {
  id: string;
  isoDate: string; // YYYY-MM
  location: LocalizedText;
  displayDate: LocalizedText;

  speaker: {
    name: string;
    title: LocalizedText;
    image: string; // public path
  };

  theme: LocalizedText;
  quote: LocalizedText;

  description: LocalizedText;
  descriptionLong: LocalizedText;

  takeaways: LocalizedArray;
  resources: Resource[];
  gallery: GalleryItem[];
}

export const pastJams: Jam[] = [
  // ─── 2025 ───────────────────────────────────────────────
  {
    id: "jam-2025-09",
    isoDate: "2025-09",
    location: { en: "Montreal", fr: "Montréal" },
    displayDate: { en: "September 2025", fr: "septembre 2025" },
    speaker: {
      name: "Fahad A.",
      title: {
        en: "CEO, Hivo — Future of Work Platform",
        fr: "PDG, Hivo — Plateforme sur l’avenir du travail",
      },
      image: "/images/speakers/fahad.jpg",
    },
    theme: {
      en: "Future of Work & Entrepreneurial Journeys",
      fr: "Avenir du travail et parcours entrepreneurial",
    },
    quote: {
      en: "The future of work isn’t remote or in-office — it’s about designing the right context for collaboration.",
      fr: "L’avenir du travail n’est ni le télétravail ni le bureau — c’est le contexte de collaboration qu’on conçoit.",
    },
    description: {
      en: "A deep dive into the future of work with the founder of Hivo.",
      fr: "Une plongée dans l’avenir du travail avec le fondateur de Hivo.",
    },
    descriptionLong: {
      en: "Fahad shared his journey building Hivo, a platform rethinking how remote professionals access meaningful workspaces. Beyond product and traction, the discussion explored leadership, timing, and the realities of building in an uncertain labor market.",
      fr: "Fahad a partagé son parcours à la tête de Hivo, une plateforme qui repense l’accès aux espaces de travail pour les professionnels à distance. La discussion a dépassé le produit pour aborder le leadership, le timing et les réalités du marché du travail.",
    },
    takeaways: {
      en: [
        "The future of work is contextual, not binary.",
        "Startups must adapt faster than labor norms.",
        "Leadership clarity matters more than flexibility perks.",
      ],
      fr: [
        "L’avenir du travail est contextuel, pas binaire.",
        "Les startups doivent évoluer plus vite que les normes du travail.",
        "La clarté du leadership compte plus que les avantages flexibles.",
      ],
    },
    resources: [
      {
        label: "Remote: Office Not Required",
        type: "book",
        link: "https://basecamp.com/books/remote",
      },
      { label: "The Future of Work – MIT Talk", type: "talk" },
    ],
    gallery: [
      {
        src: "/images/jams/jam-2025-09-1.jpg",
        alt: "Group discussion during September 2025 Montreal Idea Jam",
      },
    ],
  },
  {
    id: "jam-2025-08",
    isoDate: "2025-08",
    location: { en: "Montreal", fr: "Montréal" },
    displayDate: { en: "August 2025", fr: "août 2025" },
    speaker: {
      name: "Kareem Rahaman & Rim",
      title: {
        en: "Growth Lead, Club PKL & Founder, SoraRisk",
        fr: "Responsable croissance, Club PKL & Fondatrice, SoraRisk",
      },
      image: "/images/speakers/kareem-rim.jpg",
    },
    theme: {
      en: "Emerging Industries & Founder Stories",
      fr: "Industries émergentes et récits de fondatrices",
    },
    quote: {
      en: "The next billion-dollar business might be in pickleball—or in risk intelligence for emerging markets.",
      fr: "La prochaine entreprise à un milliard pourrait être dans le pickleball… ou dans l’intelligence du risque pour les marchés émergents.",
    },
    description: {
      en: "Exploring niche sports and risk intelligence as entrepreneurial frontiers.",
      fr: "Explorer les sports de niche et l’intelligence du risque comme frontières entrepreneuriales.",
    },
    descriptionLong: {
      en: "Kareem unpacked the explosive rise of pickleball as both sport and business model. Rim then shared how SoraRisk is building tools to assess geopolitical and operational risk for startups in volatile regions — a conversation on spotting opportunity in overlooked spaces.",
      fr: "Kareem a décortiqué la montée fulgurante du pickleball en tant que sport et modèle économique. Rim a ensuite expliqué comment SoraRisk développe des outils pour évaluer les risques géopolitiques et opérationnels pour les startups dans des régions instables — une discussion sur la détection d’opportunités dans les espaces négligés.",
    },
    takeaways: {
      en: [
        "Niche sports can become scalable businesses with community at the core.",
        "Risk intelligence is the next frontier for emerging market startups.",
        "Founder alignment on values outperforms misaligned scaling.",
      ],
      fr: [
        "Les sports de niche peuvent devenir des entreprises à grande échelle avec la communauté au cœur.",
        "L’intelligence du risque est la prochaine frontière pour les startups des marchés émergents.",
        "L’alignement des fondateurs sur les valeurs surpasse la croissance désalignée.",
      ],
    },
    resources: [
      {
        label: "The Sports Playbook – How to Build Community-Driven Brands",
        type: "article",
      },
      { label: "Risk, Uncertainty, and Profit – Frank Knight", type: "book" },
    ],
    gallery: [
      {
        src: "/images/jams/jam-2025-08-1.jpg",
        alt: "Group discussion during August 2025 Montreal Idea Jam",
      },
    ],
  },
  {
    id: "jam-2025-07",
    isoDate: "2025-07",
    location: {
      en: "Terrasse St-Ambroise, Montreal",
      fr: "Terrasse St-Ambroise, Montréal",
    },
    displayDate: { en: "July 2025", fr: "juillet 2025" },
    speaker: {
      name: "Montreal Idea Jams Community",
      title: {
        en: "Summer Terrace Hangout",
        fr: "Apéro-terrasse estival",
      },
      image: "/images/speakers/community.jpg",
    },
    theme: {
      en: "Community Connection",
      fr: "Connexion communautaire",
    },
    quote: {
      en: "Some of the best ideas start with a drink and no agenda.",
      fr: "Les meilleures idées naissent parfois avec un verre… et sans ordre du jour.",
    },
    description: {
      en: "An informal summer gathering to reconnect and reflect.",
      fr: "Un rassemblement estival informel pour se retrouver et réfléchir.",
    },
    descriptionLong: {
      en: "An informal summer gathering at Terrasse St-Ambroise to reconnect, share personal updates, and reflect on the year’s themes. No structure, no slides — just friends thinking together under the Montreal sky.",
      fr: "Un rassemblement estival informel à la Terrasse St-Ambroise pour se retrouver, partager des nouvelles personnelles et réfléchir aux thèmes de l’année. Pas de structure, pas de diapos — juste des amis en train de penser ensemble sous le ciel montréalais.",
    },
    takeaways: {
      en: [
        "Connection precedes collaboration.",
        "The best conversations happen when there’s nothing to sell.",
        "Summer nights in Montreal are the perfect incubator for slow thinking.",
      ],
      fr: [
        "La connexion précède la collaboration.",
        "Les meilleures conversations ont lieu quand il n’y a rien à vendre.",
        "Les soirées d’été à Montréal sont l’incubateur idéal pour la pensée lente.",
      ],
    },
    resources: [
      { label: "The Art of Gathering – Priya Parker", type: "book" },
      { label: "How to Host a Meaningful Conversation", type: "article" },
    ],
    gallery: [
      {
        src: "/images/jams/jam-2025-07-1.jpg",
        alt: "Summer terrace hangout – July 2025",
      },
    ],
  },
  {
    id: "jam-2025-04",
    isoDate: "2025-04",
    location: { en: "Montreal", fr: "Montréal" },
    displayDate: { en: "April 2025", fr: "avril 2025" },
    speaker: {
      name: "Jeffrey",
      title: {
        en: "B2B SaaS Sales & UAE Entrepreneur",
        fr: "Ventes SaaS B2B & entrepreneur aux Émirats",
      },
      image: "/images/speakers/jeffrey.jpg",
    },
    theme: {
      en: "B2B Sales & International Entrepreneurship",
      fr: "Ventes B2B & entrepreneuriat international",
    },
    quote: {
      en: "Enterprise sales isn’t about features—it’s about aligning with your client’s internal politics and timelines.",
      fr: "La vente en entreprise, ce n’est pas les fonctionnalités — c’est s’aligner sur la politique interne et les calendriers de votre client.",
    },
    description: {
      en: "Insights on enterprise sales and international business building.",
      fr: "Aperçus sur la vente en entreprise et la création d’entreprises à l’international.",
    },
    descriptionLong: {
      en: "Jeffrey shared hard-won lessons from selling enterprise SaaS in complex markets, then drew parallels to building a business in the UAE — a region where relationships, timing, and cultural fluency matter more than scale.",
      fr: "Jeffrey a partagé des leçons difficiles tirées de la vente de logiciels SaaS en entreprise dans des marchés complexes, puis a établi des parallèles avec la création d’une entreprise aux Émirats — une région où les relations, le timing et la fluidité culturelle comptent plus que la taille.",
    },
    takeaways: {
      en: [
        "Enterprise sales is political navigation, not product demo.",
        "International expansion starts with humility, not assumptions.",
        "Local partners are force multipliers — not cost centers.",
      ],
      fr: [
        "La vente en entreprise est une navigation politique, pas une démo produit.",
        "L’expansion internationale commence par l’humilité, pas par des hypothèses.",
        "Les partenaires locaux sont des multiplicateurs de force — pas des coûts.",
      ],
    },
    resources: [
      { label: "The Challenger Sale", type: "book" },
      {
        label: "Doing Business in the Middle East – Harvard Guide",
        type: "article",
      },
    ],
    gallery: [
      {
        src: "/images/jams/jam-2025-04-1.jpg",
        alt: "Group discussion during April 2025 Montreal Idea Jam",
      },
    ],
  },

  // ─── 2024 ───────────────────────────────────────────────
  {
    id: "jam-2024-11",
    isoDate: "2024-11",
    location: { en: "Montreal", fr: "Montréal" },
    displayDate: { en: "November 2024", fr: "novembre 2024" },
    speaker: {
      name: "Hasan Uzun",
      title: {
        en: "Expert in Small Business Acquisition",
        fr: "Expert en acquisition de petites entreprises",
      },
      image: "/images/speakers/hasan.jpg",
    },
    theme: {
      en: "Small Business Acquisition (Repreneuriat)",
      fr: "Acquisition d’entreprise (Repreneuriat)",
    },
    quote: {
      en: "Repreneuriat isn’t just buying a business—it’s inheriting a legacy and reshaping it with intention.",
      fr: "Le repreneuriat, ce n’est pas juste acheter une entreprise — c’est hériter d’un legs et le façonner avec intention.",
    },
    description: {
      en: "A masterclass in small business acquisition.",
      fr: "Une masterclass en acquisition de petites entreprises.",
    },
    descriptionLong: {
      en: "Hasan walked us through the full lifecycle of acquiring a small company—from initial search and valuation to due diligence, financing, and post-acquisition integration. He emphasized that the real work begins after the deal closes.",
      fr: "Hasan nous a guidés à travers tout le cycle de l’acquisition d’une petite entreprise — de la recherche initiale à la valorisation, en passant par la diligence raisonnable, le financement et l’intégration post-acquisition. Il a souligné que le vrai travail commence après la signature.",
    },
    takeaways: {
      en: [
        "The best acquisition targets are boring but cash-flow positive.",
        "Seller financing unlocks deals that banks won’t touch.",
        "Your first 90 days post-acquisition set the tone for years.",
      ],
      fr: [
        "Les meilleures cibles d’acquisition sont ennuyeuses mais génératrices de liquidités.",
        "Le financement vendeur débloque des transactions que les banques n’osent pas.",
        "Vos 90 premiers jours post-acquisition fixent le ton pour des années.",
      ],
    },
    resources: [
      { label: "Buy Then Build – Walker Deibel", type: "book" },
      {
        label: "Acquizition.biz – Business Search Platform",
        type: "course",
        link: "https://acquizition.biz/",
      },
    ],
    gallery: [
      {
        src: "/images/jams/jam-2024-11-1.jpg",
        alt: "Group discussion during November 2024 Montreal Idea Jam",
      },
    ],
  },
  {
    id: "jam-2024-11-08",
    isoDate: "2024-11",
    location: { en: "Montreal", fr: "Montréal" },
    displayDate: { en: "November 2024", fr: "novembre 2024" },
    speaker: {
      name: "Community Workshop",
      title: {
        en: "Hands-on Business Acquisition Lab",
        fr: "Atelier pratique d’acquisition d’entreprise",
      },
      image: "/images/speakers/community.jpg",
    },
    theme: {
      en: "Business Buying Workshop",
      fr: "Atelier d’achat d’entreprise",
    },
    quote: {
      en: "Don’t just browse businesses—learn how to evaluate them like an operator.",
      fr: "Ne vous contentez pas de parcourir les entreprises — apprenez à les évaluer comme un opérateur.",
    },
    description: {
      en: "A practical workshop on evaluating small businesses.",
      fr: "Un atelier pratique sur l’évaluation de petites entreprises.",
    },
    descriptionLong: {
      en: "Attendees worked in small groups to analyze real listings from MonEntrepriseAVendre.com and Acquizition.biz. We evaluated market size, customer concentration, margin sustainability, and prepared questions for a mock first meeting with sellers.",
      fr: "Les participants ont travaillé en petits groupes pour analyser de vraies annonces de MonEntrepriseAVendre.com et Acquizition.biz. Nous avons évalué la taille du marché, la concentration client, la durabilité des marges, et préparé des questions pour une simulation de première rencontre avec des vendeurs.",
    },
    takeaways: {
      en: [
        "Revenue ≠ value — cash flow and owner dependence are key.",
        "Always assume the seller’s number is optimistic.",
        "Your first question should be: ‘Why are you selling?’",
      ],
      fr: [
        "Chiffre d’affaires ≠ valeur — la trésorerie et la dépendance au propriétaire sont clés.",
        "Supposez toujours que le chiffre du vendeur est optimiste.",
        "Votre première question devrait être : « Pourquoi vendez-vous ? »",
      ],
    },
    resources: [
      { label: "The Little Book of Valuation", type: "book" },
      {
        label: "MonEntrepriseAVendre.com – Marketplace",
        type: "course",
        link: "https://monentrepriseavendre.com/",
      },
    ],
    gallery: [
      {
        src: "/images/jams/jam-2024-11-08-1.jpg",
        alt: "Workshop on business acquisition – November 2024",
      },
    ],
  },
  {
    id: "jam-2024-09",
    isoDate: "2024-09",
    location: { en: "Montreal", fr: "Montréal" },
    displayDate: { en: "September 2024", fr: "septembre 2024" },
    speaker: {
      name: "Guest Panel",
      title: {
        en: "Two Founders Who Acquired and Run Small Businesses",
        fr: "Deux fondateurs ayant acquis et gérant des PME",
      },
      image: "/images/speakers/panel.jpg",
    },
    theme: {
      en: "Small Business Acquisition",
      fr: "Acquisition de PME",
    },
    quote: {
      en: "Lifestyle business or growth engine? Your acquisition strategy starts with that choice.",
      fr: "Entreprise de style de vie ou moteur de croissance ? Votre stratégie d’acquisition commence par ce choix.",
    },
    description: {
      en: "A panel on contrasting approaches to business acquisition.",
      fr: "Un panel sur des approches contrastées de l’acquisition d’entreprise.",
    },
    descriptionLong: {
      en: "Two founders shared contrasting journeys: one bought a profitable cleaning business to fund a slower life, the other acquired a niche SaaS to scale aggressively. The discussion revealed how philosophy drives every decision—from financing to team building.",
      fr: "Deux fondateurs ont partagé des parcours contrastés : l’un a acheté une entreprise de nettoyage rentable pour financer une vie plus calme, l’autre a acquis une niche SaaS pour croître de façon agressive. La discussion a révélé comment la philosophie guide chaque décision — du financement au recrutement.",
    },
    takeaways: {
      en: [
        "Your ‘why’ determines your acquisition criteria.",
        "Lifestyle businesses value stability; growth businesses value optionality.",
        "Both paths are valid — but mixing them leads to pain.",
      ],
      fr: [
        "Votre « pourquoi » détermine vos critères d’acquisition.",
        "Les entreprises de style de vie valorisent la stabilité ; celles de croissance valorisent les options.",
        "Les deux voies sont valables — mais les mélanger mène à la douleur.",
      ],
    },
    resources: [
      { label: "The E-Myth Revisited", type: "book" },
      { label: "Repreneuriat Stories – Canadian Podcast", type: "talk" },
    ],
    gallery: [
      {
        src: "/images/jams/jam-2024-09-1.jpg",
        alt: "Panel discussion on business acquisition – September 2024",
      },
    ],
  },
  {
    id: "jam-2024-08",
    isoDate: "2024-08",
    location: { en: "Montreal", fr: "Montréal" },
    displayDate: { en: "August 2024", fr: "août 2024" },
    speaker: {
      name: "Pranav",
      title: {
        en: "Agritech Investor and Operator",
        fr: "Investisseur et opérateur en agritech",
      },
      image: "/images/speakers/pranav.jpg",
    },
    theme: {
      en: "Agritech Deep Dive",
      fr: "Plongée en agritech",
    },
    quote: {
      en: "Canadian agritech isn’t just about farms—it’s about data, sustainability, and global food systems.",
      fr: "L’agritech canadienne, ce n’est pas seulement des fermes — c’est données, durabilité et systèmes alimentaires mondiaux.",
    },
    description: {
      en: "Exploring innovation in Canadian agritech.",
      fr: "Explorer l’innovation en agritech canadienne.",
    },
    descriptionLong: {
      en: "Pranav presented two real Canadian agritech deals: one in vertical farming logistics, another in soil analytics. He highlighted how Canadian innovation is solving for water scarcity, supply chain resilience, and traceability—from farm to fork.",
      fr: "Pranav a présenté deux opérations concrètes en agritech au Canada : une en logistique d’agriculture verticale, l’autre en analyse des sols. Il a mis en lumière comment l’innovation canadienne répond à la pénurie d’eau, à la résilience des chaînes d’approvisionnement et à la traçabilité — de la ferme à l’assiette.",
    },
    takeaways: {
      en: [
        "Agri data is the new oil — if you can collect it at scale.",
        "Sustainability isn’t a cost—it’s a competitive moat.",
        "Canadian agritech thrives on harsh climate innovation.",
      ],
      fr: [
        "Les données agricoles sont le nouveau pétrole — si vous pouvez les collecter à grande échelle.",
        "La durabilité n’est pas un coût — c’est un avantage concurrentiel.",
        "L’agritech canadienne prospère grâce à l’innovation dans les climats difficiles.",
      ],
    },
    resources: [
      { label: "The Third Plate – Dan Barber", type: "book" },
      { label: "Agri-Food Innovation in Canada – Report", type: "article" },
    ],
    gallery: [
      {
        src: "/images/jams/jam-2024-08-1.jpg",
        alt: "Discussion on agritech – August 2024",
      },
    ],
  },
  {
    id: "jam-2024-07",
    isoDate: "2024-07",
    location: { en: "Montreal", fr: "Montréal" },
    displayDate: { en: "July 2024", fr: "juillet 2024" },
    speaker: {
      name: "Alex",
      title: {
        en: "AI Practitioner and Entrepreneur",
        fr: "Praticien de l’IA et entrepreneur",
      },
      image: "/images/speakers/alex.jpg",
    },
    theme: {
      en: "Practical AI for Entrepreneurs",
      fr: "IA pratique pour entrepreneurs",
    },
    quote: {
      en: "AI isn’t magic—it’s a tool for operational leverage, if you know where to apply it.",
      fr: "L’IA n’est pas magique — c’est un levier opérationnel, si vous savez où l’appliquer.",
    },
    description: {
      en: "Cutting through the AI hype to practical applications.",
      fr: "Percevoir au-delà du battage médiatique autour de l’IA pour des applications pratiques.",
    },
    descriptionLong: {
      en: "Alex cut through the AI hype to show concrete use cases: automating customer support with fine-tuned LLMs, using vision models for quality control, and leveraging AI for market research. The message: start small, measure ROI, and scale what works.",
      fr: "Alex a dissipé le battage autour de l’IA pour montrer des cas concrets : automatisation du support client avec des LLM ajustés, utilisation de modèles vision pour le contrôle qualité, et l’IA pour la veille marché. Le message : commencez petit, mesurez le ROI, et mettez à l’échelle ce qui fonctionne.",
    },
    takeaways: {
      en: [
        "AI won’t replace founders—but founders using AI will replace those who don’t.",
        "Your data moat matters more than your model.",
        "Start with a workflow you already measure.",
      ],
      fr: [
        "L’IA ne remplacera pas les fondateurs — mais les fondateurs qui l’utilisent remplaceront ceux qui ne le font pas.",
        "Votre avantage data compte plus que votre modèle.",
        "Commencez par un flux de travail que vous mesurez déjà.",
      ],
    },
    resources: [
      { label: "Hands-On Machine Learning – Aurélien Géron", type: "book" },
      { label: "Practical AI for Startups – Stanford Guide", type: "course" },
    ],
    gallery: [
      {
        src: "/images/jams/jam-2024-07-1.jpg",
        alt: "AI discussion – July 2024",
      },
    ],
  },
  {
    id: "jam-2024-07-terrace",
    isoDate: "2024-07",
    location: {
      en: "Terrasse St-Ambroise, Montreal",
      fr: "Terrasse St-Ambroise, Montréal",
    },
    displayDate: { en: "July 2024", fr: "juillet 2024" },
    speaker: {
      name: "Montreal Idea Jams Community",
      title: {
        en: "Summer Kickoff Hangout",
        fr: "Apéro de lancement estival",
      },
      image: "/images/speakers/community.jpg",
    },
    theme: {
      en: "Community Connection",
      fr: "Connexion communautaire",
    },
    quote: {
      en: "Before the deep dives, we reconnect.",
      fr: "Avant les plongées profondes, on se reconnecte.",
    },
    description: {
      en: "A casual summer kickoff to reconnect and set the tone.",
      fr: "Un lancement estival décontracté pour se reconnecter et fixer le ton.",
    },
    descriptionLong: {
      en: "An informal start to the summer season at Terrasse St-Ambroise, discussing key interests like AI, business acquisition, agritech, and real estate—all over drinks and casual conversation.",
      fr: "Un lancement informel de la saison estivale à la Terrasse St-Ambroise, autour de discussions sur les sujets clés : IA, acquisition d’entreprise, agritech et immobilier — le tout autour d’un verre et de conversations détendues.",
    },
    takeaways: {
      en: [
        "Informal settings spark the best ideas.",
        "Summer is for reflection, not just execution.",
        "Community is the foundation of all great ventures.",
      ],
      fr: [
        "Les cadres informels suscitent les meilleures idées.",
        "L’été, c’est pour la réflexion, pas seulement l’exécution.",
        "La communauté est le fondement de toutes les grandes aventures.",
      ],
    },
    resources: [
      { label: "The Art of Gathering – Priya Parker", type: "book" },
      { label: "How to Build Community as an Entrepreneur", type: "article" },
    ],
    gallery: [
      {
        src: "/images/jams/jam-2024-07-terrace-1.jpg",
        alt: "Summer kickoff hangout – July 2024",
      },
    ],
  },
  {
    id: "jam-2024-06-recap",
    isoDate: "2024-06",
    location: { en: "Montreal", fr: "Montréal" },
    displayDate: { en: "June 2024", fr: "juin 2024" },
    speaker: {
      name: "Francisco & Hasan",
      title: {
        en: "Repreneuriat Practitioners",
        fr: "Praticiens du repreneuriat",
      },
      image: "/images/speakers/francisco-hasan.jpg",
    },
    theme: {
      en: "Small Company Acquisition Pipeline",
      fr: "Pipeline d’acquisition de PME",
    },
    quote: {
      en: "The best acquisition target isn’t the shiniest—it’s the one that fits your life and skills.",
      fr: "La meilleure cible d’acquisition n’est pas la plus brillante — c’est celle qui correspond à votre vie et vos compétences.",
    },
    description: {
      en: "A dual perspective on the business acquisition journey.",
      fr: "Une double perspective sur le parcours d’acquisition d’entreprise.",
    },
    descriptionLong: {
      en: "Francisco walked us through his 6-month search for the right business, while Hasan detailed how he structured the deal with seller financing and earnouts. Together, they showed that disciplined process beats luck every time.",
      fr: "Francisco nous a raconté sa recherche de 6 mois pour trouver la bonne entreprise, tandis qu’Hasan a détaillé comment il a structuré l’affaire avec un financement vendeur et des earnouts. Ensemble, ils ont montré que la discipline l’emporte toujours sur la chance.",
    },
    takeaways: {
      en: [
        "Search is a full-time job — treat it like one.",
        "Earnouts align incentives but add complexity.",
        "Your deal lawyer should understand small business, not just M&A.",
      ],
      fr: [
        "La recherche est un travail à temps plein — traitez-la comme tel.",
        "Les earnouts alignent les intérêts mais ajoutent de la complexité.",
        "Votre avocat doit comprendre les PME, pas seulement les fusions-acquisitions.",
      ],
    },
    resources: [
      { label: "The Acquirer’s Multiple", type: "book" },
      {
        label: "How to Search for a Business – Search Fund Guide",
        type: "article",
      },
    ],
    gallery: [
      {
        src: "/images/jams/jam-2024-06-1.jpg",
        alt: "Discussion on acquisition pipeline – June 2024",
      },
    ],
  },
  {
    id: "jam-2024-05-vc",
    isoDate: "2024-05",
    location: { en: "Montreal", fr: "Montréal" },
    displayDate: { en: "May 2024", fr: "mai 2024" },
    speaker: {
      name: "Pranav & Michael Pflug",
      title: {
        en: "Early-Stage Investors",
        fr: "Investisseurs en phase amorce",
      },
      image: "/images/speakers/pranav-michael.jpg",
    },
    theme: {
      en: "Evaluating Early-Stage Investments",
      fr: "Évaluer les investissements en phase amorce",
    },
    quote: {
      en: "Great founders don’t just sell vision—they prove traction with ruthless clarity.",
      fr: "Les grands fondateurs ne vendent pas seulement une vision — ils prouvent leur traction avec une clarté implacable.",
    },
    description: {
      en: "A workshop on evaluating startup investment opportunities.",
      fr: "Un atelier sur l’évaluation des opportunités d’investissement en startup.",
    },
    descriptionLong: {
      en: "Pranav led a workshop on evaluating startup opportunities using real pitch decks. Michael then worked with the group to refine TAM sizing and unit economics for his medtech startup NovusTX Devices — a masterclass in investor thinking.",
      fr: "Pranav a animé un atelier sur l’évaluation d’opportunités de startups à partir de vrais pitch decks. Michael a ensuite travaillé avec le groupe pour affiner la taille de son marché adressable et ses économies unitaires pour sa startup en medtech NovusTX Devices — une masterclass en pensée d’investisseur.",
    },
    takeaways: {
      en: [
        "TAM is a story — validate it with bottom-up data.",
        "Unit economics reveal truth faster than growth.",
        "Great founders ask for advice, not just money.",
      ],
      fr: [
        "Le TAM est une histoire — validez-la avec des données du bas.",
        "Les économies unitaires révèlent la vérité plus vite que la croissance.",
        "Les grands fondateurs demandent des conseils, pas seulement de l’argent.",
      ],
    },
    resources: [
      { label: "Venture Deals – Brad Feld", type: "book" },
      { label: "How to Size Your Market – YC Guide", type: "article" },
    ],
    gallery: [
      {
        src: "/images/jams/jam-2024-05-vc-1.jpg",
        alt: "Investment workshop – May 2024",
      },
    ],
  },
  {
    id: "jam-2024-05-scaleup",
    isoDate: "2024-05",
    location: { en: "Montreal", fr: "Montréal" },
    displayDate: { en: "May 2024", fr: "mai 2024" },
    speaker: {
      name: "Patrick Gagné",
      title: {
        en: "Former COO, Teo Taxi",
        fr: "Ancien COO, Teo Taxi",
      },
      image: "/images/speakers/patrick.jpg",
    },
    theme: {
      en: "Managing a Mission-Driven Scale-Up",
      fr: "Gérer une scale-up à mission",
    },
    quote: {
      en: "Scaling a mission-driven company means choosing between purity and pragmatism—every single day.",
      fr: "Faire croître une entreprise à mission, c’est choisir chaque jour entre pureté et pragmatisme.",
    },
    description: {
      en: "An unfiltered discussion on scaling a mission-driven company inside a regulated environment.",
      fr: "Une discussion sans filtre sur la croissance d’une entreprise à mission dans un environnement réglementé.",
    },
    descriptionLong: {
      en: "Patrick walked participants through the rarely discussed middle years of Teo Taxi — the phase where the mission was clear, the public support was strong, but every operational decision carried regulatory, financial, and human tradeoffs.\n\nThe group explored what fundamentally changes when a startup becomes a scale-up: decision-making slows, culture becomes fragile, and founders must operate inside systems they can no longer fully control. Rather than romanticizing growth, the conversation focused on responsibility, compromise, and long-term trust.",
      fr: "Patrick a guidé les participants à travers les années intermédiaires rarement abordées de Teo Taxi — une phase où la mission était claire et l’appui du public fort, mais où chaque décision opérationnelle impliquait des compromis réglementaires, financiers et humains.\n\nLe groupe a exploré ce qui change fondamentalement lorsqu’une startup devient une scale-up : la prise de décision ralentit, la culture devient fragile et les fondateurs doivent composer avec des systèmes qu’ils ne contrôlent plus entièrement. Plutôt que de glorifier la croissance, la discussion s’est concentrée sur la responsabilité, les compromis et la confiance à long terme.",
    },
    takeaways: {
      en: [
        "Mission and operations are in constant tension — not a one-time alignment exercise.",
        "Regulated environments force clarity: vague values collapse under pressure.",
        "Scaling teams requires unlearning many founder instincts.",
      ],
      fr: [
        "La mission et l’opérationnel sont en tension permanente — pas un exercice ponctuel.",
        "Les environnements réglementés imposent de la clarté : les valeurs floues s’effondrent sous la pression.",
        "Faire croître une équipe exige souvent de désapprendre des réflexes de fondateur.",
      ],
    },
    resources: [
      {
        label: "The Hard Thing About Hard Things — Ben Horowitz",
        type: "book",
      },
      {
        label: "How to Manage Through Hypergrowth — Reid Hoffman",
        type: "talk",
      },
      { label: "Teal Organizations — Frederic Laloux", type: "book" },
    ],
    gallery: [
      {
        src: "/images/jams/jam-2024-05-group.jpg",
        alt: "Group discussion during the May 2024 Montreal Idea Jam",
      },
    ],
  },
].sort((a, b) => b.isoDate.localeCompare(a.isoDate));
