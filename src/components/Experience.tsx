import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data/resume';
import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const { experience } = resumeData;

  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Professional Experience</h2>
          <div className="h-1 w-20 bg-indigo-500 rounded-full"></div>
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
              <div className="hidden md:block absolute left-[150px] top-0 bottom-0 w-px bg-slate-800 -z-10"></div>
              
              <div className="md:grid md:grid-cols-[150px_1fr] md:gap-12">
                {/* Date Column */}
                <div className="mb-2 md:mb-0">
                  <div className="inline-flex items-center text-sm font-mono font-medium text-slate-400 bg-slate-900 md:bg-transparent px-2 py-1 md:p-0 rounded border md:border-0 border-slate-800">
                    <Calendar className="w-3 h-3 mr-2 md:hidden" />
                    {job.period}
                  </div>
                </div>

                {/* Content Column */}
                <div className="relative">
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute -left-[55px] top-1.5 w-3 h-3 rounded-full bg-indigo-500 border-4 border-slate-950"></div>

                  <div className="bg-slate-900/50 p-6 md:p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-100">{job.role}</h3>
                        <div className="text-indigo-400 font-medium flex items-center mt-1">
                          <Briefcase className="w-4 h-4 mr-2" />
                          {job.company}
                        </div>
                      </div>
                      <div className="text-sm text-slate-500 mt-2 md:mt-0 font-mono">
                        {job.location}
                      </div>
                    </div>

                    <p className="text-slate-300 mb-6 italic">
                      {job.description}
                    </p>

                    <ul className="space-y-3">
                      {job.achievements.map((achievement, aIdx) => (
                        <li key={aIdx} className="flex items-start text-slate-400 text-sm leading-relaxed">
                          <span className="mt-2 mr-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-500"></span>
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
