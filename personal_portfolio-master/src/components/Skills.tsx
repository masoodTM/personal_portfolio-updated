"use client";

import { motion } from "framer-motion";

const SKILL_ROWS = [
  ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
  ["Java", "Python", "Node.js", "Express.js", "Microservices", "REST APIs", "MongoDB", "PostgreSQL"],
  ["AI Models", "AI Agents", "Docker", "Kubernetes", "Cloud (AWS)", "CI/CD", "Git & GitHub"],
];

const ROW_COLORS = [
  "from-blue-500/10 to-cyan-500/10 border-blue-500/20 text-blue-200",
  "from-purple-500/10 to-pink-500/10 border-purple-500/20 text-purple-200",
  "from-emerald-500/10 to-teal-500/10 border-emerald-500/20 text-emerald-200",
];

export default function Skills() {
  return (
    <section className="relative z-20 bg-[#0a0a0a] py-32 px-4 md:px-12 overflow-hidden" id="skills">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
        >
          My <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">Skills</span>
        </motion.h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          A comprehensive stack enabling end-to-end development of scalable applications and AI-powered agents.
        </p>
      </div>

      <div className="relative z-10 flex flex-col gap-8 max-w-full">
        {SKILL_ROWS.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="relative w-full overflow-hidden mask-linear-fade"
          >
            {/* Edge fade masks */}
            <div className="absolute top-0 left-0 w-24 md:w-40 h-full z-20 bg-linear-to-r from-[#0a0a0a] to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 w-24 md:w-40 h-full z-20 bg-linear-to-l from-[#0a0a0a] to-transparent pointer-events-none" />

            <div className="flex w-max">
              <motion.div
                className="flex gap-4 px-2"
                animate={{ x: ["-50%", "0%"] }}
                transition={{
                  duration: 20 + rowIndex * 5,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                {[...row, ...row, ...row, ...row].map((skill, i) => (
                  <span
                    key={i}
                    className={`shrink-0 px-6 py-3 rounded-full bg-linear-to-r border backdrop-blur-md text-base md:text-lg font-medium whitespace-nowrap ${ROW_COLORS[rowIndex % ROW_COLORS.length]}`}
                  >
                    {skill}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
