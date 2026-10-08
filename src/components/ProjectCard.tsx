import Link from "next/link";
import type { PortfolioProject } from "@/content/projects";
import { ProjectPreview, type Slide } from "./ProjectPreview";
import { Spotlight } from "./Spotlight";

/** The cover, then the project's chosen preview shots or its first three regular-width screens. */
const slidesFor = (project: PortfolioProject): Slide[] => [
  project.cover,
  ...(project.preview ?? project.gallery.filter((shot) => !shot.wide && !shot.phone).slice(0, 3)),
];

/** Home page card: screens framed in the product's own color, one stat, two ways in. */
export function ProjectCard({ project }: { project: PortfolioProject }) {
  const { theme } = project;
  const isProduct = project.group === "product";
  const live = project.links?.[0];

  return (
    <Spotlight color={theme.accent} className="card group flex flex-col p-2.5 transition-colors">
      <Link href={`/work/${project.slug}/`} aria-label={`${project.name} case study`} className="block">
        <ProjectPreview
          slides={slidesFor(project)}
          background={isProduct ? theme.bg : theme.soft}
          tone={isProduct ? theme.fg : theme.bg}
        />
      </Link>

      <div className="flex flex-1 flex-col px-2.5 pb-2 pt-4">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="label font-medium text-[var(--ink)]">{project.name}</h3>
          {project.period && <p className="label text-[var(--ink-3)]">{project.period}</p>}
        </div>
        <p className="mt-2 text-[0.98rem] leading-relaxed text-[var(--ink-2)]">{project.summary}</p>
        {project.highlight && (
          <p className="label mt-3" style={{ color: theme.accent }}>{project.highlight}</p>
        )}
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-5">
          <Link href={`/work/${project.slug}/`} className="label link text-[var(--ink)]">Case study →</Link>
          {live && (
            <a href={live.href} className="label rounded-md border rule px-2.5 py-1.5 text-[var(--ink-2)] transition-colors hover:border-[var(--ink-3)] hover:text-[var(--ink)]">
              {live.label} ↗
            </a>
          )}
        </div>
      </div>
    </Spotlight>
  );
}
