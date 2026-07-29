import { UsersRoundIcon } from "lucide-react";

export function StudentPageHeader() {
  return (
    <section className="bg-background px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[0.62fr_0.38fr] lg:items-end">
        <div className="flex flex-col gap-5">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Reflections / Student
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-6xl">
            Learning Through Peer Observation
          </h1>
          <blockquote className="max-w-3xl border-l-4 border-primary pl-5 text-xl font-medium leading-8 text-muted-foreground">
            &quot;Every teacher is both a learner and a contributor to the
            professional learning community.&quot;
          </blockquote>
        </div>

        <div className="rounded-lg border border-cyan-200 bg-cyan-50 p-6 text-cyan-950 shadow-sm dark:border-cyan-800 dark:bg-cyan-950/35 dark:text-cyan-100">
          <UsersRoundIcon data-icon="inline-start" />
          <p className="mt-4 text-2xl font-semibold">Peer Observation</p>
          <p className="mt-2 text-sm leading-6 text-cyan-900/80 dark:text-cyan-100/80">
            Observing colleagues to strengthen reflective practice and classroom
            decision-making.
          </p>
        </div>
      </div>
    </section>
  );
}
