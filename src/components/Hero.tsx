import Link from "next/link";

const signals = [["0→1 product", "strategy through launch"], ["B2B SaaS", "complex workflows and systems"], ["Consumer mobile", "iOS and Android products"], ["Design + code", "production-level ownership"]];

export function Hero() {
  return (
    <section className="page-shell pb-14 pt-32 md:pb-20 md:pt-40">
      <div className="grid gap-10 md:grid-cols-[1.25fr_.75fr] md:items-end">
        <div><p className="mb-5 text-sm font-medium text-black/50">Yancie Troy Saludo · Product Designer &amp; Builder</p><h1 className="max-w-[820px] text-[clamp(3.1rem,6.2vw,6rem)] font-medium leading-[.94] tracking-[-.04em]"><span data-hero-line className="block">I design and build</span><span data-hero-line className="block">products that <em className="serif font-normal">ship.</em></span></h1></div>
        <div className="md:pb-1"><p className="max-w-[42ch] text-lg leading-relaxed text-black/62">I work across product strategy, interface systems, and production code—from B2B SaaS workflows to consumer apps in the App Store.</p><div className="mt-6 flex gap-3"><Link href="#work" className="pressable rounded-full bg-[#181915] px-5 py-3 text-sm font-semibold text-white">View work</Link><Link href="/resume" className="pressable rounded-full border border-black/20 px-5 py-3 text-sm font-semibold hover:bg-black/5">Résumé</Link></div></div>
      </div>
      <div className="mt-14 grid grid-cols-2 border-y hairline md:mt-20 md:grid-cols-4">{signals.map(([value,label]) => <div key={label} className="border-b hairline py-5 even:pl-5 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0"><strong className="block text-xl tracking-[-.03em]">{value}</strong><span className="mt-1 block text-sm text-black/45">{label}</span></div>)}</div>
    </section>
  );
}
