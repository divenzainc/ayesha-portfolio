"use client";

import Link from "next/link";
import { SearchIcon, XIcon } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const searchablePages = [
  { href: "/", label: "Learner Profile" },
  { href: "/teaching-philosophy", label: "Teaching Philosophy" },
  { href: "/reflections", label: "Reflections" },
  { href: "/depth-reflection", label: "Depth Reflection" },
  { href: "/artefacts", label: "Artefacts" },
  { href: "/log-book", label: "Log Book" },
  { href: "/summary", label: "Summary" },
  { href: "/references", label: "References" },
  { href: "/appendices", label: "Appendices" },
];

export function NavbarSearch() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  const suggestions = searchablePages.filter((page) =>
    page.label.toLowerCase().includes(query.trim().toLowerCase())
  );

  React.useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
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
        <div className="flex items-center gap-2">
          <div className="relative">
            <SearchIcon
              data-icon="inline-start"
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              ref={inputRef}
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
      )}
    </div>
  );
}
