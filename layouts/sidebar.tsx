"use client";

import Link from "next/link";
import { XIcon } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const portfolioPages = [
  {
    href: "/learner-profile",
    label: "Learner Profile",
    hover: "hover:border-sky-300 hover:bg-sky-500 hover:text-white",
  },
  {
    href: "/teaching-philosophy",
    label: "Teaching Philosophy",
    hover: "hover:border-blue-300 hover:bg-blue-600 hover:text-white",
  },
  {
    href: "/reflections",
    label: "Reflections",
    hover: "hover:border-cyan-300 hover:bg-cyan-500 hover:text-white",
  },
  {
    href: "/depth-reflection",
    label: "Depth Reflection",
    hover: "hover:border-indigo-300 hover:bg-indigo-500 hover:text-white",
  },
  {
    href: "/artefacts",
    label: "Artefacts",
    hover: "hover:border-violet-300 hover:bg-violet-500 hover:text-white",
  },
  {
    href: "/log-book",
    label: "Log Book",
    hover: "hover:border-teal-300 hover:bg-teal-500 hover:text-white",
  },
  {
    href: "/summary",
    label: "Summary",
    hover: "hover:border-emerald-300 hover:bg-emerald-500 hover:text-white",
  },
  {
    href: "/references",
    label: "References",
    hover: "hover:border-amber-300 hover:bg-amber-500 hover:text-slate-950",
  },
  {
    href: "/appendices",
    label: "Appendices",
    hover: "hover:border-rose-300 hover:bg-rose-500 hover:text-white",
  },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  React.useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={cn(
          "fixed inset-x-0 bottom-0 top-16 z-40 bg-slate-950/45 transition-opacity",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        aria-hidden="true"
        onClick={onClose}
      />

      <aside
        id="portfolio-sidebar"
        className={cn(
          "fixed bottom-0 left-0 top-16 z-50 flex w-[min(22rem,86vw)] flex-col border-r bg-background shadow-2xl transition-transform duration-300",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
        aria-hidden={!isOpen}
      >
        <div className="flex h-16 items-center justify-between border-b px-4">
          <div className="flex flex-col leading-none">
            <span className="text-base font-semibold text-foreground">Reflective Portfolio</span>
            <span className="text-xs font-medium text-muted-foreground">
              Teaching practicum chapters
            </span>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label="Close navigation menu"
            onClick={onClose}
          >
            <XIcon data-icon="inline-start" />
          </Button>
        </div>

        <nav className="scrollbar-hidden flex flex-1 flex-col gap-2 overflow-y-auto px-4 py-5">
          {portfolioPages.map((page, index) => (
            <Link
              key={page.href}
              href={page.href}
              className={cn(
                "group flex items-center justify-between rounded-lg border bg-muted/25 px-4 py-3 text-sm font-medium text-foreground transition-colors",
                page.hover
              )}
              onClick={onClose}
            >
              <span>{page.label}</span>
              <span className="text-xs text-muted-foreground transition-colors group-hover:text-primary-foreground/80">
                {String(index + 1).padStart(2, "0")}
              </span>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
