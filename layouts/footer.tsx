import Link from "next/link";
import {
  GraduationCapIcon,
  MailIcon,
  MessageCircleIcon,
  PhoneIcon,
} from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    action: "Send an email",
    value: "pgie-tesl-25-d124@ousl.lk",
    href: "mailto:pgie-tesl-25-d124@ousl.lk",
    icon: MailIcon,
  },
  {
    label: "Call",
    action: "Call now",
    value: "+94 76 365 2864",
    href: "tel:+94763652864",
    icon: PhoneIcon,
  },
  {
    label: "WhatsApp",
    action: "Chat on WhatsApp",
    value: "+94 76 365 2864",
    href: "https://wa.me/94763652864",
    icon: MessageCircleIcon,
  },
];

const footerLinks = [
  { href: "/", label: "Home - Learner Profile" },
  { href: "/teaching-philosophy", label: "Teaching Philosophy" },
  { href: "/depth-reflection", label: "Depth Reflection" },
  { href: "/artefacts", label: "Artefacts" },
  { href: "/log-book", label: "Log Book" },
  { href: "/references", label: "References" },
  { href: "/appendices", label: "Appendices" },
];

const reflectionLinks = [
  { href: "/reflections/supervisor", label: "Supervisor" },
  { href: "/reflections/mentor", label: "Mentor" },
  { href: "/reflections/student", label: "Student" },
];

export function Footer() {
  return (
    <footer className="border-t bg-muted/45">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <GraduationCapIcon data-icon="inline-start" />
            </div>
            <div>
              <p className="text-base font-semibold text-foreground">
                Ayesha Nilmini Sumanasena
              </p>
              <p className="text-sm text-muted-foreground">
                Reflective English Language Educator
              </p>
            </div>
          </div>
          <p className="max-w-xl text-sm leading-7 text-muted-foreground">
            Teaching, reflection, and professional growth through the MA TESL
            practicum journey.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground">
              Portfolio Links
            </p>
            <nav className="mt-4 grid gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm leading-6 text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground">
              Reflection
            </p>
            <nav className="mt-4 grid gap-2">
              {reflectionLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm leading-6 text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground">
              Contact
            </p>
            <div className="mt-4 grid gap-2">
              {contactLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.label === "WhatsApp" ? "_blank" : undefined}
                    rel={link.label === "WhatsApp" ? "noreferrer" : undefined}
                    aria-label={`${link.action}: ${link.value}`}
                    className="group flex items-center gap-3 rounded-lg border bg-background px-3 py-2.5 transition-colors hover:border-primary/50 hover:bg-primary hover:text-primary-foreground"
                  >
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-muted text-primary transition-colors group-hover:bg-white/15 group-hover:text-primary-foreground">
                      <Icon data-icon="inline-start" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold leading-5">{link.action}</p>
                      <p className="truncate whitespace-nowrap text-xs text-muted-foreground transition-colors group-hover:text-primary-foreground/85">
                        {link.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t pt-5 text-sm text-muted-foreground lg:col-span-2">
          <p>© 2026 Ayesha. Portfolio built for teaching, learning, and reflection.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
