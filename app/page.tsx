import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-1 items-center px-4 py-16 sm:px-6 lg:px-8">
      <section className="mx-auto flex w-full max-w-5xl flex-col gap-8 text-center sm:text-left">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-medium text-primary">Teacher Portfolio</p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            A clean responsive foundation for Ayesha&apos;s teaching portfolio.
          </h1>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            shadcn/ui is configured with the requested white, sky, and blue palette.
            The theme switcher in the header toggles between light and dark mode.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button>Start building sections</Button>
          <Button variant="outline">Review theme setup</Button>
        </div>
      </section>
    </main>
  );
}
