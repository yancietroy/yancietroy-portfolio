import { projectsIn } from "@/content/projects";
import { experience } from "@/content/resume";
import { site } from "@/content/site";

// Approved, durable metrics only (../troy-job-search/profile.md).
const [grocery, fifi] = projectsIn("product");
const record = [
  { label: "GroceryBudget users", value: "30,000+", color: grocery.theme.accent },
  { label: "US App Store search, “grocery budget”", value: "#1", color: grocery.theme.accent },
  { label: "Monthly revenue, six months", value: "20x", color: grocery.theme.accent },
  { label: "Conversion to paid", value: "9x", color: grocery.theme.accent },
  { label: "Fifi character voices", value: "10", color: fifi.theme.accent },
  { label: "Velaro integrations QA’d", value: "20+", color: "#bcd6ff" },
];

const toolkit = [
  { title: "Design", items: "Research, flows, interaction and visual design, design systems, accessibility" },
  { title: "Build", items: "React Native, Expo, TypeScript, Firebase, Tailwind, Swift via native modules, Claude Code" },
  { title: "Measure", items: "PostHog, RevenueCat, pricing and paywall tests, cohort analysis, App Store optimization" },
];

export function About() {
  return (
    <section id="about" className="shell py-14 md:py-20" aria-labelledby="about-title">
      <h2 id="about-title" className="section-title">About</h2>
      <div className="card mt-8 grid overflow-hidden md:grid-cols-[15rem_1fr]">
        <div className="flex flex-col justify-between gap-6 border-b rule bg-[var(--surface-2)] p-6 md:border-b-0 md:border-r">
          <div aria-hidden="true" className="display grid aspect-square w-24 place-items-center rounded-[12px] border rule text-[2.2rem] font-bold tracking-[-0.04em] md:w-full">
            YT
          </div>
          <div className="label space-y-1.5 text-[var(--ink-3)]">
            <p>{site.location}</p>
            <p>Remote, AU hours</p>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <p className="label text-[var(--ink-3)]">Product designer · Design engineer</p>
          <p className="display mt-3 text-[clamp(1.5rem,3vw,1.9rem)] font-bold leading-tight tracking-[-0.02em]">{site.name}</p>
          <p className="mt-3 max-w-[58ch] text-[var(--ink-2)]">
            Three years designing B2B SaaS, and two consumer apps I designed, built and grew myself. I work from the problem to the
            release, and I read the numbers after.
          </p>

          <h3 className="label mt-8 text-[var(--ink-3)]">Track record</h3>
          <dl className="mt-3 grid gap-x-8 sm:grid-cols-2">
            {record.map((row) => (
              <div key={row.label} className="flex items-baseline justify-between gap-4 border-b rule py-2.5">
                <dt className="text-[0.95rem] text-[var(--ink-2)]">{row.label}</dt>
                <dd className="mono shrink-0 text-[0.95rem] font-medium" style={{ color: row.color }}>{row.value}</dd>
              </div>
            ))}
          </dl>

          <h3 className="label mt-8 text-[var(--ink-3)]">Experience</h3>
          <ul className="mt-3">
            {experience.map((job) => (
              <li key={job.company} className="flex flex-wrap items-baseline justify-between gap-x-4 border-b rule py-2.5">
                <span>{job.role}, {job.company}</span>
                <span className="label text-[var(--ink-3)]">{job.period}</span>
              </li>
            ))}
          </ul>

          <h3 className="label mt-8 text-[var(--ink-3)]">Toolkit</h3>
          <dl className="mt-3">
            {toolkit.map((group) => (
              <div key={group.title} className="grid gap-1 border-b rule py-2.5 sm:grid-cols-[6rem_1fr] sm:gap-4">
                <dt className="label pt-0.5 text-[var(--ink)]">{group.title}</dt>
                <dd className="text-[0.95rem] text-[var(--ink-2)]">{group.items}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
