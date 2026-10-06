const columns = [
  {
    title: "Design",
    body: "Research through high-fidelity UI, for systems that have to hold up under real use.",
    items: ["User research and usability testing", "Information architecture and user flows", "Interaction and visual design", "Design systems", "Mobile and responsive design", "Accessibility (WCAG)"],
  },
  {
    title: "Build",
    body: "I ship production apps with AI-assisted development, and read code well enough to find why something broke.",
    items: ["React Native, Expo, TypeScript", "Swift for native iOS features", "Firebase and Cloud Functions", "Tailwind CSS", "LLM and text-to-speech APIs", "Claude Code"],
  },
  {
    title: "Measure",
    body: "Shipping is the start. I read the numbers and change the product.",
    items: ["PostHog analytics", "RevenueCat subscriptions", "A/B and pricing tests", "Cohort and funnel analysis", "App Store optimization"],
  },
];

export function Capabilities() {
  return (
    <section className="border-t rule bg-[var(--surface)]" aria-labelledby="capabilities-title">
      <div className="shell py-20 md:py-28">
        <h2 id="capabilities-title" className="display max-w-[20ch] text-[clamp(2rem,3.6vw,3rem)] font-bold leading-tight tracking-[-0.025em]">
          Designer first, with the tools to finish the job
        </h2>
        <div className="mt-12 grid gap-12 md:grid-cols-3 md:gap-10">
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="display text-[1.4rem] font-bold">{column.title}</h3>
              <p className="mt-2 text-[var(--ink-2)] md:min-h-[5.4rem]">{column.body}</p>
              <ul className="mt-5 border-t rule">
                {column.items.map((item) => (
                  <li key={item} className="border-b rule py-2.5 text-[0.98rem]">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
