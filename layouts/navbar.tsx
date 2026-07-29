"use client";

import Link from "next/link";
import { MenuIcon, XIcon } from "lucide-react";
import * as React from "react";

import { NavbarSearch } from "@/components/navbar-search";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Sidebar } from "@/layouts/sidebar";

const navItems = [
  { href: "#identity", label: "Identity" },
  { href: "#context", label: "Context" },
  { href: "#journey", label: "Journey" },
  { href: "#snapshot", label: "Snapshot" },
];

export function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  return (
    <>
      <header className="sticky top-0 z-[60] border-b bg-background/95">
        <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Button
              type="button"
              variant="outline"
              size="icon"
              aria-label={isSidebarOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isSidebarOpen}
              aria-controls="portfolio-sidebar"
              onMouseEnter={() => setIsSidebarOpen(true)}
              onClick={() => setIsSidebarOpen((current) => !current)}
            >
              {isSidebarOpen ? (
                <XIcon data-icon="inline-start" />
              ) : (
                <MenuIcon data-icon="inline-start" />
              )}
            </Button>

            <Link href="/" className="flex flex-col leading-none">
              <span className="text-base font-semibold text-foreground">Ayesha</span>
              <span className="text-xs font-medium text-muted-foreground">English Educator</span>
            </Link>
          </div>

          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <NavbarSearch />
            <ThemeToggle />
          </div>
        </nav>
      </header>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
}

export default Navbar;
