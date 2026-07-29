export function MentorIntroductionSection() {
  return (
    <section className="bg-muted/45 px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[0.34fr_0.66fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Introduction
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Mentorship as practical professional guidance.
          </h2>
        </div>
        <p className="text-base leading-8 text-muted-foreground sm:text-lg">
          Throughout the Teaching Practicum, my mentor observed two classroom
          lessons and provided constructive feedback based on my daily teaching
          practice. These observations offered valuable insights into my
          classroom management, lesson delivery, learner engagement, and
          instructional strategies. The guidance I received encouraged me to
          reflect on my teaching practices and make continuous improvements to
          better support learners&apos; language development.
        </p>
      </div>
    </section>
  );
}
