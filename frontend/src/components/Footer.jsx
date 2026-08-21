import { motion } from "framer-motion";

function Footer() {
  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Experience", "#experience"],
    ["Achievements", "#achievements"],
    ["Contact", "#contact"],
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] px-6 py-12">
      {/* Subtle glow */}
      <div className="absolute left-1/2 top-0 -z-10 h-40 w-[500px] -translate-x-1/2 rounded-full bg-cyan-400/[0.025] blur-[100px]" />

      <div className="mx-auto max-w-6xl">

        {/* Main footer */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

          {/* Logo + name */}
          <motion.a
            href="#home"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group"
          >
            {/* AR. — WHITE */}
            <span className="font-audiowide text-3xl text-white">
              AR.
            </span>

            {/* Name — CYAN */}
            <p className="glitch-hover mt-2 font-mono text-xs tracking-[0.2em] text-cyan-300">
              GOGULAMUDI ABHINAV REDDY
            </p>
          </motion.a>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            {links.map(([name, href]) => (
              <a
                key={name}
                href={href}
                className="glitch-hover font-mono text-[10px] uppercase tracking-widest text-white/35 transition-colors duration-300 hover:text-cyan-300"
              >
                {name}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex gap-3">
            <a
              href="https://github.com/abhinavreddy6342"
              target="_blank"
              rel="noreferrer"
              className="glitch-hover border border-white/[0.08] px-4 py-2.5 font-mono text-[10px] tracking-widest text-cyan-300 transition-all duration-300 hover:border-cyan-400/30 hover:text-cyan-100"
            >
              GITHUB ↗
            </a>

            <a
              href="https://www.linkedin.com/in/abhinav-reddy-0b0781382/"
              target="_blank"
              rel="noreferrer"
              className="glitch-hover border border-white/[0.08] px-4 py-2.5 font-mono text-[10px] tracking-widest text-cyan-300 transition-all duration-300 hover:border-cyan-400/30 hover:text-cyan-100"
            >
              LINKEDIN ↗
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/[0.06]" />

        {/* Bottom */}
        <div className="flex flex-col gap-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">

          {/* Copyright — CYAN */}
          <p className="glitch-hover cursor-default font-mono text-[10px] tracking-widest text-cyan-300">
            © 2026 Gogulamudi Abhinav Reddy. All rights reserved.
          </p>

          {/* Built with — CYAN */}
          <p className="glitch-hover cursor-default font-mono text-[10px] tracking-widest text-cyan-300">
            BUILT WITH REACT • AI • FULL STACK
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;