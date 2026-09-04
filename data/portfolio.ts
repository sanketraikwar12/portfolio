export type SkillCategory = {
  title: string;
  items: string[];
  summary: string;
};

export type Project = {
  name: string;
  summary: string;
  tech: string[];
  features: string[];
  accent: string;
};

export const portfolioData = {
  name: "Sanket Raikwar",
  title: "AI + Full Stack Developer",
  headline:
    "AI + Full Stack Developer | React.js | Next.js | FastAPI | Django | Python | Machine Learning | Power BI",
  description:
    "Portfolio of Sanket Raikwar, a Computer Science Engineering student building scalable web applications, AI-powered solutions, and data-driven products.",
  availability:
    "Currently seeking Software Engineering, Full Stack Development, AI/ML, and Data Analytics opportunities.",
  location: "India",
  education: {
    institution: "Jagran Lakecity University",
    degree: "B.Tech Computer Science Engineering",
    duration: "2023 - 2027"
  },
  heroHighlights: [
    {
      value: "Full Stack + AI",
      label: "Modern product engineering with intelligent workflows"
    },
    {
      value: "ML to BI",
      label: "From model development to business dashboards"
    },
    {
      value: "2023 - 2027",
      label: "Computer Science Engineering at Jagran Lakecity University"
    }
  ],
  about: [
    "I am a Computer Science Engineering student passionate about building scalable web applications, AI-powered solutions, and data-driven products.",
    "My expertise includes Full Stack Development using React.js, Next.js, Node.js, FastAPI, and Django, along with Machine Learning, Android Development, and Data Analytics using Python and Power BI.",
    "I enjoy turning complex ideas into polished digital experiences that feel fast, useful, and recruiter-ready."
  ],
  focusAreas: [
    {
      title: "Current Focus",
      body: "Building production-quality full stack applications with thoughtful UX, strong APIs, and performance-first architecture."
    },
    {
      title: "Career Goal",
      body: "Grow into a software engineer who can bridge product thinking, AI capabilities, and scalable web development."
    },
    {
      title: "What I Bring",
      body: "Hands-on work across frontend, backend, machine learning, Android, and analytics with a practical, project-driven mindset."
    }
  ],
  skills: [
    {
      title: "Frontend",
      summary:
        "Modern interface development for responsive, polished product experiences.",
      items: [
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Bootstrap"
      ]
    },
    {
      title: "Backend",
      summary:
        "API design, business logic, and scalable application foundations.",
      items: ["Node.js", "Express.js", "Django", "FastAPI"]
    },
    {
      title: "Database",
      summary: "Structured and document-based data management for applications.",
      items: ["MongoDB", "MySQL"]
    },
    {
      title: "Programming",
      summary:
        "Problem-solving across systems, application development, and algorithms.",
      items: ["C", "C++", "Java", "Python"]
    },
    {
      title: "Machine Learning",
      summary:
        "Data preparation, model experimentation, and deployment-oriented workflows.",
      items: ["Scikit-Learn", "Pandas", "NumPy", "XGBoost"]
    },
    {
      title: "Data Analytics",
      summary:
        "Insight generation with reporting, dashboards, and business intelligence.",
      items: ["SQL", "Power BI", "Data Visualization"]
    },
    {
      title: "Android",
      summary:
        "Native Android development with strong Java and Kotlin foundations.",
      items: ["Java", "Kotlin", "Android Studio"]
    },
    {
      title: "Tools",
      summary:
        "Workflow, collaboration, and development tooling for fast delivery.",
      items: ["Git", "GitHub", "Postman", "VS Code"]
    }
  ] satisfies SkillCategory[],
  projects: [
    {
      name: "DevFolio AI",
      summary: "AI-powered developer portfolio builder platform.",
      tech: ["Next.js", "FastAPI", "MongoDB", "OpenAI"],
      features: [
        "AI Portfolio Builder",
        "Resume Generator",
        "Project Showcase",
        "Analytics Dashboard"
      ],
      accent: "from-cyan-500/30 via-sky-500/10 to-transparent"
    },
    {
      name: "Amazon Clone",
      summary: "Commerce-focused web application inspired by modern storefront flows.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
      features: [
        "Authentication",
        "Product Catalog",
        "Shopping Cart",
        "Order Management"
      ],
      accent: "from-amber-500/25 via-orange-500/10 to-transparent"
    },
    {
      name: "AI Chatbot",
      summary: "Conversational interface for real-time AI-assisted interactions.",
      tech: ["React.js", "FastAPI", "Python"],
      features: [
        "Real-time Chat",
        "AI Responses",
        "API Integration"
      ],
      accent: "from-violet-500/25 via-indigo-500/10 to-transparent"
    },
    {
      name: "Power BI Dashboard",
      summary: "Business analytics dashboard for KPI monitoring and reporting.",
      tech: ["Power BI", "SQL"],
      features: [
        "KPI Tracking",
        "Business Analytics",
        "Data Visualization"
      ],
      accent: "from-emerald-500/25 via-teal-500/10 to-transparent"
    }
  ] satisfies Project[],
  certifications: [
    "AWS Cloud Practitioner Essentials",
    "AWS Cloud Practitioner (CLF-C02)",
    "AI Agent Builder Workshop",
    "GitHub Copilot Certification",
    "Claude Code for Beginners",
    "Learning Linux Basics",
    "React JS Certification"
  ],
  achievements: [
    {
      value: "15+",
      label: "Technical Certifications",
      detail: "Continuous upskilling across cloud, AI, frontend, and tooling."
    },
    {
      value: "Full Stack",
      label: "Developer",
      detail: "Comfortable building end-to-end experiences from UI to APIs."
    },
    {
      value: "AI/ML",
      label: "Enthusiast",
      detail: "Interested in intelligent systems, applied ML, and automation."
    },
    {
      value: "Data",
      label: "Analytics Practitioner",
      detail: "Experience translating data into dashboards and insights."
    },
    {
      value: "Hackathon",
      label: "Participant",
      detail: "Enjoys fast iteration, problem solving, and team collaboration."
    }
  ],
  contact: {
    email: "raikwarsanket97@gmail.com",
    github: "https://github.com/sanketraikwar12",
    linkedin: "https://www.linkedin.com/in/sanket-raikwar-06793b391/",
    resume: "/resume.pdf",
    githubUsername: "sanketraikwar12",
    location: "India"
  },
  keywords: [
    "Sanket Raikwar",
    "AI Developer",
    "Full Stack Developer",
    "Next.js Portfolio",
    "React Developer",
    "FastAPI Developer",
    "Django Developer",
    "Machine Learning",
    "Power BI",
    "Software Engineering"
  ]
};
