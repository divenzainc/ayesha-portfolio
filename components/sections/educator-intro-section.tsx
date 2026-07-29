import Image from "next/image";

export function EducatorIntroSection() {
  return (
    <section id="educator" className="bg-background px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="flex flex-col gap-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            The Educator Behind the Classroom
          </p>
          <blockquote className="border-l-4 border-primary pl-5 text-2xl font-medium leading-10 text-foreground sm:text-4xl sm:leading-[1.25]">
            &quot;Education is not where my journey began; it is where I continue
            to grow.&quot;
          </blockquote>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            This portfolio presents the professional growth, teaching context,
            and reflective practice of Ayesha Nilmini Sumanasena as an English
            language educator.
          </p>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-lg border bg-muted shadow-xl sm:max-w-md lg:max-w-lg">
          <Image
            src="/Ayesha.jpeg"
            alt="Ayesha Nilmini Sumanasena in professional graduation portrait"
            fill
            sizes="(min-width: 1024px) 512px, (min-width: 640px) 448px, 92vw"
            className="object-cover object-[58%_8%]"
          />
        </div>
      </div>
    </section>
  );
}
