import {
  BookOpenCheckIcon,
  ClipboardCheckIcon,
  ExternalLinkIcon,
  Layers3Icon,
  MessageCircleQuestionIcon,
} from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const observations = [
  {
    number: "01",
    title: "Mentor Observation 01",
    lesson: "Capitalization (Grade 6)",
    icon: Layers3Icon,
    highlight:
      "A well-organised lesson with effective management and active learner participation.",
    reflection:
      "My mentor appreciated the well-organised lesson, effective classroom management, and the use of appropriate teaching materials to support learning. Learners actively participated throughout the activities, creating a positive and engaging classroom environment. I was encouraged to provide additional opportunities for learners to discover language rules independently and to further promote active participation. This feedback reinforced the importance of facilitating learning through guided discovery rather than direct instruction alone.",
    documents: [
      {
        label: "Lesson Plan - Capitalization",
        href: "/docs/mentor/capitalization-lesson-plan.pdf",
        icon: BookOpenCheckIcon,
      },
      {
        label: "Mentor Observation Form 01",
        href: "/docs/mentor/mentors-observation-1.pdf",
        icon: ClipboardCheckIcon,
      },
    ],
  },
  {
    number: "02",
    title: "Mentor Observation 02",
    lesson: "Present Tense - Interrogative Form (Grade 6)",
    icon: MessageCircleQuestionIcon,
    highlight:
      "Supportive classroom atmosphere with a stronger focus on interaction and learner autonomy.",
    reflection:
      "The second observation highlighted my positive rapport with learners, clear lesson organisation, and supportive classroom atmosphere. My mentor encouraged me to continue increasing learner interaction by incorporating more communicative activities and providing opportunities for self-correction and peer learning. This observation strengthened my understanding that meaningful language learning develops when learners actively participate and take responsibility for their own learning.",
    documents: [
      {
        label: "Lesson Plan - Present Tense: Interrogative Form",
        href: "/docs/mentor/present-tense-interrogative-form.pdf",
        icon: BookOpenCheckIcon,
      },
      {
        label: "Mentor Observation Form 02",
        href: "/docs/mentor/mentors-observation-2.pdf",
        icon: ClipboardCheckIcon,
      },
    ],
  },
];

export function MentorObservationSection() {
  return (
    <section className="bg-background px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-9">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Mentor Observation Evidence
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Two lessons, two reflections, and the documents behind them.
          </h2>
        </div>

        <div className="grid gap-6">
          {observations.map((observation) => {
            const Icon = observation.icon;

            return (
              <article
                key={observation.title}
                className="overflow-hidden rounded-lg border bg-muted/25 shadow-sm"
              >
                <div className="grid gap-0 lg:grid-cols-[0.38fr_0.62fr]">
                  <div className="flex flex-col justify-between bg-blue-600 p-6 text-white sm:p-8">
                    <div>
                      <div className="flex size-12 items-center justify-center rounded-lg bg-white/15">
                        <Icon data-icon="inline-start" />
                      </div>
                      <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">
                        {observation.title}
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold leading-8">
                        {observation.lesson}
                      </h3>
                    </div>
                    <p className="mt-8 text-7xl font-semibold leading-none text-white/15">
                      {observation.number}
                    </p>
                  </div>

                  <div className="flex flex-col gap-6 bg-background p-6 sm:p-8">
                    <p className="rounded-lg border-l-4 border-blue-500 bg-blue-50 px-4 py-3 text-sm font-medium leading-6 text-blue-950 dark:bg-blue-950/35 dark:text-blue-100">
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

                    <div className="grid gap-4 sm:grid-cols-2">
                      {observation.documents.map((document) => {
                        const DocumentIcon = document.icon;

                        return (
                          <article
                            key={document.href}
                            className="overflow-hidden rounded-lg border bg-muted/25"
                          >
                            <div className="relative h-56 border-b bg-muted">
                              <iframe
                                src={`${document.href}#toolbar=0&navpanes=0&scrollbar=0`}
                                title={`${document.label} preview`}
                                className="size-full"
                              />
                            </div>
                            <div className="p-4">
                              <div className="flex items-start gap-3">
                                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-200">
                                  <DocumentIcon data-icon="inline-start" />
                                </div>
                                <p className="text-sm font-semibold leading-6 text-foreground">
                                  {document.label}
                                </p>
                              </div>
                              <a
                                href={document.href}
                                target="_blank"
                                rel="noreferrer"
                                className={cn(
                                  buttonVariants({ variant: "outline" }),
                                  "mt-4 w-full justify-center"
                                )}
                              >
                                Open PDF
                                <ExternalLinkIcon data-icon="inline-end" />
                              </a>
                            </div>
                          </article>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
