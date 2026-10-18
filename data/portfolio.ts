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
  githubUrl?: string;
  liveUrl?: string;
};

export type HackathonActivity = {
  title: string;
  type: string;
  organization: string;
  highlight: string;
};

export const portfolioData = {
  name: "Sanket Raikwar",
  title: "AI + Full Stack Developer",
  headline:
    "B.Tech Computer Science Engineering student with hands-on experience in Full Stack Development, AI/GenAI, Machine Learning, and Data Analytics.",
  description:
    "Skilled in developing responsive web applications, REST APIs, AI-powered applications, database-driven systems, and interactive dashboards using React.js, Next.js, Node.js, Express.js, Django, FastAPI, Python, TypeScript, MongoDB, MySQL, SQL, and Power BI.",
  availability:
    "Strong interest in Full Stack Development, AI Engineering, Generative AI, and Data Analytics opportunities.",
  location: "India",
  education: {
    institution: "Jagran Lakecity University",
    degree: "Bachelor of Technology (B.Tech) in Computer Science Engineering",
    duration: "Expected Graduation: 2027"
  },
  heroHighlights: [
    {
      value: "Full Stack + AI",
      label: "Responsive web apps, REST APIs, and GenAI workflows"
    },
    {
      value: "ML to BI",
      label: "Model development, data pipelines, and Power BI dashboards"
    },
    {
      value: "Graduation: 2027",
      label: "B.Tech Computer Science at Jagran Lakecity University"
    }
  ],
  about: [
    "I am a B.Tech Computer Science Engineering student with hands-on experience in Full Stack Development, AI/GenAI, Machine Learning, and Data Analytics.",
    "Skilled in developing responsive web applications, REST APIs, AI-powered applications, database-driven systems, and interactive dashboards using React.js, Next.js, Node.js, Express.js, Django, FastAPI, Python, TypeScript, MongoDB, MySQL, SQL, and Power BI.",
    "Experienced in building practical projects and applying modern software development practices to solve real-world problems. Strong interest in Full Stack Development, AI Engineering, Generative AI, and Data Analytics."
  ],
  focusAreas: [
    {
      title: "Full Stack & APIs",
      body: "Building scalable web apps and robust REST APIs with React.js, Next.js, Django, Node.js, and FastAPI."
    },
    {
      title: "AI & Machine Learning",
      body: "Developing AI-powered applications, GenAI agent workflows, model benchmarking, and intelligent interfaces."
    },
    {
      title: "Data Analytics & BI",
      body: "Designing database-driven systems and interactive Power BI dashboards translating data into actionable insights."
    }
  ],
  skills: [
    {
      title: "Programming Languages",
      summary: "Core programming and algorithmic problem solving across system and web layers.",
      items: ["C", "Python", "JavaScript", "TypeScript"]
    },
    {
      title: "Frontend Development",
      summary: "Modern responsive interfaces, reusable UI components, and accessible design.",
      items: ["React.js", "Next.js", "Bootstrap", "Tailwind CSS", "HTML", "CSS"]
    },
    {
      title: "Backend Development",
      summary: "High-performance REST API services, business logic, and server-side architecture.",
      items: ["Node.js", "Express.js", "Django", "FastAPI"]
    },
    {
      title: "Databases",
      summary: "Relational and document storage, data modeling, queries, and optimization.",
      items: ["MongoDB", "MySQL", "SQLite", "PostgreSQL"]
    },
    {
      title: "AI & Machine Learning",
      summary: "Model development, data preprocessing, machine learning algorithms, and Generative AI.",
      items: [
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Data Preprocessing",
        "Model Development",
        "AI Applications",
        "Generative AI"
      ]
    },
    {
      title: "Data Analytics",
      summary: "Business intelligence reporting, SQL data transformations, and interactive dashboards.",
      items: ["Power BI", "SQL", "Data Visualization", "Dashboard Development"]
    },
    {
      title: "Tools & Technologies",
      summary: "Version control, API testing, debugging, and modern collaborative engineering tools.",
      items: ["Git", "GitHub", "Postman", "VS Code"]
    }
  ] satisfies SkillCategory[],
  projects: [
    {
      name: "SmartShop – E-Commerce Platform",
      summary:
        "Full-stack e-commerce platform with product browsing, shopping cart, order management, database-driven functionality, and an administrative dashboard.",
      tech: ["Python", "Django", "Bootstrap", "JavaScript", "SQLite", "PostgreSQL"],
      features: [
        "Full-stack product browsing & cart workflow",
        "Order management & responsive user interfaces",
        "Database-driven product & category catalog",
        "Administrative dashboard for inventory & orders"
      ],
      accent: "from-blue-500/25 via-sky-500/10 to-transparent",
      githubUrl: "https://github.com/sanketraikwar12"
    },
    {
      name: "VidMind-AI",
      summary:
        "AI-focused application integrating intelligent video understanding and content workflows into a responsive, user-friendly web interface.",
      tech: ["AI/ML", "Python", "Web Technologies", "FastAPI"],
      features: [
        "AI-focused intelligent video processing",
        "Automated transcript & key insights analysis",
        "User-friendly responsive web interface",
        "Practical AI workflows and low-latency interaction"
      ],
      accent: "from-violet-500/25 via-indigo-500/10 to-transparent",
      githubUrl: "https://github.com/sanketraikwar12/VidMind-AI"
    },
    {
      name: "Orbit",
      summary:
        "Modern web application developed with a responsive, user-focused interface, reusable component architecture, and interactive client functionality.",
      tech: ["React.js", "JavaScript", "Web Technologies", "Tailwind CSS"],
      features: [
        "Modern responsive & user-focused interface",
        "Reusable component architecture",
        "Interactive client-side functionality",
        "Consistent and polished user experience"
      ],
      accent: "from-cyan-500/25 via-teal-500/10 to-transparent",
      githubUrl: "https://github.com/sanketraikwar12"
    },
    {
      name: "Shopzy",
      summary:
        "Local business discovery and price comparison platform featuring integrated Bhopal tourism navigation and store discovery.",
      tech: ["TypeScript", "Next.js", "React.js", "Tailwind CSS"],
      features: [
        "Local business discovery engine",
        "Price comparison & store locator",
        "Bhopal tourism navigation & guide",
        "Mobile-first responsive UX"
      ],
      accent: "from-emerald-500/25 via-teal-500/10 to-transparent",
      githubUrl: "https://github.com/sanketraikwar12/shopzy"
    },
    {
      name: "Ask Any Bot",
      summary:
        "Intelligent conversational AI chatbot providing low-latency question answering across general, technical, and academic domains.",
      tech: ["Python", "FastAPI", "React.js", "Vercel"],
      features: [
        "Real-time streaming conversational AI",
        "Multi-domain question answering",
        "Low-latency API architecture",
        "Cloud-deployed live web application"
      ],
      accent: "from-amber-500/25 via-orange-500/10 to-transparent",
      githubUrl: "https://github.com/sanketraikwar12/ask-any-bot",
      liveUrl: "https://ask-any-bot.vercel.app"
    },
    {
      name: "AutoML & Data Analytics",
      summary:
        "Automated machine learning engine and analytics workspace for rapid exploratory data analysis, model benchmarking, and KPI reporting.",
      tech: ["Python", "Scikit-learn", "Pandas", "Power BI", "NumPy"],
      features: [
        "Automated model training & benchmarking",
        "Exploratory data analysis & preprocessing",
        "Power BI dashboards & KPI reporting",
        "Model metric evaluation & visual insights"
      ],
      accent: "from-rose-500/25 via-pink-500/10 to-transparent",
      githubUrl: "https://github.com/sanketraikwar12/AI-Data-Analytics-and-Automated-Machine-Learning"
    }
  ] satisfies Project[],
  certifications: [
    "AWS Cloud Practitioner (CLF-C02) – Course Completion, KodeKloud",
    "GitHub Copilot Certification, KodeKloud",
    "AI-Assisted Development, KodeKloud",
    "Building AI Agents with Claude Agent SDK, KodeKloud",
    "Learning Linux Basics Course & Labs, KodeKloud",
    "Computer Architecture, KodeKloud"
  ],
  hackathons: [
    {
      title: "KRIYETA 5.0",
      type: "36-Hour Hackathon",
      organization: "Acropolis Institute of Engineering & Technology, Indore",
      highlight: "Collaborated in an intensive 36-hour sprint building real-world technical solutions."
    },
    {
      title: "SISTec Innovation Hackathon 3.0",
      type: "Innovation Hackathon",
      organization: "SISTec, Bhopal",
      highlight: "Engineered innovative application prototypes under competitive hackathon constraints."
    },
    {
      title: "AI Agent Builder Workshop",
      type: "Technical Workshop",
      organization: "BotCampus AI",
      highlight: "Hands-on experience architecting autonomous AI agent workflows and tool calling."
    },
    {
      title: "Viksit Bharat Young Leaders Dialogue (VBYLD) 2027",
      type: "National Leadership Dialogue",
      organization: "MY Bharat, Ministry of Youth Affairs & Sports",
      highlight: "Selected participant contributing to youth-led innovation and national tech initiatives."
    }
  ] satisfies HackathonActivity[],
  achievements: [
    {
      value: "Full Stack",
      label: "Developer",
      detail: "React.js, Next.js, Node.js, Express.js, Django, FastAPI"
    },
    {
      value: "AI / GenAI",
      label: "Engineer",
      detail: "Building AI applications, Claude Agent SDK, and Generative AI"
    },
    {
      value: "Data / BI",
      label: "Analytics",
      detail: "Power BI dashboards, SQL analysis, and interactive reporting"
    },
    {
      value: "6+",
      label: "Certifications",
      detail: "AWS Cloud Practitioner, GitHub Copilot, Linux, AI Agents"
    },
    {
      value: "Hackathons",
      label: "Participant",
      detail: "KRIYETA 5.0 (36h), SISTec Innovation 3.0, BotCampus AI"
    }
  ],
  contact: {
    email: "raikwarsanket97@gmail.com",
    github: "https://github.com/sanketraikwar12",
    linkedin: "https://www.linkedin.com/in/sanket-raikwar-06793b391/",
    resume: "https://drive.google.com/uc?export=download&id=17kcKSChBbGps_Kr5SwTNsu48iGKVSBOz",
    githubUsername: "sanketraikwar12",
    location: "India"
  },
  keywords: [
    "Sanket Raikwar",
    "Full Stack Developer",
    "AI Engineer",
    "Generative AI",
    "React.js",
    "Next.js",
    "FastAPI",
    "Django",
    "Python",
    "Machine Learning",
    "Power BI",
    "Data Analytics"
  ]
};
