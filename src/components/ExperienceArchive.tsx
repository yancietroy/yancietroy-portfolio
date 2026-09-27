import Link from "next/link";
import { projects } from "@/content/projects";

export function ExperienceArchive() {
  const archive = projects.filter((project) => !project.featured);
  return <section id="about" className="bg-[#e9e5dc] py-20 md:py-28"><div className="page-shell grid gap-12 md:grid-cols-[.7fr_1.3fr]">
    <div><h2 className="text-sm font-semibold uppercase tracking-[.14em]">Earlier product work</h2><p className="mt-4 max-w-[30ch] leading-relaxed text-black/55">Enterprise SaaS experience across customer engagement, analytics, workflow builders, and design systems.</p></div>
    <div>{archive.map(project => <Link key={project.slug} href={`/work/${project.slug}`} className="grid gap-3 border-t hairline py-7 md:grid-cols-[1fr_auto] md:items-center"><div><h3 className="text-3xl tracking-[-.035em]">{project.name}</h3><p className="mt-2 text-black/55">{project.summary}</p></div><div className="text-sm text-black/45 md:text-right"><p>{project.period}</p><p className="mt-1">View case study</p></div></Link>)}</div>
  </div></section>;
}
