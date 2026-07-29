import {
  BookOpenCheckIcon,
  BriefcaseBusinessIcon,
  GraduationCapIcon,
} from "lucide-react";

const milestones = [
  {
    year: "2008",
    title: "Government Teaching Appointment",
    description: "Appointed as a Government Teacher of English.",
    icon: BriefcaseBusinessIcon,
  },
  {
    year: "2009-2010",
    title: "English Instructor",
    description:
      "Served as an English Instructor at the Sri Lanka Military Academy while remaining in government service.",
    icon: BookOpenCheckIcon,
  },
  {
    year: "2010-2012",
    title: "Teacher Training",
    description:
      "Completed the Teacher Training Programme at the National College of Education, Peradeniya.",
    icon: GraduationCapIcon,
  },
  {
    year: "2013-2016",
    title: "BA in English",
    description: "Completed the Bachelor of Arts (General) in English.",
    icon: GraduationCapIcon,
  },
  {
    year: "2017-2019",
    title: "Postgraduate Education",
    description:
      "Completed the Postgraduate Diploma in Education (PGDE), National Institute of Education.",
    icon: GraduationCapIcon,
  },
  {
    year: "2020 onwards",
    title: "Continuing Development",
    description:
      "Continued professional development through specialised courses, including a Diploma in Psychology and a Short Course in Research Methodology.",
    icon: BookOpenCheckIcon,
  },
  {
    year: "2021-2025",
    title: "Visiting Lecturer at SLIATE",
    description:
      "Served as a Visiting Lecturer at SLIATE, teaching Psychology, Listening Skills, and English-related courses.",
    icon: BriefcaseBusinessIcon,
  },
  {
    year: "2023-2026",
    title: "MA in Linguistics",
    description:
      "Successfully completed the Master of Arts in Linguistics at the University of Kelaniya.",
    icon: GraduationCapIcon,
  },
  {
    year: "2025-Present",
    title: "MA TESL",
    description:
      "Reading for the Master of Arts in Teaching English as a Second Language (MA TESL), The Open University of Sri Lanka.",
    icon: BookOpenCheckIcon,
  },
];

export function ProfessionalJourneySection() {
  return (
    <section id="journey" className="bg-muted/45 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.36fr_0.64fr]">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            1.3 Professional Journey
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Milestones across teaching, study, and professional service.
          </h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground">
            A timeline of growth from classroom appointment to postgraduate
            study, shaped by service, training, and reflective professional
            development.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-5 top-0 h-full w-px bg-border sm:left-1/2" />
          <div className="grid gap-6">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isRight = index % 2 === 1;

              return (
                <article
                  key={`${milestone.year}-${milestone.title}`}
                  className="relative grid gap-4 sm:grid-cols-[1fr_3rem_1fr] sm:items-center"
                >
                  <div
                    className={
                      isRight
                        ? "hidden sm:block"
                        : "ml-14 rounded-lg border bg-background p-5 shadow-sm transition-colors hover:border-primary/50 sm:ml-0"
                    }
                  >
                    {!isRight && (
                      <MilestoneContent
                        year={milestone.year}
                        title={milestone.title}
                        description={milestone.description}
                      />
                    )}
                  </div>

                  <div className="absolute left-0 top-1 flex size-10 items-center justify-center rounded-full border bg-primary text-primary-foreground shadow-sm sm:static sm:mx-auto">
                    <Icon data-icon="inline-start" />
                  </div>

                  <div
                    className={
                      isRight
                        ? "ml-14 rounded-lg border bg-background p-5 shadow-sm transition-colors hover:border-primary/50 sm:ml-0"
                        : "hidden sm:block"
                    }
                  >
                    {isRight && (
                      <MilestoneContent
                        year={milestone.year}
                        title={milestone.title}
                        description={milestone.description}
                      />
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function MilestoneContent({
  year,
  title,
  description,
}: {
  year: string;
  title: string;
  description: string;
}) {
  return (
    <>
      <p className="text-sm font-semibold text-primary">{year}</p>
      <h3 className="mt-2 text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">{description}</p>
    </>
  );
}
