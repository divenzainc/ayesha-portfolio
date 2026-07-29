import Image from "next/image";

export function PhilosophyPageHeader() {
  return (
    <section className="bg-background px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Teaching with Purpose
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            My Teaching Philosophy in Practice
          </h1>
          <blockquote className="mt-6 border-l-4 border-primary pl-5 text-xl font-medium leading-8 text-muted-foreground sm:text-2xl sm:leading-9">
            &quot;Learning begins with the learner, not the lesson.&quot;
          </blockquote>
        </div>

        <div className="relative aspect-[16/10] overflow-hidden rounded-lg border bg-muted shadow-xl sm:aspect-[16/8] lg:aspect-[16/7]">
          <Image
            src="/outdoor-classroom.png"
            alt="Outdoor classroom setting with desks and learning materials"
            fill
            priority
            sizes="(min-width: 1024px) 1216px, 94vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(2,6,23,0.42)_100%)]" />
        </div>
      </div>
    </section>
  );
}
