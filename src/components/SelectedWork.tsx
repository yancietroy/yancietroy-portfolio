import Image from "next/image";
import Link from "next/link";
import { projects } from "@/content/projects";

export function SelectedWork() {
  const featured = projects.filter((project) => project.featured);
  return <section id="work" className="page-shell pb-24 md:pb-32">
    <div className="flex items-center justify-between border-b hairline pb-4"><h2 className="text-sm font-semibold uppercase tracking-[.14em]">Selected work</h2><span className="text-sm text-black/45">2025—Now</span></div>
    {featured.map((project, index) => <Link data-project-card key={project.slug} href={`/work/${project.slug}`} className="group grid gap-7 border-b hairline py-10 md:grid-cols-[.72fr_1.28fr] md:items-center md:py-14">
      <div className="md:pr-10"><p className="text-sm text-black/45">0{index + 1} · {project.role}</p><h3 className="mt-4 text-[clamp(2.7rem,4.5vw,5rem)] leading-[.95] tracking-[-.04em]">{project.name}</h3><p className="mt-5 max-w-[42ch] text-lg leading-relaxed text-black/60">{project.summary}</p><p className="mt-6 text-sm font-semibold">{project.proof}</p><span className="mt-8 inline-block text-sm font-semibold underline decoration-black/25 underline-offset-4">Read case study</span></div>
      <div className={`relative aspect-[16/10] overflow-hidden rounded-[16px] ${project.tone === "grocery" ? "bg-[#dcefe2]" : "bg-[#06182e]"}`}><Image src={project.cover} alt={`${project.name} product interface`} fill sizes="(max-width: 768px) 100vw, 60vw" className={project.tone === "grocery" ? "media-zoom object-contain p-8" : "object-cover"}/>{project.tone === "fifi" && <div className="absolute bottom-5 left-1/2 h-[72%] w-[34%] -translate-x-1/2"><Image src="/work/fifi/assistant-character.svg" alt="Fifi cat mascot" fill sizes="240px" className="media-zoom object-contain object-bottom drop-shadow-[0_18px_24px_rgba(0,0,0,.28)]"/></div>}</div>
    </Link>)}
  </section>;
}
