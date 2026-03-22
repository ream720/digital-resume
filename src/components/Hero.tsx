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
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-zinc-950">
      {/* Abstract System Background */}
      <div className="absolute inset-0 z-0">
        {/* Deep navy radial base */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#0f172a_0%,_#050a0f_60%,_#000000_100%)]" />
        {/* Subtle cyan glow on right */}
        <div className="absolute top-0 right-0 w-3/4 h-full bg-[radial-gradient(ellipse_at_60%_30%,_rgba(6,182,212,0.07)_0%,_transparent_65%)]" />
        {/* Network / dot-grid SVG overlay */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.06]"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="#22d3ee" />
            </pattern>
            <pattern id="grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#22d3ee" strokeWidth="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
        {/* Left-side fade keeps text area clean */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/20 z-10" />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full relative z-20 pt-20 pb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Status Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center px-3 py-1.5 rounded-sm bg-zinc-900/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.15)]"
            >
              <span className="relative flex h-2 w-2 mr-3">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Open to Opportunities
            </motion.div>

            {/* Main Typograpy */}
            <div className="space-y-2">
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white uppercase drop-shadow-2xl">
                {personal.name}
              </h1>
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 uppercase">
                {personal.title}
              </h2>
            </div>

            {/* Summary */}
            <p className="max-w-xl text-lg text-zinc-400 leading-relaxed font-light border-l-2 border-cyan-500/50 pl-6 backdrop-blur-sm bg-zinc-950/30 py-2">
              {personal.summary}
            </p>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 pt-4">
              <motion.a
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(39, 39, 42, 0.9)' }}
                whileTap={{ scale: 0.95 }}
                href={personal.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-none bg-zinc-900 border border-zinc-700 text-zinc-200 font-medium uppercase tracking-wider text-sm transition-colors shadow-lg shadow-black/50"
              >
                <Github className="w-4 h-4 mr-3 text-cyan-500" />
                GitHub
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(39, 39, 42, 0.9)' }}
                whileTap={{ scale: 0.95 }}
                href={personal.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-none bg-zinc-900 border border-zinc-700 text-zinc-200 font-medium uppercase tracking-wider text-sm transition-colors shadow-lg shadow-black/50"
              >
                <Linkedin className="w-4 h-4 mr-3 text-cyan-500" />
                LinkedIn
              </motion.a>
            </div>

            {/* Contact Pills */}
            <div className="flex flex-wrap items-center gap-3 pt-8 text-xs text-zinc-500 font-mono tracking-wide">
              <button
                type="button"
                onClick={() => copyToClipboard(personal.location, 'Address')}
                className="flex items-center text-left px-3 py-2 bg-zinc-900/50 border border-zinc-800 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors backdrop-blur-sm group"
                aria-label="Copy address"
              >
                <MapPin className="w-3.5 h-3.5 mr-2 text-zinc-600 group-hover:text-cyan-500 transition-colors flex-shrink-0" />
                <span>Wilmington, DE{' '}<span className="whitespace-nowrap">(Greater Philadelphia Area)</span></span>
              </button>
              <button
                type="button"
                onClick={() => copyToClipboard(personal.contact.phone, 'Phone number')}
                className="flex items-center px-3 py-2 bg-zinc-900/50 border border-zinc-800 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors backdrop-blur-sm group"
                aria-label="Copy phone number"
              >
                <Phone className="w-3.5 h-3.5 mr-2 text-zinc-600 group-hover:text-cyan-500 transition-colors" />
                {personal.contact.phone}
              </button>
              <button
                type="button"
                onClick={() => copyToClipboard(personal.contact.email, 'Email')}
                className="flex items-center px-3 py-2 bg-zinc-900/50 border border-zinc-800 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors backdrop-blur-sm group"
                aria-label="Copy email"
              >
                <Mail className="w-3.5 h-3.5 mr-2 text-zinc-600 group-hover:text-cyan-500 transition-colors" />
                {personal.contact.email}
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Edge Lines */}
      <div className="absolute bottom-0 right-0 w-1/2 h-px bg-gradient-to-r from-transparent via-cyan-500 to-blue-600 opacity-50 z-20"></div>
      <div className="absolute top-1/4 right-8 w-px h-32 bg-gradient-to-b from-cyan-500/0 via-cyan-500/50 to-cyan-500/0 z-20 hidden lg:block"></div>

      {/* Toast */}
      {toastMessage ? (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="fixed bottom-6 right-6 z-50 px-4 py-3 bg-zinc-900 border border-cyan-500/40 text-sm text-cyan-100 shadow-[0_0_20px_rgba(6,182,212,0.2)] font-mono tracking-wide"
        >
          <div className="flex items-center">
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse mr-2"></div>
            {toastMessage}
          </div>
        </motion.div>
      ) : null}
    </section>
  );
}
