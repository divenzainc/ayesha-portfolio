import Image from "next/image";

export function LookingAheadSection() {
  return (
    <section id="reflection" className="bg-muted/45 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col gap-5">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            1.5 Looking Ahead
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Reflection as a continuing professional journey.
          </h2>
          <p className="text-base leading-8 text-muted-foreground">
            Every stage of my professional journey has reinforced my belief that
            an effective teacher is also a lifelong learner. The Teaching
            Practicum has provided valuable opportunities to examine my
            classroom practices critically, connect educational theory with real
            teaching experiences, and develop greater confidence as a reflective
            practitioner. I view this portfolio not only as evidence of
            completing the practicum requirements but also as a representation
            of my continuing professional journey as an English language
            educator committed to meaningful learning and continuous
            improvement.
          </p>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-lg border bg-background shadow-lg">
          <Image
            src="/reflective-practice.png"
            alt="A reflective study desk with journal and academic books"
            fill
            sizes="(min-width: 1024px) 520px, 92vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
