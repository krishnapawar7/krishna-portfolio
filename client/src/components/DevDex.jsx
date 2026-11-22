import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Volume2, ExternalLink, Code2, Sparkles, ChevronUp, ChevronDown, ShieldCheck, Zap, Terminal, Github } from 'lucide-react';

export const DevDex = ({ projects, onSelectProject, onShowToast, embedded = false }) => {
  const { playPokedexChirp, theme, setThemeMode, soundEnabled, toggleSound } = useTheme();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const ENTRIES = [
    {
      id: '001',
      slug: 'edtech-store',
      name: 'EdTech Store',
      species: 'Full-Stack EdTech Commerce',
      types: [
        { name: 'NEXT.JS', bg: 'bg-slate-800 text-white' },
        { name: 'E-COMMERCE', bg: 'bg-emerald-600 text-white' }
      ],
      icon: '🎓',
      stats: {
        architecture: 98,
        throughput: 96,
        security: 99,
        genAiDepth: 85,
        latency: 95
      },
      moves: [
        { name: 'Razorpay Checkout', pwr: '140', type: 'Payment' },
        { name: 'Prisma Entitlements', pwr: '125', type: 'Database' },
        { name: 'JWT Secure Access', pwr: '120', type: 'Auth' },
        { name: 'GST Pricing Engine', pwr: '110', type: 'Commerce' }
      ],
      ability: 'Verified Access (Server-authorized digital content and entitlements)',
      summary: 'A production-ready EdTech storefront for CBSE study materials with secure cart, Razorpay payments, GST invoices, upgrades, and a digital student library.',
      metrics: {
        loc: 'Production App',
        latency: 'Verified Webhook',
        stack: 'Next.js + Prisma'
      },
      targetSection: '#projects'
    },
    {
      id: '002',
      slug: 'document-qa-rag-pipeline',
      name: 'Document Q&A RAG Pipeline',
      species: 'Retrieval Augmented GenAI',
      types: [
        { name: 'GENAI', bg: 'bg-purple-600 text-white' },
        { name: 'PYTHON', bg: 'bg-emerald-600 text-white' }
      ],
      icon: '⚡',
      stats: {
        architecture: 96,
        throughput: 97,
        security: 94,
        genAiDepth: 99,
        latency: 98
      },
      moves: [
        { name: 'FAISS Vector Indexing', pwr: '120', type: 'Vector' },
        { name: 'Gemini 1.5 Grounding', pwr: '140', type: 'LLM' },
        { name: 'Recursive Chunking', pwr: '95', type: 'NLP' },
        { name: 'FastAPI Stream Blast', pwr: '110', type: 'Async' }
      ],
      ability: 'Zero-Hallucination (Grounds all outputs strictly on context chunks)',
      summary: 'Engineered an end-to-end Python RAG pipeline with LangChain, FAISS dense vector search, and Google Gemini API for real-time document intelligence.',
      metrics: {
        loc: '1.2k LOC',
        latency: '< 450ms',
        grounding: '100% Strict'
      },
      targetSection: '#projects'
    },
    {
      id: '003',
      slug: 'smart-interview-ai',
      name: 'Smart Interview AI',
      species: 'Full-Stack MERN Platform',
      types: [
        { name: 'MERN', bg: 'bg-cyan-600 text-white' },
        { name: 'FULL-STACK', bg: 'bg-indigo-600 text-white' }
      ],
      icon: '🎯',
      stats: {
        architecture: 97,
        throughput: 95,
        security: 98,
        genAiDepth: 96,
        latency: 94
      },
      moves: [
        { name: 'Stateless JWT Barrier', pwr: '130', type: 'Auth' },
        { name: 'Dynamic Question Engine', pwr: '115', type: 'GenAI' },
        { name: 'MongoDB Aggregation', pwr: '105', type: 'Database' },
        { name: 'Real-Time Timer Shield', pwr: '90', type: 'Frontend' }
      ],
      ability: 'Role Adaptability (Simulates realistic technical rounds for students)',
      summary: 'A full-stack technical interview preparation platform with dynamic question generation, timer constraints, and automated review reports.',
      metrics: {
        loc: '2.8k LOC',
        latency: '< 300ms',
        security: 'JWT + bcrypt'
      },
      targetSection: '#projects'
    },
    {
      id: '004',
      slug: 'google-gemini-clone',
      name: 'Google Gemini Clone',
      species: 'Streaming AI Assistant',
      types: [
        { name: 'REACT', bg: 'bg-blue-600 text-white' },
        { name: 'STREAM', bg: 'bg-purple-600 text-white' }
      ],
      icon: '✨',
      stats: {
        architecture: 94,
        throughput: 96,
        security: 92,
        genAiDepth: 98,
        latency: 99
      },
      moves: [
        { name: 'Token Stream Sync', pwr: '125', type: 'Stream' },
        { name: 'Markdown Syntax Glow', pwr: '90', type: 'Render' },
        { name: 'Context Memory Preserver', pwr: '110', type: 'State' },
        { name: 'Tailwind Glass Aura', pwr: '95', type: 'UI' }
      ],
      ability: 'Instant Stream (Delivers chunked tokens with sub-100ms first token time)',
      summary: 'Real-time conversational client that interfaces with Gemini API, rendering live response streams with markdown formatting and zero lag.',
      metrics: {
        loc: '1.4k LOC',
        latency: 'Sub-100ms TTFT',
        stack: 'React + Tailwind'
      },
      targetSection: '#projects'
    },
    {
      id: '004',
      name: 'AWS Cloud Foundation',
      species: 'Cloud Infrastructure Credential',
      types: [
        { name: 'AWS', bg: 'bg-amber-600 text-white' },
        { name: 'INFRA', bg: 'bg-orange-600 text-white' }
      ],
      icon: '☁️',
      stats: {
        architecture: 98,
        throughput: 94,
        security: 99,
        genAiDepth: 90,
        latency: 95
      },
      moves: [
        { name: 'EC2 Scalable Fleet', pwr: '120', type: 'Compute' },
        { name: 'S3 High-Durability Vault', pwr: '140', type: 'Storage' },
        { name: 'IAM Zero-Trust Wall', pwr: '135', type: 'Security' },
        { name: 'VPC Subnet Routing', pwr: '115', type: 'Network' }
      ],
      ability: 'High Availability (Fault-tolerant multi-AZ architecture awareness)',
      summary: 'Official Amazon Web Services certification validating core competency in cloud compute, storage, IAM security, and networking standards.',
      metrics: {
        issued: '2024 Verified',
        authority: 'Amazon Web Services',
        badge: 'Certified'
      },
      targetSection: '#certifications'
    },
    {
      id: '005',
      name: 'Teachnook Web Internship',
      species: 'Professional Industry Track',
      types: [
        { name: 'INTERN', bg: 'bg-emerald-600 text-white' },
        { name: 'REST', bg: 'bg-teal-600 text-white' }
      ],
      icon: '💼',
      stats: {
        architecture: 93,
        throughput: 95,
        security: 92,
        genAiDepth: 91,
        latency: 97
      },
      moves: [
        { name: 'REST Endpoint Integration', pwr: '115', type: 'API' },
        { name: 'Responsive DOM Sculpt', pwr: '100', type: 'CSS' },
        { name: 'Agile Sprint Sprinting', pwr: '110', type: 'Workflow' },
        { name: 'Cross-Browser Harmony', pwr: '95', type: 'Quality' }
      ],
      ability: 'Rapid Sprints (Absorbs new toolchains and ships clean front-end code)',
      summary: 'Hands-on development of responsive user interfaces, REST API data binding, and collaborative version control workflows in an agile team.',
      metrics: {
        type: 'Remote Internship',
        duration: 'Tech Sprints',
        focus: 'HTML/CSS/JS/APIs'
      },
      targetSection: '#experience'
    },
    {
      id: '006',
      name: 'Medicaps B.Tech CSE (2025)',
      species: 'Academic Computer Science Core',
      types: [
        { name: 'ACADEMIA', bg: 'bg-rose-600 text-white' },
        { name: 'CORE CS', bg: 'bg-indigo-600 text-white' }
      ],
      icon: '🎓',
      stats: {
        architecture: 97,
        throughput: 93,
        security: 95,
        genAiDepth: 94,
        latency: 96
      },
      moves: [
        { name: 'DSA Algorithmic Strike', pwr: '130', type: 'Algo' },
        { name: 'OOP Modular Design', pwr: '125', type: 'Patterns' },
        { name: 'DBMS Relational Queries', pwr: '115', type: 'SQL' },
        { name: 'OS Process Concurrency', pwr: '110', type: 'Systems' }
      ],
      ability: 'Algorithmic Foundation (Deep grounding in data structures and SDLC)',
      summary: 'Bachelor of Technology in Computer Science & Engineering (2021–2025) from Medicaps University, Indore with rigorous software engineering foundations.',
      metrics: {
        degree: 'B.Tech CSE',
        year: '2021 - 2025',
        univ: 'Medicaps University'
      },
      targetSection: '#experience'
    }
  ];

  const current = ENTRIES[selectedIndex];
  const projectMatch = projects?.find(p => p.slug === current.slug || p.title?.toLowerCase() === current.name?.toLowerCase());

  const handleInspect = () => {
    playPokedexChirp(700);
    if (projectMatch && onSelectProject) {
      onSelectProject(projectMatch);
    } else if (current.targetSection) {
      const target = document.querySelector(current.targetSection);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelect = (idx) => {
    setSelectedIndex(idx);
    playPokedexChirp(520 + idx * 60);
  };

  const handleNext = () => {
    const next = (selectedIndex + 1) % ENTRIES.length;
    handleSelect(next);
  };

  const handlePrev = () => {
    const prev = (selectedIndex - 1 + ENTRIES.length) % ENTRIES.length;
    handleSelect(prev);
  };

  const handlePlayCry = () => {
    playPokedexChirp(600 + selectedIndex * 80);
    onShowToast?.(`🔊 Playing 8-bit Cry for ${current.name}!`);
  };

  const handleToggleDexMode = () => {
    toggleTheme();
    onShowToast?.(theme === 'dark' ? '☀️ Switched to Light Mode' : '🎮 Dark Gaming Mode Active');
  };

  return (
    <section id="devdex" className="space-y-6">
      
      {/* Editorial Section Header */}
      {!embedded ? (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/5 pb-4">
          <div>
            <span className="text-xs font-mono font-bold tracking-wider text-rose-500 uppercase">
              ( 05 · The Krishna Dev-Dex )
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-tight mt-1">
              Interactive Dev-Dex Console // Unit 2025
            </h2>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={handleToggleDexMode}
              className="flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-mono font-bold transition transform hover:scale-105 bg-rose-600 hover:bg-rose-500 text-white shadow-lg shadow-rose-600/30"
            >
              <span>{theme === 'dark' ? '☀️ Switch to Light Mode' : '🎮 Dark Gaming Mode'}</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between pb-3">
          <div className="text-xs font-mono text-slate-400">
            Hardware Chassis: <span className="text-rose-400 font-bold">Krishna Dev-Dex Handheld Console</span>
          </div>
          <button
            onClick={handleToggleDexMode}
            className="flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition transform hover:scale-105 bg-rose-600 hover:bg-rose-500 text-white shadow-md shadow-rose-600/30"
          >
            <span>{theme === 'dark' ? '☀️ Switch to Light Mode' : '🎮 Dark Gaming Mode'}</span>
          </button>
        </div>
      )}

      {/* The Physical Pokédex Console Housing */}
      <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-b from-rose-700 via-rose-600 to-rose-800 p-4 sm:p-7 shadow-2xl border-4 border-rose-900/60 relative overflow-hidden">
        
        {/* Top Header of the Handheld Hardware */}
        <div className="flex items-center justify-between pb-4 border-b-2 border-rose-900/40">
          <div className="flex items-center space-x-3">
            {/* Main Glowing Optical Lens */}
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-cyan-400 border-4 border-white shadow-[0_0_20px_#06b6d4] flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-cyan-200 blur-[1px]"></div>
              </div>
              <span className="absolute -top-1 -left-1 w-4 h-4 rounded-full bg-white/60"></span>
            </div>

            {/* Tri-Color Indicator LEDs */}
            <div className="flex items-center space-x-2 pl-2">
              <div className="w-3.5 h-3.5 rounded-full bg-red-400 border border-red-200 animate-pulse"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-amber-400 border border-amber-200"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-emerald-400 border border-emerald-200"></div>
            </div>
          </div>

          {/* Model Badge */}
          <div className="text-right">
            <span className="text-[10px] font-mono font-black text-rose-200 uppercase tracking-widest block">
              POKÉDEX MODEL KP-2025
            </span>
            <span className="text-[9px] font-mono text-rose-300">
              MERN + AI EDITION
            </span>
          </div>
        </div>

        {/* Dual Screen Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6">
          
          {/* LEFT: CRT SCREEN & TACTILE CONTROLS (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* The Screen Bezel */}
            <div className="p-3 bg-slate-900 rounded-2xl border-2 border-slate-950 shadow-inner">
              
              {/* Screen Top Status */}
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pb-2 px-1">
                <span>DEX // ENTRY #{current.id}</span>
                <span className="text-emerald-400 flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>ONLINE</span>
                </span>
              </div>

              {/* CRT Inner Screen */}
              <div className="bg-[#0b1324] rounded-xl p-5 border border-cyan-500/20 relative overflow-hidden min-h-[220px] flex flex-col justify-between">
                
                {/* Scanlines Effect */}
                <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.18)_2px,rgba(0,0,0,0.18)_4px)] opacity-60"></div>
                
                {/* Sprite Display */}
                <div className="relative z-10 flex flex-col items-center justify-center py-4">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-rose-500/20 via-purple-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center text-4xl shadow-inner transform hover:scale-110 transition-transform">
                    {current.icon}
                  </div>
                  <h3 className="font-mono font-bold text-white text-base mt-3 text-center uppercase tracking-wide">
                    {current.name}
                  </h3>
                  <div className="text-[11px] font-mono text-cyan-300 mt-0.5">
                    {current.species}
                  </div>
                </div>

                {/* Types Tag Bar */}
                <div className="relative z-10 flex justify-center space-x-2 pt-2 border-t border-white/10">
                  {current.types.map((t, idx) => (
                    <span 
                      key={idx}
                      className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider ${t.bg}`}
                    >
                      {t.name}
                    </span>
                  ))}
                </div>

              </div>

              {/* Under-Screen Speakers */}
              <div className="flex items-center justify-between pt-3 px-2">
                <div className="flex space-x-1">
                  <span className="w-10 h-1 bg-slate-800 rounded-full"></span>
                  <span className="w-6 h-1 bg-slate-800 rounded-full"></span>
                </div>
                <div className="text-[10px] font-mono text-slate-500">STEREO // 8-BIT</div>
              </div>

            </div>

            {/* Tactile Hardware Controls */}
            <div className="bg-rose-900/40 p-4 rounded-2xl border border-rose-900/60 flex items-center justify-between">
              
              {/* D-Pad Buttons */}
              <div className="relative w-24 h-24 flex items-center justify-center">
                <button
                  onClick={handlePrev}
                  className="absolute top-0 w-8 h-8 rounded-t bg-slate-900 hover:bg-slate-800 text-slate-300 flex items-center justify-center shadow-md active:translate-y-0.5 transition"
                  title="Previous Entry"
                >
                  <ChevronUp className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute bottom-0 w-8 h-8 rounded-b bg-slate-900 hover:bg-slate-800 text-slate-300 flex items-center justify-center shadow-md active:translate-y-0.5 transition"
                  title="Next Entry"
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
                <div className="w-8 h-8 bg-slate-900 flex items-center justify-center text-[10px] font-mono text-slate-500">
                  DEX
                </div>
              </div>

              {/* Action Buttons: A (Inspect) and B (Play Cry) */}
              <div className="flex space-x-3">
                <div className="flex flex-col items-center space-y-1">
                  <button
                    onClick={handlePlayCry}
                    className="w-11 h-11 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white font-mono font-black text-sm flex items-center justify-center shadow-lg active:scale-95 transition"
                    title="Play 8-bit Cry"
                  >
                    <Volume2 className="w-5 h-5" />
                  </button>
                  <span className="text-[9px] font-mono font-bold text-rose-200">CRY [B]</span>
                </div>

                <div className="flex flex-col items-center space-y-1">
                  <button
                    onClick={handleInspect}
                    className="w-11 h-11 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-black text-sm flex items-center justify-center shadow-lg active:scale-95 transition"
                    title={projectMatch ? "Detailed Project Deep-Dive" : "Inspect Credentials"}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                  <span className="text-[9px] font-mono font-bold text-rose-200">VIEW [A]</span>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT: DATA & STATS ANALYZER (7 cols) */}
          <div className="lg:col-span-7 bg-slate-950/90 rounded-2xl p-5 sm:p-6 border-2 border-slate-900 shadow-inner flex flex-col justify-between space-y-5">
            
            {/* Top Identity Strip */}
            <div className="border-b border-white/10 pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-400 font-mono text-xs font-bold">
                    #{current.id}
                  </span>
                  <h4 className="text-xl font-mono font-black text-white uppercase tracking-tight">
                    {current.name}
                  </h4>
                </div>
                <button
                  onClick={handlePlayCry}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-cyan-400 transition"
                  title="Play 8-Bit Cry"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>

              <p className="text-xs font-sans text-slate-300 pt-2 leading-relaxed">
                {current.summary}
              </p>
            </div>

            {/* Quick Metrics (Height / Weight / Grounding) */}
            <div className="grid grid-cols-3 gap-2 py-1">
              {Object.entries(current.metrics).map(([key, val], idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-slate-900/80 border border-white/5">
                  <div className="text-[9px] font-mono uppercase text-slate-400">{key}</div>
                  <div className="text-xs font-mono font-bold text-emerald-400 truncate">{val}</div>
                </div>
              ))}
            </div>

            {/* Base Stats RPG Gauges */}
            <div className="space-y-2 bg-slate-900/60 p-3.5 rounded-xl border border-white/5">
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 uppercase font-bold">
                <span>BASE STATS // CAPABILITY METRICS</span>
                <span className="text-cyan-400">TOTAL: {Object.values(current.stats).reduce((a, b) => a + b, 0)}</span>
              </div>

              <div className="space-y-1.5 pt-1 text-[11px] font-mono">
                {Object.entries(current.stats).map(([statName, val]) => (
                  <div key={statName} className="flex items-center space-x-2">
                    <span className="w-28 text-slate-400 capitalize">{statName.replace(/([A-Z])/g, ' $1')}</span>
                    <span className="w-8 font-bold text-white text-right">{val}</span>
                    <div className="flex-1 h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-500 ${
                          val >= 97 ? 'bg-cyan-400' : val >= 95 ? 'bg-emerald-400' : 'bg-indigo-400'
                        }`}
                        style={{ width: `${val}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4 Special Moves */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase text-slate-400">
                KNOWN BATTLE MOVES // ARSENAL
              </span>
              <div className="grid grid-cols-2 gap-2">
                {current.moves.map((move, idx) => (
                  <div 
                    key={idx}
                    className="p-2 rounded-lg bg-slate-900 border border-white/5 flex items-center justify-between text-xs font-mono"
                  >
                    <span className="text-white truncate font-medium">{move.name}</span>
                    <span className="px-1.5 py-0.2 rounded bg-indigo-500/20 text-indigo-300 text-[10px]">
                      {move.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Passive Ability Banner */}
            <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs font-mono flex items-start space-x-2">
              <Sparkles className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-purple-300">PASSIVE ABILITY: </span>
                <span className="text-slate-300">{current.ability}</span>
              </div>
            </div>

            {/* Bottom Navigation Strip */}
            <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs font-mono">
              <div className="flex space-x-1">
                {ENTRIES.map((entry, idx) => (
                  <button
                    key={entry.id}
                    onClick={() => handleSelect(idx)}
                    className={`px-2.5 py-1 rounded-md text-xs font-bold transition ${
                      selectedIndex === idx
                        ? 'bg-rose-600 text-white shadow'
                        : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    #{entry.id}
                  </button>
                ))}
              </div>

              {projectMatch ? (
                <div className="flex items-center space-x-3">
                  {projectMatch.liveUrl && projectMatch.liveUrl !== '#' && (
                    <a
                      href={projectMatch.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1.5 text-xs text-emerald-400 hover:text-emerald-300 transition font-mono"
                      title="Open Live Website"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live</span>
                    </a>
                  )}
                  {projectMatch.githubUrl && (
                    <a
                      href={projectMatch.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1.5 text-xs text-slate-400 hover:text-white transition font-mono"
                      title="GitHub Repository"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  )}
                  <button
                    onClick={handleInspect}
                    className="flex items-center space-x-1.5 text-cyan-400 hover:text-cyan-300 font-semibold"
                  >
                    <span>Inspect Deep-Dive</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleInspect}
                  className="flex items-center space-x-1.5 text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                  <span>Full Blueprint</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
