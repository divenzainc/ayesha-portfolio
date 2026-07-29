import { MainLayout } from "@/layouts/main-layout";
import { StudentIntroductionSection } from "@/components/reflections/student/student-introduction-section";
import { StudentObservationSection } from "@/components/reflections/student/student-observation-section";
import { StudentOverallReflection } from "@/components/reflections/student/student-overall-reflection";
import { StudentPageHeader } from "@/components/reflections/student/student-page-header";

export default function StudentReflectionPage() {
  return (
    <MainLayout>
      <StudentPageHeader />
      <StudentIntroductionSection />
      <StudentObservationSection />
      <StudentOverallReflection />
    </MainLayout>
  );
}
