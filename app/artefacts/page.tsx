import { ArtefactSection } from "@/components/artefacts/artefact-section";
import { teacherArtefacts } from "@/components/artefacts/artefact-data";
import { ArtefactsPageHeader } from "@/components/artefacts/artefacts-page-header";
import { MainLayout } from "@/layouts/main-layout";

export default function ArtefactsPage() {
  return (
    <MainLayout>
      <ArtefactsPageHeader />
      <div>
        {teacherArtefacts.map((artefact) => (
          <ArtefactSection key={artefact.number} artefact={artefact} />
        ))}
      </div>
    </MainLayout>
  );
}
