import {
  HandshakeIcon,
  LightbulbIcon,
  Repeat2Icon,
  ScanSearchIcon,
  SproutIcon,
} from "lucide-react";

const beliefs = [
  {
    title: "Every learner deserves to participate.",
    theory: "Vygotsky's Social Constructivist Theory",
    icon: HandshakeIcon,
    body: [
      "Learning should never be limited to the few learners who confidently volunteer answers. Every learner deserves opportunities to think, question, collaborate, communicate, and succeed.",
      "During the Teaching Practicum, I observed that learners who were initially reluctant to communicate became increasingly confident when activities required them to work collaboratively with their peers.",
    ],
  },
  {
    title: "Learning becomes meaningful when it connects with real life.",
    theory: "Communicative Language Teaching and Task-Based Language Teaching",
    icon: LightbulbIcon,
    body: [
      "Language is not learned through memorising isolated grammar rules. It develops when learners use English to communicate for meaningful purposes.",
      "Learners responded enthusiastically to maps, classroom games, discussions, presentations, and collaborative tasks because these experiences enabled them to connect English with their own lives.",
    ],
  },
  {
    title: "Reflection transforms teaching into professional growth.",
    theory: "Schon's Reflective Practitioner",
    icon: Repeat2Icon,
    body: [
      "Teaching improves when teachers reflect critically on their own practice.",
      "Reflection enabled me to recognise strengths, identify challenges, and modify subsequent lessons according to learners' needs.",
    ],
  },
  {
    title: "Assessment should support learning, not simply measure it.",
    theory: "Assessment for Learning",
    icon: ScanSearchIcon,
    body: [
      "Assessment is most valuable when it helps learners improve rather than merely records their achievement.",
      "Classroom observation, questioning, peer assessment, self-assessment, exit tickets, and constructive feedback helped me identify misconceptions promptly and adapt my teaching.",
    ],
  },
  {
    title: "Teachers remain lifelong learners.",
    theory: "Continuous professional development",
    icon: SproutIcon,
    body: [
      "Teachers continue learning long after they begin teaching.",
      "Professional growth is demonstrated through the willingness to question existing practices, embrace new knowledge, and continuously improve for the benefit of learners.",
    ],
  },
];

export function PhilosophyBeliefsSection() {
  return (
    <section className="bg-background px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-9">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Five Interconnected Beliefs
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Principles that guide every lesson and professional decision.
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {beliefs.map((belief, index) => {
            const Icon = belief.icon;

            return (
              <article
                key={belief.title}
                className="group rounded-lg border bg-muted/30 p-5 transition-colors hover:border-primary/50 hover:bg-background sm:p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Icon data-icon="inline-start" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary">
                      Belief {index + 1}
                    </p>
                    <h3 className="mt-1 text-xl font-semibold leading-7 text-foreground">
                      {belief.title}
                    </h3>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 text-sm leading-7 text-muted-foreground">
                  {belief.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <p className="mt-5 rounded-md border bg-background px-4 py-3 text-sm font-medium text-foreground">
                  {belief.theory}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
