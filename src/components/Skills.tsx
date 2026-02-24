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
    <section className="py-20 bg-slate-900 border-y border-slate-800">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Technical Expertise</h2>
          <div className="h-1 w-20 bg-indigo-500 rounded-full"></div>
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
              className="p-6 rounded-2xl bg-slate-800 border border-slate-700 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-slate-900 rounded-lg border border-slate-700 text-indigo-400 mr-3">
                  <skillGroup.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-slate-100">{skillGroup.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-700 text-xs font-mono text-slate-400"
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
