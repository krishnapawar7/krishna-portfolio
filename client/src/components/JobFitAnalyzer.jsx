import React, { useState } from 'react';
import { Target, CheckCircle2, Award, ArrowRight, Zap, Briefcase } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const JobFitAnalyzer = ({ onSelectRole, embedded = false }) => {
  const { playTone } = useTheme();
  const [selectedRole, setSelectedRole] = useState('mern');

  const ROLES = {
    mern: {
      title: 'MERN Stack Developer',
      match: 97,
      summary: 'Ideal match for full-stack engineering teams building rich React interfaces backed by Express, Node, and MongoDB.',
      keySkills: ['React.js (Hooks, Context, State)', 'Node.js & Express.js REST APIs', 'MongoDB & Mongoose Schema Design', 'Stateless JWT Authentication', 'Tailwind CSS & Responsive UI', 'Git/GitHub Collaboration'],
      projectProof: 'Smart Interview AI (Full-stack interview platform with JWT & MongoDB)',
      experienceProof: 'Web Development Internship at Teachnook'
    },
    genai: {
      title: 'Generative AI & Python Engineer',
      match: 96,
      summary: 'Specialized in building LLM-augmented applications, RAG pipelines, and semantic vector retrieval systems.',
      keySkills: ['Google Gemini API Integration', 'LangChain Framework', 'FAISS Vector Search & Embeddings', 'Python & FastAPI Endpoints', 'Context-Aware Prompt Engineering', 'RAG Pipeline Architecture'],
      projectProof: 'Document Q&A RAG Pipeline (Python, LangChain, FAISS, Gemini API)',
      experienceProof: 'Google Gemini Clone with streaming interface'
    },
    frontend: {
      title: 'Frontend React Developer',
      match: 94,
      summary: 'Skilled in developing pixel-perfect, accessible, and high-performance user interfaces with modern toolchains.',
      keySkills: ['React.js 18 & Component Systems', 'Tailwind CSS & Modern Glassmorphism', 'JavaScript ES6+ & DOM optimization', 'Vite & Frontend Tooling', 'REST API Integration', 'Responsive Design Across Viewports'],
      projectProof: 'Google Gemini Clone & Smart Interview AI UI',
      experienceProof: 'GreatStack JavaScript Fundamentals Certified'
    },
    backend: {
      title: 'Backend & Cloud Developer',
      match: 95,
      summary: 'Proficient in designing robust RESTful services, database queries, and deploying to cloud infrastructure.',
      keySkills: ['Node.js & Express.js Microservices', 'FastAPI & Python Async Handlers', 'AWS Cloud Foundations (Certified)', 'MongoDB CRUD & Aggregations', 'JWT & Security Best Practices', 'Postman & API Documentation'],
      projectProof: 'FastAPI REST Service & Express Session Backend',
      experienceProof: 'AWS Cloud Foundation Certified (2024)'
    }
  };

  const current = ROLES[selectedRole];

  const handleChoose = (roleKey) => {
    playTone(550, 'triangle', 0.05, 0.03);
    setSelectedRole(roleKey);
  };

  const content = (
    <div className="neo-card p-6 sm:p-8 rounded-3xl space-y-6">

      {/* Role tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {Object.entries(ROLES).map(([key, item]) => (
          <button
            key={key}
            onClick={() => handleChoose(key)}
            className={`p-3.5 rounded-2xl border text-left transition flex flex-col justify-between ${selectedRole === key
              ? 'bg-indigo-600/20 border-indigo-500/60 shadow-lg shadow-indigo-600/15'
              : 'bg-slate-900/60 border-white/5 hover:border-white/10'
              }`}
          >
            <div className="text-xs font-bold text-white truncate">{item.title}</div>
            <div className="flex items-center justify-between mt-3 text-[11px] font-mono">
              <span className="text-slate-400">Match:</span>
              <span className="text-emerald-400 font-bold">{item.match}%</span>
            </div>
          </button>
        ))}
      </div>

      {/* Selected Role Deep-Dive Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-950/70 p-6 rounded-2xl border border-white/10">

        {/* Match Score Display */}
        <div className="lg:col-span-4 flex flex-col justify-between p-5 rounded-2xl bg-slate-900/90 border border-indigo-500/30">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-300">Compatibility Index</span>
            <div className="flex items-baseline space-x-2 mt-1">
              <span className="text-5xl font-display font-black text-white">{current.match}%</span>
              <span className="text-emerald-400 text-xs font-semibold">High Match</span>
            </div>
            <p className="text-xs text-slate-300 mt-3 leading-relaxed">
              {current.summary}
            </p>
          </div>

          <div className="pt-4 border-t border-white/10 mt-4 space-y-2 text-xs">
            <div className="text-[11px] text-slate-400">
              ⭐ <strong className="text-slate-200">Demonstrated In:</strong> {current.projectProof}
            </div>
            <div className="text-[11px] text-slate-400">
              🏢 <strong className="text-slate-200">Validated By:</strong> {current.experienceProof}
            </div>
          </div>
        </div>

        {/* Matched Skills Checklist */}
        <div className="lg:col-span-8 flex flex-col justify-between space-y-4">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 block mb-3">
              Key Match Qualifications:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {current.keySkills.map((sk, idx) => (
                <div key={idx} className="flex items-center space-x-2 p-2.5 rounded-xl bg-slate-900/60 border border-white/5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="truncate">{sk}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/5">
            <div className="text-xs text-slate-400">
              Ready for technical assessment & onboarding
            </div>
            <a
              href={`mailto:krishpawar214@gmail.com?subject=${encodeURIComponent(`Interview Invitation: ${current.title}`)}&body=${encodeURIComponent(`Hi Krishna,\n\nWe came across your portfolio and would like to connect with you regarding the ${current.title} opening at our company.\n\nBest regards,`)}`}
              className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition flex items-center space-x-1.5 shadow-sm"
            >
              <span>Invite Krishna for {current.title}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>

    </div>
  );

  if (embedded) return content;

  return (
    <section className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/5 pb-4">
        <div>
          <span className="text-xs font-mono font-bold tracking-wider text-amber-400 uppercase">( 02 · Telemetry · Role Compatibility Index )</span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-tight mt-1">Recruiter ATS Fit & Capability Matcher</h2>
        </div>
        <p className="text-sm text-slate-400 max-w-md">
          Select your target vacancy to see Krishna's direct qualifications, matching tech stack, and verified experience.
        </p>
      </div>
      {content}
    </section>
  );
};
