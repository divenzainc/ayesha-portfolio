import { ChapterReflectionSection } from "@/components/sections/chapter-reflection-section";
import { EducatorIntroSection } from "@/components/sections/educator-intro-section";
import { HeroSection } from "@/components/sections/hero-section";
import { LookingAheadSection } from "@/components/sections/looking-ahead-section";
import { ProfessionalIdentitySection } from "@/components/sections/professional-identity-section";
import { ProfessionalJourneySection } from "@/components/sections/professional-journey-section";
import { ProfessionalSnapshotSection } from "@/components/sections/professional-snapshot-section";
import { ReferencesSection } from "@/components/sections/references-section";
import { TeachingContextSection } from "@/components/sections/teaching-context-section";
import { MainLayout } from "@/layouts/main-layout";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <EducatorIntroSection />
      <ProfessionalIdentitySection />
      <TeachingContextSection />
      <ProfessionalJourneySection />
      <ProfessionalSnapshotSection />
      <LookingAheadSection />
      <ChapterReflectionSection />
      <ReferencesSection />
    </MainLayout>
  );
}
