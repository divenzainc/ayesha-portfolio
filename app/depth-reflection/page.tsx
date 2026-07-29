import { DepthReflectionHeader } from "@/components/depth-reflection/depth-reflection-header";
import { DepthReflectionLessons } from "@/components/depth-reflection/depth-reflection-lessons";
import { MainLayout } from "@/layouts/main-layout";

export default function DepthReflectionPage() {
  return (
    <MainLayout>
      <DepthReflectionHeader />
      <DepthReflectionLessons />
    </MainLayout>
  );
}
