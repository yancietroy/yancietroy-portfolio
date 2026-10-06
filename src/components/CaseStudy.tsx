import Image from "next/image";
import Link from "next/link";
import { projects, type PortfolioProject } from "@/content/projects";
import { assetPath } from "@/lib/assetPath";
import { ContactBand } from "./ContactBand";
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
            <Link href="/#work" className="link text-[0.95rem]" style={{ color: theme.accent }}>
              All work
            </Link>
            <h1 className="display settle mt-6 text-[clamp(2.5rem,9vw,7.5rem)] font-extrabold leading-[0.88] tracking-[-0.045em]">
              {project.name}
            </h1>
            <p className="settle settle-2 mt-6 max-w-[38ch] text-[clamp(1.25rem,2.2vw,1.6rem)] leading-snug opacity-90">{project.summary}</p>

            <dl className="settle settle-3 mt-12 grid grid-cols-2 gap-x-6 gap-y-5 border-t pt-6 lg:grid-cols-4" style={{ borderColor: divider }}>
              {facts.map(([label, value]) => (
                <div key={label}>
                  <dt className="text-[0.9rem]" style={{ color: theme.accent }}>{label}</dt>
                  <dd className="mt-1 text-[1rem]">{value}</dd>
                </div>
              ))}
            </dl>

            <div className="relative mt-12 aspect-[4/3] overflow-hidden rounded-[18px] md:aspect-[16/9]" style={{ background: isFifi ? theme.soft : `color-mix(in srgb, ${theme.fg} 8%, transparent)` }}>
              <Image src={project.cover.src} alt={project.cover.alt} fill priority sizes="(max-width: 1280px) 100vw, 1240px" className={isFifi ? "object-cover" : "object-contain p-4 md:p-10"} />
              {isFifi && (
                <div className="absolute bottom-6 left-1/2 h-[72%] w-[38%] -translate-x-1/2 md:w-[26%]">
                  <Image src={assetPath("/work/fifi/assistant-character.svg")} alt="Fifi the cat, waving" fill priority sizes="30vw" className="object-contain object-bottom" />
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="shell grid gap-12 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-7">
            <h2 className="display text-[clamp(1.8rem,3vw,2.4rem)] font-bold tracking-[-0.02em]">The situation</h2>
            <p className="measure mt-5 text-[1.2rem] leading-relaxed text-[var(--ink-2)]">{project.context}</p>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <h2 className="display text-[1.4rem] font-bold">What I owned</h2>
            <ul className="mt-4 border-t rule">
              {project.scope.map((item) => (
                <li key={item} className="border-b rule py-2.5">{item}</li>
              ))}
            </ul>
            {project.proof.length > 0 && (
              <>
                <h2 className="display mt-10 text-[1.4rem] font-bold">Outcome</h2>
                <ul className="mt-4 border-t rule">
                  {project.proof.map((point) => (
                    <li key={point} className="border-b rule py-2.5">{point}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </section>

        {project.decisions.length > 0 && (
          <section className="border-t rule bg-[var(--surface)]">
            <div className="shell py-20 md:py-28">
              <h2 className="display text-[clamp(1.8rem,3vw,2.4rem)] font-bold tracking-[-0.02em]">Decisions that shaped it</h2>
              <div className="mt-10 grid gap-x-10 gap-y-12 md:grid-cols-2">
                {project.decisions.map((decision) => (
                  <article key={decision.title} className="border-t-2 pt-5" style={{ borderColor: theme.bg }}>
                    <h3 className="display text-[1.55rem] font-bold leading-tight tracking-[-0.015em]">{decision.title}</h3>
                    <p className="mt-3 text-[1.08rem] leading-relaxed text-[var(--ink-2)]">{decision.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="shell py-20 md:py-28">
          <h2 className="display text-[clamp(1.8rem,3vw,2.4rem)] font-bold tracking-[-0.02em]">Screens</h2>
          <div className="mt-10 grid gap-x-6 gap-y-12 md:grid-cols-2">
            {project.gallery.map((shot) => (
              <figure key={shot.src} className={shot.wide ? "md:col-span-2" : undefined}>
                <div className="relative overflow-hidden rounded-[14px]" style={{ background: theme.soft }}>
                  <Image src={shot.src} alt={shot.alt} width={2000} height={1500} sizes={shot.wide ? "(max-width: 1280px) 100vw, 1240px" : "(max-width: 768px) 100vw, 620px"} className="h-auto w-full" />
                  {shot.overlay && (
                    <div className="absolute bottom-[6%] left-1/2 h-[68%] w-[46%] -translate-x-1/2">
                      <Image src={shot.overlay} alt="" fill sizes="300px" className="object-contain object-bottom" />
                    </div>
                  )}
                </div>
                <figcaption className="mt-3 max-w-[60ch] text-[0.98rem] text-[var(--ink-2)]">{shot.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        {(project.build || project.links) && (
          <section className="border-t rule bg-[var(--surface)]">
            <div className="shell grid gap-10 py-20 md:grid-cols-12 md:py-24">
              {project.build && (
                <div className="md:col-span-7">
                  <h2 className="display text-[clamp(1.8rem,3vw,2.4rem)] font-bold tracking-[-0.02em]">How it&apos;s built</h2>
                  <p className="measure mt-5 text-[1.15rem] leading-relaxed text-[var(--ink-2)]">{project.build}</p>
                </div>
              )}
              {project.links && (
                <div className="md:col-span-4 md:col-start-9">
                  <h2 className="display text-[1.4rem] font-bold">See it live</h2>
                  <ul className="mt-4 space-y-2">
                    {project.links.map((item) => (
                      <li key={item.href}>
                        <a className="link text-[1.1rem] font-semibold" href={item.href}>{item.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        )}

        <Link href={`/work/${next.slug}/`} className="group block" style={{ background: next.theme.bg, color: next.theme.fg }}>
          <div className="shell py-16 md:py-20">
            <p className="text-[0.95rem]" style={{ color: next.theme.accent }}>Next project</p>
            <p className="display mt-2 text-[clamp(2.4rem,6vw,4.8rem)] font-extrabold leading-none tracking-[-0.04em]">
              <span className="link">{next.name}</span>
            </p>
            <p className="mt-4 max-w-[48ch] opacity-85">{next.summary}</p>
          </div>
        </Link>
        <ContactBand />
      </main>
      <SiteFooter />
    </>
  );
}
