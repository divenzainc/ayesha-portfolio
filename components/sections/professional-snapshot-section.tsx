const snapshots = [
  ["Current Position", "Government Teacher of English (Sri Lanka)"],
  ["Teaching Experience", "Over 18 years"],
  ["Teaching Context", "Secondary English as a Second Language (Grades 1-11)"],
  [
    "Additional Professional Experience",
    "Visiting Lecturer, Sri Lanka Institute of Advanced Technological Education (SLIATE)",
  ],
];

const qualifications = [
  "Teacher Training Diploma - National College of Education, Peradeniya",
  "Bachelor of Arts (General) in English",
  "Postgraduate Diploma in Education (NIE)",
  "Diploma in Psychology",
  "MA in Linguistics - University of Kelaniya",
  "MA TESL (Reading) - The Open University of Sri Lanka",
];

export function ProfessionalSnapshotSection() {
  return (
    <section id="snapshot" className="bg-background px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[0.45fr_0.55fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            1.4 Professional Snapshot
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            A concise view of role, experience, and academic preparation.
          </h2>
        </div>

        <div className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            {snapshots.map(([label, value]) => (
              <article key={label} className="rounded-lg border bg-muted/35 p-5">
                <p className="text-sm font-semibold text-primary">{label}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{value}</p>
              </article>
            ))}
          </div>

          <article className="rounded-lg border bg-primary p-5 text-primary-foreground">
            <p className="text-sm font-semibold uppercase tracking-[0.16em]">
              Academic Qualifications
            </p>
            <ul className="mt-4 grid gap-3 text-sm leading-6 sm:grid-cols-2">
              {qualifications.map((qualification) => (
                <li key={qualification} className="border-l border-white/45 pl-3">
                  {qualification}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
