import Image from "next/image";
import { Quote } from "lucide-react";

const chapters = [
  {
    tag: "In the Classroom",
    text: "Since joining the Sri Lankan Government Education Service in 2008, I have had the privilege of working with learners from diverse educational, social, and cultural backgrounds. Every classroom has taught me something new. Some learners challenged me to become more creative, some taught me patience, and many reminded me that meaningful education begins with understanding the learner before teaching the lesson.",
  },
  {
    tag: "Beyond the Classroom",
    text: "My professional journey has extended beyond the school classroom. Serving as an English Instructor at the Sri Lanka Military Academy and later as a Visiting Lecturer at SLIATE allowed me to work with adult learners and future professionals. These experiences broadened my understanding of English language education across different learning contexts.",
  },
  {
    tag: "Continuous Growth",
    text: "Alongside my teaching career, I have remained committed to continuous professional development through postgraduate studies, research, and reflective practice. Completing the Master of Arts in Linguistics at the University of Kelaniya and currently reading for the Master of Arts in Teaching English as a Second Language (MA TESL) at the Open University of Sri Lanka have strengthened both my theoretical knowledge and classroom practice.",
  },
  {
    tag: "This Portfolio",
    text: "This portfolio captures my Teaching Practicum journey. More importantly, it reflects my belief that an effective teacher never stops learning, reflecting, or growing.",
  },
];

const highlights = [
  {
    value: "2008",
    label: "Where it began — the Sri Lankan Government Education Service",
  },
  {
    value: "3",
    label:
      "Teaching contexts: government schools, the Military Academy, and SLIATE",
  },
  {
    value: "MA",
    label: "Linguistics completed at Kelaniya; MA TESL underway at OUSL",
  },
];

export function EducatorIntroSection() {
  return (
    <section id="educator" className="bg-background px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.15fr]">
          <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-lg">
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-primary/10 sm:-bottom-6 sm:-right-6"
            />
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border bg-muted shadow-xl">
              <Image
                src="/ayesha-education-section.jpeg"
                alt="Ayesha Nilmini Sumanasena in professional graduation portrait"
                fill
                sizes="(min-width: 1024px) 512px, (min-width: 640px) 448px, 92vw"
                className="object-cover object-[58%_8%]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              The Educator Behind the Classroom
            </p>

            <div className="relative">
              <Quote
                aria-hidden="true"
                className="absolute -left-1 -top-8 size-14 text-primary/10 sm:size-20"
              />
              <blockquote className="relative border-l-4 border-primary pl-5 text-2xl font-medium leading-10 text-foreground sm:text-4xl sm:leading-tight">
                &quot;Education is not where my journey began; it is where I
                continue to grow.&quot;
              </blockquote>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10 border-t pt-14">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              My Story
            </p>
            <p className="max-w-2xl text-xl font-medium leading-9 text-foreground sm:text-2xl sm:leading-10">
              Teaching English has never been simply my profession; it has
              been my lifelong journey of learning, serving, and growing.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
            <div className="flex flex-col gap-8">
              {chapters.map((chapter, index) => (
                <div key={chapter.tag}>
                  <h4 className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-primary">
                    {chapter.tag}
                  </h4>
                  <p
                    className={
                      index === 0
                        ? "text-base leading-8 text-foreground first-letter:mr-1 first-letter:float-left first-letter:font-serif first-letter:text-6xl first-letter:font-bold first-letter:leading-[0.8] first-letter:text-primary sm:text-lg sm:leading-9"
                        : "text-base leading-8 text-muted-foreground sm:text-lg sm:leading-9"
                    }
                  >
                    {chapter.text}
                  </p>
                </div>
              ))}
            </div>

            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-2xl border bg-muted/40 p-6 sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                  At a Glance
                </p>
                <dl className="mt-5 flex flex-col gap-5">
                  {highlights.map((item, index) => (
                    <div
                      key={item.value}
                      className={
                        index === 0
                          ? "flex flex-col gap-1"
                          : "flex flex-col gap-1 border-t border-border/70 pt-5"
                      }
                    >
                      <dt className="text-3xl font-bold text-foreground sm:text-4xl">
                        {item.value}
                      </dt>
                      <dd className="text-sm leading-6 text-muted-foreground">
                        {item.label}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
