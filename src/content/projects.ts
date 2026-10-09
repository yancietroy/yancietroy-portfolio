import { assetPath } from "@/lib/assetPath";

// Every claim here must trace to ../troy-job-search/profile.md, the résumé, or the
// grocerybudget / ringrise repos. Metrics: approved durable ones only (see CLAUDE.md).

export type ProjectGroup = "product" | "work" | "more";

export interface Theme {
  /** Band background. Keep it deep: the site is dark and bright bands glare. */
  bg: string;
  /** Text on the band */
  fg: string;
  /** Accent used for rules and links on the band */
  accent: string;
  /** Soft tint for image frames on light pages */
  soft: string;
}

export interface Shot {
  src: string;
  alt: string;
  caption: string;
  wide?: boolean;
  /** A single phone screen: shown three to a row instead of two */
  phone?: boolean;
  /** Full-bleed artwork that should fill its frame (cropped) rather than sit inside it */
  bleed?: boolean;
}

export interface Decision {
  title: string;
  body: string;
}

export interface PortfolioProject {
  slug: string;
  /** One short approved stat for the home page card */
  highlight?: string;
  name: string;
  group: ProjectGroup;
  /** One sentence: what it is, in plain words */
  summary: string;
  role: string;
  period?: string;
  platform: string;
  builtWith?: string;
  theme: Theme;
  cover: Shot;
  /** Home card slides after the cover. Defaults to the first regular-width gallery shots. */
  preview?: readonly Shot[];
  /** Approved, durable proof points */
  proof: readonly string[];
  /** The situation, in two to four sentences */
  context: string;
  /** What Troy owned */
  scope: readonly string[];
  decisions: readonly Decision[];
  gallery: readonly Shot[];
  /** How it was built, for things Troy built himself */
  build?: string;
  links?: readonly { label: string; href: string }[];
}

const img = (slug: string, file: string) => assetPath(`/work/${slug}/${file}`);

export const projects: readonly PortfolioProject[] = [
  {
    slug: "grocerybudget",
    highlight: "30,000+ users",
    name: "GroceryBudget",
    group: "product",
    summary: "A grocery budgeting app that shows what a trip costs while you're still in the aisle.",
    role: "Founder. Product design, build and growth",
    period: "2025 to now",
    platform: "iOS and Android",
    builtWith: "React Native, Expo, TypeScript, Firebase",
    theme: { bg: "#0b5d45", fg: "#f2fbf5", accent: "#7fd6a0", soft: "#dcefe2" },
    cover: { src: img("grocerybudget", "hero-v2.webp"), alt: "Three GroceryBudget screens: insights, an active cart and a budget ring", caption: "Insights, an active cart, and a trip summary." },
    proof: [
      "30,000+ users on the App Store and Google Play",
      "Grew monthly revenue 20x in six months, with no paid acquisition",
      "Reached #1 in US App Store search for “grocery budget”",
    ],
    context:
      "Budgeting apps tell you what you spent after you've spent it. In the store, people keep a running total in a calculator or the notes app, which one early reviewer called going “back and forth.” GroceryBudget puts the budget, the running total and what's left on the same screen as the list, so the decision happens at the shelf, not at the register.",
    scope: ["Product strategy", "UX and UI", "Design system", "Build and releases", "Pricing and paywall", "Analytics and experiments", "App Store optimization", "Marketing site"],
    decisions: [
      {
        title: "Design for one hand in the aisle",
        body: "Budget, spent and remaining stay pinned at the top of every cart. Items are grouped by category and checked off with a thumb. Everything else waits until the trip is over.",
      },
      {
        title: "Offline is the default",
        body: "Supermarkets have bad signal. The list lives on the phone and syncs through Firebase when a connection comes back, so the app never stalls mid-trip.",
      },
      {
        title: "Make adding items almost free",
        body: "Typing every item and price is the tedious part of any list app. Voice entry, AI price-tag scanning and receipt scanning mean a whole trip can be logged from one photo.",
      },
      {
        title: "Grow with data, not more features",
        body: "Cohort analysis showed most installs came from a market that rarely paid. I moved acquisition to the US, rebuilt the paywall and tested pricing in RevenueCat and PostHog. Conversion to paid went up 9x.",
      },
    ],
    gallery: [
      { src: img("grocerybudget", "store-screenshots.webp"), alt: "Six App Store screenshots for GroceryBudget", caption: "The App Store screenshot set. I design and test these as part of the product.", wide: true },
      { src: img("grocerybudget", "label-scan.webp"), alt: "A shopping list next to the camera scanning a cabbage price label", caption: "Price-tag scanning reads the name and price straight off the shelf label." },
      { src: img("grocerybudget", "receipt-scan.webp"), alt: "A receipt being scanned and the parsed list of 47 items", caption: "Receipt scanning turns a 47-item receipt into a reviewed trip." },
      { src: img("grocerybudget", "inside-cart.webp"), alt: "An active cart with budget, spent and remaining", caption: "The cart, built for a thumb and a glance." },
      { src: img("grocerybudget", "insights.webp"), alt: "Spending insights by week and store", caption: "Insights show where the money went, by week, store and category." },
      { src: img("grocerybudget", "marketing-site.webp"), alt: "The grocerybudget.app home page", caption: "grocerybudget.app, which I also design, write and run.", wide: true },
    ],
    build:
      "Designed in Figma and built in React Native and Expo with TypeScript and Firebase, through AI-assisted development with Claude Code. Scanning runs on the Gemini API behind Firebase Cloud Functions. I run the whole pipeline: analytics in PostHog, subscriptions in RevenueCat, releases to both stores, and the content site.",
    links: [{ label: "grocerybudget.app", href: "https://www.grocerybudget.app/" }],
  },
  {
    slug: "fifi",
    highlight: "Live on the App Store",
    name: "Fifi",
    group: "product",
    summary: "An iPhone alarm that rings like a call. Pick up, and a character reads you your morning.",
    role: "Founder. Product design and build",
    period: "2026 to now",
    platform: "iOS",
    builtWith: "Expo, Swift, Firebase, Gemini",
    theme: { bg: "#06182e", fg: "#fff9d9", accent: "#ffee98", soft: "#0b2545" },
    cover: { src: img("fifi", "cover.webp"), alt: "Fifi waving beside the line “The alarm with something to say”", caption: "The alarm with something to say.", bleed: true },
    preview: [
      { src: img("fifi", "cast.webp"), alt: "Five of Fifi's ten characters on a windowsill", caption: "Ten voices. Pick who wakes you.", bleed: true },
      { src: img("fifi", "what-arrives.webp"), alt: "A call screen with weather, a reminder and headlines around it", caption: "Weather, headlines and the note you left yourself.", bleed: true },
      { src: img("fifi", "different-ways.webp"), alt: "Fifi Noir in a trench coat on the phone", caption: "Different ways to wake you up.", bleed: true },
    ],
    proof: [
      "Live on the App Store",
      "Ten characters, each with their own voice and script",
      "Built on AlarmKit, so the alarm rings with no signal",
    ],
    context:
      "An alarm's job ends the second you silence it. Then the phone already in your hand pulls you into whatever loaded first. Fifi keeps going: once the alarm stops, a character is on the line with the weather, a few headlines and any voice note you left yourself.",
    scope: ["Product strategy", "Interaction design", "Character and art direction", "Onboarding and paywall", "iOS build", "Voice and AI pipeline"],
    decisions: [
      {
        title: "Reliability over theatre",
        body: "CallKit would have shown a more literal incoming-call screen, but it needs a server to send a VoIP push. AlarmKit rings from the phone itself. An alarm that depends on a network isn't an alarm, so AlarmKit won.",
      },
      {
        title: "Ten characters, one dependable call",
        body: "Every caller follows the same structure: greeting, voice note, weather, news, sign-off. Voice, script and art make each one feel different. Every part is a switch, so the call is only as long as your morning.",
      },
      {
        title: "Let people hear it before they pay",
        body: "A phone call from a cartoon cat is an unfamiliar idea. Voice auditions and a full sample call come before the subscription screen, so people decide after they've heard it.",
      },
    ],
    gallery: [
      { src: img("fifi", "store-screenshots.webp"), alt: "Six App Store screenshots for Fifi", caption: "The App Store screenshot set.", wide: true },
      { src: img("fifi", "call-morning.webp"), alt: "Fifi on the call screen saying “Good morning, Troy. It's Tuesday!”", caption: "Pick up, and the briefing starts with your name.", phone: true },
      { src: img("fifi", "call-sergeant.webp"), alt: "A drill-sergeant caller in a home gym saying “Rain until noon. Take an umbrella.”", caption: "Another caller, another room. Same briefing, in character.", phone: true },
      { src: img("fifi", "streak.webp"), alt: "The Your mornings screen showing a one-day streak", caption: "Every morning you pick up counts toward a streak.", phone: true },
      { src: img("fifi", "what-arrives.webp"), alt: "A call screen with weather, a reminder and headlines around it", caption: "What arrives: a hello, your forecast and headlines, then your own voice note." },
      { src: img("fifi", "how-it-works.webp"), alt: "Four steps beside the Edit alarm screen", caption: "Set the time, pick a sound, choose who calls, edit the briefing." },
      { src: img("fifi", "cast.webp"), alt: "Five of Fifi's ten characters on a windowsill", caption: "Ten callers, each with their own voice and script.", wide: true, bleed: true },
      { src: img("fifi", "note.webp"), alt: "The Record a voice screen with a cat holding a recorder", caption: "Record a voice note for yourself, and it plays in the call." },
      { src: img("fifi", "different-ways.webp"), alt: "Fifi Noir in a trench coat on the phone", caption: "A warm hello, a whisper or a drill sergeant." },
    ],
    build:
      "An Expo app with Swift for AlarmKit, Live Activities and the Dynamic Island. Briefings come from Firebase Cloud Functions: Gemini writes each character's script and ElevenLabs or Cartesia voices it. There are no accounts, so App Check with App Attest keeps strangers off the API. RevenueCat runs the subscription and PostHog the analytics.",
    links: [{ label: "callfifi.app", href: "https://callfifi.app/" }],
  },
  {
    slug: "velaro",
    highlight: "Design system adopted platform-wide",
    name: "Velaro",
    group: "work",
    summary: "Inbox, AI chatbots, workflow automation and reporting for a customer-engagement platform.",
    role: "Product Designer",
    period: "Nov 2023 to May 2026",
    platform: "Web, B2B SaaS",
    theme: { bg: "#0f2554", fg: "#f3f8ff", accent: "#bcd6ff", soft: "#e6effd" },
    cover: { src: img("velaro", "cover.webp"), alt: "Velaro's chatbot settings, reports, workflow builder and inbox", caption: "Chatbot settings, reporting, the workflow builder and the agent inbox." },
    proof: [
      "Owned design from Figma spec to release for the inbox, chat widget and admin",
      "Built the Tailwind-based design system used across the platform",
      "Primary QA for 20+ third-party integrations",
    ],
    context:
      "Velaro lets support teams answer live chat, SMS, WhatsApp and calls from one place, with AI chatbots handling the first reply. I joined as a product designer and owned core surfaces from Figma through release, working with engineering every day. As the team shrank, my role grew to cover requirements, acceptance criteria, QA and integrations.",
    scope: ["Agent inbox", "Chat window and Chat Window Designer", "AI chatbot builder and knowledge training", "Visual workflow builder", "IVR and sentiment analysis", "Reporting and SLA", "Admin and settings", "Design system"],
    decisions: [
      {
        title: "Design the system, not the screen",
        body: "The chatbot builder, workflow builder and IVR are tools people configure, so most of the work was mapping states, branches and failures before drawing anything. What happens when the bot can't answer? It hands off to a person, triggered by phrases the admin controls.",
      },
      {
        title: "Show the result next to every setting",
        body: "The Chat Window Designer and chatbot builder keep a live preview beside each control. An admin changing a color, a greeting or a WhatsApp option sees what their customer will see, without publishing to find out.",
      },
      {
        title: "One component library for old and new",
        body: "Legacy pages and new features had drifted apart. I built and maintained a Tailwind-based design system that engineering adopted across the platform, so new work and old pages converged on the same parts.",
      },
    ],
    gallery: [
      { src: img("velaro", "inbox.webp"), alt: "The agent inbox with conversation list, thread and customer details", caption: "The agent inbox: every channel in one list, with notes, tags and pre-chat answers beside the thread.", wide: true },
      { src: img("velaro", "ai-chatbot.webp"), alt: "AI chatbot training sources and agent handoff settings", caption: "Training the AI chatbot on a site, files or text, and setting when it hands off to a person." },
      { src: img("velaro", "workflow-builder.webp"), alt: "A visual workflow with a start trigger, message, branch and question", caption: "The visual workflow builder." },
      { src: img("velaro", "templates-and-deployment.webp"), alt: "Workflow templates, reporting and the deployment snippet", caption: "Workflow templates for common jobs, and the deployment step." },
      { src: img("velaro", "chat-window-designer.webp"), alt: "Chat Window Designer tabs for appearance, widgets, channels and settings", caption: "The Chat Window Designer, with a live preview beside every setting.", wide: true },
      { src: img("velaro", "chat-window.webp"), alt: "Chat window states: agent joined, bot handoff and SMS fallback", caption: "Customer-facing chat window states, including handoff and moving to SMS." },
      { src: img("velaro", "omnichannel-bot.webp"), alt: "The same chatbot greeting in Messenger, the Velaro widget and WhatsApp", caption: "One bot flow, running in Messenger, the website widget and WhatsApp." },
      { src: img("velaro", "reports.webp"), alt: "Agent and team performance reports", caption: "Agent and team reporting: volume, handle time, response and resolution.", wide: true },
    ],
  },
  {
    slug: "allie",
    highlight: "Research to Figma specs",
    name: "Allie",
    group: "work",
    summary: "Performance dashboards and team tools for allied-health clinic owners.",
    role: "Product Designer at GrowthBox",
    period: "Jun to Nov 2023",
    platform: "Web and mobile web",
    theme: { bg: "#241d5e", fg: "#f6f4ff", accent: "#c9c3ff", soft: "#eeecfb" },
    cover: { src: img("allie", "cover.webp"), alt: "Allie's clinic dashboard on a laptop and a phone", caption: "The clinic dashboard on desktop and mobile." },
    proof: [
      "Designed core workflows for clinic managers, from research to Figma specs",
      "Dashboards, practitioner tools, timesheets and integrations",
      "Desktop first, with full mobile layouts",
    ],
    context:
      "Clinic owners had their numbers split across a practice-management system and their accounting software. Allie, built by GrowthBox, pulls them into one place: revenue, appointments, new clients and cancellations against weekly targets, for the clinic and for each practitioner. I designed the product's core workflows, working from user research to the Figma specs engineering built from.",
    scope: ["Clinic dashboard", "Practitioner profiles", "Notes and actions", "Data view and weekly targets", "Timesheets", "Cliniko and Xero integrations", "Mobile layouts"],
    decisions: [
      {
        title: "Every number sits next to its target",
        body: "Each metric shows the actual figure, the weekly average and the target, with a trend line. In the data view, cells turn red or green against target, so a manager can scan a month in seconds.",
      },
      {
        title: "Coaching lives next to the data",
        body: "Managers write mentoring notes and turn them into actions for a practitioner, tracked on the same profile as that practitioner's numbers. The conversation and the evidence stay together.",
      },
      {
        title: "Built for a desk, ready for a phone",
        body: "Owners aren't always at a desk. Every dashboard card collapses into a single-column mobile layout without losing its target or trend.",
      },
    ],
    gallery: [
      { src: img("allie", "clinic-dashboard.webp"), alt: "Clinic selector and revenue dashboard", caption: "Choosing a clinic, then the revenue dashboard against target.", wide: true },
      { src: img("allie", "practitioner-views.webp"), alt: "Practitioner actions, dashboard, data table and timesheet", caption: "One practitioner's actions, dashboard, data and timesheet.", wide: true },
      { src: img("allie", "actions-and-notes.webp"), alt: "Mentoring notes beside a practitioner's action list", caption: "Mentoring notes become actions, and completing one closes the loop." },
      { src: img("allie", "mobile-and-targets.webp"), alt: "Mobile dashboard, data table and weekly targets", caption: "Mobile dashboard, the data view and weekly targets." },
      { src: img("allie", "mobile-and-integrations.webp"), alt: "Practitioner list, clinic list and Cliniko and Xero integrations on mobile", caption: "Practitioner comparisons, multiple clinics, and Cliniko and Xero connections.", wide: true },
    ],
  },
  {
    slug: "marketing-sites",
    name: "Marketing sites",
    group: "more",
    summary: "Marketing sites for Allie and for UWAI, an Australian membership app for gift-card savings.",
    role: "UX/UI Designer",
    platform: "Web",
    theme: { bg: "#4a1f12", fg: "#fff6f1", accent: "#ffd2bf", soft: "#fdebe3" },
    cover: { src: img("marketing-sites", "allie-landing.webp"), alt: "Allie's marketing home page", caption: "Allie's home page." },
    proof: ["Two sites, two very different audiences", "Landing, feature, pricing and about pages"],
    context:
      "Allie had to make a dense analytics product feel manageable to clinic owners. UWAI had to sell a savings membership to shoppers in a few seconds. Same job, opposite ends: make the value clear fast, then point to one action.",
    scope: ["Information architecture", "Page layouts", "Messaging hierarchy", "Visual design"],
    decisions: [
      {
        title: "Show the product, not adjectives",
        body: "Allie's feature pages lead with real dashboard, notes, timesheet and data-view screens, so a clinic can judge whether it fits before booking a demo.",
      },
      {
        title: "Sell the saving in one look",
        body: "UWAI's hero puts a real gift card and its discounted price on screen, with the brands members already shop at right below.",
      },
    ],
    gallery: [
      { src: img("marketing-sites", "allie-features.webp"), alt: "Allie feature pages for notes, timesheets, dashboards and data view", caption: "Allie's feature pages.", wide: true },
      { src: img("marketing-sites", "allie-pricing.webp"), alt: "Allie pricing page", caption: "Allie pricing." },
      { src: img("marketing-sites", "uwai-landing.webp"), alt: "UWAI landing page with a Coles gift card offer", caption: "UWAI's landing page." },
      { src: img("marketing-sites", "uwai-about.webp"), alt: "UWAI about page and brand refresh", caption: "UWAI's about page and brand refresh.", wide: true },
    ],
  },
  {
    slug: "earlier-work",
    name: "Earlier work",
    group: "more",
    summary: "E-commerce sites and app concepts from my internship and UX training.",
    role: "UI/UX Designer",
    platform: "Web and mobile",
    theme: { bg: "#2b2f36", fg: "#f4f5f7", accent: "#aab3c2", soft: "#eceef1" },
    cover: { src: img("earlier-work", "nifty.webp"), alt: "Nifty e-commerce site concept", caption: "Nifty, an e-commerce concept." },
    proof: ["GoCommerce internship", "Coursera UI/UX certification"],
    context: "Work from my GoCommerce internship and UI/UX coursework.",
    scope: ["E-commerce", "Mobile app concepts", "Visual design"],
    decisions: [],
    gallery: [
      { src: img("earlier-work", "gluta-c.webp"), alt: "Gluta-C skincare website revamp", caption: "Gluta-C, a skincare e-commerce revamp." },
      { src: img("earlier-work", "soundcore.webp"), alt: "Soundcore product site concept", caption: "Soundcore, a product site concept." },
      { src: img("earlier-work", "seatmi.webp"), alt: "SeatMi cinema booking app screens", caption: "SeatMi, a cinema seat-booking app." },
    ],
  },
] as const;

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
export const projectsIn = (group: ProjectGroup) => projects.filter((project) => project.group === group);
