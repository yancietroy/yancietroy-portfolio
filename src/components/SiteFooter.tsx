import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="shell label flex flex-col gap-2 border-t rule py-8 text-[var(--ink-3)] md:flex-row md:justify-between">
      <p>© 2026 {site.name}</p>
      <p>Designed and built by me, with Next.js</p>
    </footer>
  );
}
