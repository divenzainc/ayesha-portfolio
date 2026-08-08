type ReferencePart = { text: string; italic?: boolean };

const references: ReferencePart[][] = [
  [
    { text: "Brookfield, S. D. (2017). " },
    { text: "Becoming a critically reflective teacher", italic: true },
    { text: " (2nd ed.). Jossey-Bass." },
  ],
  [
    { text: "Farrell, T. S. C. (2015). " },
    {
      text: "Promoting teacher reflection in second language education: A framework for TESOL professionals",
      italic: true,
    },
    { text: ". Routledge." },
  ],
  [
    {
      text: "Larrivee, B. (2008). Development of a tool to assess teachers' level of reflective practice. ",
    },
    { text: "Reflective Practice", italic: true },
    { text: ", " },
    { text: "9", italic: true },
    { text: "(3), 341–360." },
  ],
  [
    { text: "Schön, D. A. (1983). " },
    {
      text: "The reflective practitioner: How professionals think in action",
      italic: true,
    },
    { text: ". Basic Books." },
  ],
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
        
        <div className="mt-8 grid gap-4 text-sm leading-7 text-muted-foreground">
          {references.map((reference) => (
            <div
              key={reference.map((part) => part.text).join("")}
              className="rounded-lg border bg-muted/35 p-4"
            >
              <p style={{ textIndent: "-1.5rem", paddingLeft: "1.5rem" }}>
                {reference.map((part, index) =>
                  part.italic ? (
                    <em key={index}>{part.text}</em>
                  ) : (
                    <span key={index}>{part.text}</span>
                  )
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
