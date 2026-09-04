import {Github, Linkedin, Mail} from "lucide-react";

import {portfolioData} from "@/data/portfolio";
import {isConfiguredLink} from "@/lib/site";

const socialLinks = [
  {
    label: "GitHub",
    href: portfolioData.contact.github,
    icon: Github
  },
  {
    label: "LinkedIn",
    href: portfolioData.contact.linkedin,
    icon: Linkedin
  },
  {
    label: "Email",
    href: portfolioData.contact.email
      ? `mailto:${portfolioData.contact.email}`
      : "",
    icon: Mail
  }
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 pb-10 pt-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.28em] text-primary">
            Sanket Raikwar
          </p>
          <p className="max-w-xl text-sm text-muted-foreground">
            AI + Full Stack Developer crafting modern web experiences, intelligent
            systems, and recruiter-friendly digital products.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks
            .filter(item => isConfiguredLink(item.href))
            .map(item => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="glass-panel flex h-11 w-11 items-center justify-center rounded-full text-muted-foreground transition-transform duration-300 hover:-translate-y-1 hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
        </div>
      </div>

      <div className="mx-auto mt-6 max-w-7xl px-4 text-sm text-muted-foreground sm:px-6">
        <p>
          (c) {year} Sanket Raikwar. Built for performance, accessibility, and
          recruiter clarity.
        </p>
      </div>
    </footer>
  );
}
