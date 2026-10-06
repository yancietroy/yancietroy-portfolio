// Résumé content for both tracks. See resume/README.md.
// Metrics are deliberately durable: cumulative totals and fixed past windows,
// never point-in-time figures (MRR, active subs) that go stale.
// Sources: GroceryBudget RevenueCat pull 2026-09-10 (32k new customers Mar–Sep 2026;
// MRR $21 → $436 Mar–Sep = 20x; blended conversion 0.25% → 2.3% = 9x).

const contact = [
  "yanciesaludo14@gmail.com",
  "Rizal, PH",
  { text: "linkedin.com/in/troy-saludo", href: "https://linkedin.com/in/troy-saludo/" },
  { text: "yancietroy.framer.website", href: "https://yancietroy.framer.website/" },
];

const education = {
  degree: "Bachelor of Science in Information Technology",
  school: "Jose Rizal University, Philippines",
  date: "2023",
};

const growthboxDesign = {
  role: "Product Designer",
  company: "GrowthBox",
  location: "Australia (Remote)",
  date: "Jun 2023 – Nov 2023",
  bullets: [
    "Designed core workflows for a SaaS analytics platform serving clinic managers, improving data accessibility and decision-making.",
    "Conducted user research to identify pain points and translated findings into actionable design improvements.",
    "Produced component specs and interaction flows in Figma that served as the source of truth for engineering handoff.",
  ],
};

export const resumes = {
  "product-designer": {
    file: "Yancie-Troy-Saludo-Product-Designer",
    title: "Product Designer",
    summary:
      "Product Designer with 3+ years of experience designing B2B SaaS and consumer mobile products from research through release. At Velaro, owned core surfaces of a customer engagement platform and its Tailwind-based design system. Independently designed and launched GroceryBudget, a grocery budgeting app with 30,000+ users, and Fifi, an iOS alarm app. Proficient in Figma, design systems, and turning complex workflows into clear, scalable interfaces.",
    experience: [
      {
        role: "Product Designer",
        company: "Velaro",
        location: "USA (Remote)",
        date: "Nov 2023 – May 2026",
        bullets: [
          "Owned design-to-ship for core platform surfaces (admin, inbox, chat widget), taking each from Figma spec to production in close partnership with engineering.",
          "Designed IVR and sentiment analysis features end to end, from user flows and interaction design to engineering handoff specs.",
          "Built and maintained a Tailwind-based design system adopted across the platform, standardizing components and reducing design-to-dev handoff friction.",
          "Designed UX for workflow automation, the chat window builder, and the AI chatbot builder, delivering high-fidelity Figma specs adopted directly by engineering.",
        ],
      },
      growthboxDesign,
    ],
    projects: [
      {
        name: "GroceryBudget",
        meta: "iOS & Android",
        date: "Apr 2025 – Present",
        bullets: [
          "Solo-designed and launched a consumer grocery budgeting app on the App Store and Google Play, owning research, information architecture, wireframes, high-fidelity UI, and the Figma design system, then built it in React Native through AI-assisted development.",
          "Reached 30,000+ users and grew monthly revenue 20x in six months with zero paid acquisition.",
          "Redesigned the paywall and ran pricing experiments (trial vs. no-trial A/B test, US price test) in RevenueCat and PostHog; refocusing acquisition on the highest-converting market raised conversion to paid 9x.",
          "Owned App Store Optimization end to end (keywords, listing copy, screenshots), reaching #1 in US App Store search for “grocery budget.”",
        ],
      },
      {
        name: "Fifi",
        meta: "iOS",
        date: "Aug 2026 – Present",
        bullets: [
          "Designed and launched an iPhone alarm that rings as a phone call and reads a personalized morning briefing in one of ten character voices, owning product strategy, interaction design, and character art direction.",
        ],
      },
    ],
    skills: [
      ["Design", "user research, usability testing, user flows, information architecture, wireframing, prototyping, interaction design, visual design, design systems, responsive and mobile design, accessibility (WCAG)"],
      ["Tools", "Figma, Tailwind CSS, React Native, PostHog, RevenueCat, App Store Connect, AI-assisted development"],
    ],
  },

  "product-design-engineer": {
    file: "Yancie-Troy-Saludo-Product-Design-Engineer",
    title: "Product Design Engineer",
    summary:
      "Product Design Engineer with 3+ years of experience shipping B2B SaaS and consumer mobile products. Designs in Figma and builds AI-powered production apps in React Native, Expo, TypeScript, Swift, and Firebase through AI-assisted development. Built two live apps solo, including one with 30,000+ users.",
    experience: [
      {
        role: "Product Designer",
        company: "Velaro",
        location: "USA (Remote)",
        date: "Nov 2023 – May 2026",
        bullets: [
          "Owned design-to-ship for core platform surfaces (admin, inbox, chat widget), from Figma spec through implementation review and release with engineering.",
          "Built and maintained a Tailwind CSS design system adopted across the platform, keeping Figma components and production code aligned.",
          "Designed IVR, sentiment analysis, workflow automation, and AI chatbot builder features end to end, writing implementation specs for engineering.",
          "Served as primary QA for 20+ third-party integrations (e-commerce, CRM, scheduling), root-causing defects to specific code and configuration.",
        ],
      },
      {
        ...growthboxDesign,
        bullets: [
          "Designed core workflows for a SaaS analytics platform serving clinic managers, grounded in user research on data access pain points.",
          "Produced component specs and interaction flows in Figma that served as the source of truth for engineering handoff.",
        ],
      },
    ],
    projects: [
      {
        name: "GroceryBudget",
        meta: "React Native, Expo, TypeScript, Firebase",
        date: "Apr 2025 – Present",
        bullets: [
          "Designed and built an offline-first grocery budgeting app for iOS and Android, from Figma design system to production code, through AI-assisted development.",
          "Reached 30,000+ users and grew monthly revenue 20x in six months with zero paid acquisition.",
          "Shipped AI price-tag and receipt scanning (Gemini API on Firebase Cloud Functions) that extracts items, prices, and categories from a photo.",
          "Ran paywall and pricing A/B tests in RevenueCat and PostHog; cohort analysis that refocused acquisition on the US raised conversion to paid 9x.",
        ],
      },
      {
        name: "Fifi",
        meta: "Expo, Swift, Firebase",
        date: "Aug 2026 – Present",
        bullets: [
          "Designed and built a live iPhone alarm that rings as a call and reads a personalized morning briefing in one of ten character voices.",
          "Integrated AlarmKit and Live Activities in Swift, choosing AlarmKit over CallKit/VoIP push so alarms fire offline.",
          "Built the briefing backend on Firebase Cloud Functions: Gemini writes each script, ElevenLabs/Cartesia text-to-speech voices it, and App Check blocks unauthorized API use.",
        ],
      },
    ],
    skills: [
      ["Design", "user flows, information architecture, prototyping, interaction design, visual design, design systems, mobile design, accessibility (WCAG), user research, usability testing, Figma"],
      ["Engineering", "React Native, Expo, TypeScript, Swift, Firebase (Auth, Firestore, Cloud Functions), Tailwind CSS, Node.js, Git"],
      ["AI & Product", "AI-assisted development (Claude Code), LLM APIs (Gemini), text-to-speech, PostHog, RevenueCat, A/B testing"],
    ],
  },
};

export const shared = { name: "Yancie Troy Saludo", contact, education };
