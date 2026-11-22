import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { ArrowRight, FileText, Copy, MapPin, Mail, Phone, Clock, GraduationCap, Award, Briefcase, Sparkles, Terminal, CheckCircle2, ArrowUpRight } from 'lucide-react';

export const Hero = ({ profile, onOpenResume, onShowToast }) => {
  const { playTone } = useTheme();
  const [time, setTime] = useState('');

  const STAT_TOKENS = [
    {
      id: 'aws',
      icon: '☁️',
      label: 'AWS Certified',
      detail: 'Cloud Foundation Credential (2024)',
      target: '#certifications',
      border: 'hover:border-amber-500/50 hover:bg-amber-500/10 text-amber-300'
    },
    {
      id: 'grad',
      icon: '🎓',
      label: '2025 Grad',
      detail: 'B.Tech CSE · Medicaps University',
      target: '#experience',
      border: 'hover:border-indigo-500/50 hover:bg-indigo-500/10 text-indigo-300'
    },
    {
      id: 'rag',
      icon: '⚡',
      label: '100% RAG Grounding',
      detail: 'FAISS Vector Search + Gemini 1.5 Flash',
      target: '#lab',
      border: 'hover:border-cyan-500/50 hover:bg-cyan-500/10 text-cyan-300'
    },
    {
      id: 'work',
      icon: '💼',
      label: 'Teachnook Intern',
      detail: 'Web Development & REST APIs',
      target: '#experience',
      border: 'hover:border-emerald-500/50 hover:bg-emerald-500/10 text-emerald-300'
    },
    {
      id: 'join',
      icon: '🚀',
      label: 'Immediate Joiner (0 Days)',
      detail: 'Available for Full-Time & SDE Roles',
      target: '#contact',
      border: 'hover:border-purple-500/50 hover:bg-purple-500/10 text-purple-300'
    }
  ];

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      }).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    playTone(784, 'sine', 0.1, 0.05);
    onShowToast(`Copied ${label} to clipboard!`);
  };

  const handleTokenClick = (token) => {
    playTone(680, 'triangle', 0.06, 0.04);
    onShowToast(`${token.icon} ${token.label}: ${token.detail}`);
    const el = document.querySelector(token.target);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-4 sm:pt-8 space-y-8">

      {/* Top Editorial Status Line */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="flex items-center space-x-2 text-xs font-mono">
          <span className="pulsing-beacon"></span>
          <span className="text-emerald-400 font-bold uppercase tracking-wider">AVAILABLE IMMEDIATELY</span>
          <span className="text-slate-600">/</span>
          <span className="text-slate-400">FULL-TIME & INTERNSHIP</span>
        </div>

        <div className="flex items-center space-x-3 text-xs font-mono text-slate-400">
          <span>INDORE, IN</span>
          <span className="text-slate-600">·</span>
          <span className="text-emerald-400 font-semibold">{time || '--:--:-- IST'}</span>
        </div>
      </div>

      {/* Main Massive Editorial Title */}
      <div className="space-y-4">
        <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono font-medium">
          ( Full-Stack MERN + Generative AI Engineer )
        </div>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black tracking-tight leading-[0.9] uppercase text-shimmer-title">
          KRISHNA PAWAR
        </h1>

        <div className="text-xl sm:text-3xl font-grotesk font-bold text-gradient-neon uppercase tracking-tight">
          Where Scalable Full-Stack Architecture Meets Generative AI.
        </div>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed font-sans pt-1">
          Computer Science graduate (B.Tech 2025, <strong className="text-white">Medicaps University</strong>). I engineer production web applications using the <strong className="text-white">MERN Stack</strong> (React, Node, Express, MongoDB) & <strong className="text-white">FastAPI</strong>, and build grounded LLM workflows with <strong className="text-indigo-400">Google Gemini API, LangChain</strong> & <strong className="text-emerald-400">FAISS vector search</strong>. AWS Cloud Foundation certified.
        </p>
      </div>

      {/* Interactive Stat Tokens */}
      <div className="space-y-2">
        <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 flex items-center space-x-2">
          <span>( Interactive Stat Tokens · Click to verify )</span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {STAT_TOKENS.map((token) => (
            <button
              key={token.id}
              onClick={() => handleTokenClick(token)}
              className={`group flex items-center space-x-2 px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-white/10 text-xs font-mono transition-all transform hover:-translate-y-0.5 hover:shadow-lg ${token.border}`}
              title={`Click to jump to ${token.detail}`}
            >
              <span>{token.icon}</span>
              <span className="font-semibold">{token.label}</span>
              <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-white transition-colors" />
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Action Bar */}
      <div className="flex flex-wrap items-center gap-3 pt-1">
        <a
          href="#projects"
          onClick={() => playTone(550, 'triangle', 0.05, 0.04)}
          data-cursor="view"
          className="flex items-center space-x-2 px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:scale-[1.01] transition transform"
        >
          <span>Explore Builds</span>
          <ArrowRight className="w-4 h-4" />
        </a>

        <a
          href="#contact"
          onClick={() => playTone(600, 'triangle', 0.05, 0.04)}
          data-cursor="play"
          className="flex items-center space-x-2 px-5 py-3.5 rounded-2xl bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/40 text-xs sm:text-sm font-bold uppercase tracking-wider transition"
        >
          <Sparkles className="w-4 h-4" />
          <span>The Interview Slip →</span>
        </a>

        <button
          onClick={() => { playTone(500, 'sine', 0.05, 0.04); onOpenResume(); }}
          data-cursor="read"
          className="flex items-center space-x-2 px-5 py-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-white/10 text-xs sm:text-sm font-semibold transition hover:-translate-y-0.5"
        >
          <FileText className="w-4 h-4 text-indigo-400" />
          <span>Review Resume</span>
        </button>

        <button
          onClick={() => copyToClipboard('krishpawar214@gmail.com', 'Email')}
          data-cursor="copy"
          className="p-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 border border-white/10 transition"
          title="Copy Email"
        >
          <Copy className="w-4 h-4" />
        </button>
      </div>

      {/* 4 Interactive Editorial Metrics Strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-2">

        <a
          href="#experience"
          onClick={() => playTone(520, 'triangle', 0.05, 0.03)}
          data-cursor="inspect"
          className="neo-card p-5 space-y-2 border-t-2 border-t-indigo-500 hover:border-indigo-400 hover:-translate-y-1 transition transform duration-200 block group"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase text-indigo-400 font-bold">01 · EDUCATION</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-indigo-400 transition" />
          </div>
          <div className="text-3xl font-display font-black text-white leading-none">B.TECH CSE</div>
          <div className="text-xs text-slate-400 font-sans">Medicaps University '25</div>
        </a>

        <a
          href="#certifications"
          onClick={() => playTone(560, 'triangle', 0.05, 0.03)}
          data-cursor="inspect"
          className="neo-card p-5 space-y-2 border-t-2 border-t-amber-500 hover:border-amber-400 hover:-translate-y-1 transition transform duration-200 block group"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase text-amber-400 font-bold">02 · CLOUD CREDENTIAL</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400 transition" />
          </div>
          <div className="text-3xl font-display font-black text-white leading-none">AWS CERTIFIED</div>
          <div className="text-xs text-slate-400 font-sans">Cloud Foundation 2024</div>
        </a>

        <a
          href="#experience"
          onClick={() => playTone(600, 'triangle', 0.05, 0.03)}
          data-cursor="inspect"
          className="neo-card p-5 space-y-2 border-t-2 border-t-emerald-500 hover:border-emerald-400 hover:-translate-y-1 transition transform duration-200 block group"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold">03 · INDUSTRY WORK</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 transition" />
          </div>
          <div className="text-3xl font-display font-black text-white leading-none">TEACHNOOK</div>
          <div className="text-xs text-slate-400 font-sans">Web Dev Intern (Remote)</div>
        </a>

        <a
          href="#projects"
          onClick={() => playTone(640, 'triangle', 0.05, 0.03)}
          data-cursor="inspect"
          className="neo-card p-5 space-y-2 border-t-2 border-t-purple-500 hover:border-purple-400 hover:-translate-y-1 transition transform duration-200 block group"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase text-purple-400 font-bold">04 · AI SPECIALIZATION</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-purple-400 transition" />
          </div>
          <div className="text-3xl font-display font-black text-white leading-none">GEMINI & RAG</div>
          <div className="text-xs text-slate-400 font-sans">Vector Search & FAISS</div>
        </a>

      </div>

    </section>
  );
};
