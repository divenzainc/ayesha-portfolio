import { MentorIntroductionSection } from "@/components/reflections/mentor/mentor-introduction-section";
import { MentorObservationSection } from "@/components/reflections/mentor/mentor-observation-section";
import { MentorOverallReflection } from "@/components/reflections/mentor/mentor-overall-reflection";
import { MentorPageHeader } from "@/components/reflections/mentor/mentor-page-header";
import { MainLayout } from "@/layouts/main-layout";

export default function MentorReflectionPage() {
  return (
    <MainLayout>
      <MentorPageHeader />
      <MentorIntroductionSection />
      <MentorObservationSection />
      <MentorOverallReflection />
    </MainLayout>
  );
}
