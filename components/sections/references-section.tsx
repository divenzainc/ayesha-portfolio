const references = [
  "Brookfield, S. D. (2017). Becoming a critically reflective teacher (2nd ed.). Jossey-Bass.",
  "Farrell, T. S. C. (2015). Promoting teacher reflection in second language education: A framework for TESOL professionals. Routledge.",
  "Larrivee, B. (2008). Development of a tool to assess teachers' level of reflective practice. Reflective Practice, 9(3), 341-360.",
  "Schon, D. A. (1983). The reflective practitioner: How professionals think in action. Basic Books.",
];

export function ReferencesSection() {
  return (
    <section className="bg-background px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          References
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
          Sources for this chapter
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
