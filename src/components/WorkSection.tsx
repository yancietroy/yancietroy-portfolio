import Image from "next/image";
import Link from "next/link";
import { projectsIn } from "@/content/projects";

export function WorkSection() {
  const work = projectsIn("work");
  const more = projectsIn("more");

  return (
    <section className="shell py-20 md:py-28" aria-labelledby="work-title">
      <div className="grid gap-4 md:grid-cols-12">
        <h2 id="work-title" className="display text-[clamp(2rem,3.6vw,3rem)] font-bold leading-tight tracking-[-0.025em] md:col-span-5">
          Product design for B2B teams
        </h2>
        <p className="measure text-[1.1rem] text-[var(--ink-2)] md:col-span-6 md:col-start-7 md:pt-2">
          Complex tools people configure: chatbot and workflow builders, inboxes, dashboards. Designed with engineers in the room and
          followed through to release.
        </p>
      </div>

      <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-8">
        {work.map((project) => (
          <Link key={project.slug} href={`/work/${project.slug}/`} className="group block">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[14px]" style={{ background: project.theme.soft }}>
              <Image
                src={project.cover.src}
                alt={project.cover.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 ease-[var(--ease-out)] group-hover:scale-[1.02]"
              />
            </div>
            <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="display text-[1.9rem] font-bold tracking-[-0.025em]">{project.name}</h3>
              <p className="text-[0.95rem] text-[var(--ink-3)]">{project.period}</p>
            </div>
            <p className="mt-2 max-w-[48ch] text-[var(--ink-2)]">{project.summary}</p>
            <p className="mt-1 text-[0.95rem] text-[var(--ink-3)]">{project.role}</p>
          </Link>
        ))}
      </div>

      <div className="mt-20 border-t rule">
        {more.map((project) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}/`}
            className="group grid gap-1 border-b rule py-6 md:grid-cols-12 md:items-baseline md:gap-8"
          >
            <h3 className="display text-[1.5rem] font-bold tracking-[-0.02em] md:col-span-4">
              <span className="link">{project.name}</span>
            </h3>
            <p className="text-[var(--ink-2)] md:col-span-8">{project.summary}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
