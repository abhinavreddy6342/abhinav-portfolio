import { motion } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed left-1/2 top-5 z-50 w-[92%] max-w-6xl -translate-x-1/2"
    >
      <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/50 px-5 py-3 shadow-2xl backdrop-blur-xl">

        {/* Logo - NO GLITCH */}
        <a
          href="#home"
          className="text-lg font-bold tracking-tight text-white"
        >
          AR<span className="text-cyan-400">.</span>
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="glitch-hover text-sm text-white/60 transition-colors duration-300 hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Social links */}
        <div className="flex items-center gap-4">

          <a
            href="https://github.com/abhinavreddy6342"
            target="_blank"
            rel="noreferrer"
            className="glitch-hover text-sm text-white/60 transition-colors duration-300 hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/abhinav-reddy-0b0781382/"
            target="_blank"
            rel="noreferrer"
            className="glitch-hover text-sm text-white/60 transition-colors duration-300 hover:text-white"
          >
            LinkedIn
          </a>

        </div>
      </nav>
    </motion.header>
  );
}

export default Navbar;