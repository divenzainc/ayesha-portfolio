import { ClipboardCheckIcon } from "lucide-react";

export function SupervisorPageHeader() {
  return (
    <section className="bg-background px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[0.62fr_0.38fr] lg:items-end">
        <div className="flex flex-col gap-5">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Reflections / Supervisor
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-6xl">
            Supervisor Observation and Lesson Evidence
          </h1>
          <p className="max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
            This section presents supervisor observation records, the structured
            teaching plan, and lesson resources used to support reflective
            practice during the Teaching Practicum.
          </p>
        </div>

        <div className="rounded-lg border bg-primary p-6 text-primary-foreground shadow-lg">
          <ClipboardCheckIcon data-icon="inline-start" />
          <p className="mt-4 text-2xl font-semibold">4 PDF Artefacts</p>
          <p className="mt-2 text-sm leading-6 text-primary-foreground/85">
            Open each document in a new tab for a full-page readable preview.
          </p>
        </div>
      </div>
    </section>
  );
}
