import { ContactBand } from "@/components/ContactBand";
import { ExperienceArchive } from "@/components/ExperienceArchive";
import { Hero } from "@/components/Hero";
import { MotionProvider } from "@/components/MotionProvider";
import { SelectedWork } from "@/components/SelectedWork";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function HomePage() {
  return (
    <MotionProvider>
      <main className="w-full max-w-full overflow-x-hidden">
        <SiteHeader />
        <Hero />
        <SelectedWork />
        <ExperienceArchive />
        <ContactBand />
        <SiteFooter />
      </main>
    </MotionProvider>
  );
}
