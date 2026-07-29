export function StudentIntroductionSection() {
  return (
    <section className="bg-muted/45 px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[0.34fr_0.66fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Introduction
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Learning from classroom practice through a colleague&apos;s lens.
          </h2>
        </div>
        <p className="text-base leading-8 text-muted-foreground sm:text-lg">
          Peer observation was an important component of my Teaching Practicum,
          providing opportunities to observe classroom practices from a
          colleague&apos;s perspective and reflect on different approaches to
          English language teaching. It strengthened my ability to analyse
          teaching critically, appreciate effective classroom practices, and
          identify strategies that could further enhance my own professional
          practice.
        </p>
      </div>
    </section>
  );
}
