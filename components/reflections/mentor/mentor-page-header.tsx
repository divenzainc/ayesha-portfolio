import { HeartHandshakeIcon } from "lucide-react";

export function MentorPageHeader() {
  return (
    <section className="bg-background px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[0.62fr_0.38fr] lg:items-end">
        <div className="flex flex-col gap-5">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Reflections / Mentor
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-6xl">
            Growing Through Mentorship
          </h1>
          <blockquote className="max-w-3xl border-l-4 border-primary pl-5 text-xl font-medium leading-8 text-muted-foreground">
            &quot;A mentor not only observes teaching but also nurtures professional
            growth through guidance and encouragement.&quot;
          </blockquote>
        </div>

        <div className="rounded-lg border border-blue-200 bg-blue-50 p-6 text-blue-900 shadow-sm dark:border-blue-800 dark:bg-blue-950/35 dark:text-blue-100">
          <HeartHandshakeIcon data-icon="inline-start" />
          <p className="mt-4 text-2xl font-semibold">2 Mentor Observations</p>
          <p className="mt-2 text-sm leading-6 text-blue-800/80 dark:text-blue-100/80">
            Guidance, encouragement, and classroom feedback connected with
            lesson evidence.
          </p>
        </div>
      </div>
    </section>
  );
}
