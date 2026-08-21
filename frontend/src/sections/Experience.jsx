import { motion } from "framer-motion";

function Experience() {
  return (
    <section
      id="experience"
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
            04 / Experience
          </p>

          <h2 className="font-audiowide text-4xl tracking-tight text-white sm:text-5xl lg:text-6xl">
            <span className="glitch-hover">Experience</span>
          </h2>

          <div className="mt-5 h-px w-24 bg-cyan-400/60" />

          <p className="mt-6 max-w-2xl leading-8 text-white/45">
            Professional experience, internships, and opportunities that
            helped me develop practical software engineering skills.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">

          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 hidden h-full w-px bg-white/[0.08] md:block" />

          <div className="space-y-10">

            {/* Career360 */}
            <motion.article
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="group relative md:pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-8 hidden h-4 w-4 rounded-full border border-cyan-400/50 bg-[#030303] md:block">
                <div className="absolute inset-1 rounded-full bg-cyan-400/70" />
              </div>

              <div className="relative overflow-hidden border border-white/[0.08] bg-white/[0.015] p-8 transition-all duration-500 hover:border-cyan-400/30 hover:bg-cyan-400/[0.02] sm:p-10">

                {/* Top accent */}
                <div className="absolute left-0 top-0 h-px w-0 bg-cyan-400 transition-all duration-700 group-hover:w-full" />

                <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">

                  <div className="max-w-3xl">

                    {/* Role */}
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                      <span className="glitch-hover cursor-default font-audiowide text-xs uppercase tracking-[0.25em] text-cyan-300">
                        Internship
                      </span>

                      <span className="h-px w-8 bg-cyan-400/30" />

                      <span className="font-mono text-xs text-white/30">
                        Feb 2025 — Jun 2025
                      </span>
                    </div>

                    {/* Company */}
                    <h3 className="font-audiowide text-2xl text-white sm:text-3xl">
                      <span className="glitch-hover">
                        Career360
                      </span>
                    </h3>

                    {/* Position */}
                    <p className="mt-3 text-lg text-cyan-300">
                      Campus Ambassador Intern
                    </p>

                    {/* Description */}
                    <p className="mt-6 leading-8 text-white/45">
                      Worked as a campus representative, promoting the
                      platform across student networks, gathering authentic
                      college reviews, and helping students discover relevant
                      college and education opportunities.
                    </p>

                    {/* Responsibilities */}
                    <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3">
                      <span className="glitch-hover cursor-default font-audiowide text-xs tracking-wide text-cyan-300/70">
                        Campus Outreach
                      </span>

                      <span className="glitch-hover cursor-default font-audiowide text-xs tracking-wide text-cyan-300/70">
                        Student Engagement
                      </span>

                      <span className="glitch-hover cursor-default font-audiowide text-xs tracking-wide text-cyan-300/70">
                        Research
                      </span>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="shrink-0 lg:text-right">
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/25">
                      Duration
                    </p>

                    <p className="mt-2 font-audiowide text-sm text-white/60">
                      2025
                    </p>
                  </div>

                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 right-0 h-px w-0 bg-cyan-400 transition-all duration-700 group-hover:w-1/3" />
              </div>
            </motion.article>

            {/* Digital Heroes */}
            <motion.article
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="group relative md:pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-8 hidden h-4 w-4 rounded-full border border-cyan-400/50 bg-[#030303] md:block">
                <div className="absolute inset-1 rounded-full bg-cyan-400/70" />
              </div>

              <div className="relative overflow-hidden border border-white/[0.08] bg-white/[0.015] p-8 transition-all duration-500 hover:border-cyan-400/30 hover:bg-cyan-400/[0.02] sm:p-10">

                {/* Top accent */}
                <div className="absolute left-0 top-0 h-px w-0 bg-cyan-400 transition-all duration-700 group-hover:w-full" />

                <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">

                  <div className="max-w-3xl">

                    {/* Role */}
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                      <span className="glitch-hover cursor-default font-audiowide text-xs uppercase tracking-[0.25em] text-cyan-300">
                        Internship
                      </span>

                      <span className="h-px w-8 bg-cyan-400/30" />

                      <span className="font-mono text-xs text-white/30">
                        Feb 2026 — Apr 2026
                      </span>
                    </div>

                    {/* Company */}
                    <h3 className="font-audiowide text-2xl text-white sm:text-3xl">
                      <span className="glitch-hover">
                        Digital Heroes
                      </span>
                    </h3>

                    {/* Position */}
                    <p className="mt-3 text-lg text-cyan-300">
                      Software Development Intern
                    </p>

                    {/* Description */}
                    <p className="mt-6 leading-8 text-white/45">
                      Contributed to software development by building and
                      maintaining applications, working with Python, Java and
                      SQL, designing database schemas, debugging software
                      issues, and collaborating with teams using Git.
                    </p>

                    {/* Technologies / responsibilities */}
                    <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3">
                      <span className="glitch-hover cursor-default font-audiowide text-xs tracking-wide text-cyan-300/70">
                        Python
                      </span>

                      <span className="glitch-hover cursor-default font-audiowide text-xs tracking-wide text-cyan-300/70">
                        Java
                      </span>

                      <span className="glitch-hover cursor-default font-audiowide text-xs tracking-wide text-cyan-300/70">
                        SQL
                      </span>

                      <span className="glitch-hover cursor-default font-audiowide text-xs tracking-wide text-cyan-300/70">
                        Git
                      </span>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="shrink-0 lg:text-right">
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/25">
                      Duration
                    </p>

                    <p className="mt-2 font-audiowide text-sm text-white/60">
                      2026
                    </p>
                  </div>

                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 right-0 h-px w-0 bg-cyan-400 transition-all duration-700 group-hover:w-1/3" />
              </div>
            </motion.article>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;