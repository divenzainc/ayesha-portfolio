import { Layers3Icon } from "lucide-react";

export function DepthReflectionHeader() {
  return (
    <section className="bg-background px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[0.62fr_0.38fr] lg:items-end">
        <div className="flex flex-col gap-5">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Depth Reflection
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-6xl">
            In-depth Lesson Reflections
          </h1>
          <p className="max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
            Five practicum lessons are presented through pre-teaching reflection,
            post-teaching reflection, lesson evidence, and references. Each
            reflection shows how planning, teaching, assessment, and classroom
            response shaped my professional growth.
          </p>
        </div>

        <div className="rounded-lg border border-indigo-200 bg-indigo-50 p-6 text-indigo-950 shadow-sm dark:border-indigo-800 dark:bg-indigo-950/35 dark:text-indigo-100">
          <Layers3Icon data-icon="inline-start" />
          <p className="mt-4 text-2xl font-semibold">5 Lessons</p>
          <p className="mt-2 text-sm leading-6 text-indigo-900/80 dark:text-indigo-100/80">
            Grammar, listening, speaking, reading, and guided discovery evidence
            in one structured section.
          </p>
        </div>
      </div>
    </section>
  );
}
