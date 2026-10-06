import Link from "next/link";
import { site } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="shell flex items-center justify-between gap-3 py-5">
      <Link href="/" className="display whitespace-nowrap text-[1.05rem] font-bold tracking-[-0.01em]">
        Yancie Troy<span className="hidden sm:inline"> Saludo</span>
      </Link>
      <nav aria-label="Primary" className="flex items-center whitespace-nowrap text-[0.95rem] text-[var(--ink-2)]">
        <Link href="/#work" className="rounded-md px-2 py-2 hover:text-[var(--ink)] sm:px-3">Work</Link>
        <Link href="/resume/" className="rounded-md px-2 py-2 hover:text-[var(--ink)] sm:px-3">Résumé</Link>
        <a href={`mailto:${site.email}`} className="rounded-md py-2 pl-2 font-semibold text-[var(--ink)] sm:px-3">
          Email<span className="hidden sm:inline"> me</span>
        </a>
      </nav>
    </header>
  );
}
