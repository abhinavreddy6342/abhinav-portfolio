import { motion } from "framer-motion";
import { useState } from "react";

const API_URL =
  "https://abhinav-portfolio-backend-dnpr.onrender.com/api/contact";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setIsSubmitting(true);
    setStatus({
      type: "",
      message: "",
    });

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: `${formData.subject}\n\n${formData.message}`,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message.");
      }

      setStatus({
        type: "success",
        message: "Message sent successfully. Thanks for reaching out!",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus({
        type: "error",
        message:
          "Unable to send your message right now. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

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
            <span className="glitch-hover">Let's Connect</span>
          </h2>

          <div className="mt-5 h-px w-24 bg-cyan-400/60" />

          <p className="mt-6 max-w-2xl leading-8 text-white/45">
            Have an opportunity, project idea, or simply want to connect?
            Feel free to reach out. I'm always interested in learning,
            building, and collaborating.
          </p>
        </motion.div>

        {/* Main contact area */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden border border-white/[0.08] bg-white/[0.015] p-8 sm:p-10"
          >
            <div className="absolute left-0 top-0 h-px w-0 bg-cyan-400 transition-all duration-700 hover:w-full" />

            <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400/60">
              Get In Touch
            </p>

            <h3 className="mt-5 font-audiowide text-2xl text-white sm:text-3xl">
              <span className="glitch-hover">
                Let's build something
              </span>
            </h3>

            <p className="mt-5 leading-8 text-white/40">
              Whether it's software development, AI, full-stack engineering,
              or a new technical challenge, I'm open to meaningful
              opportunities and collaborations.
            </p>

            {/* Contact details */}
            <div className="mt-10 space-y-6">

              {/* Email */}
              <a
                href="mailto:abhinavreddy054@gmail.com"
                className="group block border-b border-white/[0.06] pb-5"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/25">
                  Email
                </p>

                <p className="glitch-hover mt-2 text-sm text-white/70 transition-colors duration-300 group-hover:text-cyan-300">
                  abhinavreddy054@gmail.com
                </p>
              </a>

              {/* Phone */}
              <a
                href="tel:7842244035"
                className="group block border-b border-white/[0.06] pb-5"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/25">
                  Phone
                </p>

                <p className="glitch-hover mt-2 text-sm text-white/70 transition-colors duration-300 group-hover:text-cyan-300">
                  +91 78422 44035
                </p>
              </a>

              {/* Location */}
              <div className="block border-b border-white/[0.06] pb-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/25">
                  Location
                </p>

                <p className="glitch-hover mt-2 cursor-default text-sm text-white/70 transition-colors duration-300 hover:text-cyan-300">
                  Hyderabad, India
                </p>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="https://github.com/abhinavreddy6342"
                target="_blank"
                rel="noreferrer"
                className="glitch-hover border border-white/10 px-5 py-3 font-mono text-xs tracking-widest text-white/60 transition-all duration-300 hover:border-cyan-400/40 hover:text-cyan-300"
              >
                GITHUB ↗
              </a>

              <a
                href="https://www.linkedin.com/in/abhinav-reddy-0b0781382/"
                target="_blank"
                rel="noreferrer"
                className="glitch-hover border border-white/10 px-5 py-3 font-mono text-xs tracking-widest text-white/60 transition-all duration-300 hover:border-cyan-400/40 hover:text-cyan-300"
              >
                LINKEDIN ↗
              </a>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative overflow-hidden border border-white/[0.08] bg-white/[0.015] p-8 sm:p-10"
          >

            <div className="absolute left-0 top-0 h-px w-0 bg-cyan-400 transition-all duration-700 hover:w-full" />

            <p className="mb-8 font-mono text-xs uppercase tracking-[0.3em] text-cyan-400/60">
              Send A Message
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-white/30"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="w-full border border-white/[0.08] bg-black/30 px-5 py-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/20 focus:border-cyan-400/40 focus:bg-cyan-400/[0.02]"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-white/30"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full border border-white/[0.08] bg-black/30 px-5 py-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/20 focus:border-cyan-400/40 focus:bg-cyan-400/[0.02]"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-white/30"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What would you like to discuss?"
                  className="w-full border border-white/[0.08] bg-black/30 px-5 py-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/20 focus:border-cyan-400/40 focus:bg-cyan-400/[0.02]"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-white/30"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Write your message..."
                  className="w-full resize-none border border-white/[0.08] bg-black/30 px-5 py-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/20 focus:border-cyan-400/40 focus:bg-cyan-400/[0.02]"
                />
              </div>

              {/* Status */}
              {status.message && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-center font-mono text-xs tracking-wider ${
                    status.type === "success"
                      ? "text-cyan-300"
                      : "text-red-400"
                  }`}
                >
                  {status.message}
                </motion.p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full overflow-hidden bg-cyan-400 px-8 py-4 font-mono text-xs font-semibold tracking-[0.2em] text-black transition-all duration-300 hover:scale-[1.02] hover:bg-cyan-300 hover:shadow-[0_0_35px_rgba(34,211,238,0.2)] disabled:cursor-not-allowed disabled:opacity-50"
              >
                <span className="relative z-10 glitch-hover">
                  {isSubmitting ? "SENDING..." : "SEND MESSAGE →"}
                </span>

                <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-500 group-hover:translate-x-0" />
              </button>

            </form>
          </motion.div>
        </div>

        {/* Bottom availability */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="glitch-hover cursor-default font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-300">
            Currently open to software engineering & AI opportunities
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default Contact;