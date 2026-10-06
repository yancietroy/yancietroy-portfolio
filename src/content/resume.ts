// Mirrors ../troy-job-search/resume/content.mjs. Update both when the résumé changes.
export const experience = [
  {
    company: "Velaro",
    role: "Product Designer",
    where: "USA, remote",
    period: "Nov 2023 to May 2026",
    points: [
      "Owned design-to-ship for core platform surfaces (admin, inbox, chat widget), from Figma spec to production with engineering.",
      "Designed IVR, sentiment analysis, workflow automation and the AI chatbot builder end to end.",
      "Built and maintained a Tailwind-based design system adopted across the platform.",
      "Primary QA for 20+ third-party integrations, root-causing defects to code and configuration.",
    ],
  },
  {
    company: "GrowthBox",
    role: "Product Designer",
    where: "Australia, remote",
    period: "Jun to Nov 2023",
    points: [
      "Designed core workflows for Allie, an analytics platform for clinic managers.",
      "Ran user research and turned findings into design changes and Figma specs for engineering.",
    ],
  },
] as const;

export const education = { degree: "BS Information Technology", school: "Jose Rizal University", year: "2023" } as const;
