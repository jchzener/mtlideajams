// src/data/pastJams.ts

export interface LocalizedText {
  en: string;
  fr: string;
}

export interface Jam {
  id: string;
  isoDate: string; // Format: "YYYY-MM"
  displayDate: LocalizedText;
  speaker: {
    name: string;
    title: LocalizedText;
  };
  quote: LocalizedText;
  description: LocalizedText;
  theme: LocalizedText;
}

export const pastJams: Jam[] = [
  // ─── 2025 ───────────────────────────────────────────────
  {
    id: "jam-2025-09",
    isoDate: "2025-09",
    displayDate: {
      en: "September 2025",
      fr: "septembre 2025",
    },
    speaker: {
      name: "Fahad A.",
      title: {
        en: "CEO of Hivo – Future of Work Platform",
        fr: "PDG de Hivo – Plateforme pour l’avenir du travail",
      },
    },
    quote: {
      en: "The future of work isn’t remote or in-office—it’s about finding the right context for deep collaboration.",
      fr: "L’avenir du travail, ce n’est ni le télétravail ni le bureau — c’est trouver le bon contexte pour collaborer en profondeur.",
    },
    description: {
      en: "Fahad shared his journey building Hivo, a platform connecting freelancers and remote professionals with ideal workspaces. The session closed with a group reflection on key themes for the rest of 2025.",
      fr: "Fahad a partagé son parcours à la tête de Hivo, une plateforme qui connecte freelances et professionnels nomades avec des espaces de travail adaptés. La soirée s’est conclue par une réflexion collective sur les thèmes clés à explorer d’ici la fin de 2025.",
    },
    theme: {
      en: "Future of Work & Entrepreneurial Journeys",
      fr: "Avenir du travail et parcours entrepreneurial",
    },
  },
  {
    id: "jam-2025-08",
    isoDate: "2025-08",
    displayDate: {
      en: "August 2025",
      fr: "août 2025",
    },
    speaker: {
      name: "Kareem Rahaman & Rim",
      title: {
        en: "Growth Lead at Club PKL & Founder of SoraRisk",
        fr: "Responsable croissance chez Club PKL & Fondatrice de SoraRisk",
      },
    },
    quote: {
      en: "The next billion-dollar business might be in pickleball—or in risk intelligence for emerging markets.",
      fr: "La prochaine entreprise à un milliard pourrait être dans le pickleball… ou dans l’intelligence du risque pour les marchés émergents.",
    },
    description: {
      en: "Kareem took us inside the explosive growth of pickleball as a sport and business. Rim then presented SoraRisk, her startup building risk assessment tools for dynamic environments.",
      fr: "Kareem nous a plongés dans la croissance fulgurante du pickleball, à la fois comme sport et comme opportunité commerciale. Rim a ensuite présenté SoraRisk, sa startup qui développe des outils d’évaluation du risque pour des environnements dynamiques.",
    },
    theme: {
      en: "Emerging Industries & Founder Stories",
      fr: "Industries émergentes et récits de fondatrices",
    },
  },
  {
    id: "jam-2025-07",
    isoDate: "2025-07",
    displayDate: {
      en: "July 2025",
      fr: "juillet 2025",
    },
    speaker: {
      name: "Montreal Idea Jams Community",
      title: {
        en: "Summer Terrace Hangout",
        fr: "Apéro-terrasse estival",
      },
    },
    quote: {
      en: "Some of the best ideas start with a drink and no agenda.",
      fr: "Les meilleures idées naissent parfois avec un verre… et sans ordre du jour.",
    },
    description: {
      en: "A relaxed gathering at a local terrace to reconnect, share informal updates, and enjoy Montreal summer nights. No slides, no pressure—just good company and open conversation.",
      fr: "Un rassemblement détendu en terrasse pour se retrouver, échanger des nouvelles informelles et profiter des soirées montréalaises. Pas de diapos, pas de pression — juste de la belle compagnie et des conversations libres.",
    },
    theme: {
      en: "Community Connection",
      fr: "Connexion communautaire",
    },
  },
  {
    id: "jam-2025-04",
    isoDate: "2025-04",
    displayDate: {
      en: "April 2025",
      fr: "avril 2025",
    },
    speaker: {
      name: "Jeffrey",
      title: {
        en: "B2B SaaS sales & UAE entrepreneur",
        fr: "Ventes SaaS B2B & entrepreneur aux Émirats",
      },
    },
    quote: {
      en: "Enterprise sales isn’t about features—it’s about aligning with your client’s internal politics and timelines.",
      fr: "La vente en entreprise, ce n’est pas les fonctionnalités — c’est s’aligner sur la politique interne et les calendriers de votre client.",
    },
    description: {
      en: "Jeffrey shared hard-won insights on selling B2B software to enterprise clients, followed by a conversation on building and operating a business in the UAE’s unique ecosystem.",
      fr: "Jeffrey a partagé des leçons durement acquises sur la vente de logiciels B2B à de grands comptes, suivi d’une discussion sur la création et l’exploitation d’une entreprise dans l’écosystème unique des Émirats.",
    },
    theme: {
      en: "B2B Sales & International Entrepreneurship",
      fr: "Ventes B2B & entrepreneuriat international",
    },
  },

  // ─── 2024 ───────────────────────────────────────────────
  {
    id: "jam-2024-11",
    isoDate: "2024-11",
    displayDate: {
      en: "November 2024",
      fr: "novembre 2024",
    },
    speaker: {
      name: "Hasan Uzun",
      title: {
        en: "Expert in small business acquisition",
        fr: "Expert en acquisition de petites entreprises",
      },
    },
    quote: {
      en: "Repreneuriat isn’t just buying a business—it’s inheriting a legacy and reshaping it with intention.",
      fr: "Le repreneuriat, ce n’est pas juste acheter une entreprise — c’est hériter d’un legs et le façonner avec intention.",
    },
    description: {
      en: "Hasan led a practical walkthrough of the small company acquisition process, covering stakeholders, timing, due diligence, and financing structures. A must for anyone exploring 'buying to build.'",
      fr: "Hasan a guidé une séance pratique sur l’acquisition de petites entreprises, couvrant les parties prenantes, le calendrier, la diligence raisonnable et les structures de financement. Essentiel pour qui envisage d’« acheter pour construire ».",
    },
    theme: {
      en: "Small Business Acquisition (Repreneuriat)",
      fr: "Acquisition d’entreprise (Repreneuriat)",
    },
  },
  {
    id: "jam-2024-11-08",
    isoDate: "2024-11",
    displayDate: {
      en: "November 2024",
      fr: "novembre 2024",
    },
    speaker: {
      name: "Community Workshop",
      title: {
        en: "Hands-on Business Acquisition Lab",
        fr: "Atelier pratique d’acquisition d’entreprise",
      },
    },
    quote: {
      en: "Don’t just browse businesses—learn how to evaluate them like an operator.",
      fr: "Ne vous contentez pas de parcourir les entreprises — apprenez à les évaluer comme un opérateur.",
    },
    description: {
      en: "Attendees explored real listings on platforms like MonEntrepriseAVendre.com and Acquizition.biz, then worked in small groups to assess market size, risks, and key questions for initial buyer-seller meetings.",
      fr: "Les participants ont exploré de vraies annonces sur des plateformes comme MonEntrepriseAVendre.com et Acquizition.biz, puis ont travaillé en petits groupes pour évaluer la taille du marché, les risques et les questions clés à poser lors d’une première rencontre acheteur-vendeur.",
    },
    theme: {
      en: "Business Buying Workshop",
      fr: "Atelier d’achat d’entreprise",
    },
  },
  {
    id: "jam-2024-09",
    isoDate: "2024-09",
    displayDate: {
      en: "September 2024",
      fr: "septembre 2024",
    },
    speaker: {
      name: "Guest Panel",
      title: {
        en: "Two founders who acquired and run small businesses",
        fr: "Deux fondateurs ayant acquis et gérant des PME",
      },
    },
    quote: {
      en: "Lifestyle business or growth engine? Your acquisition strategy starts with that choice.",
      fr: "Entreprise de style de vie ou moteur de croissance ? Votre stratégie d’acquisition commence par ce choix.",
    },
    description: {
      en: "A panel discussion moderated by Alexandra explored the realities of acquiring small companies—from philosophy and process to pitfalls and practical tools. Attendees left with a clearer roadmap for their own acquisition journey.",
      fr: "Une discussion en panel animée par Alexandra a exploré les réalités de l’acquisition de PME — de la philosophie au processus, en passant par les pièges et outils pratiques. Les participants sont repartis avec une feuille de route plus claire.",
    },
    theme: {
      en: "Small Business Acquisition",
      fr: "Acquisition de PME",
    },
  },
  {
    id: "jam-2024-08",
    isoDate: "2024-08",
    displayDate: {
      en: "August 2024",
      fr: "août 2024",
    },
    speaker: {
      name: "Pranav",
      title: {
        en: "Agritech investor and operator",
        fr: "Investisseur et opérateur en agritech",
      },
    },
    quote: {
      en: "Canadian agritech isn’t just about farms—it’s about data, sustainability, and global food systems.",
      fr: "L’agritech canadienne, ce n’est pas seulement des fermes — c’est données, durabilité et systèmes alimentaires mondiaux.",
    },
    description: {
      en: "Pranav shared two real Canadian agritech deal case studies, highlighting market opportunities, investor considerations, and the unique challenges of scaling in agriculture.",
      fr: "Pranav a présenté deux cas concrets d’investissements en agritech au Canada, mettant en lumière les opportunités de marché, les critères d’investissement et les défis uniques du secteur agricole.",
    },
    theme: {
      en: "Agritech Deep Dive",
      fr: "Plongée en agritech",
    },
  },
  {
    id: "jam-2024-07",
    isoDate: "2024-07",
    displayDate: {
      en: "July 2024",
      fr: "juillet 2024",
    },
    speaker: {
      name: "Alex",
      title: {
        en: "AI practitioner and entrepreneur",
        fr: "Praticien de l’IA et entrepreneur",
      },
    },
    quote: {
      en: "AI isn’t magic—it’s a tool for operational leverage, if you know where to apply it.",
      fr: "L’IA n’est pas magique — c’est un levier opérationnel, si vous savez où l’appliquer.",
    },
    description: {
      en: "Following up on community interest, Alex gave a focused talk on practical AI applications for entrepreneurs, with examples drawn from member use cases shared in prior sessions.",
      fr: "Suite à l’intérêt de la communauté, Alex a donné une présentation ciblée sur les applications pratiques de l’IA pour les entrepreneurs, avec des exemples tirés des cas partagés par les membres.",
    },
    theme: {
      en: "Practical AI for Entrepreneurs",
      fr: "IA pratique pour entrepreneurs",
    },
  },
  {
    id: "jam-2024-07-terrace",
    isoDate: "2024-07",
    displayDate: {
      en: "July 2024",
      fr: "juillet 2024",
    },
    speaker: {
      name: "Montreal Idea Jams Community",
      title: {
        en: "Summer Kickoff Hangout",
        fr: "Apéro de lancement estival",
      },
    },
    quote: {
      en: "Before the deep dives, we reconnect.",
      fr: "Avant les plongées profondes, on se reconnecte.",
    },
    description: {
      en: "An informal start to the summer season at Terrasse St-Ambroise, discussing key interests like AI, business acquisition, agritech, and real estate—all over drinks and casual conversation.",
      fr: "Un lancement informel de la saison estivale à la Terrasse St-Ambroise, autour de discussions sur les sujets clés : IA, acquisition d’entreprise, agritech et immobilier — le tout autour d’un verre et de conversations détendues.",
    },
    theme: {
      en: "Community Connection",
      fr: "Connexion communautaire",
    },
  },
  {
    id: "jam-2024-06-recap",
    isoDate: "2024-06",
    displayDate: {
      en: "June 2024",
      fr: "juin 2024",
    },
    speaker: {
      name: "Francisco & Hasan",
      title: {
        en: "Repreneuriat practitioners",
        fr: "Praticiens du repreneuriat",
      },
    },
    quote: {
      en: "The best acquisition target isn’t the shiniest—it’s the one that fits your life and skills.",
      fr: "La meilleure cible d’acquisition n’est pas la plus brillante — c’est celle qui correspond à votre vie et vos compétences.",
    },
    description: {
      en: "In a special combined session, Francisco walked through the discovery and purchase pipeline for small deals, while Hasan covered financing and due diligence. A masterclass in hands-on repreneuriat.",
      fr: "Dans une séance spéciale combinée, Francisco a décrit le pipeline de découverte et d’achat de petites entreprises, tandis qu’Hasan a couvert le financement et la diligence raisonnable. Une masterclass en repreneuriat pratique.",
    },
    theme: {
      en: "Small Company Acquisition Pipeline",
      fr: "Pipeline d’acquisition de PME",
    },
  },
  {
    id: "jam-2024-05-vc",
    isoDate: "2024-05",
    displayDate: {
      en: "May 2024",
      fr: "mai 2024",
    },
    speaker: {
      name: "Pranav & Michael Pflug",
      title: {
        en: "Early-stage investors",
        fr: "Investisseurs en phase amorce",
      },
    },
    quote: {
      en: "Great founders don’t just sell vision—they prove traction with ruthless clarity.",
      fr: "Les grands fondateurs ne vendent pas seulement une vision — ils prouvent leur traction avec une clarté implacable.",
    },
    description: {
      en: "Pranav led a workshop on evaluating VC/angel opportunities using real case studies. Michael Pflug joined to co-develop TAM sizing and key metrics for his startup NovusTX Devices.",
      fr: "Pranav a animé un atelier sur l’évaluation d’opportunités d’investissement en phase amorce. Michael Pflug a participé pour co-développer l’estimation de son marché adressable et autres métriques clés pour sa startup NovusTX Devices.",
    },
    theme: {
      en: "Evaluating Early-Stage Investments",
      fr: "Évaluer les investissements en phase amorce",
    },
  },
  {
    id: "jam-2024-05-scaleup",
    isoDate: "2024-05",
    displayDate: {
      en: "May 2024",
      fr: "mai 2024",
    },
    speaker: {
      name: "Patrick Gagné",
      title: {
        en: "Former COO, Teo Taxi",
        fr: "Ancien COO, Teo Taxi",
      },
    },
    quote: {
      en: "Scaling a mission-driven company means choosing between purity and pragmatism—every single day.",
      fr: "Faire croître une entreprise à mission, c’est choisir chaque jour entre pureté et pragmatisme.",
    },
    description: {
      en: "Patrick shared unfiltered lessons from the rise and challenges of Teo Taxi, offering rare insights into managing a mission-driven scale-up in a regulated industry.",
      fr: "Patrick a partagé des leçons sans filtre sur la montée en puissance et les défis de Teo Taxi, offrant un regard rare sur la gestion d’une scale-up à mission dans un secteur réglementé.",
    },
    theme: {
      en: "Managing a Scale-Up",
      fr: "Gérer une scale-up",
    },
  },
].sort((a, b) => b.isoDate.localeCompare(a.isoDate)); // Most recent first
