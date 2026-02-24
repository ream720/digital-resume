import React from 'react';
import { resumeData } from '../data/resume';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  const { education } = resumeData;

  return (
    <section className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-12 rounded-3xl bg-slate-950 border border-slate-800 overflow-hidden relative">
          
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-6 flex items-center text-white">
              <GraduationCap className="w-6 h-6 mr-3 text-indigo-400" />
              Education
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-slate-200 mb-2">
              {education.degree}
            </h3>
            <p className="text-slate-400 text-lg">
              {education.school}
            </p>
          </div>

          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-900/20 rounded-full filter blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-900/20 rounded-full filter blur-3xl opacity-30 transform -translate-x-1/2 translate-y-1/2"></div>
        </div>
      </div>
    </section>
  );
}
