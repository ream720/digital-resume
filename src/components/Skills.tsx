import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data/resume';

export default function Skills() {
  const { skills } = resumeData;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/20 to-transparent pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="mb-16 flex items-center justify-end">
          <div className="mr-6 flex-grow h-px bg-gradient-to-l from-cyan-500/50 to-transparent"></div>
          <h2 className="text-3xl font-black text-white uppercase tracking-tight">Technical Expertise</h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="group p-6 bg-zinc-900/40 border border-zinc-800/80 hover:border-cyan-500/50 hover:bg-zinc-900/80 transition-all duration-300 relative overflow-hidden backdrop-blur-sm"
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none">
                <div className="absolute top-0 right-0 w-full h-px bg-cyan-500/0 group-hover:bg-cyan-500/50 transition-colors duration-300"></div>
                <div className="absolute top-0 right-0 w-px h-full bg-cyan-500/0 group-hover:bg-cyan-500/50 transition-colors duration-300"></div>
              </div>

              <div className="flex items-center mb-6">
                <div className="p-2.5 bg-zinc-950 border border-zinc-800 text-cyan-500 mr-4 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-shadow duration-300">
                  <skillGroup.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-zinc-100 uppercase tracking-wider text-sm">{skillGroup.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {skillGroup.items.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 bg-zinc-950/50 border border-zinc-800/80 text-xs font-mono text-zinc-400 group-hover:border-zinc-700 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
