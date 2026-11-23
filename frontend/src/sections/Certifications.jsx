
import { motion } from "framer-motion";

const certifications = [
  {
  category: "Technical Certification",
  period: "NPTEL · MoE, Government of India",
  title: "NPTEL",
  subtitle: "Data Structure and Algorithms Using Java",
  description:
    "Successfully completed the NPTEL certification course in Data Structure and Algorithms Using Java, achieving a consolidated score of 61%.",
  tags: [
    "Java",
    "Data Structures",
    "Algorithms",
  ],
  infoLabel: "Consolidated Score",
  infoValue: "61%",
  file: "/certificates/NPTEL_Data_Structures_Algorithms_Using_Java.pdf",
  },
  {
    category: "Internship",
    period: "Aug 2026 — Sep 2026",
    title: "Thiranex",
    subtitle: "Full Stack Development Internship",
    description:
      "Successfully completed the Full Stack Development internship at Thiranex, gaining practical experience in developing web applications, building backend functionality, managing databases, and working with modern development tools.",
    tags: [
      "Python",
      "Flask",
      "HTML5",
      "CSS",
      "MongoDB",
      "SQLAlchemy",
      "SQL",
      "Git",
    ],
    infoLabel: "Duration",
    infoValue: "2 Months",
    file: "/certificates/Thiranex_Certificate.pdf",
  },
  {
    category: "Hackathon",
    period: "2026",
    title: "Agent X 2026",
    subtitle: "5th Position — National Level Hackathon",
    location: "Vasavi College of Engineering, Hyderabad",
    description:
      "Secured 5th position at Agent X 2026, a national-level hackathon conducted at Vasavi College of Engineering, Hyderabad. Our team was recognized among the Top 5 teams.",
    tags: [
      "5th Position",
      "Top 5 Team",
      "National Level Hackathon",
      "Teamwork",
    ],
    infoLabel: "Achievement",
    infoValue: "5th Position",
    file: "/certificates/Agent_X_2026_Certificate.png",
  },
  {
    category: "Datathon",
    period: "2025",
    title: "IBM Z Datathon 2025",
    subtitle: "A Global Datathon Event",
    description:
      "Certificate associated with IBM Z Datathon 2025, a global datathon event powered by IBM.",
    tags: ["IBM", "Z Datathon", "Global Event"],
    infoLabel: "Event",
    infoValue: "Global Datathon",
    file: "/certificates/IBM_Z_Datathon_2025.pdf",
  },
  {
    category: "Technical Certification",
    period: "Issued June 2026",
    title: "HackerRank",
    subtitle: "Software Engineer",
    description:
      "Earned the Software Engineer certification from HackerRank, validating technical knowledge in software engineering.",
    tags: ["Software Engineering", "HackerRank"],
    infoLabel: "Credential ID",
    infoValue: "505C5C54E359",
    file: "/certificates/HackerRank_Software_Engineer.png",
  },
  {
    category: "Technical Certification",
    period: "Issued June 2026",
    title: "HackerRank",
    subtitle: "Frontend Developer (React)",
    description:
      "Earned the Frontend Developer (React) certification from HackerRank, validating frontend development knowledge using React.",
    tags: ["React", "Frontend Development", "HackerRank"],
    infoLabel: "Credential ID",
    infoValue: "E4D974B5C135",
    file: "/certificates/HackerRank_Frontend_React.png",
  },
  {
    category: "Hackathon",
    period: "03 October 2026",
    title: "HACKWITHHYDERABAD 3.0",
    subtitle: "Hackathon Event",
    location: "Microsoft Office, Hyderabad",
    description:
      "Certificate associated with HACKWITHHYDERABAD 3.0, held on 3 October 2026 at Microsoft Office, Hyderabad.",
    tags: ["Hackathon", "Hyderabad", "2026"],
    infoLabel: "Venue",
    infoValue: "Microsoft Office",
    file: "/certificates/HackWithHyderabad_3.pdf",
  },
  {
    category: "Online Quiz",
    period: "2026",
    title: "Indian Institute of Technology Hyderabad",
    subtitle: "Online Quiz of ProdX - 2026",
    description:
      "Certificate for the Online Quiz of ProdX - 2026, organized by the Indian Institute of Technology Hyderabad.",
    tags: ["IIT Hyderabad", "Online Quiz", "ProdX 2026"],
    infoLabel: "Organizer",
    infoValue: "IIT Hyderabad",
    file: "/certificates/IIT_Hyderabad_ProdX_2026.pdf",
  },
];

function Certifications() {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden px-6 py-32 sm:py-40"
    >
      {/* Background glow */}
      <div className="absolute left-[-200px] top-1/3 -z-10 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.035] blur-[150px]" />

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
            06 / Certifications
          </p>

          <h2 className="font-audiowide text-4xl tracking-tight text-white sm:text-5xl lg:text-6xl">
            <span className="glitch-hover">Certifications</span>
          </h2>

          <div className="mt-5 h-px w-24 bg-cyan-400/60" />

          <p className="mt-6 max-w-2xl leading-8 text-white/45">
            Professional certifications, technical credentials, hackathons,
            and learning experiences that reflect my continuous learning,
            achievements, and development.
          </p>
        </motion.div>

        {/* Certifications Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 hidden h-full w-px bg-white/[0.08] md:block" />

          <div className="space-y-10">
            {certifications.map((certificate, index) => (
              <motion.article
                key={certificate.file}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                }}
                className="group relative md:pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-8 hidden h-4 w-4 rounded-full border border-cyan-400/50 bg-[#030303] md:block">
                  <div className="absolute inset-1 rounded-full bg-cyan-400/70" />
                </div>

                <div className="relative overflow-hidden border border-white/[0.08] bg-white/[0.015] p-8 pb-20 transition-all duration-500 hover:border-cyan-400/30 hover:bg-cyan-400/[0.02] sm:p-10 sm:pb-20">
                  {/* Top accent */}
                  <div className="absolute left-0 top-0 h-px w-0 bg-cyan-400 transition-all duration-700 group-hover:w-full" />

                  <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
                    <div className="max-w-3xl">
                      {/* Category and date */}
                      <div className="mb-4 flex flex-wrap items-center gap-3">
                        <span className="glitch-hover cursor-default font-audiowide text-xs uppercase tracking-[0.25em] text-cyan-300">
                          {certificate.category}
                        </span>

                        <span className="h-px w-8 bg-cyan-400/30" />

                        <span className="font-mono text-xs text-white/30">
                          {certificate.period}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-audiowide text-2xl text-white sm:text-3xl">
                        <span className="glitch-hover">
                          {certificate.title}
                        </span>
                      </h3>

                      {/* Certificate name */}
                      <p className="mt-3 text-lg text-cyan-300">
                        {certificate.subtitle}
                      </p>

                      {/* Location */}
                      {certificate.location && (
                        <p className="mt-2 font-mono text-xs text-white/30">
                          {certificate.location}
                        </p>
                      )}

                      {/* Description */}
                      <p className="mt-6 leading-8 text-white/45">
                        {certificate.description}
                      </p>

                      {/* Technologies / achievement tags */}
                      <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3">
                        {certificate.tags.map((tag) => (
                          <span
                            key={tag}
                            className="glitch-hover cursor-default font-audiowide text-xs tracking-wide text-cyan-300/70"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Additional information */}
                    <div className="shrink-0 lg:text-right">
                      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/25">
                        {certificate.infoLabel}
                      </p>

                      <p className="mt-2 max-w-[180px] break-all font-audiowide text-sm text-white/60 lg:ml-auto">
                        {certificate.infoValue}
                      </p>
                    </div>
                  </div>

                  {/* View Certificate - bottom right */}
                  <motion.a
                    href={certificate.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      x: -3,
                      scale: 1.02,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="absolute bottom-8 right-8 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-300 transition-all duration-300 hover:text-cyan-100 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.55)] sm:bottom-9 sm:right-10"
                  >
                    <span className="glitch-hover">
                      VIEW CERTIFICATE ↗
                    </span>
                  </motion.a>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 right-0 h-px w-0 bg-cyan-400 transition-all duration-700 group-hover:w-1/3" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
