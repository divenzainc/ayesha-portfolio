import {
  CheckCircle2Icon,
  MessageSquareHeartIcon,
  SparklesIcon,
  TargetIcon,
} from "lucide-react";

const observations = [
  {
    number: "01",
    title: "Supervisor Observation 01",
    lesson: "Using Full Stops and Question Marks (Grade 6)",
    icon: TargetIcon,
    highlight: "Clear structure, positive interaction, and stronger participation.",
    reflection:
      "The supervisor appreciated the clear lesson structure, effective classroom management, appropriate teaching materials, and positive interaction with learners. I was encouraged to increase learner participation by providing more opportunities for discussion and independent thinking. This feedback reinforced the importance of reducing teacher talk and promoting active learner engagement.",
  },
  {
    number: "02",
    title: "Supervisor Observation 02",
    lesson: "WH Question Words (Grade 6)",
    icon: MessageSquareHeartIcon,
    highlight: "Improved learner participation and classroom interaction.",
    reflection:
      "The second observation showed improvement in learner participation and classroom interaction. The supervisor commended the supportive learning environment and effective lesson delivery while encouraging me to continue developing learner autonomy through more communicative activities and student-generated responses. This observation strengthened my confidence in implementing learner-centred teaching practices.",
  },
];

const overallTakeaways = [
  "Critical reflection",
  "Improved lesson delivery",
  "Learner-centered practice",
];

export function SupervisorObservationReflections() {
  return (
    <section className="bg-muted/45 px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-9">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Observation Reflections
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Professional Learning Through Supervisor Observation.
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Professional feedback transforms experience into continuous improvement.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {observations.map((observation) => {
            const Icon = observation.icon;

            return (
              <article
                key={observation.title}
                className="relative overflow-hidden rounded-lg border bg-background p-5 shadow-sm sm:p-6"
              >
                <div className="absolute right-5 top-5 text-6xl font-semibold leading-none text-primary/10">
                  {observation.number}
                </div>
                <div className="relative flex flex-col gap-5">
                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <Icon data-icon="inline-start" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary">
                        {observation.title}
                      </p>
                      <h3 className="mt-1 text-2xl font-semibold leading-8 text-foreground">
                        {observation.lesson}
                      </h3>
                    </div>
                  </div>

                  <p className="rounded-lg border-l-4 border-primary bg-muted/35 px-4 py-3 text-sm font-medium leading-6 text-foreground">
                    {observation.highlight}
                  </p>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      Reflection
                    </p>
                    <p className="mt-3 text-base leading-8 text-muted-foreground">
                      {observation.reflection}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <article className="overflow-hidden rounded-lg border border-sky-200 bg-sky-50 shadow-sm dark:border-sky-800 dark:bg-sky-950/35">
          <div className="grid gap-0 lg:grid-cols-[0.34fr_0.66fr]">
            <div className="flex flex-col justify-between bg-sky-600 p-6 text-white sm:p-8">
              <div>
                <div className="flex size-12 items-center justify-center rounded-lg bg-white/15">
                  <SparklesIcon data-icon="inline-start" />
                </div>
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-sky-100">
                  Overall Reflection
                </p>
                <h3 className="mt-3 text-2xl font-semibold leading-8">
                  Feedback that shaped my growth as a reflective teacher.
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="grid gap-3 sm:grid-cols-3">
                {overallTakeaways.map((takeaway) => (
                  <div
                    key={takeaway}
                    className="flex items-center gap-2 rounded-lg border border-sky-200 bg-white px-3 py-3 text-sm font-medium text-sky-800 dark:border-sky-800 dark:bg-background dark:text-sky-200"
                  >
                    <CheckCircle2Icon data-icon="inline-start" />
                    <span>{takeaway}</span>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-base leading-8 text-slate-700 dark:text-sky-50/85 sm:text-lg">
                The supervisor&apos;s feedback played a significant role in my
                professional development throughout the Teaching Practicum. It
                encouraged me to reflect critically on my teaching practices and
                continuously improve my lesson delivery.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700 dark:text-sky-50/85 sm:text-lg">
                The observations strengthened my confidence as a reflective
                English language teacher and reinforced my commitment to
                creating meaningful, learner-centered classroom experiences.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
