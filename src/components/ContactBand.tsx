import { site } from "@/content/site";

export function ContactBand() {
  return (
    <section id="contact" className="bg-[var(--ink)] text-white" aria-labelledby="contact-title">
      <div className="shell py-20 md:py-28">
        <h2 id="contact-title" className="display max-w-[18ch] text-[clamp(2.2rem,5vw,4.2rem)] font-bold leading-[1] tracking-[-0.03em]">
          Hiring for product design or design engineering?
        </h2>
        <a href={`mailto:${site.email}`} className="link mt-8 inline-block break-all text-[clamp(1.25rem,2.6vw,2rem)] font-semibold">
          {site.email}
        </a>
        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-[1rem] text-white/75">
          <a className="link" href={site.linkedin}>LinkedIn</a>
          {site.resumes.map((resume) => (
            <a key={resume.href} className="link" href={resume.href}>{resume.label}</a>
          ))}
        </div>
      </div>
    </section>
  );
}
