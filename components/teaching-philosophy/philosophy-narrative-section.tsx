import Image from "next/image";

export function PhilosophyNarrativeSection() {
  return (
    <section className="bg-muted/45 px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[0.36fr_0.64fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Teaching Philosophy
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            A philosophy shaped by learners, context, and reflection.
          </h2>
        </div>

        <div className="grid gap-5 text-base leading-8 text-muted-foreground">
          <p>
            What I Believe About Learning ?
            <br />
            "A teacher's philosophy is not built in a university lecture hall; it is shaped by every learner, every classroom and every reflection."
            
          </p>
          <p>
            Today, I understand that meaningful learning begins long before a
            lesson starts. It begins with understanding learners: their
            backgrounds, emotions, abilities, interests, aspirations, and the
            context in which learning takes place.
          </p>

          <figure className="my-2">
            <div className="relative aspect-16/11 overflow-hidden rounded-2xl border shadow-lg">
              <Image
                src="/teaching-2.jpeg"
                alt="Ayesha seated with a row of secondary school learners under a tree"
                fill
                sizes="(min-width: 1024px) 780px, 92vw"
                className="object-cover object-top"
              />
            </div>
            <figcaption className="mt-3 text-sm text-muted-foreground">
              With learners during the Teaching Practicum — every classroom brought
              a different group of learners to understand.
            </figcaption>
          </figure>

          <p>
            Teaching English in rural Sri Lankan classrooms has shown me that no
            two learners learn in exactly the same way. Some learners confidently
            express their ideas, while others require encouragement before
            participating. Some understand concepts through reading, whereas
            others learn more effectively through discussion, movement, visual
            resources, or collaborative activities.
          </p>
          <p>
            The Teaching Practicum further strengthened this understanding.
            Planning lessons, teaching Grade 6 learners, receiving constructive
            feedback from my university supervisor, mentor, and peer observer,
            and writing pre- and post-teaching reflections enabled me to connect
            educational theory with authentic classroom practice.
          </p>
        </div>
      </div>
    </section>
  );
}
