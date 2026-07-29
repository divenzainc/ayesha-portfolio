import Image from "next/image";
import { BookOpenTextIcon, ImagesIcon, QuoteIcon } from "lucide-react";

import type { TeacherArtefact } from "@/components/artefacts/artefact-data";
import { cn } from "@/lib/utils";

const accentStyles = {
  sky: {
    section: "bg-sky-50/70 dark:bg-sky-950/15",
    badge: "bg-sky-600 text-white",
    panel: "border-sky-200 bg-sky-100/70 dark:border-sky-900 dark:bg-sky-950/30",
    text: "text-sky-700 dark:text-sky-200",
  },
  blue: {
    section: "bg-blue-50/70 dark:bg-blue-950/15",
    badge: "bg-blue-600 text-white",
    panel: "border-blue-200 bg-blue-100/70 dark:border-blue-900 dark:bg-blue-950/30",
    text: "text-blue-700 dark:text-blue-200",
  },
  cyan: {
    section: "bg-cyan-50/70 dark:bg-cyan-950/15",
    badge: "bg-cyan-600 text-white",
    panel: "border-cyan-200 bg-cyan-100/70 dark:border-cyan-900 dark:bg-cyan-950/30",
    text: "text-cyan-700 dark:text-cyan-200",
  },
} as const;

export function ArtefactSection({ artefact }: { artefact: TeacherArtefact }) {
  const accent = accentStyles[artefact.accent as keyof typeof accentStyles];

  return (
    <section className={cn("px-4 py-14 sm:px-6 sm:py-16 lg:px-8", accent.section)}>
      <div className="mx-auto grid w-full max-w-7xl gap-8 xl:grid-cols-[0.39fr_0.61fr] xl:gap-10">
        <aside className="xl:sticky xl:top-24 xl:self-start">
          <div className="rounded-lg border bg-background p-5 shadow-sm sm:p-6">
            <div className="flex items-center gap-3">
              <span className={cn("rounded-lg px-3 py-2 text-sm font-semibold", accent.badge)}>
                Artefact {artefact.number}
              </span>
              <span className={cn("text-sm font-semibold", accent.text)}>
                {artefact.eyebrow}
              </span>
            </div>
            <h2 className="mt-5 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              {artefact.title}
            </h2>
            <blockquote className="mt-5 border-l-4 border-primary pl-4 text-base font-medium leading-7 text-muted-foreground">
              <QuoteIcon data-icon="inline-start" className="mb-2" />
              &quot;{artefact.quote}&quot;
            </blockquote>

            <div className={cn("mt-6 rounded-lg border p-4", accent.panel)}>
              <p className="text-sm font-semibold text-foreground">
                What this artefact reveals
              </p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                This section connects personal evidence with reflective practice,
                showing how lived experience has shaped professional values.
              </p>
            </div>
          </div>
        </aside>

        <div className="grid gap-8">
          <div className="grid gap-5 rounded-lg border bg-background p-5 shadow-sm sm:p-6">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <BookOpenTextIcon data-icon="inline-start" />
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Reflective Narrative
                </p>
                <p className="text-xs text-muted-foreground">
                  Extracted from the artefact chapter content
                </p>
              </div>
            </div>
            <div className="grid gap-4 text-sm leading-7 text-muted-foreground sm:text-[0.95rem] sm:leading-8">
              {artefact.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          {artefact.galleries.map((gallery) => (
            <ArtefactGallery
              key={gallery.title}
              gallery={gallery}
              accentClass={accent.panel}
            />
          ))}

          <div className="grid gap-5 rounded-lg border bg-background p-5 shadow-sm sm:p-6">
            <h3 className="text-xl font-semibold text-foreground">Looking Back</h3>
            <div className="grid gap-4 text-sm leading-7 text-muted-foreground sm:text-[0.95rem] sm:leading-8">
              {artefact.lookingBack.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="rounded-lg border bg-background p-5 shadow-sm sm:p-6">
            <h3 className="text-xl font-semibold text-foreground">References</h3>
            <div className="mt-4 grid gap-3 text-sm leading-7 text-muted-foreground">
              {artefact.references.map((reference) => (
                <p key={reference}>
                  <FormattedReference reference={reference} />
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArtefactGallery({
  gallery,
  accentClass,
}: {
  gallery: TeacherArtefact["galleries"][number];
  accentClass: string;
}) {
  return (
    <div className="overflow-hidden rounded-lg border bg-background shadow-sm">
      <div className={cn("border-b p-5 sm:p-6", accentClass)}>
        <div className="flex items-start gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-background text-primary shadow-sm">
            <ImagesIcon data-icon="inline-start" />
          </span>
          <div>
            <h3 className="text-xl font-semibold text-foreground">{gallery.title}</h3>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              {gallery.note}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 p-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {gallery.images.map((image, index) => (
          <figure
            key={image.src}
            className={cn(
              "group relative overflow-hidden rounded-lg border bg-muted",
              index === 0 && "col-span-2 row-span-2"
            )}
          >
            <div className={cn("relative aspect-square", index === 0 && "aspect-[4/3] sm:aspect-square")}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={
                  index === 0
                    ? "(min-width: 1024px) 420px, (min-width: 640px) 50vw, 92vw"
                    : "(min-width: 1024px) 190px, (min-width: 640px) 30vw, 46vw"
                }
                className="object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
            <figcaption className="absolute left-2 top-2 rounded-md bg-background/90 px-2 py-1 text-[11px] font-semibold text-foreground shadow-sm">
              {index + 1}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

const italicReferenceSegments = [
  "The challenge to care in schools: An alternative approach to education",
  "The courage to teach: Exploring the inner landscape of a teacher's life",
  "Experience and education",
  "The reflective practitioner: How professionals think in action",
  "Embracing a culture of lifelong learning",
];

function FormattedReference({ reference }: { reference: string }) {
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
