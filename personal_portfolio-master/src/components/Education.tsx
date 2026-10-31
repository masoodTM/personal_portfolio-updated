"use client";

import { motion } from "framer-motion";

const EDUCATION = [
  {
    degree: "B.Tech. Information Technology",
    institution: "Anna University",
    year: "2023 – 2027",
    score: "8.7 CGPA",
  },
  {
    degree: "Higher Secondary (HSC)",
    institution: "K.H.Matriculation Boys Higher Secondary School",
    year: "2022 – 2023",
    score: "70%",
  },
];

export default function Education() {
  return (
    <section className="relative z-20 bg-[#0a0a0a] py-32 overflow-hidden" id="education">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
        >
          My <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">Education</span>
        </motion.h2>
        <p className="text-gray-400 text-lg max-w-xl mx-auto mb-14 leading-relaxed">
          My academic background and qualifications.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="max-w-4xl mx-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden"
        >
          {/* Table header - desktop only */}
          <div className="hidden md:grid grid-cols-4 bg-white/5 text-xs font-bold uppercase tracking-wider text-gray-400 px-8 py-4 border-b border-white/10">
            <span className="text-left">Degree</span>
            <span className="text-left">Institution</span>
            <span className="text-left">Year</span>
            <span className="text-left">Percentage / CGPA</span>
          </div>

          {EDUCATION.map((row, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 px-8 py-6 text-left ${
                index !== EDUCATION.length - 1 ? "border-b border-white/10" : ""
              } hover:bg-white/5 transition-colors`}
            >
              <div>
                <span className="md:hidden text-xs uppercase tracking-wider text-gray-500 block mb-1">Degree</span>
                <span className="text-white font-bold">{row.degree}</span>
              </div>
              <div>
                <span className="md:hidden text-xs uppercase tracking-wider text-gray-500 block mb-1">Institution</span>
                <span className="text-gray-300">{row.institution}</span>
              </div>
              <div>
                <span className="md:hidden text-xs uppercase tracking-wider text-gray-500 block mb-1">Year</span>
                <span className="text-blue-400 font-mono text-sm">{row.year}</span>
              </div>
              <div>
                <span className="md:hidden text-xs uppercase tracking-wider text-gray-500 block mb-1">Percentage / CGPA</span>
                <span className="text-purple-300 font-bold">{row.score}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
