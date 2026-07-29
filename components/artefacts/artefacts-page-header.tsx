import { GraduationCapIcon, HeartHandshakeIcon, SparklesIcon } from "lucide-react";

export function ArtefactsPageHeader() {
  return (
    <section className="bg-background px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[0.64fr_0.36fr] lg:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Teacher Artefacts
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            The Life That Shaped the Educator
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            A reflective collection of classroom love, disciplined service, and
            lifelong learning - the lived experiences behind Ayesha&apos;s
            professional identity as an English language educator.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
          {[
            {
              icon: HeartHandshakeIcon,
              label: "Learner Care",
            },
            {
              icon: SparklesIcon,
              label: "Discipline and Service",
            },
            {
              icon: GraduationCapIcon,
              label: "Lifelong Learning",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 rounded-lg border bg-muted/40 p-4"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <item.icon data-icon="inline-start" />
              </span>
              <span className="text-sm font-semibold text-foreground">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
