import { GraduationCap, Quote } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  const credentials = [
    "Government Teacher of English",
    "Former English Instructor - Sri Lanka Military Academy (SLMA)",
    "Former Visiting Lecturer - Sri Lanka Institute of Advanced Technological Education (SLIATE)",
    "Official Evaluator - GCE Ordinary Level (O/L) Examination, Department of Examinations, Sri Lanka",
    "M.A. (Linguistics), University of Kelaniya",
    "M.A. TESL Candidate, The Open University of Sri Lanka",
    "Reflective English Language Educator",
  ];

  return (
    <section className="relative flex w-full overflow-hidden bg-background lg:min-h-[calc(100svh-4rem)]">
      <Image
        src="/hero-academic-bg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-sky-950/28 dark:bg-sky-950/44" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.68)_0%,rgba(14,165,233,0.3)_48%,rgba(37,99,235,0.12)_100%)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-start gap-8 px-4 py-6 sm:px-6 sm:py-10 md:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(340px,480px)] lg:px-8 lg:py-16">
        <div className="flex max-w-3xl flex-col gap-4 text-center sm:text-left lg:gap-5">
          <p className="mx-auto w-fit border-b-2 border-sky-300 pb-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-200 sm:mx-0 sm:text-sm sm:tracking-[0.22em]">
            Welcome to My Portfolio
          </p>

          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white min-[380px]:text-3xl sm:text-4xl lg:text-5xl">
              FROM EXPERIENCE TO REFLECTION
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-7 text-sky-50 sm:mx-0 sm:text-2xl sm:leading-9">
              The Making of a Reflective English Language Educator
            </p>
          </div>

          <blockquote className="mx-auto max-w-2xl space-y-2 border-l-2 border-sky-300/50 pl-4 text-left text-sm italic leading-6 text-sky-100/90 sm:mx-0 sm:text-base sm:leading-7">
            <Quote className="h-6 w-6 text-sky-300/70" aria-hidden="true" />
            <p className="font-semibold not-italic text-sky-100">
              Every Classroom Leaves a Footprint
            </p>
            <p>
              Every classroom has changed me. Some taught me patience. Some strengthened my
              confidence. Some challenged my assumptions. Some reminded me that teaching is
              not simply about completing lessons; it is about inspiring people.
            </p>
            <p>
              Every learner has contributed to the educator I continue to become. This
              portfolio is the story of those classrooms, those learners, and the
              professional journey they shaped!
            </p>
          </blockquote>

          <div className="max-w-2xl rounded-2xl border border-white/20 bg-slate-950/35 p-5 text-left text-sky-50 backdrop-blur-sm sm:p-6">
            <p className="text-base font-semibold uppercase tracking-[0.28em] text-sky-100 sm:text-lg">
              AYESHA NILMINI SUMANASENA
            </p>
            <div className="mt-4 grid gap-x-6 gap-y-3 text-sm leading-6 text-sky-50/90 sm:text-base md:grid-cols-2">
              {credentials.map((credential) => (
                <div key={credential} className="flex items-start gap-3">
                  <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" aria-hidden="true" />
                  <p>{credential}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-[17rem] justify-center min-[380px]:max-w-xs sm:max-w-md lg:max-w-none lg:justify-end">
          <div className="absolute -inset-3 rounded-full bg-primary/15 blur-2xl" />
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-white/40 bg-background shadow-2xl">
            <Image
              src="/Ayesha.jpeg"
              alt="Ayesha wearing academic regalia after completing her master's degree"
              fill
              sizes="(min-width: 1024px) 480px, (min-width: 640px) 448px, 90vw"
              className="object-cover object-[58%_6%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
