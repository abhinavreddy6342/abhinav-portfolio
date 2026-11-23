import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function SnowBackground() {
  const particles = Array.from({ length: 40 });

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {particles.map((_, index) => (
        <span
          key={index}
          className="portfolio-particle"
          style={{
            "--x": `${(index * 47) % 100}%`,
            "--y": `${(index * 29) % 100}%`,
            "--delay": `${(index * 0.37) % 8}s`,
            "--duration": `${10 + (index % 8)}s`,
            "--size": `${1 + (index % 3)}px`,
            "--opacity": `${0.14 + (index % 5) * 0.035}`,
          }}
        />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050505] text-white">
      {/* Global Particle Background */}
      <SnowBackground />

      {/* Main Website */}
      <div className="relative z-10">
        <Navbar />

        <main>
          <Home />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Achievements />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;