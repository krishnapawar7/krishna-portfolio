import React from 'react';
import { Terminal } from './Terminal';
import { CheckCircle } from 'lucide-react';

export const BentoAbout = ({ profile, embedded = false }) => {
  const content = (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Terminal column */}
      <div className="md:col-span-2">
        <Terminal profile={profile} />
      </div>

      {/* Summary column */}
      <div className="bento-card rounded-3xl p-6 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-purple-400">Core Focus</span>
            <span className="px-2 py-0.5 text-[11px] rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">Full-Stack + AI</span>
          </div>
          <h3 className="text-xl font-bold text-white mt-2">What I Bring to Your Team</h3>
          <p className="text-sm text-slate-300 mt-3 leading-relaxed">
            As a 2025 Computer Science graduate from <strong className="text-white">Medicaps University</strong>, I bridge front-end interactivity (React & Tailwind) with robust backend services (Node/Express & Python FastAPI), and supercharge applications with generative AI capabilities (Gemini API, RAG, vector retrieval).
          </p>
        </div>

        <div className="space-y-3 pt-2 border-t border-white/10 text-xs text-slate-300">
          <div className="flex items-center space-x-2.5">
            <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>Clean, modular, object-oriented code principles</span>
          </div>
          <div className="flex items-center space-x-2.5">
            <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>Secure REST APIs with JWT & role authorization</span>
          </div>
          <div className="flex items-center space-x-2.5">
            <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>Fast learner, adaptive to agile sprints & team reviews</span>
          </div>
        </div>

        <a href="#contact" className="w-full text-center py-2.5 rounded-xl bg-white/5 hover:bg-indigo-600 hover:text-white text-indigo-300 text-xs font-semibold border border-indigo-500/30 transition">
          Start a Conversation →
        </a>
      </div>
    </div>
  );

  if (embedded) return content;

  return (
    <section id="about" className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/5 pb-4">
        <div>
          <span className="text-xs font-mono font-bold tracking-wider text-indigo-400 uppercase">( 01 · Kernel & Core Intel )</span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-tight mt-1">Engineering Mindset & Blueprint</h2>
        </div>
        <p className="text-sm text-slate-400 max-w-md font-sans">
          A blend of solid computer science foundations, modern JavaScript/TypeScript, Python, and bleeding-edge Generative AI workflows.
        </p>
      </div>
      {content}
    </section>
  );
};
