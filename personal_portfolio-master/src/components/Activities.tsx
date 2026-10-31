"use client";

import { motion } from "framer-motion";

const ACTIVITIES = [
  { role: "President", org: "Dr. A.P.J. Abdul Kalam Library" },
  { role: "Member", org: "Melvisharam, The National Welfare Association" },
  { role: "Member", org: "Vserv Educational Charitable Trust" },
  { role: "Executive Member", org: "Madarasa Committee" },
  { role: "Member", org: "Jamiat Ulama-e-Hind" },
  { role: "Member", org: "All India Muslim Personal Law Board" },
  { role: "Member, State Committee", org: "Cockroach Janata Party" },
];

export default function Activities() {
  return (
    <section className="relative z-20 bg-[#121212] py-32 px-4 md:px-12 overflow-hidden" id="activities">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Activities & <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">Involvement</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Community, welfare, and organizational roles I'm proud to be part of.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACTIVITIES.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <div className="w-10 h-10 shrink-0 rounded-full bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                {index + 1}
              </div>
              <div>
                <p className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">{item.role}</p>
                <p className="text-white font-medium leading-snug">{item.org}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
