
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["C", "C++", "Java", "Python", "JavaScript"],
  },
  {
    title: "Frontend Development",
    skills: [
      "HTML5",
      "CSS3",
      "React",
      "Tailwind CSS",
      "Vite",
      "Framer Motion",
      "Recharts",
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      "FastAPI",
      "Flask",
      "Node.js",
      "Express.js",
      "REST APIs",
      "SQLAlchemy",
      "Mongoose",
      "Axios",
    ],
  },
  {
    title: "Databases",
    skills: [
      "SQL",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "SQLite",
      "LowDB",
      "ChromaDB",
    ],
  },
  {
    title: "AI / GenAI",
    skills: [
      "AI Agents",
      "LangChain",
      "LangGraph",
      "RAG",
      "LLMs",
      "Ollama",
      "Google Gemini",
      "Groq",
    ],
  },
  {
    title: "EPM",
    skills: [
      "Oracle Cloud EPM",
      "Planning",
      "Essbase",
      "Smart View",
      "EPM Automate",
      "Groovy",
      "Data Integration",
      "REST APIs",
      "AI Agent Studio Concepts",
    ],
  },
  {
    title: "Data & Document Processing",
    skills: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "PyMuPDF",
      "Tesseract OCR",
      "python-docx",
      "python-pptx",
    ],
  },
  {
    title: "Cloud, DevOps & Deployment",
    skills: [
      "AWS",
      "GCP",
      "Docker",
      "Linux",
      "Git",
      "GitHub",
      "Vercel",
      "Netlify",
      "Render",
    ],
  },
  {
    title: "Authentication & Security",
    skills: [
      "JWT Authentication",
      "bcrypt",
      "Password Hashing",
      "Role-Based Access",
    ],
  },
  {
    title: "Core Computer Science",
    skills: [
      "Data Structures & Algorithms",
      "OOP",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-6 py-32 sm:py-40"
    >
      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.035] blur-[150px]" />

      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-cyan-400">
            02 / Skills
          </p>

          <h2 className="font-audiowide text-4xl tracking-tight text-white sm:text-5xl lg:text-6xl">
            <span className="glitch-hover">Technical Arsenal</span>
          </h2>

          <div className="mt-5 h-px w-24 bg-cyan-400/60" />

          <p className="mt-6 max-w-2xl leading-8 text-white/45">
            Technologies, frameworks, development tools, AI ecosystems, and
            computer science fundamentals I use to build full-stack
            applications, intelligent AI systems, and scalable software.
          </p>
        </motion.div>

        {/* Skill Groups */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: (index % 3) * 0.08,
              }}
              className="group relative border border-white/[0.08] bg-white/[0.015] p-6 transition-all duration-500 hover:border-cyan-400/30 hover:bg-cyan-400/[0.025]"
            >
              {/* Accent */}
              <div className="mb-6 flex items-center gap-3">
                <span className="h-1.5 w-1.5 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

                <h3 className="font-mono text-sm uppercase tracking-[0.2em] text-cyan-300">
                  {group.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-x-4 gap-y-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="glitch-hover cursor-default text-sm text-white/55 transition-colors duration-300 hover:text-cyan-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
