import Image from "next/image";

import { Button } from "@/components/ui/button";

export function HeroSection() {
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

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-8 px-4 py-8 sm:px-6 sm:py-12 md:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(340px,480px)] lg:px-8 lg:py-20">
        <div className="flex max-w-3xl flex-col gap-5 text-center sm:text-left lg:gap-6">
          <p className="mx-auto w-fit border-b-2 border-sky-300 pb-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-200 sm:mx-0 sm:text-sm sm:tracking-[0.22em]">
            Welcome to My Portfolio
          </p>

          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white min-[380px]:text-4xl sm:text-6xl lg:text-7xl">
              FROM EXPERIENCE TO REFLECTION
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-7 text-sky-50 sm:mx-0 sm:text-2xl sm:leading-9">
              The Making of a Reflective English Language Educator
            </p>
          </div>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Explore Portfolio
            </Button>
            <Button variant="outline">View Reflection Journey</Button>
          </div>

          <div className="grid max-w-2xl grid-cols-1 gap-2 pt-2 text-left text-sm text-sky-50/90 sm:grid-cols-3 sm:gap-3 sm:pt-4">
            <p className="border-l border-sky-300 pl-4">English language educator</p>
            <p className="border-l border-sky-300 pl-4">Reflective teaching practice</p>
            <p className="border-l border-sky-300 pl-4">Master&apos;s degree journey</p>
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
