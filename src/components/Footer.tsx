import React from 'react';
import { resumeData } from '../data/resume';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const { personal } = resumeData;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12 relative overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        <div className="text-center md:text-left">
          <h3 className="font-black text-white text-xl uppercase tracking-widest">{personal.name}</h3>
          <p className="text-cyan-500 text-xs font-mono uppercase tracking-widest mt-1">System Architecture & UI</p>
        </div>

        <div className="flex gap-6">
          <a
            href={personal.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-cyan-400 hover:scale-110 transition-all duration-300 drop-shadow-[0_0_0_rgba(6,182,212,0)] hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={personal.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-cyan-400 hover:scale-110 transition-all duration-300 drop-shadow-[0_0_0_rgba(6,182,212,0)] hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${personal.contact.email}`}
            className="text-zinc-500 hover:text-cyan-400 hover:scale-110 transition-all duration-300 drop-shadow-[0_0_0_rgba(6,182,212,0)] hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <div className="text-zinc-600 text-xs font-mono tracking-widest">
          © {year} All rights reserved.
        </div>
      </div>
    </footer>
  );
}
