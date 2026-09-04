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
  Github,
  GraduationCap,
  LayoutTemplate,
  Linkedin,
  Mail,
  MapPin,
  MonitorSmartphone,
  ServerCog,
  Smartphone,
  Workflow
} from "lucide-react";
import type {LucideIcon} from "lucide-react";

import {Footer} from "@/components/site/footer";
import {GithubShowcase} from "@/components/site/github-showcase";
import {Header} from "@/components/site/header";
import {HeroVisual} from "@/components/site/hero-visual";
import {InteractiveCursor} from "@/components/site/interactive-cursor";
import {ParticleBackground} from "@/components/site/particle-background";
import {Reveal} from "@/components/site/reveal";
import {SectionHeading} from "@/components/site/section-heading";
import {Badge} from "@/components/ui/badge";
import {buttonVariants} from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {portfolioData} from "@/data/portfolio";
import {isConfiguredLink} from "@/lib/site";
import {cn} from "@/lib/utils";

const navigationItems = [
  {label: "About", href: "#about"},
  {label: "Skills", href: "#skills"},
  {label: "Projects", href: "#projects"},
  {label: "Certifications", href: "#certifications"},
  {label: "GitHub", href: "#github"},
  {label: "Achievements", href: "#achievements"},
  {label: "Education", href: "#education"},
  {label: "Contact", href: "#contact"}
];

const skillIcons: Record<string, LucideIcon> = {
  Frontend: LayoutTemplate,
  Backend: ServerCog,
  Database: Database,
  Programming: Code2,
  "Machine Learning": BrainCircuit,
  "Data Analytics": BarChart3,
  Android: Smartphone,
  Tools: Workflow
};

const projectIcons: Record<string, LucideIcon> = {
  "DevFolio AI": BrainCircuit,
  "Amazon Clone": LayoutTemplate,
  "AI Chatbot": Bot,
  "Power BI Dashboard": BarChart3
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
    value: isConfiguredLink(portfolioData.contact.linkedin)
      ? "Open LinkedIn profile"
      : "Link available on request",
    href: portfolioData.contact.linkedin,
    icon: Linkedin
  },
  {
    label: "GitHub",
    value: isConfiguredLink(portfolioData.contact.github)
      ? "Open GitHub profile"
      : "Link available on request",
    href: portfolioData.contact.github,
    icon: Github
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
  variant = "default"
}: {
  href?: string;
  label: string;
  icon: LucideIcon;
  variant?: "default" | "secondary" | "outline";
}) {
  if (href && (href.startsWith("#") || isConfiguredLink(href))) {
    const external = !href.startsWith("#");

    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className={cn(buttonVariants({variant, size: "lg"}))}
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
          buttonVariants({variant, size: "lg"}),
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
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr]">
            <Reveal className="space-y-8">
              <Badge className="w-fit">
                Open to software engineering, AI/ML, and analytics opportunities
              </Badge>

              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.28em] text-primary">
                  {portfolioData.title}
                </p>
                <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                  Building modern digital products with{" "}
                  <span className="text-gradient">AI, full stack engineering,</span>{" "}
                  and clean product thinking.
                </h1>
                <p className="max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
                  {portfolioData.headline}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <ActionLink
                  href={portfolioData.contact.resume}
                  label="Download Resume"
                  icon={Download}
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

              <div className="flex flex-wrap gap-3">
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

          <div className="mx-auto mt-14 grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-3">
            {portfolioData.heroHighlights.map((item, index) => (
              <Reveal key={item.value} delay={0.06 * index}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl">{item.value}</CardTitle>
                    <CardDescription>{item.label}</CardDescription>
                  </CardHeader>
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

            <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <Reveal>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Professional Introduction</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    {portfolioData.about.map(paragraph => (
                      <p
                        key={paragraph}
                        className="text-base leading-8 text-muted-foreground"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              </Reveal>

              <div className="grid gap-6">
                {portfolioData.focusAreas.map((item, index) => (
                  <Reveal key={item.title} delay={0.08 * index}>
                    <Card className="h-full">
                      <CardHeader>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.body}</CardDescription>
                      </CardHeader>
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

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {portfolioData.skills.map((category, index) => {
                const Icon = skillIcons[category.title] ?? Workflow;

                return (
                  <Reveal key={category.title} delay={0.04 * index}>
                    <Card className="group h-full transition-transform duration-300 hover:-translate-y-1">
                      <CardHeader>
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                          <Icon className="h-5 w-5" />
                        </div>
                        <CardTitle>{category.title}</CardTitle>
                        <CardDescription>{category.summary}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex flex-wrap gap-2">
                        {category.items.map(skill => (
                          <span
                            key={skill}
                            className="rounded-full border border-border/60 bg-background/60 px-3 py-1.5 text-sm text-muted-foreground transition-colors duration-300 group-hover:border-primary/20 group-hover:text-foreground"
                          >
                            {skill}
                          </span>
                        ))}
                      </CardContent>
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
                description="Each project is framed as a recruiter-friendly product story with clear stack choices and user-facing outcomes."
              />
            </Reveal>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {portfolioData.projects.map((project, index) => {
                const Icon = projectIcons[project.name] ?? LayoutTemplate;

                return (
                  <Reveal key={project.name} delay={0.06 * index}>
                    <Card className="group relative h-full overflow-hidden transition-transform duration-300 hover:-translate-y-1">
                      <div
                        className={cn(
                          "absolute inset-0 bg-gradient-to-br opacity-80",
                          project.accent
                        )}
                      />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_30%)]" />
                      <div className="relative">
                        <CardHeader className="space-y-5">
                          <div className="flex items-center justify-between gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                              <Icon className="h-5 w-5" />
                            </div>
                            <Badge variant="secondary">Featured Build</Badge>
                          </div>
                          <div className="space-y-3">
                            <CardTitle className="text-2xl">{project.name}</CardTitle>
                            <CardDescription>{project.summary}</CardDescription>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map(item => (
                              <span
                                key={item}
                                className="rounded-full border border-border/60 bg-background/70 px-3 py-1 text-sm text-muted-foreground"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                          <ul className="space-y-3">
                            {project.features.map(feature => (
                              <li
                                key={feature}
                                className="flex items-start gap-3 text-sm text-muted-foreground"
                              >
                                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
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

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {portfolioData.certifications.map((item, index) => (
                <Reveal key={item} delay={0.05 * index}>
                  <Card className="h-full transition-transform duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <BadgeCheck className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-lg">{item}</CardTitle>
                    </CardHeader>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="github" className="section-padding">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Reveal>
              <SectionHeading
                eyebrow="GitHub"
                title="Public engineering signals, contribution patterns, and language usage."
                description="Designed to plug into live GitHub widgets for contribution graphs, top languages, streaks, and overall activity."
              />
            </Reveal>

            <div className="mt-12">
              <Reveal>
                <GithubShowcase />
              </Reveal>
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

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {portfolioData.achievements.map((item, index) => (
                <Reveal key={item.label} delay={0.04 * index}>
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-3xl">{item.value}</CardTitle>
                      <CardDescription className="text-base text-foreground">
                        {item.label}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm leading-7 text-muted-foreground">
                        {item.detail}
                      </p>
                    </CardContent>
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

            <div className="mt-12">
              <Reveal>
                <Card className="overflow-hidden">
                  <div className="grid gap-0 lg:grid-cols-[0.32fr_0.68fr]">
                    <div className="flex items-center justify-center border-b border-border/60 bg-gradient-to-br from-cyan-500/10 via-sky-500/5 to-indigo-500/10 p-8 lg:border-b-0 lg:border-r">
                      <div className="flex h-20 w-20 items-center justify-center rounded-[1.75rem] bg-primary/10 text-primary">
                        <GraduationCap className="h-8 w-8" />
                      </div>
                    </div>
                    <div className="p-8">
                      <p className="text-sm uppercase tracking-[0.28em] text-primary">
                        {portfolioData.education.duration}
                      </p>
                      <h3 className="mt-4 text-2xl font-semibold">
                        {portfolioData.education.institution}
                      </h3>
                      <p className="mt-3 text-base text-muted-foreground">
                        {portfolioData.education.degree}
                      </p>
                      <p className="mt-6 max-w-2xl text-sm leading-7 text-muted-foreground">
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

            <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <Reveal>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Why collaborate with me</CardTitle>
                    <CardDescription>
                      I care about thoughtful execution, strong fundamentals, and
                      shipping work that feels polished, useful, and scalable.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      "Scalable full stack mindset across frontend, backend, and data layers.",
                      "Interest in applying AI where it genuinely improves product workflows.",
                      "Comfort with dashboards, business reporting, and insight communication.",
                      "Actively exploring opportunities to contribute, learn, and grow fast."
                    ].map(point => (
                      <div key={point} className="flex gap-3">
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                        <p className="text-sm leading-7 text-muted-foreground">
                          {point}
                        </p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </Reveal>

              <div className="grid gap-5 sm:grid-cols-2">
                {contactCards.map((card, index) => {
                  const Icon = card.icon;
                  const enabled = card.href
                    ? card.href.startsWith("mailto:") || isConfiguredLink(card.href)
                    : false;

                  const content = (
                    <Card className="h-full transition-transform duration-300 hover:-translate-y-1">
                      <CardHeader>
                        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        <CardTitle>{card.label}</CardTitle>
                        <CardDescription>{card.value}</CardDescription>
                      </CardHeader>
                    </Card>
                  );

                  return (
                    <Reveal key={card.label} delay={0.06 * index}>
                      {enabled ? (
                        <a
                          href={card.href}
                          target={card.href.startsWith("mailto:") ? undefined : "_blank"}
                          rel={card.href.startsWith("mailto:") ? undefined : "noreferrer"}
                          className="block"
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
