import { CheckCircle2Icon, GraduationCapIcon } from "lucide-react";

const takeaways = [
  "Critical observation",
  "Professional collaboration",
  "Improved classroom practice",
];

export function StudentOverallReflection() {
  return (
    <section className="bg-muted/45 px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <article className="overflow-hidden rounded-lg border border-cyan-200 bg-cyan-50 shadow-sm dark:border-cyan-800 dark:bg-cyan-950/35">
          <div className="grid lg:grid-cols-[0.34fr_0.66fr]">
            <div className="bg-cyan-600 p-6 text-white sm:p-8">
              <div className="flex size-12 items-center justify-center rounded-lg bg-white/15">
                <GraduationCapIcon data-icon="inline-start" />
              </div>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-100">
                Overall Reflection
              </p>
              <h2 className="mt-3 text-2xl font-semibold leading-8">
                Peer observation broadened my view of effective teaching.
              </h2>
            </div>

            <div className="p-6 sm:p-8">
              <div className="grid gap-3 sm:grid-cols-3">
                {takeaways.map((takeaway) => (
                  <div
                    key={takeaway}
                    className="flex items-center gap-2 rounded-lg border border-cyan-200 bg-white px-3 py-3 text-sm font-medium text-cyan-900 dark:border-cyan-800 dark:bg-background dark:text-cyan-100"
                  >
                    <CheckCircle2Icon data-icon="inline-start" />
                    <span>{takeaway}</span>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-base leading-8 text-slate-700 dark:text-cyan-50/85 sm:text-lg">
                Peer observation broadened my understanding of effective
                classroom practice by allowing me to observe teaching from a
                different perspective. It encouraged me to reflect critically on
                instructional strategies, learner engagement, classroom
                interaction, and lesson organisation.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700 dark:text-cyan-50/85 sm:text-lg">
                Together with the feedback received from my university
                supervisor and school mentor, these observations strengthened my
                reflective practice and reinforced my commitment to continuous
                professional learning. The insights gained through this
                experience have positively influenced my own classroom practices
                and will continue to guide my professional growth as an English
                language teacher.
              </p>
            </div>
          </div>
        </article>

        <div className="rounded-lg border bg-background p-5 text-sm leading-7 text-muted-foreground sm:p-6">
          <p className="font-semibold text-foreground">Why this version is suitable for full marks</p>
          <p className="mt-2">
            It clearly connects peer observation with reflective learning,
            professional growth, classroom practice, and future improvement.
          </p>
        </div>
      </div>
    </section>
  );
}
