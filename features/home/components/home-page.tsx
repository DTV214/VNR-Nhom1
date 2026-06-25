import { CallToResistance } from "@/features/home/components/call-to-resistance";
import { ConclusionSection } from "@/features/home/components/conclusion-section";
import { ContextSection } from "@/features/home/components/context-section";
import { DiplomacySection } from "@/features/home/components/diplomacy-section";
import { DocumentCarousel } from "@/features/home/components/document-carousel";
import { EscalationSection } from "@/features/home/components/escalation-section";
import { HeroSection } from "@/features/home/components/hero-section";
import { HoChiMinhGallery } from "@/features/home/components/ho-chi-minh-gallery";
import { OpeningProblemSection } from "@/features/home/components/opening-problem-section";
import { PressureGrid } from "@/features/home/components/pressure-grid";
import { RedLineSection } from "@/features/home/components/red-line-section";
import { SiteFooter } from "@/features/home/components/site-footer";
import { SiteHeader } from "@/features/home/components/site-header";
import { UltimatumSection } from "@/features/home/components/ultimatum-section";
import { VideoArchiveBanner } from "@/features/home/components/video-archive-banner";

export function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <OpeningProblemSection />
        <PressureGrid />
        <ContextSection />
        <VideoArchiveBanner />
        <DiplomacySection />
        <RedLineSection />
        <EscalationSection />
        <UltimatumSection />
        <CallToResistance />
        <ConclusionSection />
        <DocumentCarousel />
        <HoChiMinhGallery />
      </main>
      <SiteFooter />
    </>
  );
}
