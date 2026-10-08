import Image from "next/image";
import Link from "next/link";
import { projects, type PortfolioProject } from "@/content/projects";
import { assetPath } from "@/lib/assetPath";
import { ContactBand } from "./ContactBand";
import { Gallery } from "./Gallery";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function CaseStudy({ project }: { project: PortfolioProject }) {
  const { theme } = project;
  const isFifi = project.slug === "fifi";
  const next = projects[(projects.findIndex((p) => p.slug === project.slug) + 1) % projects.length];
  const divider = `color-mix(in srgb, ${theme.fg} 22%, transparent)`;
  const facts = [
    ["Role", project.role],
    ["When", project.period],
    ["Platform", project.platform],
    ["Built with", project.builtWith],
  ].filter((fact): fact is [string, string] => Boolean(fact[1]));

  return (
    <>
      <SiteHeader />
      <main className="overflow-x-clip">
        <section style={{ background: theme.bg, color: theme.fg }}>
          <div className="shell pb-12 pt-14 md:pb-16 md:pt-20">
            <Link href="/#work" className="label link" style={{ color: theme.accent }}>
              ← All work
            </Link>
            <h1 className="display settle mt-6 text-[clamp(2.5rem,8vw,5.6rem)] font-extrabold leading-[0.9] tracking-[-0.045em]">
              {project.name}
            </h1>
            <p className="settle settle-2 mt-5 max-w-[42ch] text-[clamp(1.15rem,2vw,1.45rem)] leading-snug opacity-90">{project.summary}</p>

            <dl className="settle settle-3 mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t pt-6 lg:grid-cols-4" style={{ borderColor: divider }}>
              {facts.map(([label, value]) => (
                <div key={label}>
                  <dt className="label" style={{ color: theme.accent }}>{label}</dt>
                  <dd className="mt-1.5 text-[0.98rem]">{value}</dd>
                </div>
              ))}
            </dl>

            <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-[14px] md:aspect-[16/9]" style={{ background: isFifi ? theme.soft : `color-mix(in srgb, ${theme.fg} 7%, transparent)` }}>
              <Image src={project.cover.src} alt={project.cover.alt} fill priority sizes="(max-width: 1040px) 100vw, 1040px" className={isFifi ? "object-cover" : "object-contain p-4 md:p-10"} />
              {isFifi && (
                <div className="absolute bottom-6 left-1/2 h-[72%] w-[38%] -translate-x-1/2 md:w-[26%]">
                  <Image src={assetPath("/work/fifi/assistant-character.svg")} alt="Fifi the cat, waving" fill priority sizes="30vw" className="object-contain object-bottom" />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Overview: situation, then scope as tags and outcomes as cards, so the section is only as tall as its content. */}
        <section className="shell py-14 md:py-20">
          <h2 className="section-title">The situation</h2>
          <p className="measure mt-5 text-[1.15rem] leading-relaxed text-[var(--ink-2)]">{project.context}</p>

          <h2 className="section-title mt-12">What I owned</h2>
          <ul className="mt-5 flex flex-wrap gap-2">
            {project.scope.map((item) => (
              <li key={item} className="rounded-full border rule bg-[var(--surface)] px-3.5 py-1.5 text-[0.92rem] text-[var(--ink-2)]">{item}</li>
            ))}
          </ul>

          {project.proof.length > 0 && (
            <>
              <h2 className="section-title mt-12">Outcome</h2>
              <ul className={`mt-5 grid gap-3 ${project.proof.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
                {project.proof.map((point) => (
                  <li key={point} className="card p-5 text-[0.98rem] leading-relaxed" style={{ borderTop: `2px solid ${theme.accent}` }}>
                    {point}
                  </li>
                ))}
              </ul>
            </>
          )}
        </section>

        {project.decisions.length > 0 && (
          <section className="shell py-14 md:py-20">
            <h2 className="section-title">Decisions that shaped it</h2>
            <div className="mt-8 grid gap-x-10 gap-y-10 md:grid-cols-2">
              {project.decisions.map((decision, index) => (
                <article key={decision.title} className="border-t rule pt-5">
                  <p className="label" style={{ color: theme.accent }}>{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="display mt-2 text-[1.45rem] font-bold leading-tight tracking-[-0.015em]">{decision.title}</h3>
                  <p className="mt-3 leading-relaxed text-[var(--ink-2)]">{decision.body}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        <section className="shell py-14 md:py-20">
          <h2 className="section-title">Screens</h2>
          <Gallery shots={project.gallery} frame={theme.soft} />
        </section>

        {(project.build || project.links) && (
          <section className="shell py-14 md:py-20">
            <div className="card grid gap-10 p-6 md:grid-cols-12 md:p-10">
              {project.build && (
                <div className="md:col-span-8">
                  <h2 className="section-title">How it&apos;s built</h2>
                  <p className="mt-5 leading-relaxed text-[var(--ink-2)]">{project.build}</p>
                </div>
              )}
              {project.links && (
                <div className="md:col-span-3 md:col-start-10">
                  <h2 className="section-title">See it live</h2>
                  <ul className="mt-5 space-y-2">
                    {project.links.map((item) => (
                      <li key={item.href}>
                        <a className="link font-semibold" href={item.href}>{item.label} ↗</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        )}

        <section className="shell pb-6 pt-4">
          <Link href={`/work/${next.slug}/`} className="group block overflow-hidden rounded-[14px] p-6 md:p-10" style={{ background: next.theme.bg, color: next.theme.fg }}>
            <p className="label" style={{ color: next.theme.accent }}>Next project →</p>
            <p className="display mt-3 text-[clamp(2rem,5vw,3.6rem)] font-extrabold leading-none tracking-[-0.04em]">
              <span className="link">{next.name}</span>
            </p>
            <p className="mt-3 max-w-[48ch] opacity-85">{next.summary}</p>
          </Link>
        </section>
        <ContactBand />
      </main>
      <SiteFooter />
    </>
  );
}
