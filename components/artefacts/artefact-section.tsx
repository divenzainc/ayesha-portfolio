"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import {
  BookOpenTextIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ImagesIcon,
  QuoteIcon,
  XIcon,
} from "lucide-react";

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

          {/*
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
          */}
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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isCertificateGallery = gallery.images.some((image) =>
    image.src.startsWith("/certificates/")
  );
  const activeImage = activeIndex === null ? null : gallery.images[activeIndex];
  const showPreviousImage = useCallback(() => {
    setActiveIndex((currentIndex) => {
      if (currentIndex === null) {
        return currentIndex;
      }

      return currentIndex === 0 ? gallery.images.length - 1 : currentIndex - 1;
    });
  }, [gallery.images.length]);
  const showNextImage = useCallback(() => {
    setActiveIndex((currentIndex) => {
      if (currentIndex === null) {
        return currentIndex;
      }

      return currentIndex === gallery.images.length - 1 ? 0 : currentIndex + 1;
    });
  }, [gallery.images.length]);

  useEffect(() => {
    if (!activeImage) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }

      if (event.key === "ArrowLeft") {
        showPreviousImage();
      }

      if (event.key === "ArrowRight") {
        showNextImage();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeImage, showNextImage, showPreviousImage]);

  return (
    <>
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

        {isCertificateGallery ? (
          <CertificateLadder
            images={gallery.images}
            onOpen={(image) => setActiveIndex(gallery.images.indexOf(image))}
          />
        ) : (
          <div className="grid grid-cols-2 gap-2 p-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {gallery.images.map((image, index) => (
              <button
                type="button"
                key={image.src}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "group relative cursor-pointer overflow-hidden rounded-lg border bg-muted text-left outline-none transition focus-visible:ring-3 focus-visible:ring-primary/35",
                  index === 0 && "col-span-2 row-span-2"
                )}
              >
                <span className={cn("relative block aspect-square", index === 0 && "aspect-[4/3] sm:aspect-square")}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes={
                      index === 0
                        ? "(min-width: 1024px) 420px, (min-width: 640px) 50vw, 92vw"
                        : "(min-width: 1024px) 190px, (min-width: 640px) 30vw, 46vw"
                    }
                    className={cn(
                      "object-cover transition duration-300 group-hover:scale-105",
                      image.src === "/slma/1.jpeg" && "object-[center_30%]"
                    )}
                  />
                </span>
                <span className="absolute left-2 top-2 rounded-md bg-background/90 px-2 py-1 text-[11px] font-semibold text-foreground shadow-sm">
                  {index + 1}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      {activeImage ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/90 p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Full image preview"
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            aria-label="Close image preview"
            onClick={() => setActiveIndex(null)}
            className="absolute right-4 top-4 z-10 flex size-10 cursor-pointer items-center justify-center rounded-lg bg-white text-slate-950 shadow-lg transition hover:bg-sky-50"
          >
            <XIcon data-icon="inline-start" />
          </button>
          <button
            type="button"
            aria-label="Show previous image"
            onClick={(event) => {
              event.stopPropagation();
              showPreviousImage();
            }}
            className="absolute left-3 top-1/2 z-10 flex size-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/95 text-slate-950 shadow-lg transition hover:bg-sky-50 sm:left-5 sm:size-12"
          >
            <ChevronLeftIcon data-icon="inline-start" />
          </button>
          <button
            type="button"
            aria-label="Show next image"
            onClick={(event) => {
              event.stopPropagation();
              showNextImage();
            }}
            className="absolute right-3 top-1/2 z-10 flex size-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/95 text-slate-950 shadow-lg transition hover:bg-sky-50 sm:right-5 sm:size-12"
          >
            <ChevronRightIcon data-icon="inline-start" />
          </button>
          <div
            className="relative h-full max-h-[88vh] w-full max-w-6xl overflow-hidden rounded-lg bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              sizes="96vw"
              className="object-contain"
            />
            <div className="absolute bottom-3 left-3 rounded-md bg-white/90 px-3 py-2 text-xs font-semibold text-slate-900 shadow-sm">
              {activeImage.alt}
              {activeIndex !== null ? ` (${activeIndex + 1} of ${gallery.images.length})` : ""}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

function CertificateLadder({
  images,
  onOpen,
}: {
  images: TeacherArtefact["galleries"][number]["images"];
  onOpen: (image: TeacherArtefact["galleries"][number]["images"][number]) => void;
}) {
  const reversedImages = [...images].reverse();

  return (
    <div className="px-3 py-8 sm:px-6">
      <div className="relative grid gap-5">
        <div className="absolute bottom-10 left-1/2 top-10 hidden w-px -translate-x-1/2 bg-border md:block" />
        {reversedImages.map((image) => {
          const milestone = Number(image.src.match(/(\d+)\.jpeg$/)?.[1] ?? 0);
          const isLeft = milestone % 2 === 0;

          return (
            <div
              key={image.src}
              className={cn(
                "relative grid gap-3 md:grid-cols-[1fr_auto_1fr] md:items-center",
                isLeft ? "md:[&>button]:col-start-1 md:[&>button]:justify-self-end" : "md:[&>button]:col-start-3"
              )}
            >
              <button
                type="button"
                onClick={() => onOpen(image)}
                className="group relative w-full cursor-pointer overflow-hidden rounded-lg border bg-muted text-left shadow-sm outline-none transition hover:-translate-y-0.5 hover:shadow-md focus-visible:ring-3 focus-visible:ring-primary/35 md:max-w-sm"
              >
                <span className="relative block aspect-[4/3]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 340px, (min-width: 768px) 42vw, 92vw"
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                </span>
                <span className="absolute left-3 top-3 rounded-md bg-background/95 px-3 py-1 text-xs font-semibold text-foreground shadow-sm">
                  Milestone {milestone}
                </span>
              </button>

              <div className="hidden size-10 items-center justify-center rounded-full border-4 border-background bg-primary text-sm font-semibold text-primary-foreground shadow-md md:col-start-2 md:row-start-1 md:flex">
                {milestone}
              </div>

              <div
                className={cn(
                  "rounded-lg border bg-background p-3 text-sm leading-6 text-muted-foreground md:row-start-1 md:max-w-xs",
                  isLeft ? "md:col-start-3" : "md:col-start-1 md:justify-self-end"
                )}
              >
                <span className="font-semibold text-foreground">
                  Step {milestone}
                </span>{" "}
                in a continuous learning journey.
              </div>
            </div>
          );
        })}
      </div>
      <p className="mt-6 rounded-lg border bg-muted/45 p-4 text-sm leading-6 text-muted-foreground">
        The ladder is arranged from the earliest visible milestone at the bottom
        to the latest visible milestone at the top, showing education as an
        upward journey of growth.
      </p>
    </div>
  );
}

/*
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
*/
