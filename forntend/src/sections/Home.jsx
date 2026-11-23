import { motion } from "framer-motion";

function Home() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[#030303]">
        {/* Main glow */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]"
        />

        {/* Moving glow 1 */}
        <motion.div
          animate={{
            x: [0, 120, -60, 0],
            y: [0, -80, 60, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[8%] top-[20%] h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]"
        />

        {/* Moving glow 2 */}
        <motion.div
          animate={{
            x: [0, -100, 60, 0],
            y: [0, 70, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[5%] right-[10%] h-80 w-80 rounded-full bg-purple-600/10 blur-[130px]"
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Scanlines */}
        <div className="cyber-scanlines absolute inset-0" />
      </div>

      {/* Hero content */}
      <div className="relative mx-auto max-w-6xl pt-20 text-center">

        {/* Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-8 inline-flex items-center gap-3 rounded-full border border-cyan-400/15 bg-cyan-400/[0.04] px-5 py-2.5 text-sm text-white/60 backdrop-blur-xl"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </span>

          <span className="glitch-hover cursor-default">
            Open to opportunities
          </span>

          <span className="text-cyan-400">✦</span>
        </motion.div>

        {/* Small heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-5 font-mono text-xs uppercase tracking-[0.4em] text-white/35 sm:text-sm"
        >
          <span className="glitch-hover cursor-default">
            Software Engineer • AI • Full Stack
          </span>
        </motion.p>

        {/* Main name */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="font-audiowide tracking-[-0.04em]"
        >
          <span className="glitch-hover block text-4xl text-white sm:text-6xl lg:text-8xl">
            Gogulamudi
          </span>

          <span className="glitch-hover mt-2 block bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-4xl text-transparent sm:text-6xl lg:text-8xl">
            Abhinav Reddy
          </span>
        </motion.h1>

        {/* Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
          className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/50 sm:text-lg"
        >
          <span className="glitch-hover cursor-default">
            Aspiring Software Engineer building intelligent, scalable and
            user-focused applications across{" "}
            <span className="text-cyan-300">AI</span>,{" "}
            <span className="text-cyan-300">Full-Stack Development</span> and
            modern software technologies.
          </span>
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
          }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          {/* Projects */}
          <a
            href="#projects"
            className="group relative overflow-hidden rounded-full bg-white px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]"
          >
            <span className="relative z-10 glitch-hover">
              View My Projects
            </span>

            <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>

            <span className="absolute inset-0 -translate-x-full bg-cyan-300 transition-transform duration-500 group-hover:translate-x-0" />
          </a>

          {/* Resume */}
          <a
            href="/resume.pdf"
            download
            className="group relative overflow-hidden rounded-full border border-white/15 bg-white/[0.03] px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-cyan-400/40 hover:bg-cyan-400/[0.05]"
          >
            <span className="glitch-hover">
              Download Resume
            </span>

            <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-y-0.5">
              ↓
            </span>
          </a>
        </motion.div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mx-auto mt-14 max-w-3xl"
        >
          <p className="mb-5 font-mono text-[11px] font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Technologies I Work With
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
            {["Python", "React", "FastAPI", "AI Agents", "AWS", "Docker"].map(
              (tech) => (
                <span
                  key={tech}
                  className="glitch-hover cursor-default font-audiowide text-sm tracking-wide text-cyan-300 transition-all duration-300 hover:text-cyan-100 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        animate={{
          y: [0, 8, 0],
          opacity: [0.35, 0.8, 0.35],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40"
        aria-label="Scroll to About"
      >
        <span className="text-xl">↓</span>
      </motion.a>
    </section>
  );
}

export default Home;