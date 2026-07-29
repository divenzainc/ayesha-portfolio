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
          <p>
            I am Ayesha Nilmini Sumanasena, a government Teacher of English in
            Sri Lanka with over 18 years of teaching experience in secondary
            education. Throughout my career, I have been committed to creating
            meaningful learning experiences that support learners with diverse
            backgrounds, abilities, and aspirations.
          </p>
          <p>
            Alongside my school teaching career, I have also served as a
            Visiting Lecturer at the Sri Lanka Institute of Advanced
            Technological Education (SLIATE), where I taught Psychology,
            Listening Skills, and English-related courses. These experiences
            have enabled me to work with learners across different educational
            settings while strengthening my understanding of language education
            and teacher development.
          </p>
          <p>
            My professional journey reflects a commitment to lifelong learning.
            I have continued to expand my academic and professional knowledge
            through postgraduate study, teacher education, and reflective
            practice. Completing the Master of Arts in Linguistics at the
            University of Kelaniya and currently reading for the Master of Arts
            in Teaching English as a Second Language (MA TESL) at the
            Postgraduate Institute of English, The Open University of Sri Lanka,
            has deepened both my theoretical understanding and classroom
            practice.
          </p>
          <p className="border-l-4 border-primary bg-background px-5 py-4 text-foreground">
            For me, teaching is not simply the delivery of knowledge. It is a
            continuous process of learning, reflection, adaptation, and
            professional growth.
          </p>
        </div>
      </div>
    </section>
  );
}
