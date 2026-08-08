import type { ReactNode } from "react";

const references: ReactNode[] = [
  <>
    Black, P., &amp; Wiliam, D. (1998). Assessment and classroom learning.{" "}
    <em>Assessment in Education: Principles, Policy &amp; Practice</em>,{" "}
    <em>5</em>(1), 7–74.{" "}
    <a
      href="https://doi.org/10.1080/0969595980050102"
      target="_blank"
      rel="noreferrer"
      className="text-primary underline underline-offset-2"
    >
      https://doi.org/10.1080/0969595980050102
    </a>
  </>,
  <>
    Richards, J. C., &amp; Rodgers, T. S. (2014).{" "}
    <em>Approaches and methods in language teaching</em> (3rd ed.). Cambridge
    University Press.
  </>,
  <>
    Schön, D. A. (1983).{" "}
    <em>The reflective practitioner: How professionals think in action</em>.
    Basic Books.
  </>,
  <>
    Vygotsky, L. S. (1978).{" "}
    <em>Mind in society: The development of higher psychological processes</em>.
    Harvard University Press.
  </>,
];

export function PhilosophyReferencesSection() {
  return (
    <section className="bg-background px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto w-full max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          References
        </p>
        <ol className="mt-8 grid gap-4 text-sm leading-7 text-muted-foreground">
          {references.map((reference, index) => (
            <li key={index} className="rounded-lg border bg-muted/35 p-4">
              <p className="-indent-8 pl-8">{reference}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
