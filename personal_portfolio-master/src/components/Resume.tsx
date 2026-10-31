"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const PARTICLES = [
  { left: "7%", top: "19%", delay: "0s", size: "4px" },
  { left: "17%", top: "72%", delay: "1.5s", size: "3px" },
  { left: "31%", top: "28%", delay: "3s", size: "5px" },
  { left: "68%", top: "17%", delay: "2s", size: "3px" },
  { left: "79%", top: "70%", delay: "0.8s", size: "4px" },
  { left: "91%", top: "34%", delay: "2.8s", size: "3px" },
  { left: "56%", top: "84%", delay: "1.1s", size: "4px" },
];

const NETWORK_LINES = [
  "M0 92 C130 28 185 155 330 78 S545 35 690 104",
  "M180 0 C260 95 330 120 430 44 S575 20 760 145",
  "M440 210 C535 145 620 280 820 185 S960 160 1100 220",
];

export default function Resume() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  useEffect(() => {
    if (!isAboutOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsAboutOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isAboutOpen]);

  return (
    <>
      <section
        id="resume"
        className="relative isolate overflow-hidden bg-[#090b14] px-4 py-28 md:px-12 md:py-36"
        aria-labelledby="resume-heading"
      >
        <div className="resume-aurora resume-aurora-blue" aria-hidden="true" />
        <div className="resume-aurora resume-aurora-purple" aria-hidden="true" />
        <div className="resume-grid" aria-hidden="true" />

        <svg
          className="resume-network"
          viewBox="0 0 1100 300"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {NETWORK_LINES.map((line, index) => (
            <path key={index} d={line} pathLength="1" />
          ))}
        </svg>

        <div className="resume-particles" aria-hidden="true">
          {PARTICLES.map((particle, index) => (
            <span
              key={index}
              className="resume-particle"
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: particle.delay,
                width: particle.size,
                height: particle.size,
              }}
            />
          ))}
        </div>

        <motion.div
          className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-blue-300/80">
            The next chapter
          </p>
          <h2
            id="resume-heading"
            className="mb-5 text-4xl font-bold tracking-tight text-white md:text-6xl"
          >
            Building Skills Today.
            <span className="block bg-linear-to-r from-blue-300 via-cyan-200 to-purple-400 bg-clip-text text-transparent">
              Creating the Future Tomorrow.
            </span>
          </h2>
          <p className="mb-12 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
            A closer look at my experience, technical toolkit, and the work I am
            building toward.
          </p>

          <motion.div
            className="resume-frame w-full max-w-3xl"
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-3 text-left">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-slate-300">
                Masood Nawaz T / Resume
              </span>
              <span className="flex gap-1.5" aria-hidden="true">
                <i className="h-2 w-2 rounded-full bg-blue-400/70" />
                <i className="h-2 w-2 rounded-full bg-purple-400/70" />
                <i className="h-2 w-2 rounded-full bg-cyan-300/70" />
              </span>
            </div>
            <object
              data="/Masood_Nawaz_Resume-1.pdf"
              type="application/pdf"
              aria-label="Masood Nawaz T resume"
              className="h-[480px] w-full bg-white md:h-[620px]"
            >
              <div className="flex h-full flex-col items-center justify-center gap-4 bg-slate-100 p-6 text-center text-slate-800">
                <p>Preview unavailable in this browser.</p>
                <a
                  href="/Masood_Nawaz_Resume-1.pdf"
                  download="Masood_Nawaz_Resume.pdf"
                  className="font-semibold text-blue-700 underline"
                >
                  Download the resume PDF
                </a>
              </div>
            </object>
          </motion.div>

          <motion.div
            className="mt-8 flex w-full flex-col justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            <button
              type="button"
              onClick={() => setIsAboutOpen(true)}
              className="resume-button resume-button-secondary"
              aria-haspopup="dialog"
            >
              <span>About Me</span>
              <span aria-hidden="true">↗</span>
            </button>
            <a
              href="/Masood_Nawaz_Resume-1.pdf"
              download="Masood_Nawaz_Resume.pdf"
              className="resume-button resume-button-primary"
            >
              <span>Download Resume</span>
              <span aria-hidden="true">↓</span>
            </a>
          </motion.div>
        </motion.div>
      </section>

      <AnimatePresence>
        {isAboutOpen && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md"
            role="presentation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setIsAboutOpen(false);
            }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="about-me-title"
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/15 bg-[#111522]/95 p-7 text-left shadow-2xl shadow-blue-950/40 md:p-10"
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.97 }}
              transition={{ duration: 0.25 }}
            >
              <button
                type="button"
                onClick={() => setIsAboutOpen(false)}
                className="absolute right-5 top-5 rounded-full border border-white/10 px-3 py-1 text-xl leading-none text-slate-400 transition-colors hover:border-white/30 hover:text-white"
                aria-label="Close About Me dialog"
              >
                ×
              </button>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-blue-300">
                About me
              </p>
              <h3 id="about-me-title" className="mb-5 pr-8 text-3xl font-bold text-white">
                Building thoughtful digital experiences.
              </h3>
              <p className="mb-8 leading-relaxed text-slate-300">
                I&apos;m Masood Nawaz T, a developer focused on creating responsive
                web experiences, scalable applications, and AI-powered tools. My
                work combines a strong frontend foundation with backend
                development, automation, and a curiosity for emerging technology.
              </p>
              <div className="grid gap-6 sm:grid-cols-3">
                <div>
                  <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-300">
                    Focus
                  </h4>
                  <p className="text-sm leading-relaxed text-slate-400">
                    Full-stack web development and AI agents.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-purple-300">
                    Toolkit
                  </h4>
                  <p className="text-sm leading-relaxed text-slate-400">
                    Next.js, React, TypeScript, Python, Java, and cloud tooling.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-cyan-300">
                    Direction
                  </h4>
                  <p className="text-sm leading-relaxed text-slate-400">
                    Growing through meaningful products and continuous learning.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
