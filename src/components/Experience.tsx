import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data/resume';
import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const { experience } = resumeData;

  return (
    <section className="pb-24 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="mb-16 flex items-center">
          <h2 className="text-3xl font-black text-white uppercase tracking-tight">Track Record</h2>
          <div className="ml-6 flex-grow h-px bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
        </div>

        <div className="space-y-12">
          {experience.map((job, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline Line for Desktop */}
              <div className="hidden md:block absolute left-[150px] top-4 bottom-[-3rem] w-px bg-zinc-800 -z-10 group-last:hidden"></div>

              <div className="md:grid md:grid-cols-[150px_1fr] md:gap-12">
                {/* Date Column */}
                <div className="mb-4 md:mb-0 pt-1">
                  <div className="inline-flex items-center text-xs font-mono font-medium text-cyan-400 bg-cyan-950/30 px-3 py-1.5 border border-cyan-500/20 backdrop-blur-sm shadow-[0_0_10px_rgba(6,182,212,0.1)]">
                    <Calendar className="w-3.5 h-3.5 mr-2 md:hidden" />
                    {job.period}
                  </div>
                </div>

                {/* Content Column */}
                <div className="relative group">
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute -left-[55px] top-3 w-2.5 h-2.5 bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)] before:absolute before:-inset-2 before:border before:border-cyan-500/30 before:rounded-sm rotate-45"></div>

                  <div className="bg-zinc-900/40 p-6 md:p-8 border border-zinc-800/80 hover:border-cyan-500/40 transition-all duration-300 backdrop-blur-sm relative overflow-hidden">
                    {/* Hover Glow Effect */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-3xl rounded-full transform translate-x-16 -translate-y-16 group-hover:bg-cyan-500/10 transition-colors duration-500"></div>

                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 mt-2">
                      <div>
                        <h3 className="text-xl font-bold text-zinc-100">{job.role}</h3>
                        <div className="text-cyan-400 font-medium flex items-center mt-1.5 text-sm uppercase tracking-wider">
                          <Briefcase className="w-4 h-4 mr-2" />
                          {job.company}
                        </div>
                      </div>
                      <div className="text-xs text-zinc-500 mt-3 md:mt-0 font-mono tracking-widest uppercase">
                        {job.location}
                      </div>
                    </div>

                    <p className="text-zinc-400 mb-6 italic font-light">
                      {job.description}
                    </p>

                    <ul className="space-y-3">
                      {job.achievements.map((achievement, aIdx) => (
                        <li key={aIdx} className="flex items-start text-zinc-300 text-sm leading-relaxed">
                          <span className="mt-1.5 mr-3 h-1 w-1 flex-shrink-0 bg-cyan-500 shadow-[0_0_5px_rgba(6,182,212,0.5)]"></span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
