import {
  HandshakeIcon,
  LightbulbIcon,
  Repeat2Icon,
  ScanSearchIcon,
  SproutIcon,
} from "lucide-react";
import Image from "next/image";

const beliefs = [
  {
    title: "Every learner deserves to participate.",
    theory: "Vygotsky's Social Constructivist Theory",
    icon: HandshakeIcon,
    image: "/teaching-1.jpg",
    imageAlt:
      "Ayesha with a young student in the classroom, a warm moment of encouragement",
    body: [
      "Learning should never be limited to the few learners who confidently volunteer answers. Every learner deserves opportunities to think, question, collaborate, communicate, and succeed.",
      "During the Teaching Practicum, I observed that learners who were initially reluctant to communicate became increasingly confident when activities required them to work collaboratively with their peers.",
    ],
  },
  {
    title: "Learning becomes meaningful when it connects with real life.",
    theory: "Communicative Language Teaching and Task-Based Language Teaching",
    icon: LightbulbIcon,
    image: "/teaching-6.jpeg",
    imageAlt:
      "Learners writing collaboratively on the blackboard during a hands-on classroom task",
    body: [
      "Language is not learned through memorising isolated grammar rules. It develops when learners use English to communicate for meaningful purposes.",
      "Learners responded enthusiastically to maps, classroom games, discussions, presentations, and collaborative tasks because these experiences enabled them to connect English with their own lives.",
    ],
  },
  {
    title: "Reflection transforms teaching into professional growth.",
    theory: "Schon's Reflective Practitioner",
    icon: Repeat2Icon,
    image: "/teaching-4.jpeg",
    imageAlt: "Ayesha standing thoughtfully in front of a full assembly of learners",
    body: [
      "Teaching improves when teachers reflect critically on their own practice.",
      "Reflection enabled me to recognise strengths, identify challenges, and modify subsequent lessons according to learners' needs.",
    ],
  },
  {
    title: "Assessment should support learning, not simply measure it.",
    theory: "Assessment for Learning",
    icon: ScanSearchIcon,
    image: "/teaching-5.jpeg",
    imageAlt:
      "Ayesha closely guiding a student at the blackboard, offering individual feedback",
    body: [
      "Assessment is most valuable when it helps learners improve rather than merely records their achievement.",
      "Classroom observation, questioning, peer assessment, self-assessment, exit tickets, and constructive feedback helped me identify misconceptions promptly and adapt my teaching.",
    ],
  },
  {
    title: "Teachers remain lifelong learners.",
    theory: "Continuous professional development",
    icon: SproutIcon,
    image: "/teaching-3.jpeg",
    imageAlt:
      "Students holding hand-lettered signs with messages of encouragement and growth",
    body: [
      "Teachers continue learning long after they begin teaching.",
      "Professional growth is demonstrated through the willingness to question existing practices, embrace new knowledge, and continuously improve for the benefit of learners.",
    ],
  },
];

export function PhilosophyBeliefsSection() {
  return (
    <section className="bg-background px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-14 sm:gap-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Five Interconnected Beliefs
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Principles that guide every lesson and professional decision.
          </h2>
        </div>

        <div className="flex flex-col gap-14 sm:gap-20">
          {beliefs.map((belief, index) => {
            const Icon = belief.icon;
            const reversed = index % 2 === 1;

            return (
              <article
                key={belief.title}
                className="border-t pt-14 first:border-t-0 first:pt-0 sm:pt-20"
              >
                <div
                  className={`grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12 ${
                    reversed ? "lg:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative aspect-4/3 overflow-hidden rounded-2xl border bg-muted shadow-lg">
                    <Image
                      src={belief.image}
                      alt={belief.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 560px, 92vw"
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <div className="flex items-center gap-3">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <Icon data-icon="inline-start" />
                      </span>
                      <p className="text-sm font-semibold text-primary">
                        Belief {index + 1}
                      </p>
                    </div>

                    <h3 className="mt-4 text-2xl font-semibold leading-8 text-foreground sm:text-3xl">
                      {belief.title}
                    </h3>

                    <div className="mt-5 grid gap-4 text-base leading-7 text-muted-foreground">
                      {belief.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>

                    <p className="mt-5 inline-block rounded-md border bg-muted/30 px-4 py-2 text-sm font-medium text-foreground">
                      {belief.theory}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
