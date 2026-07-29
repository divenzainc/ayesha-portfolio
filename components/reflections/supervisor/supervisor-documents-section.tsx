import {
  BookOpenIcon,
  ClipboardListIcon,
  ExternalLinkIcon,
  FileTextIcon,
  HelpCircleIcon,
} from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const documents = [
  {
    title: "Supervisor's Observation 1",
    category: "Observation Record",
    description:
      "Supervisor feedback and observation notes from the practicum lesson.",
    href: "/docs/supervisor/supervisors-observation-1.pdf",
    icon: ClipboardListIcon,
    accent: "border-sky-300 bg-sky-50 text-sky-700 dark:bg-sky-950/30 dark:text-sky-200",
  },
  {
    title: "Supervisor's Observation 2",
    category: "Observation Record",
    description:
      "A second observation document showing continued professional feedback.",
    href: "/docs/supervisor/supervisors-observation-2.pdf",
    icon: ClipboardListIcon,
    accent:
      "border-blue-300 bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-200",
  },
  {
    title: "Full STP and Question Mark Lesson",
    category: "Lesson Plan",
    description:
      "Full structured teaching plan and lesson material related to question marks.",
    href: "/docs/supervisor/full-stp-and-question-mark.pdf",
    icon: FileTextIcon,
    accent:
      "border-indigo-300 bg-indigo-50 text-indigo-700 dark:bg-indigo-950/30 dark:text-indigo-200",
  },
  {
    title: "WH Question Words",
    category: "Lesson Resource",
    description:
      "Teaching resource supporting learners' understanding of WH question words.",
    href: "/docs/supervisor/wh-question-words.pdf",
    icon: HelpCircleIcon,
    accent:
      "border-cyan-300 bg-cyan-50 text-cyan-700 dark:bg-cyan-950/30 dark:text-cyan-200",
  },
];

export function SupervisorDocumentsSection() {
  return (
    <section className="bg-muted/45 px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-9">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Evidence Collection
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Observation documents and lesson materials in one place.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {documents.map((document) => {
            const Icon = document.icon;

            return (
              <article
                key={document.href}
                className="group flex flex-col overflow-hidden rounded-lg border bg-background shadow-sm transition-colors hover:border-primary/50"
              >
                <div className="relative h-72 border-b bg-muted sm:h-80">
                  <iframe
                    src={`${document.href}#toolbar=0&navpanes=0&scrollbar=0`}
                    title={`${document.title} preview`}
                    className="size-full"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                  <div className="flex flex-col gap-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className={`rounded-lg border p-3 ${document.accent}`}>
                      <Icon data-icon="inline-start" />
                    </div>
                    <span className="rounded-full border bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground">
                      PDF
                    </span>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-primary">
                      {document.category}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold leading-8 text-foreground">
                      {document.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {document.description}
                    </p>
                  </div>
                </div>

                <a
                  href={document.href}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(buttonVariants(), "mt-6 w-full sm:w-fit")}
                >
                    <BookOpenIcon data-icon="inline-start" />
                    Open PDF
                    <ExternalLinkIcon data-icon="inline-end" />
                </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
