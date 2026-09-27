import Image from "next/image";
import Link from "next/link";
import type { PortfolioProject } from "@/content/projects";
import { assetPath } from "@/lib/assetPath";

const details = {
  grocerybudget: {
    thesis: "A shopping list should tell you what the trip is costing before checkout—not after the money is gone.",
    decisions: [
      ["Design for the aisle", "The active cart makes budget, checked items, quantity, and running total readable in a one-handed shopping context."],
      ["Offline is the default", "Local-first behavior keeps the list dependable inside stores with unreliable signal, while Firebase synchronizes when connectivity returns."],
      ["Remember what matters", "Price memory and store comparison turn past purchases into useful guidance without asking users to maintain a second system."],
    ],
  },
  fifi: {
    thesis: "The alarm is not the product. The moment someone answers and hears a morning made for them is the product.",
    decisions: [
      ["Reliability over theatre", "CallKit created a more literal call screen but required a server-triggered VoIP push. AlarmKit won because an alarm must work without a network."],
      ["Character with structure", "Ten callers share one dependable wake-up flow while voice, language, art direction, and briefing energy make each feel distinct."],
      ["Prove the experience early", "Voice auditions and a complete sample call let users understand the unfamiliar interaction before reaching the subscription decision."],
    ],
  },
} as const;

export function CaseStudy({ project }: { project: PortfolioProject }) {
  const content = details[project.slug as keyof typeof details];
  const dark = project.tone === "fifi";
  const heroClass = dark ? "bg-[#06182e] text-[#fff9d9]" : project.tone === "grocery" ? "bg-[#dcefe2] text-[#063e2d]" : "bg-[#e9e5dc] text-[#181915]";

  return (
    <main className="overflow-x-hidden">
      <header className="page-shell flex items-center justify-between py-6 text-sm">
        <Link href="/">← Yancie Troy</Link><Link href="/resume">Resume</Link>
      </header>
      <section className={`${heroClass} mx-3 overflow-hidden rounded-[24px] md:mx-5 md:rounded-[32px]`}>
        <div className="mx-auto grid min-h-[680px] max-w-[1240px] gap-9 px-7 py-10 md:grid-cols-12 md:px-11 md:py-12">
          <div className="flex flex-col justify-between md:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[.16em] opacity-55">{project.role} · {project.period}</p>
            <div><h1 className="text-[clamp(3.4rem,5vw,5.8rem)] font-semibold leading-[.9] tracking-[-.04em]">{project.name}</h1><p className="mt-7 max-w-[44ch] text-lg leading-relaxed opacity-70">{project.summary}</p><p className="mt-7 border-t border-current/20 pt-5 text-sm font-semibold">{project.proof}</p></div>
          </div>
          <div className="relative min-h-[430px] md:col-span-7 md:min-h-full">
            <Image src={project.cover} alt={dark ? "Fifi's room at sunrise" : `${project.name} product presentation`} fill priority sizes="(max-width: 768px) 100vw, 58vw" className={dark ? "object-cover md:rounded-[24px]" : "object-contain"}/>
            {dark && <div className="absolute bottom-10 left-1/2 z-10 h-[330px] w-[250px] -translate-x-1/2 md:bottom-14 md:h-[410px] md:w-[310px]">
              <Image src={assetPath("/work/fifi/assistant-character.svg")} alt="Fifi, the cat mascot, holding a telephone" fill priority sizes="(max-width: 768px) 55vw, 28vw" className="object-contain object-bottom drop-shadow-[0_22px_30px_rgba(0,0,0,.32)]" />
            </div>}
          </div>
        </div>
      </section>

      {content ? <>
        <section className="page-shell py-20 md:py-28"><p className="max-w-[1100px] text-[clamp(2.8rem,5.5vw,6rem)] leading-[1.02] tracking-[-.04em]">{content.thesis}</p></section>
        <section className="page-shell border-t hairline py-20 md:py-24">
          <div className="grid gap-14 md:grid-cols-[.7fr_1.3fr]"><h2 className="text-sm font-semibold uppercase tracking-[.16em] text-black/45">Decisions that shaped it</h2><div>{content.decisions.map(([title, copy], index) => <article key={title} className="grid gap-4 border-b hairline py-8 first:pt-0 md:grid-cols-[70px_1fr]"><span className="text-sm text-black/35">0{index + 1}</span><div><h3 className="text-3xl font-semibold tracking-[-.04em]">{title}</h3><p className="mt-3 max-w-[58ch] text-lg leading-relaxed text-black/58">{copy}</p></div></article>)}</div></div>
        </section>
        {project.assets.length > 0 && <section className="page-shell grid gap-4 pb-20 md:grid-cols-2 md:pb-28">{project.assets.map((asset, index) => <div key={asset} className={`relative min-h-[520px] overflow-hidden rounded-[24px] ${dark ? "bg-[#0b2545]" : "bg-[#e4efe7]"}`}><Image src={asset} alt={`${project.name} supporting product view ${index + 1}`} fill sizes="(max-width: 768px) 100vw, 50vw" className={dark ? "object-cover" : "object-contain p-8"}/>{dark && <div className="absolute bottom-8 left-1/2 z-10 h-[350px] w-[270px] -translate-x-1/2 md:h-[390px] md:w-[300px]"><Image src={assetPath(index === 0 ? "/work/fifi/detective-character.svg" : "/work/fifi/fae-character.svg")} alt={index === 0 ? "Fifi dressed as a noir detective" : "Fifi dressed as a forest fae"} fill sizes="300px" className="object-contain object-bottom drop-shadow-[0_18px_26px_rgba(0,0,0,.3)]" /></div>}</div>)}</section>}
      </> : <section className="page-shell py-20 md:py-28"><p className="text-xs font-semibold uppercase tracking-[.16em] text-black/45">Placeholder case study</p><h2 className="mt-5 max-w-[900px] text-[clamp(2.8rem,5vw,5.5rem)] leading-[1] tracking-[-.04em]">The structure is ready. Final visuals and process material will be migrated from the Framer portfolio.</h2></section>}

      <section className="bg-[#181915] px-6 py-20 text-white md:py-24"><div className="mx-auto max-w-[1160px]"><Link href="/#work" className="text-[clamp(3rem,6vw,6rem)] leading-none tracking-[-.04em]">Back to selected work <span className="text-[#ffee98]">↗</span></Link></div></section>
    </main>
  );
}
