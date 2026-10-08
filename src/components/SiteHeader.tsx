import Link from "next/link";

const nav = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about", wide: true },
  { label: "Résumé", href: "/resume/" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  return (
    <header className="shell flex items-center justify-between gap-3 py-5">
      <Link href="/" className="label whitespace-nowrap font-medium text-[var(--ink)]">
        Yancie Troy<span className="hidden sm:inline"> Saludo</span>
      </Link>
      <nav aria-label="Primary" className="label flex items-center whitespace-nowrap text-[var(--ink-3)]">
        {nav.map((item) => (
          <Link key={item.href} href={item.href} className={`rounded-md px-2 py-2 transition-colors hover:text-[var(--ink)] sm:px-3 ${"wide" in item ? "hidden sm:inline" : ""}`}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
