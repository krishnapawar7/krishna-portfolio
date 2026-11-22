import React from 'react';

export const KineticTicker = ({ items, speed = 25, reverse = false }) => {
  const DEFAULT_ITEMS = [
    { text: 'FULL-STACK MERN', icon: '⚡' },
    { text: 'GENERATIVE AI & RAG', icon: '🧠' },
    { text: 'IMMEDIATE JOINER (0 DAYS)', icon: '🚀' },
    { text: 'AWS CLOUD FOUNDATION', icon: '☁️' },
    { text: 'SUB-450MS LATENCY', icon: '🎯' },
    { text: 'FASTAPI & PYTHON', icon: '💻' },
    { text: 'FAISS VECTOR RETRIEVAL', icon: '🔮' },
    { text: 'STATELESS JWT AUTH', icon: '🛡️' },
    { text: 'MEDICAPS B.TECH CSE 2025', icon: '🎓' },
    { text: 'TEACHNOOK WEB INTERN', icon: '💼' }
  ];

  const tickerList = items || DEFAULT_ITEMS;

  return (
    <div className="relative w-full overflow-hidden py-3 border-y border-white/5 bg-slate-950/40 backdrop-blur-md select-none group">
      
      {/* Edge Blur Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[var(--bg-primary)] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[var(--bg-primary)] to-transparent z-10 pointer-events-none"></div>

      {/* Marquee Track */}
      <div 
        className={`flex whitespace-nowrap gap-8 text-xs font-mono uppercase tracking-widest text-slate-400 group-hover:[animation-play-state:paused] ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        }`}
        style={{ animationDuration: `${speed}s` }}
      >
        {/* First Loop */}
        <div className="flex items-center gap-8 shrink-0">
          {tickerList.map((item, idx) => (
            <span key={idx} className="flex items-center space-x-2.5">
              <span className="text-indigo-400">{item.icon}</span>
              <span className="text-white/80 font-bold hover:text-indigo-400 transition-colors">{item.text}</span>
              <span className="text-slate-700">✦</span>
            </span>
          ))}
        </div>

        {/* Second Loop for Seamless Continuity */}
        <div className="flex items-center gap-8 shrink-0" aria-hidden="true">
          {tickerList.map((item, idx) => (
            <span key={`clone-${idx}`} className="flex items-center space-x-2.5">
              <span className="text-indigo-400">{item.icon}</span>
              <span className="text-white/80 font-bold hover:text-indigo-400 transition-colors">{item.text}</span>
              <span className="text-slate-700">✦</span>
            </span>
          ))}
        </div>
      </div>

    </div>
  );
};
