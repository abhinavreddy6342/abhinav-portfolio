import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    name: "Page Pulse",
    category: "FULL-STACK WEB PLATFORM",
    description:
      "A full-stack website auditing platform that analyzes websites for SEO, performance, accessibility, and security, with dashboards, recommendations, PDF reports, authentication, and report history.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Recharts",
      "Node.js",
      "Express",
      "LowDB",
      "JWT",
      "bcrypt",
      "Axios",
    ],
    github: "https://github.com/abhinavreddy6342/Page-Pulse",
    live: "https://glittery-beignet-978257.netlify.app/",
  },
  {
    number: "02",
    name: "NEXORA",
    category: "AI / DEVOPS PLATFORM",
    description:
      "An AI-powered incident investigation and root-cause analysis platform that helps engineering teams analyze incidents, logs, deployments, and operational signals using specialized AI agents.",
    technologies: [
      "React",
      "JavaScript",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Google Gemini",
      "Ollama",
      "Docker",
      "Vercel",
      "Render",
    ],
    github: "https://github.com/abhinavreddy6342/NEXORA",
    live: "https://nexora-olive-eight.vercel.app/",
  },
  {
    number: "03",
    name: "Smart Campus AI",
    category: "MULTI-AGENT AI SYSTEM",
    description:
      "An AI-powered multi-agent college assistant that provides students with a single conversational interface for academics, placements, events, announcements, student services, notifications, and resume analysis using intelligent query routing and RAG.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Python",
      "FastAPI",
      "LangChain",
      "LangGraph",
      "Llama 3.3 70B",
      "Groq",
      "FastEmbed",
      "Chroma",
    ],
    github: "https://github.com/abhinavreddy6342/Campus-Mind-Ai",
    live: null,
  },
  {
    number: "04",
    name: "LUXORA",
    category: "AI-NATIVE E-COMMERCE PLATFORM",
    description:
      "An AI-native full-stack commerce platform combining multi-agent AI, intelligent recommendations, marketplace vendors, inventory, authentication, orders, and automated commerce workflows.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "Groq",
      "LangChain",
      "JWT",
      "Vercel",
      "Render",
    ],
    github: "https://github.com/abhinavreddy6342/LUXORA",
    live: "https://luxora-psi.vercel.app/",
  },
  {
    number: "05",
    name: "BLOGNEXUS",
    category: "FULL-STACK BLOGGING PLATFORM",
    description:
      "A full-stack blogging and community platform with secure authentication, story publishing, search, categories, likes, comments, bookmarks, profile management, and cloud deployment.",
    technologies: [
      "React",
      "FastAPI",
      "PostgreSQL",
      "JWT",
      "REST APIs",
      "SQLAlchemy",
      "Vercel",
      "Render",
    ],
    github: "https://github.com/abhinavreddy6342/BLOGNEXUS",
    live: "https://blognexus-ruddy.vercel.app/",
  },
  {
    number: "06",
    name: "TASKFLOW",
    category: "FULL-STACK TASK MANAGEMENT PLATFORM",
    description:
      "A secure full-stack task management platform with JWT authentication, password recovery, task CRUD operations, user-specific data, REST APIs, and production deployment.",
    technologies: [
      "React",
      "JavaScript",
      "Vite",
      "Axios",
      "React Router",
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "JWT",
      "Argon2",
      "Vercel",
      "Render",
    ],
    github: "https://github.com/abhinavreddy6342/TASKFLOW",
    live: "https://taskflow-kappa-snowy-65.vercel.app/",
  },
  {
    number: "07",
    name: "NOVA",
    category: "SOVEREIGN INDUSTRIAL AI WORKBENCH",
    description:
      "A privacy-first, on-premise agentic AI workbench for confidential industrial workflows. Combines local large language models, retrieval-augmented generation, agentic planning, mission execution, document understanding, multimodal processing, and auditable workflows while keeping sensitive information under local control.",
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "JavaScript",
      "Ollama",
      "ChromaDB",
      "SQLite",
      "SQLAlchemy",
      "RAG",
      "JWT Authentication",
      "bcrypt",
      "PyMuPDF",
      "python-docx",
      "python-pptx",
      "Tesseract OCR",
    ],
    github: "https://github.com/abhinavreddy6342/NOVA",
    live: null,
  },
  {
    number: "08",
    name: "Magnus DMS QA Automation",
    category: "QA AUTOMATION & MANUAL TESTING",
    description:
      "An end-to-end quality assurance project for a Document Management System, combining 20 test scenarios, 20 detailed test cases, requirements traceability, defect management, and a reusable Java-based Selenium automation framework using the Page Object Model. Includes application launch and login validation, structured test reporting, and evidence-based blocker documentation.",
    technologies: [
      "Java 17",
      "Selenium WebDriver",
      "TestNG",
      "Maven",
      "Page Object Model",
      "Google Chrome",
      "Manual Testing",
      "RTM",
      "Defect Management",
    ],
    github: "https://github.com/abhinavreddy6342/Magnus-DMS-QA-Automation",
    live: null,
  },
  {
    number: "09",
    name: "RETRAX",
    category: "MEMORY-AUGMENTED INCIDENT INTELLIGENCE",
    description:
      "An AI-powered incident intelligence platform for engineering and DevOps teams that combines current incident evidence with historical engineering experience. Uses memory-augmented AI reasoning to compare incidents, surface successful and failed remediation actions, generate operational warnings, analyze runbook experience, track investigation decisions, and feed outcomes back into organizational memory.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Hindsight",
      "Ollama",
      "OpenAI SDK",
      "Groq SDK",
      "Pytest",
    ],
    github: "https://github.com/abhinavreddy6342/RETRAX",
    live: null,
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-32 sm:py-40"
    >
      {/* Background glow */}
      <div className="absolute right-[-220px] top-1/4 -z-10 h-[550px] w-[550px] rounded-full bg-cyan-500/[0.035] blur-[160px]" />

      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-cyan-400">
            03 / Projects
          </p>

          <h2 className="font-audiowide text-4xl tracking-tight text-white sm:text-5xl lg:text-6xl">
            <span className="glitch-hover">Projects</span>
          </h2>

          <div className="mt-5 h-px w-24 bg-cyan-400/60" />

          <p className="mt-6 max-w-2xl leading-8 text-white/45">
            A selection of projects where I combine software engineering,
            artificial intelligence, and full-stack development to build
            practical technology solutions.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="space-y-8">

          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
              className="group relative overflow-hidden border border-white/[0.08] bg-white/[0.015] transition-all duration-500 hover:border-cyan-400/30 hover:bg-cyan-400/[0.02]"
            >
              {/* Top animated line */}
              <div className="absolute left-0 top-0 h-px w-0 bg-cyan-400 transition-all duration-700 group-hover:w-full" />

              {/* Corner decoration */}
              <div className="absolute right-0 top-0 h-16 w-16 border-l border-b border-white/[0.04] transition-colors duration-500 group-hover:border-cyan-400/20" />

              <div className="grid gap-10 p-8 sm:p-10 lg:grid-cols-[120px_1fr]">

                {/* Project Number */}
                <div className="hidden lg:block">
                  <p className="font-audiowide text-5xl font-bold text-cyan-300/70 transition-all duration-500 group-hover:text-cyan-300 group-hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.45)]">
                    {project.number}
                  </p>

                  <div className="mt-5 h-px w-10 bg-cyan-400/40 transition-all duration-500 group-hover:w-16 group-hover:bg-cyan-300" />
                </div>

                {/* Main Content */}
                <div>

                  {/* Category */}
                  <div className="mb-5 flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs tracking-[0.25em] text-cyan-300/80">
                      {project.category}
                    </span>

                    <span className="h-px w-8 bg-cyan-400/30" />

                    <span className="font-audiowide text-xs text-cyan-300/60 lg:hidden">
                      {project.number}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="font-audiowide text-3xl text-white transition-colors duration-300 group-hover:text-cyan-100 sm:text-4xl">
                    <span className="glitch-hover">
                      {project.name}
                    </span>
                  </h3>

                  {/* Description */}
                  <p className="mt-5 max-w-4xl leading-8 text-white/50">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-8">

                    <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-400/70">
                      Technologies
                    </p>

                    <div className="flex flex-wrap gap-x-5 gap-y-4">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="glitch-hover cursor-default font-audiowide text-xs font-medium tracking-wide text-cyan-300 transition-all duration-300 hover:text-cyan-100 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.65)]"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="mt-10 flex flex-wrap gap-4">

                    {/* GitHub */}
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="group/github relative overflow-hidden border border-white/10 bg-white/[0.03] px-6 py-3 font-mono text-xs tracking-widest text-white/80 transition-all duration-300 hover:border-cyan-400/50 hover:text-cyan-300"
                      >
                        <span className="relative z-10 glitch-hover">
                          GITHUB ↗
                        </span>

                        <span className="absolute inset-0 -translate-x-full bg-cyan-400/[0.08] transition-transform duration-500 group-hover/github:translate-x-0" />
                      </a>
                    ) : (
                      <span className="border border-cyan-400/10 bg-cyan-400/[0.02] px-6 py-3 font-mono text-xs tracking-widest text-cyan-300/40">
                        GITHUB — COMING SOON
                      </span>
                    )}

                    {/* Live Demo */}
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="group/live relative overflow-hidden bg-cyan-400 px-6 py-3 font-mono text-xs font-semibold tracking-widest text-black transition-all duration-300 hover:scale-[1.03] hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
                      >
                        <span className="relative z-10 glitch-hover">
                          LIVE DEMO ↗
                        </span>

                        <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-500 group-hover/live:translate-x-0" />
                      </a>
                    ) : (
                      <span className="border border-cyan-400/10 bg-cyan-400/[0.02] px-6 py-3 font-mono text-xs tracking-widest text-cyan-300/40">
                        LIVE DEMO — COMING SOON
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom animated line */}
              <div className="absolute bottom-0 right-0 h-px w-0 bg-cyan-400 transition-all duration-700 group-hover:w-1/3" />
            </motion.article>
          ))}

        </div>

        {/* More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <span className="glitch-hover cursor-default font-audiowide text-sm uppercase tracking-[0.3em] text-cyan-300/80 transition-colors duration-300 hover:text-cyan-100">
            More projects in development
          </span>
        </motion.div>

      </div>
    </section>
  );
}

export default Projects;
