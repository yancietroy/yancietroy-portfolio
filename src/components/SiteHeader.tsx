import Link from "next/link";

const navItems = [
  ["Work", "/#work"],
  ["About", "/#about"],
  ["Resume", "/resume"],
] as const;

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-4">
      <nav aria-label="Primary" className="page-shell flex items-center justify-between rounded-full bg-[rgba(251,250,246,.9)] px-5 py-3 shadow-[0_12px_40px_rgba(24,25,21,.09)] backdrop-blur-xl md:px-7">
        <Link href="/" className="text-sm font-semibold tracking-[-.02em]">Yancie Troy</Link>
        <div className="flex items-center gap-1 md:gap-3">
          <div className="hidden items-center sm:flex">
            {navItems.map(([label, href]) => (
              <Link key={label} href={href} className="pressable rounded-full px-3 py-2 text-sm text-black/65 hover:bg-black/5 hover:text-black md:px-4">{label}</Link>
            ))}
          </div>
          <a href="mailto:yanciesaludo14@gmail.com" className="pressable ml-1 rounded-full bg-[#181915] px-4 py-2 text-sm font-medium text-white md:px-5">Let&apos;s talk</a>
        </div>
      </nav>
    </header>
  );
}
