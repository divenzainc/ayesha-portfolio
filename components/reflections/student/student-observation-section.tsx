import {
  BookOpenCheckIcon,
  ClipboardCheckIcon,
  ExternalLinkIcon,
  MessagesSquareIcon,
  PuzzleIcon,
} from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const observations = [
  {
    number: "01",
    title: "Peer Observation 01",
    lesson: "Helping Verbs (am / is / are) - Grade 3",
    icon: PuzzleIcon,
    highlight:
      "Grammar became easier to understand through guided practice and active participation.",
    reflection:
      "This lesson demonstrated how grammar could be introduced through clear explanations, guided practice, and learner-centred activities. The effective use of teaching aids, questioning techniques, and collaborative learning encouraged active participation throughout the lesson. Observing this lesson reinforced the importance of providing meaningful practice opportunities that help learners develop confidence and accuracy in using English.",
    documents: [
      {
        label: "Peer Review Lesson 01",
        href: "/docs/student/peer-review-lesson-1.pdf",
        icon: BookOpenCheckIcon,
      },
      {
        label: "Peer Observation Form 01",
        href: "/docs/student/peer-observation-form-1.pdf",
        icon: ClipboardCheckIcon,
      },
    ],
  },
  {
    number: "02",
    title: "Peer Observation 02",
    lesson:
      "Expressing Likes and Dislikes (I like... / I don't like... / Do you like...?) - Grade 3",
    icon: MessagesSquareIcon,
    highlight:
      "Real-life language use encouraged learners to communicate with confidence.",
    reflection:
      "This lesson illustrated how familiar, real-life contexts can promote meaningful communication in the English classroom. The teacher successfully engaged learners through visual materials, pair and group activities, and individual practice, enabling them to express their personal preferences confidently. This observation highlighted the value of creating interactive learning experiences that encourage authentic language use and active learner participation.",
    documents: [
      {
        label: "Peer Observation Lesson 02",
        href: "/docs/student/peer-observation-lesson-2.pdf",
        icon: BookOpenCheckIcon,
      },
      {
        label: "Peer Observation Form 02",
        href: "/docs/student/peer-observation-form-2.pdf",
        icon: ClipboardCheckIcon,
      },
    ],
  },
];

export function StudentObservationSection() {
  return (
    <section className="bg-background px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-9">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Peer Observation Evidence
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Two observed lessons with reflection and supporting documents.
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
                <div className="grid lg:grid-cols-[0.36fr_0.64fr]">
                  <div className="flex flex-col justify-between bg-cyan-600 p-6 text-white sm:p-8">
                    <div>
                      <div className="flex size-12 items-center justify-center rounded-lg bg-white/15">
                        <Icon data-icon="inline-start" />
                      </div>
                      <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-100">
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
                    <p className="rounded-lg border-l-4 border-cyan-500 bg-cyan-50 px-4 py-3 text-sm font-medium leading-6 text-cyan-950 dark:bg-cyan-950/35 dark:text-cyan-100">
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
                                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-cyan-50 text-cyan-700 dark:bg-cyan-950/40 dark:text-cyan-200">
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
