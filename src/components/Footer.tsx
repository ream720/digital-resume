import React from 'react';
import { resumeData } from '../data/resume';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const { personal } = resumeData;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-bold text-slate-200 text-lg">{personal.name}</h3>
          <p className="text-slate-500 text-sm mt-1">Senior Frontend Engineer</p>
        </div>

        <div className="flex gap-6">
          <a 
            href={personal.contact.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-indigo-400 hover:scale-110 transition-all duration-200"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href={personal.contact.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-indigo-400 hover:scale-110 transition-all duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href={`mailto:${personal.contact.email}`}
            className="text-slate-500 hover:text-indigo-400 hover:scale-110 transition-all duration-200"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <div className="text-slate-600 text-sm">
          © {year} All rights reserved.
        </div>
      </div>
    </footer>
  );
}
