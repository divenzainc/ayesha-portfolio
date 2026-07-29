import { SupervisorDocumentsSection } from "@/components/reflections/supervisor/supervisor-documents-section";
import { SupervisorObservationReflections } from "@/components/reflections/supervisor/supervisor-observation-reflections";
import { SupervisorPageHeader } from "@/components/reflections/supervisor/supervisor-page-header";
import { SupervisorReflectionNote } from "@/components/reflections/supervisor/supervisor-reflection-note";
import { MainLayout } from "@/layouts/main-layout";

export default function SupervisorReflectionPage() {
  return (
    <MainLayout>
      <SupervisorPageHeader />
      <SupervisorObservationReflections />
      <SupervisorDocumentsSection />
      <SupervisorReflectionNote />
    </MainLayout>
  );
}
