import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--ink)] text-white/60">
      <div className="shell flex flex-col gap-2 border-t border-white/15 py-8 text-[0.9rem] md:flex-row md:justify-between">
        <p>{site.name}, {site.location}</p>
        <p>Designed and built by me, with Next.js.</p>
      </div>
    </footer>
  );
}
