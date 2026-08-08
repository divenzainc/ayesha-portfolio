import Image from "next/image";

export function ProfessionalIdentitySection() {
  return (
    <section id="identity" className="bg-muted/45 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[0.38fr_0.62fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            1.1 My Professional Identity
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            A career shaped by language, reflection, and learner growth.
          </h2>
          <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-lg border bg-background shadow-lg lg:aspect-[5/4]">
            <Image
              src="/kelaniya-convocation.jpeg"
              alt="Ayesha receiving her University of Kelaniya convocation certificate"
              fill
              sizes="(min-width: 1024px) 440px, 92vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid gap-5 text-base leading-8 text-muted-foreground">
          <h3 className="text-xl font-semibold tracking-tight text-foreground">
            Who Am I as an Educator?
          </h3>
          <p>
            I believe that language learning should be meaningful, inclusive,
            and learner-centred. My classroom encourages active participation,
            collaboration, creativity, and critical thinking while creating a
            safe environment where every learner feels respected and confident
            to communicate in English.
          </p>
          <p className="border-l-4 border-primary bg-background px-5 py-4 text-foreground">
            Reflection is at the heart of my professional practice. Every
            lesson provides an opportunity to evaluate my teaching, celebrate
            learners&apos; progress, and identify ways to improve. I view
            professional learning as a continuous journey rather than a final
            destination, and I remain committed to developing my knowledge and
            practice for the benefit of every learner I teach.
          </p>
        </div>
      </div>
    </section>
  );
}
