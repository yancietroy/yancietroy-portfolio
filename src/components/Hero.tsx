import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="shell pb-16 pt-14 md:pb-24 md:pt-24">
      <h1 className="display max-w-[15ch] text-[clamp(2.75rem,7.4vw,6.4rem)] font-bold leading-[0.95] tracking-[-0.035em]">
        <span className="settle block">I design software,</span>
        <span className="settle settle-2 block">then I ship it.</span>
      </h1>
      <div className="settle settle-3 mt-10 grid gap-8 md:mt-14 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
        <p className="measure text-[1.2rem] leading-relaxed text-[var(--ink-2)] md:text-[1.3rem]">
          I&apos;m a product designer with 3+ years on B2B SaaS, most recently at Velaro. I also design and build my own
          apps. Two are live in the App Store, and one has 30,000+ users.
        </p>
        <div className="flex flex-wrap gap-3">
          {site.resumes.map((resume, index) => (
            <a key={resume.href} href={resume.href} className={`button ${index === 0 ? "button-solid" : "button-line"}`}>
              {resume.label}
            </a>
          ))}
        </div>
      </div>
      <p className="mt-8 text-[0.95rem] text-[var(--ink-3)]">
        Open to remote product design and design engineering roles. Based in {site.location}.
      </p>
    </section>
  );
}
