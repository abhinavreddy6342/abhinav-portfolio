import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-32 sm:py-40"
    >
      {/* Background glow */}
      <div className="absolute left-[-220px] top-1/3 -z-10 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.035] blur-[150px]" />

      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-cyan-400">
            01 / About
          </p>

          <h2 className="font-audiowide text-4xl tracking-tight text-white sm:text-5xl lg:text-6xl">
            <span className="glitch-hover">About Me</span>
          </h2>

          <div className="mt-5 h-px w-24 bg-cyan-400/60" />
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-10 max-w-4xl"
        >
          <p className="text-base leading-8 text-white/50 sm:text-lg">
            I am a{" "}
            <span className="glitch-hover text-cyan-300">
              Computer Science student
            </span>{" "}
            with a strong interest in building software, solving problems,
            and exploring modern technologies across the field of computer
            science.
          </p>

          <p className="mt-6 text-base leading-8 text-white/50 sm:text-lg">
            I enjoy working across{" "}
            <span className="glitch-hover text-cyan-300">
              Software Development
            </span>
            ,{" "}
            <span className="glitch-hover text-blue-300">
              Artificial Intelligence
            </span>
            ,{" "}
            <span className="glitch-hover text-cyan-300">
              Full-Stack Development
            </span>
            , data, cloud technologies, and system-oriented applications.
            I continuously strengthen my foundation in programming,
            data structures, databases, operating systems, and computer
            networks.
          </p>

          <p className="mt-6 text-base leading-8 text-white/50 sm:text-lg">
            My goal is to become a versatile{" "}
            <span className="glitch-hover text-cyan-300">
              Software Engineer
            </span>{" "}
            capable of learning new technologies, designing reliable
            solutions, and contributing to meaningful products across
            different areas of technology.
          </p>
        </motion.div>

        {/* Areas of Interest */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 flex flex-wrap gap-x-6 gap-y-4"
        >
          {[
            "Software Development",
            "Artificial Intelligence",
            "Full-Stack Development",
            "Data & Databases",
            "Cloud & DevOps",
            "Problem Solving",
          ].map((focus) => (
            <span
              key={focus}
              className="glitch-hover cursor-default font-audiowide text-xs tracking-wide text-cyan-300/70 transition-all duration-300 hover:text-cyan-100 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]"
            >
              {focus}
            </span>
          ))}
        </motion.div>

        {/* Bottom Accent */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 h-px w-full origin-left bg-white/[0.06]"
        />
      </div>
    </section>
  );
}

export default About;