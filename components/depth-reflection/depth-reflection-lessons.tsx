import {
  BookOpenIcon,
  ExternalLinkIcon,
  FileTextIcon,
  LightbulbIcon,
  RefreshCcwIcon,
} from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { depthReflectionLessons } from "@/components/depth-reflection/depth-reflection-data";

export function DepthReflectionLessons() {
  return (
    <section className="bg-muted/45 px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
        {depthReflectionLessons.map((lesson) => (
          <article
            key={lesson.number}
            className="overflow-hidden rounded-lg border bg-background shadow-sm"
          >
            <div className="grid lg:grid-cols-[0.36fr_0.64fr]">
              <div className="flex flex-col justify-between bg-indigo-600 p-6 text-white sm:p-8">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-100">
                    Lesson {lesson.number}
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold leading-8">
                    {lesson.title}
                  </h2>
                  <div className="mt-5 grid gap-3 text-sm text-indigo-50/90">
                    <p className="rounded-lg bg-white/10 px-3 py-2">
                      Skill: {lesson.skill}
                    </p>
                    <p className="rounded-lg bg-white/10 px-3 py-2">
                      Approach: {lesson.model}
                    </p>
                  </div>
                </div>
                <p className="mt-8 text-7xl font-semibold leading-none text-white/15">
                  {lesson.number}
                </p>
              </div>

              <div className="flex flex-col gap-6 p-5 sm:p-6 lg:p-8">
                <div className="overflow-hidden rounded-lg border bg-muted">
                  <div className="h-72 border-b bg-muted sm:h-80">
                    <iframe
                      src={`${lesson.pdfHref}#toolbar=0&navpanes=0&scrollbar=0`}
                      title={`${lesson.title} PDF preview`}
                      className="size-full"
                    />
                  </div>
                  <div className="flex flex-col gap-3 bg-background p-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex size-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-200">
                        <FileTextIcon data-icon="inline-start" />
                      </div>
                      <p className="text-sm font-semibold text-foreground">
                        Lesson plan PDF evidence
                      </p>
                    </div>
                    <a
                      href={lesson.pdfHref}
                      target="_blank"
                      rel="noreferrer"
                      className={cn(buttonVariants(), "w-full sm:w-fit")}
                    >
                      <BookOpenIcon data-icon="inline-start" />
                      Open PDF
                      <ExternalLinkIcon data-icon="inline-end" />
                    </a>
                  </div>
                </div>

                <div className="grid gap-3">
                  <ReflectionDetails
                    title="Pre-teaching Reflection"
                    icon="pre"
                    paragraphs={lesson.preTeaching}
                  />
                  <ReflectionDetails
                    title="Post-teaching Reflection"
                    icon="post"
                    paragraphs={lesson.postTeaching}
                  />
                  <ReflectionDetails
                    title="References"
                    icon="references"
                    paragraphs={lesson.references}
                  />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ReflectionDetails({
  title,
  icon,
  paragraphs,
}: {
  title: string;
  icon: "pre" | "post" | "references";
  paragraphs: string[];
}) {
  const Icon = icon === "pre" ? LightbulbIcon : icon === "post" ? RefreshCcwIcon : FileTextIcon;

  return (
    <details className="group rounded-lg border bg-muted/30 p-4 open:bg-background">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
        <span className="flex items-center gap-3 text-sm font-semibold text-foreground">
          <span className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Icon data-icon="inline-start" />
          </span>
          {title}
        </span>
        <span className="text-xs font-medium text-muted-foreground group-open:hidden">
          Open
        </span>
        <span className="hidden text-xs font-medium text-muted-foreground group-open:inline">
          Close
        </span>
      </summary>
      <div className="mt-4 grid gap-4 text-sm leading-7 text-muted-foreground">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>
            {title === "References" ? (
              <FormattedReference reference={paragraph} />
            ) : (
              paragraph
            )}
          </p>
        ))}
      </div>
    </details>
  );
}

const italicReferenceSegments = [
  "Assessment in Education: Principles, Policy & Practice, 5",
  "English: Grade 6 pupil's book",
  "English: Grade 6 Pupil's Book",
  "Approaches and methods in language teaching",
  "Approaches and Methods in Language Teaching",
  "The reflective practitioner: How professionals think in action",
  "Mind in society: The development of higher psychological processes",
  "Mind in Society: The Development of Higher Psychological Processes",
  "Listening in the Language Classroom",
  "The practice of English language teaching",
  "The Practice of English Language Teaching",
  "Toward a Theory of Instruction",
];

function FormattedReference({
  reference,
}: {
  reference: string;
}) {
  const segment = italicReferenceSegments.find((item) => reference.includes(item));

  if (!segment) {
    return reference;
  }

  const [before, after] = reference.split(segment);

  return (
    <>
      {before}
      <em>{segment}</em>
      {after}
    </>
  );
}
