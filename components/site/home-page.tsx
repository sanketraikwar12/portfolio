import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Database,
  Download,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  LayoutTemplate,
  Linkedin,
  Mail,
  MapPin,
  ServerCog,
  Trophy,
  Workflow
} from "lucide-react";
import type {LucideIcon} from "lucide-react";

import {Footer} from "@/components/site/footer";
import {Header} from "@/components/site/header";
import {HeroVisual} from "@/components/site/hero-visual";
import {InteractiveCursor} from "@/components/site/interactive-cursor";
import {ParticleBackground} from "@/components/site/particle-background";
import {Reveal} from "@/components/site/reveal";
import {SectionHeading} from "@/components/site/section-heading";
import {Badge} from "@/components/ui/badge";
import {buttonVariants} from "@/components/ui/button";
import {Card} from "@/components/ui/card";
import {portfolioData} from "@/data/portfolio";
import {isConfiguredLink} from "@/lib/site";
import {cn} from "@/lib/utils";

const navigationItems = [
  {label: "About", href: "#about"},
  {label: "Skills", href: "#skills"},
  {label: "Projects", href: "#projects"},
  {label: "Certifications", href: "#certifications"},
  {label: "Hackathons", href: "#hackathons"},
  {label: "Achievements", href: "#achievements"},
  {label: "Education", href: "#education"},
  {label: "Contact", href: "#contact"}
];

const skillIcons: Record<string, LucideIcon> = {
  "Programming Languages": Code2,
  "Frontend Development": LayoutTemplate,
  "Backend Development": ServerCog,
  Databases: Database,
  "AI & Machine Learning": BrainCircuit,
  "Data Analytics": BarChart3,
  "Tools & Technologies": Workflow
};

const projectIcons: Record<string, LucideIcon> = {
  "SmartShop – E-Commerce Platform": LayoutTemplate,
  "VidMind-AI": BrainCircuit,
  Orbit: Code2,
  Shopzy: LayoutTemplate,
  "Ask Any Bot": Bot,
  "AutoML & Data Analytics": BarChart3
};

const contactCards = [
  {
    label: "Email",
    value: portfolioData.contact.email || "Available on request",
    href: portfolioData.contact.email
      ? `mailto:${portfolioData.contact.email}`
      : "",
    icon: Mail
  },
  {
    label: "LinkedIn",
    value: "sanket-raikwar",
    href: portfolioData.contact.linkedin,
    icon: Linkedin
  },
  {
    label: "GitHub",
    value: "sanketraikwar12",
    href: portfolioData.contact.github,
    icon: Github
  },
  {
    label: "Resume",
    value: "Download PDF",
    href: portfolioData.contact.resume,
    icon: FileText
  },
  {
    label: "Location",
    value: portfolioData.contact.location,
    href: "",
    icon: MapPin
  }
];

function ActionLink({
  href,
  label,
  icon: Icon,
  variant = "default",
  download
}: {
  href?: string;
  label: string;
  icon: LucideIcon;
  variant?: "default" | "secondary" | "outline";
  download?: boolean | string;
}) {
  if (href && (href.startsWith("#") || isConfiguredLink(href))) {
    const external = !href.startsWith("#");

    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        download={download}
        className={cn(buttonVariants({variant, size: "default"}))}
      >
        <Icon className="h-4 w-4" />
        {label}
      </a>
    );
  }

  return (
    <span
      aria-disabled="true"
      className={cn(
        buttonVariants({variant, size: "default"}),
        "cursor-not-allowed opacity-60"
      )}
    >
      <Icon className="h-4 w-4" />
      {label}
    </span>
  );
}

export function HomePage() {
  return (
    <>
      <ParticleBackground />
      <InteractiveCursor />
      <Header items={navigationItems} brand={portfolioData.name.split(" ")[0]} />

      <main className="relative">
        <section id="home" className="section-padding relative overflow-hidden">
          <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
            <Reveal className="space-y-5">
              <Badge className="w-fit">
                Open to software engineering, AI/ML, and analytics opportunities
              </Badge>

              <div className="space-y-3.5">
                <p className="text-xs uppercase tracking-[0.24em] text-primary">
                  {portfolioData.title}
                </p>
                <h1 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                  Building modern digital products with{" "}
                  <span className="text-gradient">AI, full stack engineering,</span>{" "}
                  and clean product thinking.
                </h1>
                <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {portfolioData.headline}
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5">
                <ActionLink
                  href={portfolioData.contact.resume}
                  label="Download Resume"
                  icon={Download}
                  download="Sanket_Raikwar_Resume.pdf"
                />
                <ActionLink
                  href={portfolioData.contact.github}
                  label="View GitHub"
                  icon={Github}
                  variant="secondary"
                />
                <ActionLink
                  href={portfolioData.contact.linkedin}
                  label="LinkedIn"
                  icon={Linkedin}
                  variant="secondary"
                />
                <ActionLink
                  href="#contact"
                  label="Contact Me"
                  icon={ArrowRight}
                  variant="outline"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {["React.js", "Next.js", "FastAPI", "Django", "Python", "Power BI"].map(
                  item => (
                    <Badge key={item} variant="secondary">
                      {item}
                    </Badge>
                  )
                )}
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <HeroVisual />
            </Reveal>
          </div>

          <div className="mx-auto mt-8 grid max-w-4xl gap-3 px-4 sm:px-6 sm:grid-cols-3">
            {portfolioData.heroHighlights.map((item, index) => (
              <Reveal key={item.value} delay={0.05 * index}>
                <Card className="h-full">
                  <div className="p-3.5 sm:p-4 text-center sm:text-left space-y-0.5">
                    <div className="text-lg sm:text-xl font-bold text-foreground">{item.value}</div>
                    <div className="text-xs text-muted-foreground leading-snug">{item.label}</div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="about" className="section-padding">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Reveal>
              <SectionHeading
                eyebrow="About"
                title="A modern builder focused on scalable apps, AI workflows, and meaningful product experiences."
                description={portfolioData.availability}
              />
            </Reveal>

            <div className="mt-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:gap-5">
              <Reveal>
                <Card className="h-full">
                  <div className="p-5 sm:p-6 space-y-3">
                    <h3 className="text-sm sm:text-base font-semibold text-foreground">Professional Introduction</h3>
                    <div className="space-y-2.5">
                      {portfolioData.about.map(paragraph => (
                        <p
                          key={paragraph}
                          className="text-xs sm:text-sm leading-relaxed text-muted-foreground"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </Card>
              </Reveal>

              <div className="flex flex-col gap-3">
                {portfolioData.focusAreas.map((item, index) => (
                  <Reveal key={item.title} delay={0.06 * index}>
                    <Card>
                      <div className="p-4 sm:p-5 space-y-1">
                        <h3 className="text-xs sm:text-sm font-semibold text-foreground">{item.title}</h3>
                        <p className="text-xs leading-relaxed text-muted-foreground">{item.body}</p>
                      </div>
                    </Card>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section-padding">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Reveal>
              <SectionHeading
                eyebrow="Skills"
                title="Interactive capability blocks across engineering, AI, analytics, and mobile."
                description="A structured toolkit spanning frontend architecture, backend APIs, data systems, machine learning, and delivery tooling."
              />
            </Reveal>

            <div className="mt-8 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
              {portfolioData.skills.map((category, index) => {
                const Icon = skillIcons[category.title] ?? Workflow;

                return (
                  <Reveal key={category.title} delay={0.04 * index}>
                    <Card className="group h-full transition-transform duration-300 hover:-translate-y-1 flex flex-col justify-between">
                      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2.5">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                              <Icon className="h-4 w-4" />
                            </div>
                            <h3 className="text-sm font-semibold text-foreground">{category.title}</h3>
                          </div>
                          <p className="text-xs leading-relaxed text-muted-foreground">{category.summary}</p>
                        </div>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {category.items.map(skill => (
                            <span
                              key={skill}
                              className="rounded-md border border-border/60 bg-background/60 px-2 py-0.5 text-xs text-muted-foreground font-medium transition-colors duration-300 group-hover:border-primary/20 group-hover:text-foreground"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section id="projects" className="section-padding">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Reveal>
              <SectionHeading
                eyebrow="Featured Projects"
                title="Selected work that blends product quality, backend depth, and AI-forward thinking."
                description="Each project is framed as a recruiter-friendly product story with clear stack choices, source code, and user-facing outcomes."
              />
            </Reveal>

            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              {portfolioData.projects.map((project, index) => {
                const Icon = projectIcons[project.name] ?? LayoutTemplate;

                return (
                  <Reveal key={project.name} delay={0.06 * index}>
                    <Card className="group relative overflow-hidden transition-transform duration-300 hover:-translate-y-1 h-full flex flex-col">
                      <div
                        className={cn(
                          "absolute inset-0 bg-gradient-to-br opacity-80",
                          project.accent
                        )}
                      />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_30%)]" />
                      <div className="relative p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-2.5 min-w-0">
                              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <Icon className="h-4 w-4" />
                              </div>
                              <h3 className="text-base sm:text-lg font-semibold text-foreground truncate">{project.name}</h3>
                            </div>
                            <Badge variant="secondary" className="text-[10px] px-2 py-0.5 shrink-0">Featured Build</Badge>
                          </div>
                          <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
                          <div className="flex flex-wrap gap-1.5">
                            {project.tech.map(item => (
                              <span
                                key={item}
                                className="rounded-md border border-border/60 bg-background/70 px-2 py-0.5 text-xs text-muted-foreground font-medium"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                          <ul className="space-y-1.5 pt-1">
                            {project.features.map(feature => (
                              <li
                                key={feature}
                                className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground"
                              >
                                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Direct GitHub & Live links */}
                        <div className="flex flex-wrap items-center gap-2.5 pt-3 mt-auto border-t border-border/40">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1.5 rounded-lg border border-border/70 bg-card/80 px-3 py-1.5 text-xs font-semibold text-foreground transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:text-primary shadow-xs"
                            >
                              <Github className="h-3.5 w-3.5" />
                              <span>View Code</span>
                            </a>
                          )}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1.5 rounded-lg border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground shadow-xs"
                            >
                              <ExternalLink className="h-3.5 w-3.5" />
                              <span>Live Demo</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </Card>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section id="certifications" className="section-padding">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Reveal>
              <SectionHeading
                eyebrow="Certifications"
                title="A growing stack of credentials across cloud, coding tools, Linux, and frontend development."
                description="Professional learning that reinforces breadth across engineering fundamentals, AI tooling, and practical delivery workflows."
              />
            </Reveal>

            <div className="mt-8 flex flex-wrap gap-2.5 max-w-4xl">
              {portfolioData.certifications.map((item, index) => (
                <Reveal key={item} delay={0.03 * index}>
                  <div className="glass-panel inline-flex items-center gap-2 rounded-xl border border-border/60 px-3.5 py-2 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card/90">
                    <BadgeCheck className="h-4 w-4 shrink-0 text-primary" />
                    <span className="text-xs sm:text-sm font-medium text-foreground">{item}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="hackathons" className="section-padding">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Reveal>
              <SectionHeading
                eyebrow="Hackathons & Technical Activities"
                title="Competitive hackathons, technical workshops, and national innovation summits."
                description="Intensive problem-solving sprints, AI agent builder workshops, and collaborative technical initiatives."
              />
            </Reveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {portfolioData.hackathons.map((item, index) => (
                <Reveal key={item.title} delay={0.05 * index}>
                  <Card className="h-full transition-transform duration-300 hover:-translate-y-0.5 flex flex-col justify-between">
                    <div className="p-5 sm:p-6 space-y-3 flex-1 flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                              <Trophy className="h-4 w-4" />
                            </div>
                            <h3 className="text-sm sm:text-base font-semibold text-foreground">
                              {item.title}
                            </h3>
                          </div>
                          <Badge variant="secondary" className="text-[11px] shrink-0">
                            {item.type}
                          </Badge>
                        </div>
                        <p className="text-xs font-semibold text-primary">
                          {item.organization}
                        </p>
                        <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                          {item.highlight}
                        </p>
                      </div>
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="achievements" className="section-padding">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Reveal>
              <SectionHeading
                eyebrow="Achievements"
                title="Signal-rich highlights that reinforce momentum, curiosity, and technical range."
                description="A concise recruiter-friendly snapshot of certifications, technical interests, and community participation."
              />
            </Reveal>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {portfolioData.achievements.map((item, index) => (
                <Reveal key={item.label} delay={0.04 * index}>
                  <Card className="h-full transition-transform duration-300 hover:-translate-y-0.5">
                    <div className="p-3.5 sm:p-4 space-y-1">
                      <div className="text-xl sm:text-2xl font-bold text-foreground">{item.value}</div>
                      <div className="text-xs font-semibold text-primary">{item.label}</div>
                      <p className="text-xs leading-relaxed text-muted-foreground pt-1">{item.detail}</p>
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section-padding">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Reveal>
              <SectionHeading
                eyebrow="Education"
                title="A strong computer science foundation paired with practical, project-led execution."
                description="Academic grounding that supports product engineering, machine learning, and analytics-focused problem solving."
              />
            </Reveal>

            <div className="mt-8 max-w-3xl">
              <Reveal>
                <Card className="overflow-hidden">
                  <div className="flex flex-col sm:flex-row sm:items-center">
                    <div className="flex items-center justify-center border-b border-border/60 bg-gradient-to-br from-cyan-500/10 via-sky-500/5 to-indigo-500/10 p-5 sm:border-b-0 sm:border-r sm:w-28 shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <GraduationCap className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="p-5 sm:p-6 flex-1 space-y-1">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-primary">
                        {portfolioData.education.duration}
                      </p>
                      <h3 className="text-base sm:text-lg font-semibold text-foreground">
                        {portfolioData.education.institution}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                        {portfolioData.education.degree}
                      </p>
                      <p className="pt-1 max-w-2xl text-xs sm:text-sm leading-relaxed text-muted-foreground">
                        Building a strong base in computer science while applying
                        concepts through full stack web applications, AI-driven
                        products, Android development, and business intelligence
                        workflows.
                      </p>
                    </div>
                  </div>
                </Card>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="contact" className="section-padding">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Reveal>
              <SectionHeading
                eyebrow="Contact"
                title="Let's build products that combine clean engineering, intelligence, and real-world value."
                description="Open to internships, full stack roles, AI/ML work, and data analytics opportunities."
              />
            </Reveal>

            <div className="mt-8 grid gap-4 lg:grid-cols-[1.05fr_0.95fr] lg:gap-5">
              <Reveal>
                <Card className="h-full">
                  <div className="p-5 sm:p-6 space-y-3">
                    <h3 className="text-sm sm:text-base font-semibold">Why collaborate with me</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      I care about thoughtful execution, strong fundamentals, and shipping work that feels polished, useful, and scalable.
                    </p>
                    <div className="space-y-2.5 pt-1">
                      {[
                        "Scalable full stack mindset across frontend, backend, and data layers.",
                        "Interest in applying AI where it genuinely improves product workflows.",
                        "Comfort with dashboards, business reporting, and insight communication.",
                        "Actively exploring opportunities to contribute, learn, and grow fast."
                      ].map(point => (
                        <div key={point} className="flex items-start gap-2.5">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                          <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </Reveal>

              <div className="grid gap-2.5 sm:grid-cols-2">
                {contactCards.map((card, index) => {
                  const Icon = card.icon;
                  const enabled = card.href
                    ? card.href.startsWith("mailto:") || isConfiguredLink(card.href)
                    : false;

                  const content = (
                    <Card className="h-full transition-transform duration-300 hover:-translate-y-0.5">
                      <div className="flex items-center gap-3 p-3.5 sm:p-4">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <Icon className="h-4.5 w-4.5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-[11px] text-muted-foreground">{card.label}</p>
                          <p className="text-xs sm:text-sm font-semibold text-foreground break-all sm:break-normal leading-snug">{card.value}</p>
                        </div>
                      </div>
                    </Card>
                  );

                  return (
                    <Reveal key={card.label} delay={0.05 * index}>
                      {enabled ? (
                        <a
                          href={card.href}
                          target={card.href.startsWith("mailto:") ? undefined : "_blank"}
                          rel={card.href.startsWith("mailto:") ? undefined : "noreferrer"}
                          className="block h-full"
                        >
                          {content}
                        </a>
                      ) : (
                        content
                      )}
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
