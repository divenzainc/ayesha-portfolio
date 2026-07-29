"use client";

import Link from "next/link";
import { SearchIcon, XIcon } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const searchablePages = [
  { href: "/", label: "Home - Learner Profile" },
  { href: "/teaching-philosophy", label: "Teaching Philosophy" },
  { href: "/reflections/supervisor", label: "Supervisor Reflection" },
  { href: "/reflections/mentor", label: "Mentor Reflection" },
  { href: "/reflections/student", label: "Student Reflection" },
  { href: "/depth-reflection", label: "Depth Reflection" },
  { href: "/artefacts", label: "Artefacts" },
  { href: "/log-book", label: "Log Book" },
  { href: "/references", label: "References" },
  { href: "/appendices", label: "Appendices" },
];

export function NavbarSearch() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const desktopInputRef = React.useRef<HTMLInputElement>(null);
  const mobileInputRef = React.useRef<HTMLInputElement>(null);

  const suggestions = searchablePages.filter((page) =>
    page.label.toLowerCase().includes(query.trim().toLowerCase())
  );

  React.useEffect(() => {
    if (isOpen) {
      window.setTimeout(() => {
        if (window.matchMedia("(max-width: 639px)").matches) {
          mobileInputRef.current?.focus();
          return;
        }

        desktopInputRef.current?.focus();
      }, 0);
    }
  }, [isOpen]);

  React.useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  function closeSearch() {
    setIsOpen(false);
    setQuery("");
  }

  return (
    <div className="relative">
      {!isOpen ? (
        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-label="Open search"
          onClick={() => setIsOpen(true)}
        >
          <SearchIcon data-icon="inline-start" />
        </Button>
      ) : (
        <>
        <div className="hidden items-center gap-2 sm:flex">
          <div className="relative">
            <SearchIcon
              data-icon="inline-start"
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              ref={desktopInputRef}
              type="search"
              value={query}
              aria-label="Search portfolio pages"
              placeholder="Search pages"
              className="h-8 w-[min(13rem,46vw)] rounded-lg border bg-background pl-9 pr-3 text-sm outline-none transition-colors focus:border-border focus:ring-0 sm:w-64"
              onChange={(event) => setQuery(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Escape") {
                  closeSearch();
                }
              }}
            />

            <div
              className={cn(
                "absolute right-0 top-10 z-[70] w-[min(20rem,86vw)] overflow-hidden rounded-lg border bg-background shadow-xl",
                query.trim() ? "block" : "hidden"
              )}
            >
              {suggestions.length > 0 ? (
                <div className="grid gap-1 p-2">
                  {suggestions.map((page) => (
                    <Link
                      key={page.href}
                      href={page.href}
                      className="rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                      onClick={closeSearch}
                    >
                      {page.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="px-4 py-3 text-sm text-muted-foreground">No pages found.</p>
              )}
            </div>
          </div>

          <Button type="button" variant="ghost" size="icon" aria-label="Close search" onClick={closeSearch}>
            <XIcon data-icon="inline-start" />
          </Button>
        </div>
        <div className="fixed inset-x-0 bottom-0 top-16 z-[70] bg-background sm:hidden">
          <div className="flex h-full flex-col">
            <div className="flex items-center gap-2 border-b px-4 py-3">
              <div className="relative flex-1">
                <SearchIcon
                  data-icon="inline-start"
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
                <input
                  ref={mobileInputRef}
                  type="search"
                  value={query}
                  aria-label="Search portfolio pages"
                  placeholder="Search portfolio pages"
                  className="h-10 w-full rounded-lg border bg-background pl-9 pr-3 text-sm outline-none transition-colors focus:border-border focus:ring-0"
                  onChange={(event) => setQuery(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Escape") {
                      closeSearch();
                    }
                  }}
                />
              </div>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                aria-label="Close search"
                onClick={closeSearch}
              >
                <XIcon data-icon="inline-start" />
              </Button>
            </div>

            <div className="scrollbar-hidden flex-1 overflow-y-auto px-4 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Suggestions
              </p>
              <div className="mt-3 grid gap-2">
                {(query.trim() ? suggestions : searchablePages).map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    className="rounded-lg border bg-muted/25 px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-primary hover:text-primary-foreground"
                    onClick={closeSearch}
                  >
                    {page.label}
                  </Link>
                ))}
                {query.trim() && suggestions.length === 0 ? (
                  <p className="rounded-lg border bg-muted/25 px-4 py-3 text-sm text-muted-foreground">
                    No pages found.
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        </>
      )}
    </div>
  );
}
