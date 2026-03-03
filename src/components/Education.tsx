import React from 'react';
import { resumeData } from '../data/resume';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  const { education } = resumeData;

  return (
    <section className="py-20 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-12 bg-zinc-900/50 border border-zinc-800 hover:border-cyan-500/30 transition-colors duration-300 relative overflow-hidden backdrop-blur-sm group">

          <div className="relative z-10 w-full">
            <h2 className="text-xl font-bold mb-6 flex items-center text-zinc-100 uppercase tracking-widest">
              <GraduationCap className="w-5 h-5 mr-3 text-cyan-500 group-hover:scale-110 transition-transform duration-300" />
              Academic Certification
            </h2>
            <div className="pl-8 border-l border-zinc-700 group-hover:border-cyan-500/50 transition-colors duration-300">
              <h3 className="text-xl md:text-2xl font-black text-white mb-2 uppercase tracking-tight">
                {education.degree}
              </h3>
              <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase">
                {education.school}
              </p>
            </div>
          </div>

          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-900/10 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:bg-cyan-500/10 transition-colors duration-700"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-[url('/images/grid.svg')] opacity-10 flex-shrink-0"></div>
        </div>
      </div>
    </section>
  );
}
