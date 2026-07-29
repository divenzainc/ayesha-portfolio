import { CheckCircle2Icon, SproutIcon } from "lucide-react";

const takeaways = [
  "Refined classroom practice",
  "Increased learner participation",
  "Stronger learner-centred strategies",
];

export function MentorOverallReflection() {
  return (
    <section className="bg-muted/45 px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <article className="overflow-hidden rounded-lg border border-blue-200 bg-blue-50 shadow-sm dark:border-blue-800 dark:bg-blue-950/35">
          <div className="grid lg:grid-cols-[0.34fr_0.66fr]">
            <div className="bg-blue-600 p-6 text-white sm:p-8">
              <div className="flex size-12 items-center justify-center rounded-lg bg-white/15">
                <SproutIcon data-icon="inline-start" />
              </div>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">
                Overall Reflection
              </p>
              <h2 className="mt-3 text-2xl font-semibold leading-8">
                Mentorship strengthened my confidence and direction.
              </h2>
            </div>

            <div className="p-6 sm:p-8">
              <div className="grid gap-3 sm:grid-cols-3">
                {takeaways.map((takeaway) => (
                  <div
                    key={takeaway}
                    className="flex items-center gap-2 rounded-lg border border-blue-200 bg-white px-3 py-3 text-sm font-medium text-blue-900 dark:border-blue-800 dark:bg-background dark:text-blue-100"
                  >
                    <CheckCircle2Icon data-icon="inline-start" />
                    <span>{takeaway}</span>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-base leading-8 text-slate-700 dark:text-blue-50/85 sm:text-lg">
                The mentor observations complemented the feedback received from
                my university supervisor and further strengthened my
                professional growth throughout the Teaching Practicum.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700 dark:text-blue-50/85 sm:text-lg">
                The constructive guidance helped me refine my classroom
                practices, increase learner participation, and adopt more
                learner-centred teaching strategies. These experiences
                reinforced my commitment to continuous reflection and lifelong
                professional development as an English language teacher.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
