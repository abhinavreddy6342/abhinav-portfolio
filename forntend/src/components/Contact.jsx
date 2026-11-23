
import { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setStatus({
      type: "",
      message: "",
    });

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to send your message."
        );
      }

      setStatus({
        type: "success",
        message: "MESSAGE SENT ✓ — Thanks for reaching out!",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus({
        type: "error",
        message:
          "MESSAGE FAILED — Please try again in a moment.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
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
            06 / Contact
          </p>

          <h2 className="font-audiowide text-4xl tracking-tight text-white sm:text-5xl lg:text-6xl">
            <span className="glitch-hover">
              Let's Connect
            </span>
          </h2>

          <div className="mt-5 h-px w-24 bg-cyan-400/60" />

          <p className="mt-6 max-w-2xl leading-8 text-white/45">
            Have an opportunity, project idea, or just want to connect?
            Feel free to send me a message.
          </p>
        </motion.div>

        {/* Contact layout */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="border border-white/[0.08] bg-white/[0.015] p-8 sm:p-10"
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400/60">
              Get In Touch
            </p>

            <h3 className="mt-5 font-audiowide text-2xl text-white sm:text-3xl">
              <span className="glitch-hover">
                Let's build something
              </span>
            </h3>

            <p className="mt-5 leading-8 text-white/40">
              I'm currently open to software engineering, AI, and
              full-stack development opportunities.
            </p>

            <div className="mt-10 space-y-6">

              {/* Email */}
              <a
                href="mailto:abhinavreddy054@gmail.com"
                className="group block"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/25">
                  Email
                </p>

                <p className="mt-2 font-audiowide text-sm text-cyan-300 transition-colors duration-300 group-hover:text-cyan-100">
                  <span className="glitch-hover">
                    abhinavreddy054@gmail.com
                  </span>
                </p>
              </a>

              {/* Phone */}
              <a
                href="tel:7842244035"
                className="group block"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/25">
                  Phone
                </p>

                <p className="mt-2 font-audiowide text-sm text-cyan-300 transition-colors duration-300 group-hover:text-cyan-100">
                  <span className="glitch-hover">
                    7842244035
                  </span>
                </p>
              </a>

              {/* Location */}
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/25">
                  Location
                </p>

                <p className="mt-2 font-audiowide text-sm text-cyan-300">
                  <span className="glitch-hover">
                    Hyderabad, India
                  </span>
                </p>
              </div>

            </div>

            {/* Status */}
            <div className="mt-12 border-t border-white/[0.06] pt-6">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
                </span>

                <span className="glitch-hover font-mono text-xs uppercase tracking-widest text-cyan-300">
                  Currently open to opportunities
                </span>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative border border-white/[0.08] bg-white/[0.015] p-8 sm:p-10"
          >

            {/* Animated top line */}
            <div className="absolute left-0 top-0 h-px w-0 bg-cyan-400 transition-all duration-700 group-hover:w-full" />

            <form onSubmit={handleSubmit}>

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  className="mt-3 w-full border-b border-white/10 bg-transparent px-0 py-4 font-sans text-white outline-none transition-colors duration-300 placeholder:text-white/20 focus:border-cyan-400"
                />
              </div>

              {/* Email */}
              <div className="mt-8">
                <label
                  htmlFor="email"
                  className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  placeholder="your@email.com"
                  className="mt-3 w-full border-b border-white/10 bg-transparent px-0 py-4 font-sans text-white outline-none transition-colors duration-300 placeholder:text-white/20 focus:border-cyan-400"
                />
              </div>

              {/* Message */}
              <div className="mt-8">
                <label
                  htmlFor="message"
                  className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell me about your opportunity or project..."
                  className="mt-3 w-full resize-none border-b border-white/10 bg-transparent px-0 py-4 font-sans text-white outline-none transition-colors duration-300 placeholder:text-white/20 focus:border-cyan-400"
                />
              </div>

              {/* Status message */}
              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className={`mt-6 font-mono text-xs tracking-wide ${
                    status.type === "success"
                      ? "text-cyan-300"
                      : "text-red-400"
                  }`}
                >
                  <span className="glitch-hover">
                    {status.message}
                  </span>
                </motion.div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative mt-10 overflow-hidden bg-cyan-400 px-8 py-4 font-mono text-xs font-semibold tracking-[0.2em] text-black transition-all duration-300 hover:scale-[1.02] hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] disabled:cursor-not-allowed disabled:opacity-50"
              >
                <span className="relative z-10">
                  {isSubmitting
                    ? "SENDING..."
                    : "SEND MESSAGE ↗"}
                </span>

                <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-500 group-hover:translate-x-0" />
              </button>

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
