import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data/resume';
import { MapPin, Mail, Phone, Linkedin, Github } from 'lucide-react';

export default function Hero() {
  const { personal } = resumeData;
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const toastTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const copyToClipboard = async (value: string, label: string) => {
    try {
      if (!navigator.clipboard) {
        throw new Error('Clipboard API unavailable');
      }

      await navigator.clipboard.writeText(value);
      setToastMessage(`${label} copied to clipboard`);
    } catch {
      setToastMessage(`Could not copy ${label.toLowerCase()}`);
    }
  };

  useEffect(() => {
    if (!toastMessage) {
      return;
    }

    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }

    toastTimeoutRef.current = setTimeout(() => {
      setToastMessage(null);
    }, 2200);

    return () => {
      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current);
      }
    };
  }, [toastMessage]);

  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Open to Opportunities
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
            {personal.name}
          </h1>

          <h2 className="text-2xl md:text-3xl font-medium text-slate-400">
            {personal.title}
          </h2>

          <p className="max-w-2xl text-lg text-slate-400 leading-relaxed">
            {personal.summary}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href={personal.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 font-medium hover:bg-slate-700 hover:border-slate-600 hover:text-white hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </a>
            <a
              href={personal.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 font-medium hover:bg-slate-700 hover:border-slate-600 hover:text-white hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </a>
          </div>

          <div className="flex flex-col items-start gap-3 pt-8 text-sm text-slate-500 font-mono">
            <button
              type="button"
              onClick={() => copyToClipboard(personal.location, 'Address')}
              className="flex items-center hover:text-indigo-400 transition-colors text-left"
              aria-label="Copy address"
            >
              <MapPin className="w-4 h-4 mr-2 text-slate-600" />
              {personal.location}
            </button>
            <button
              type="button"
              onClick={() => copyToClipboard(personal.contact.phone, 'Phone number')}
              className="flex items-center hover:text-indigo-400 transition-colors text-left"
              aria-label="Copy phone number"
            >
              <Phone className="w-4 h-4 mr-2 text-slate-600" />
              {personal.contact.phone}
            </button>
            <button
              type="button"
              onClick={() => copyToClipboard(personal.contact.email, 'Email')}
              className="flex items-center hover:text-indigo-400 transition-colors text-left"
              aria-label="Copy email"
            >
              <Mail className="w-4 h-4 mr-2 text-slate-600" />
              {personal.contact.email}
            </button>
          </div>
        </motion.div>
      </div>

      {toastMessage ? (
        <div className="fixed bottom-6 right-6 z-50 rounded-lg border border-indigo-400/30 bg-slate-900/95 px-4 py-2 text-sm text-slate-100 shadow-lg backdrop-blur-sm">
          {toastMessage}
        </div>
      ) : null}

      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 -z-10 opacity-10 transform translate-x-1/3 -translate-y-1/4">
        <svg width="800" height="800" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#6366f1" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,71.4,32.7C60.6,43.9,50.3,53.4,39.1,61.6C27.9,69.8,15.8,76.7,2.2,72.9C-11.4,69.1,-26.5,54.6,-39.9,42.1C-53.3,29.6,-65,19.1,-70.6,5.6C-76.2,-7.9,-75.7,-24.4,-67.7,-38.6C-59.7,-52.8,-44.2,-64.7,-29.3,-71.4C-14.4,-78.1,0,-79.6,14.7,-78.5C29.4,-77.4,58.8,-73.7,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>
    </section>
  );
}
