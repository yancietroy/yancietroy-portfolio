import { Capabilities } from "@/components/Capabilities";
import { ContactBand } from "@/components/ContactBand";
import { Hero } from "@/components/Hero";
import { ProductBand } from "@/components/ProductBand";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WorkSection } from "@/components/WorkSection";
import { projectsIn } from "@/content/projects";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="overflow-x-clip">
        <Hero />
        <h2 id="work" className="sr-only">Apps I designed and built</h2>
        {projectsIn("product").map((project, index) => (
          <ProductBand key={project.slug} project={project} flip={index % 2 === 1} />
        ))}
        <WorkSection />
        <Capabilities />
        <ContactBand />
      </main>
      <SiteFooter />
    </>
  );
}
