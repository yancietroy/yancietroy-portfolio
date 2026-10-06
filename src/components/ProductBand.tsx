import Image from "next/image";
import Link from "next/link";
import type { PortfolioProject } from "@/content/projects";
import { assetPath } from "@/lib/assetPath";

/** Full-bleed band in the product's own colors. The page's one loud element. */
export function ProductBand({ project, flip = false }: { project: PortfolioProject; flip?: boolean }) {
  const { theme } = project;
  const isFifi = project.slug === "fifi";

  return (
    <section style={{ background: theme.bg, color: theme.fg }} aria-labelledby={`${project.slug}-title`}>
      <div className={`shell grid gap-10 py-16 md:grid-cols-12 md:items-center md:gap-8 md:py-24 ${flip ? "md:[&>*:first-child]:order-2" : ""}`}>
        <div className="md:col-span-5">
          <p className="text-[0.95rem]" style={{ color: theme.accent }}>
            {project.platform}, {project.period}
          </p>
          <h3 id={`${project.slug}-title`} className="display mt-3 text-[clamp(2.8rem,4.9vw,4.6rem)] font-extrabold leading-[0.92] tracking-[-0.04em]">
            {project.name}
          </h3>
          <p className="mt-6 max-w-[34ch] text-[1.2rem] leading-snug opacity-90">{project.summary}</p>
          <ul className="mt-8 border-t" style={{ borderColor: `color-mix(in srgb, ${theme.fg} 22%, transparent)` }}>
            {project.proof.map((point) => (
              <li key={point} className="border-b py-3 text-[1rem]" style={{ borderColor: `color-mix(in srgb, ${theme.fg} 22%, transparent)` }}>
                {point}
              </li>
            ))}
          </ul>
          <Link href={`/work/${project.slug}/`} className="link mt-8 inline-block text-[1.05rem] font-semibold">
            Read the {project.name} case study
          </Link>
        </div>

        <div className="md:col-span-7">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[18px]" style={{ background: isFifi ? theme.soft : `color-mix(in srgb, ${theme.fg} 8%, transparent)` }}>
            <Image
              src={project.cover.src}
              alt={project.cover.alt}
              fill
              sizes="(max-width: 768px) 100vw, 58vw"
              className={isFifi ? "object-cover" : "object-contain p-4 md:p-8"}
            />
            {isFifi && (
              <div className="absolute bottom-4 left-1/2 h-[70%] w-[42%] -translate-x-1/2">
                <Image src={assetPath("/work/fifi/assistant-character.svg")} alt="Fifi the cat, waving" fill sizes="30vw" className="object-contain object-bottom" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
