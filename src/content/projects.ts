export type ProjectTone = "grocery" | "fifi" | "neutral";

export interface PortfolioProject {
  slug: string;
  name: string;
  shortName: string;
  role: string;
  period: string;
  summary: string;
  proof: string;
  tone: ProjectTone;
  cover: string;
  assets: readonly string[];
  featured: boolean;
}

export const projects: readonly PortfolioProject[] = [
  {
    slug: "grocerybudget",
    name: "GroceryBudget",
    shortName: "Spend clearly",
    role: "Founder · Product design · Product build",
    period: "2025—Now",
    summary: "An offline-first grocery budgeting app that turns a shopping list into a live picture of what you are spending.",
    proof: "Shipped on iOS and Android · 293 paying subscribers · $436 MRR",
    tone: "grocery",
    cover: "/work/grocerybudget/hero-v2.png",
    assets: ["/work/grocerybudget/inside-cart.png", "/work/grocerybudget/insights.png"],
    featured: true,
  },
  {
    slug: "fifi",
    name: "Fifi",
    shortName: "The alarm you answer",
    role: "Founder · Product design · Product build",
    period: "2026—Now",
    summary: "An iPhone alarm that calls with the morning a user chose—personal notes, local weather, and headlines, delivered in character.",
    proof: "Expo + Swift · AlarmKit · Live Activities · Ten-character voice system",
    tone: "fifi",
    cover: "/work/fifi/assistant.webp",
    assets: ["/work/fifi/detective.webp", "/work/fifi/fae.webp"],
    featured: true,
  },
  {
    slug: "velaro",
    name: "Velaro",
    shortName: "Omnichannel service, made workable",
    role: "Product Designer",
    period: "2023—2026",
    summary: "Core workflows, builders, and a design system for an enterprise customer-engagement platform.",
    proof: "Case study material coming from the existing portfolio.",
    tone: "neutral",
    cover: "/work/placeholders/velaro.svg",
    assets: [],
    featured: false,
  },
  {
    slug: "growthbox",
    name: "GrowthBox / Allie",
    shortName: "Clinic data without the noise",
    role: "Product Designer",
    period: "2023",
    summary: "Analytics and operational workflows that helped clinic managers understand business and practitioner performance.",
    proof: "Case study material coming from the existing portfolio.",
    tone: "neutral",
    cover: "/work/placeholders/growthbox.svg",
    assets: [],
    featured: false,
  },
] as const;

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
