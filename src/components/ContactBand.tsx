import { site } from "@/content/site";

export function ContactBand() {
  return (
    <section id="contact" className="shell py-14 md:py-20" aria-labelledby="contact-title">
      <h2 id="contact-title" className="section-title">Contact</h2>
      <div className="card mt-8 p-6 md:p-10">
        <p className="display max-w-[22ch] text-[clamp(1.7rem,4vw,2.6rem)] font-bold leading-[1.05] tracking-[-0.03em]">
          Hiring for product design or design engineering?
        </p>
        <a href={`mailto:${site.email}`} className="link mt-6 inline-block break-all text-[clamp(1.1rem,2.4vw,1.5rem)] font-semibold">
          {site.email}
        </a>
        <div className="label mt-10 flex flex-wrap gap-x-6 gap-y-3 text-[var(--ink-3)]">
          <a className="hover:text-[var(--ink)]" href={site.linkedin}>LinkedIn ↗</a>
          {site.resumes.map((resume) => (
            <a key={resume.href} className="hover:text-[var(--ink)]" href={resume.href}>{resume.label} ↓</a>
          ))}
        </div>
      </div>
    </section>
  );
}
