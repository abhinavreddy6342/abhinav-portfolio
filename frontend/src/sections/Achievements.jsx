import { motion } from "framer-motion";

function Achievements() {
  return (
    <section
      id="achievements"
      className="relative overflow-hidden px-6 py-32 sm:py-40"
    >
      {/* Background glow */}
      <div className="absolute right-[-200px] top-1/3 -z-10 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.035] blur-[150px]" />

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
            05 / Achievements
          </p>

          <h2 className="font-audiowide text-4xl tracking-tight text-white sm:text-5xl lg:text-6xl">
            <span className="glitch-hover">Achievements</span>
          </h2>

          <div className="mt-5 h-px w-24 bg-cyan-400/60" />

          <p className="mt-6 max-w-2xl leading-8 text-white/45">
            Milestones, competitive achievements, and coding profiles that
            reflect my continuous learning and problem-solving journey.
          </p>
        </motion.div>

        {/* Main Achievement */}
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="group relative overflow-hidden border border-white/[0.08] bg-white/[0.015] p-8 pb-24 transition-all duration-500 hover:border-cyan-400/30 hover:bg-cyan-400/[0.02] sm:p-10 sm:pb-24"
        >
          {/* Top accent */}
          <div className="absolute left-0 top-0 h-px w-0 bg-cyan-400 transition-all duration-700 group-hover:w-full" />

          <div className="grid gap-10 lg:grid-cols-[1fr_260px]">
            {/* Achievement Content */}
            <div>
              {/* Achievement meta */}
              <div className="mb-6 flex items-center gap-4">
                <span className="font-mono text-sm tracking-[0.3em] text-cyan-400/60">
                  01
                </span>

                <span className="h-px w-12 bg-cyan-400/30" />

                <span className="glitch-hover cursor-default font-mono text-xs uppercase tracking-[0.25em] text-white/30">
                  National Level
                </span>
              </div>

              {/* Trophy */}
              <p className="mb-3 text-3xl">🏆</p>

              {/* Title */}
              <h3 className="font-audiowide text-2xl text-white sm:text-3xl lg:text-4xl">
                <span className="glitch-hover">
                  5th Position — Agent X 2026
                </span>
              </h3>

              {/* Subtitle */}
              <p className="mt-4 text-lg text-cyan-300">
                National Level Hackathon
              </p>

              {/* Description */}
              <p className="mt-6 max-w-3xl leading-8 text-white/45">
                Secured 5th position at Agent X 2026, a national-level
                hackathon conducted at Vasavi College of Engineering,
                Hyderabad. The achievement placed our team among the Top 5
                teams recognized on stage.
              </p>

              {/* Animated Achievement Tags */}
              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3">
                <span className="glitch-hover cursor-default font-audiowide text-xs tracking-widest text-cyan-300/70 transition-colors duration-300 hover:text-cyan-100">
                  TOP 5 TEAM
                </span>

                <span className="glitch-hover cursor-default font-audiowide text-xs tracking-widest text-cyan-300/70 transition-colors duration-300 hover:text-cyan-100">
                  AGENT X 2026
                </span>

                <span className="glitch-hover cursor-default font-audiowide text-xs tracking-widest text-cyan-300/70 transition-colors duration-300 hover:text-cyan-100">
                  HACKATHON
                </span>
              </div>
            </div>

            {/* Position Highlight */}
            <div className="flex items-center justify-center border border-white/[0.06] bg-black/20 p-8 text-center">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30">
                  Final Position
                </p>

                <p className="glitch-hover mt-3 cursor-default font-audiowide text-6xl text-cyan-300">
                  #05
                </p>

                <p className="glitch-hover mt-3 cursor-default font-mono text-xs uppercase tracking-widest text-white/30">
                  National Level
                </p>
              </div>
            </div>
          </div>

          {/* Achievement Proof Links - bottom right */}
          <div className="absolute bottom-7 left-8 right-8 flex flex-wrap justify-end gap-x-6 gap-y-3 sm:bottom-8 sm:left-10 sm:right-10">

            {/* Certificate */}
            <motion.a
              href="/certificates/Agent_X_2026_Certificate.png"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                x: -3,
                scale: 1.02,
              }}
              transition={{
                duration: 0.25,
              }}
              className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-300 transition-all duration-300 hover:text-cyan-100 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.55)]"
            >
              <span className="glitch-hover">
                VIEW CERTIFICATE ↗
              </span>
            </motion.a>

            {/* Stage Award Photo */}
            <motion.a
              href="/achievements/Agent_X_2026_Award_Photo.png"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                x: -3,
                scale: 1.02,
              }}
              transition={{
                duration: 0.25,
              }}
              className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-300 transition-all duration-300 hover:text-cyan-100 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.55)]"
            >
              <span className="glitch-hover">
                VIEW AWARD PHOTO ↗
              </span>
            </motion.a>

          </div>

          {/* Bottom accent */}
          <div className="absolute bottom-0 right-0 h-px w-0 bg-cyan-400 transition-all duration-700 group-hover:w-1/3" />
        </motion.article>

        {/* Coding Profiles */}
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {/* HackerRank */}
          <motion.a
            href="https://www.hackerrank.com/profile/abhinavreddy054"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="group relative overflow-hidden border border-white/[0.08] bg-white/[0.015] p-8 transition-all duration-500 hover:border-cyan-400/30 hover:bg-cyan-400/[0.02]"
          >
            {/* Top accent */}
            <div className="absolute left-0 top-0 h-px w-0 bg-cyan-400 transition-all duration-700 group-hover:w-full" />

            <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400/60">
              Coding Profile
            </p>

            <h3 className="mt-4 font-audiowide text-2xl text-white">
              <span className="glitch-hover">HackerRank</span>
            </h3>

            <div className="mt-6 flex items-end justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-white/25">
                  Current Rank
                </p>

                <p className="mt-2 font-audiowide text-4xl text-cyan-300">
                  710
                </p>
              </div>

              <span className="glitch-hover cursor-default font-mono text-xs text-white/30 transition-colors group-hover:text-cyan-300">
                VIEW PROFILE ↗
              </span>
            </div>

            {/* Bottom accent */}
            <div className="absolute bottom-0 right-0 h-px w-0 bg-cyan-400 transition-all duration-700 group-hover:w-1/3" />
          </motion.a>

          {/* CodeChef */}
          <motion.a
            href="https://www.codechef.com/users/leap_spice_07"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="group relative overflow-hidden border border-white/[0.08] bg-white/[0.015] p-8 transition-all duration-500 hover:border-cyan-400/30 hover:bg-cyan-400/[0.02]"
          >
            {/* Top accent */}
            <div className="absolute left-0 top-0 h-px w-0 bg-cyan-400 transition-all duration-700 group-hover:w-full" />

            <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400/60">
              Coding Profile
            </p>

            <h3 className="mt-4 font-audiowide text-2xl text-white">
              <span className="glitch-hover">CodeChef</span>
            </h3>

            <div className="mt-6 flex items-end justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-white/25">
                  Competitive Programming
                </p>

                <p className="mt-2 font-audiowide text-3xl text-cyan-300">
                  Profile
                </p>
              </div>

              <span className="glitch-hover cursor-default font-mono text-xs text-white/30 transition-colors group-hover:text-cyan-300">
                VIEW PROFILE ↗
              </span>
            </div>

            {/* Bottom accent */}
            <div className="absolute bottom-0 right-0 h-px w-0 bg-cyan-400 transition-all duration-700 group-hover:w-1/3" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}

export default Achievements;