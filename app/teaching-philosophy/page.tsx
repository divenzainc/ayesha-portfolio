import { PhilosophyBeliefsSection } from "@/components/teaching-philosophy/philosophy-beliefs-section";
import { PhilosophyLookingAheadSection } from "@/components/teaching-philosophy/philosophy-looking-ahead-section";
import { PhilosophyNarrativeSection } from "@/components/teaching-philosophy/philosophy-narrative-section";
import { PhilosophyPageHeader } from "@/components/teaching-philosophy/philosophy-page-header";
import { PhilosophyReferencesSection } from "@/components/teaching-philosophy/philosophy-references-section";
import { PhilosophyStatementSection } from "@/components/teaching-philosophy/philosophy-statement-section";
import { MainLayout } from "@/layouts/main-layout";

export default function TeachingPhilosophyPage() {
  return (
    <MainLayout>
      <PhilosophyPageHeader />
      <PhilosophyNarrativeSection />
      <PhilosophyBeliefsSection />
      <PhilosophyStatementSection />
      <PhilosophyLookingAheadSection />
      <PhilosophyReferencesSection />
    </MainLayout>
  );
}
