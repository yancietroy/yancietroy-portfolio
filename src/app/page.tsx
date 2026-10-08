import { About } from "@/components/About";
import { ContactBand } from "@/components/ContactBand";
import { Hero } from "@/components/Hero";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WorkSection } from "@/components/WorkSection";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="overflow-x-clip">
        <Hero />
        <WorkSection />
        <About />
        <ContactBand />
      </main>
      <SiteFooter />
    </>
  );
}
