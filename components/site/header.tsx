"use client";

import {FileText, Menu, X} from "lucide-react";
import {useState} from "react";

import {ThemeToggle} from "@/components/site/theme-toggle";
import {Button} from "@/components/ui/button";
import {portfolioData} from "@/data/portfolio";
import {cn} from "@/lib/utils";

type NavItem = {
  label: string;
  href: string;
};

type HeaderProps = {
  items: NavItem[];
  brand: string;
};

export function Header({items, brand}: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="glass-panel flex items-center justify-between rounded-full px-4 py-3 sm:px-6">
          <a href="#home" className="flex items-center gap-3">
            <span className="font-brand text-2xl text-primary">{brand}</span>
            <span className="hidden text-sm text-muted-foreground sm:block">
              AI + Full Stack Developer
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {items.map(item => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-primary/10 hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={portfolioData.contact.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground shadow-xs"
            >
              <FileText className="h-3.5 w-3.5" />
              <span>Resume</span>
            </a>
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={portfolioData.contact.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1.5 text-[11px] font-semibold text-primary"
            >
              <FileText className="h-3 w-3" />
              <span>Resume</span>
            </a>
            <ThemeToggle />
            <Button
              type="button"
              variant="secondary"
              size="sm"
              className="h-10 w-10 rounded-full p-0"
              onClick={() => setOpen(current => !current)}
              aria-label="Toggle navigation menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        <div
          className={cn(
            "glass-panel mt-3 overflow-hidden rounded-[1.75rem] px-4 transition-all duration-300 lg:hidden",
            open ? "max-h-[28rem] py-4 opacity-100" : "max-h-0 py-0 opacity-0"
          )}
        >
          <nav className="flex flex-col gap-2">
            {items.map(item => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-primary/10 hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <a
              href={portfolioData.contact.resume}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="mt-1 flex items-center justify-center gap-2 rounded-2xl border border-primary/30 bg-primary/10 px-4 py-3 text-sm font-semibold text-primary"
            >
              <FileText className="h-4 w-4" />
              <span>Download Resume (PDF)</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
