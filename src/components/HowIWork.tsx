import React from 'react';
import { motion } from 'motion/react';
import { Layers, Cpu, GitMerge } from 'lucide-react';

const pillars = [
  {
    icon: Layers,
    label: 'Full-Stack Thinking',
    detail: 'UI architecture, API integration, and backend collaboration treated as one connected system.',
  },
  {
    icon: Cpu,
    label: 'AI-Assisted Workflows',
    detail: 'Leveraging AI tooling to accelerate delivery without sacrificing quality or maintainability.',
  },
  {
    icon: GitMerge,
    label: 'End-to-End Ownership',
    detail: 'From planning to deployment — clear, maintainable features that actually ship.',
  },
];

export default function HowIWork() {
  return (
    <section className="py-20 bg-zinc-950 border-t border-zinc-800/60 relative overflow-hidden">
      {/* Subtle background echo of the hero grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(34,211,238,1) 0.4px, transparent 0.4px), linear-gradient(90deg, rgba(34,211,238,1) 0.4px, transparent 0.4px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-center"
        >
          <h2 className="text-3xl font-black text-white uppercase tracking-tight">How I Work</h2>
          <div className="ml-6 flex-grow h-px bg-gradient-to-r from-cyan-500/50 to-transparent" />
        </motion.div>

        <div className="grid md:grid-cols-[1fr_1fr] gap-12 items-start">
          {/* Left – prose */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="space-y-5 text-zinc-400 leading-relaxed text-[15px]"
          >
            <p>
              My work spans UI architecture, API integration, backend collaboration, and AI-assisted
              development workflows. I focus on connecting these layers into cohesive, scalable
              products rather than treating them as separate concerns.
            </p>
            <p>
              I'm most effective in environments where requirements are evolving, systems are
              complex, and thoughtful engineering decisions matter. I prioritize clarity,
              maintainability, and delivering real, working features end-to-end.
            </p>
            <p>
              Having shipped software across scientific instrumentation, enterprise finance, and
              banking, I've found that domain breadth is a real asset — the patterns that solve
              complex problems in one context often translate well to others, and I adapt quickly
              when the subject matter is new.
            </p>
          </motion.div>

          {/* Right – pillar cards */}
          <div className="space-y-4">
            {pillars.map(({ icon: Icon, label, detail }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.45 }}
                className="group flex items-start gap-4 p-5 bg-zinc-900/40 border border-zinc-800/80 hover:border-cyan-500/30 transition-all duration-300 backdrop-blur-sm relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 blur-3xl rounded-full transform translate-x-8 -translate-y-8 group-hover:bg-cyan-500/10 transition-colors duration-500 pointer-events-none" />
                <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center border border-cyan-500/30 bg-cyan-950/40 shadow-[0_0_10px_rgba(6,182,212,0.1)]">
                  <Icon className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-100 uppercase tracking-wider mb-1">{label}</p>
                  <p className="text-xs text-zinc-500 leading-relaxed">{detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
