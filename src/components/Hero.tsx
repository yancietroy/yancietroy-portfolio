import Link from "next/link";
import { projectsIn } from "@/content/projects";
import { site } from "@/content/site";

const segments = 24;

export function Hero() {
  const [grocery, fifi] = projectsIn("product");
  // The build line picks up each product's color in turn, left to right.
  const accents = [grocery.theme.accent, fifi.theme.accent, "#bcd6ff", "#c9c3ff"];

  return (
    <section className="shell pb-16 pt-16 md:pb-24 md:pt-28">
      <h1 className="display settle text-[clamp(2.6rem,7vw,4.6rem)] font-bold leading-[0.95] tracking-[-0.035em]">{site.name}</h1>
      <p className="settle settle-2 mt-6 max-w-[46ch] text-[clamp(1.1rem,2vw,1.3rem)] leading-relaxed text-[var(--ink-2)]">
        Product designer who also builds. I designed, built and grew{" "}
        <Link href={`/work/${grocery.slug}/`} className="link" style={{ color: grocery.theme.accent }}>{grocery.name}</Link> to 30,000+ users, and shipped{" "}
        <Link href={`/work/${fifi.slug}/`} className="link" style={{ color: fifi.theme.accent }}>{fifi.name}</Link> to the App Store. Previously at Velaro.
      </p>
      <div className="settle settle-3 mt-8 flex flex-wrap items-center gap-3">
        <Link href="/#work" className="button button-solid">See work ↓</Link>
        <Link href="/resume/" className="button button-line">Résumé</Link>
      </div>
      <div className="label settle settle-4 mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[var(--ink-3)]">
        <a className="hover:text-[var(--ink)]" href={site.linkedin}>LinkedIn</a>
        <a className="hover:text-[var(--ink)]" href={`mailto:${site.email}`}>Email</a>
        <span>{site.location}</span>
      </div>
      <div className="build-line mt-12" style={{ "--count": segments } as React.CSSProperties} aria-hidden="true">
        {Array.from({ length: segments }, (_, i) => (
          <span key={i} style={{ "--i": i, "--seg": accents[Math.floor((i / segments) * accents.length)] } as React.CSSProperties} />
        ))}
      </div>
    </section>
  );
}
