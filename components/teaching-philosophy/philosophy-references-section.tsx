const references = [
  "Black, P., & Wiliam, D. (1998). Assessment and classroom learning. Assessment in Education: Principles, Policy & Practice, 5(1), 7-74.",
  "Richards, J. C., & Rodgers, T. S. (2014). Approaches and methods in language teaching (3rd ed.). Cambridge University Press.",
  "Schon, D. A. (1983). The reflective practitioner: How professionals think in action. Basic Books.",
  "Vygotsky, L. S. (1978). Mind in society: The development of higher psychological processes. Harvard University Press.",
];

export function PhilosophyReferencesSection() {
  return (
    <section className="bg-background px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto w-full max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          References
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
          APA 7 sources
        </h2>
        <ol className="mt-8 grid gap-4 text-sm leading-7 text-muted-foreground">
          {references.map((reference) => (
            <li key={reference} className="rounded-lg border bg-muted/35 p-4">
              {reference}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
