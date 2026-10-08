import Link from "next/link";
import { projectsIn } from "@/content/projects";
import { ProjectCard } from "./ProjectCard";

export function WorkSection() {
  const more = projectsIn("more");

  return (
    <div id="work">
      <section className="shell py-14 md:py-20" aria-labelledby="apps-title">
        <h2 id="apps-title" className="section-title">Apps I designed and built</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {projectsIn("product").map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
      </section>

      <section className="shell py-14 md:py-20" aria-labelledby="b2b-title">
        <h2 id="b2b-title" className="section-title">Product design for B2B teams</h2>
        <p className="mt-3 max-w-[60ch] text-[var(--ink-2)]">
          Complex tools people configure: chatbot and workflow builders, inboxes, dashboards. Designed with engineers in the room and
          followed through to release.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {projectsIn("work").map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
        <ul className="card mt-5 divide-y divide-[var(--line)]">
          {more.map((project) => (
            <li key={project.slug}>
              <Link href={`/work/${project.slug}/`} className="group grid gap-1 px-5 py-4 transition-colors hover:bg-[var(--surface-2)] md:grid-cols-[14rem_1fr_auto] md:items-baseline md:gap-6">
                <span className="label font-medium text-[var(--ink)]">{project.name}</span>
                <span className="text-[0.98rem] text-[var(--ink-2)]">{project.summary}</span>
                <span className="label hidden text-[var(--ink-3)] group-hover:text-[var(--ink)] md:inline">Read →</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
