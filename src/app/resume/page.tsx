import type { Metadata } from "next";
import Link from "next/link";
import { ContactBand } from "@/components/ContactBand";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { projectsIn } from "@/content/projects";
import { education, experience } from "@/content/resume";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Résumé, Yancie Troy Saludo" };

export default function ResumePage() {
  return (
    <>
      <SiteHeader />
      <main className="overflow-x-clip">
        <section className="shell pb-16 pt-14 md:pb-20 md:pt-20">
          <h1 className="display text-[clamp(2.8rem,7vw,5.6rem)] font-bold leading-[0.95] tracking-[-0.035em]">Résumé</h1>
          <p className="measure mt-6 text-[1.2rem] leading-relaxed text-[var(--ink-2)]">
            Two versions of the same story. One leads with design, the other with design and build. Both are one page and
            readable by applicant tracking systems.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {site.resumes.map((resume, index) => (
              <a key={resume.href} href={resume.href} className={`button ${index === 0 ? "button-solid" : "button-line"}`}>
                Download the {resume.label}
              </a>
            ))}
          </div>
        </section>

        <section className="border-t rule bg-[var(--surface)]">
          <div className="shell grid gap-10 py-16 md:grid-cols-12 md:py-20">
            <h2 className="display text-[1.8rem] font-bold md:col-span-3">Experience</h2>
            <div className="md:col-span-9">
              {experience.map((job) => (
                <article key={job.company} className="border-b rule pb-10 pt-0 [&+&]:pt-10">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <h3 className="display text-[1.7rem] font-bold tracking-[-0.02em]">
                      {job.role}, {job.company}
                    </h3>
                    <p className="text-[var(--ink-3)]">{job.period}</p>
                  </div>
                  <p className="text-[var(--ink-3)]">{job.where}</p>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-[var(--ink-2)]">
                    {job.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="shell grid gap-10 py-16 md:grid-cols-12 md:py-20">
          <h2 className="display text-[1.8rem] font-bold md:col-span-3">Products</h2>
          <div className="md:col-span-9">
            {projectsIn("product").map((project) => (
              <article key={project.slug} className="border-b rule pb-10 [&+&]:pt-10">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="display text-[1.7rem] font-bold tracking-[-0.02em]">
                    <Link className="link" href={`/work/${project.slug}/`}>{project.name}</Link>
                  </h3>
                  <p className="text-[var(--ink-3)]">{project.period}</p>
                </div>
                <p className="text-[var(--ink-3)]">{project.role}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-[var(--ink-2)]">
                  {project.proof.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="shell grid gap-4 border-t rule py-12 md:grid-cols-12">
          <h2 className="display text-[1.8rem] font-bold md:col-span-3">Education</h2>
          <p className="text-[1.1rem] md:col-span-9">
            {education.degree}, {education.school}, {education.year}
          </p>
        </section>
        <ContactBand />
      </main>
      <SiteFooter />
    </>
  );
}
