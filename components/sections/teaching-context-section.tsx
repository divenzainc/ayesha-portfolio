import Image from "next/image";

export function TeachingContextSection() {
  return (
    <section id="context" className="bg-background px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg border bg-muted shadow-lg">
          <Image
            src="/teaching-context.png"
            alt="A rural English language classroom with learning materials"
            fill
            sizes="(min-width: 1024px) 560px, 92vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-5">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            1.2 Teaching-Learning Context
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Teaching English where classroom experience matters deeply.
          </h2>
          <div className="grid gap-4 text-base leading-8 text-muted-foreground">
            <p>
              I currently teach English at A/Gaminiwewa Vidyalaya, a government
              school in the Kebithigollewa Education Zone of the Anuradhapura
              District, North Central Province, Sri Lanka.
            </p>
            <p>
              The school serves learners from predominantly rural communities
              where English is learned as a second language. Students
              demonstrate diverse learning abilities and are often exposed to
              English mainly within the school environment. Therefore,
              classroom teaching plays a vital role in developing their language
              proficiency and confidence.
            </p>
            <p>
              The teaching practicum for this portfolio was conducted with a
              Grade 6 class comprising approximately 20 learners. The learners
              represent mixed proficiency levels, requiring differentiated
              instruction, continuous encouragement, and meaningful
              opportunities for participation.
            </p>
            <p>
              This teaching-learning context has strengthened my belief that
              effective English language teaching requires flexibility,
              learner-centred planning, and reflective decision-making rather
              than relying solely on textbooks or predetermined teaching
              routines.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
