import React, { useState } from 'react';
import { BrainCircuit, Layout, Server, Database, Cloud, Cpu, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Skills = ({ skills }) => {
  const { playTone } = useTheme();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Domains' },
    { id: 'mern', label: 'MERN Stack' },
    { id: 'ai', label: 'AI & GenAI' },
    { id: 'cloud', label: 'Cloud & Core CS' }
  ];

  const skillCards = [
    {
      id: 'ai',
      group: 'ai',
      title: 'AI & Generative AI',
      subtitle: 'LLMs, RAG Pipelines & Embeddings',
      icon: <BrainCircuit className="w-5 h-5 text-purple-400" />,
      badge: 'Specialized',
      items: skills?.aiGenAi || ["Python", "Google Gemini API", "LangChain", "RAG Pipelines", "FAISS Vector Search", "Prompt Engineering", "NLP"]
    },
    {
      id: 'frontend',
      group: 'mern',
      title: 'Frontend Architecture',
      subtitle: 'Component systems & fluid interfaces',
      icon: <Layout className="w-5 h-5 text-blue-400" />,
      badge: 'Primary',
      items: skills?.frontend || ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Vite", "SCSS"]
    },
    {
      id: 'backend',
      group: 'mern',
      title: 'Backend & APIs',
      subtitle: 'Microservices & secure endpoints',
      icon: <Server className="w-5 h-5 text-emerald-400" />,
      badge: 'Primary',
      items: skills?.backend || ["Node.js", "Express.js", "FastAPI", "Python", "RESTful APIs", "JWT Auth"]
    },
    {
      id: 'databases',
      group: 'mern',
      title: 'Databases & Vector DBs',
      subtitle: 'Document stores & semantic vectors',
      icon: <Database className="w-5 h-5 text-amber-400" />,
      badge: 'Core',
      items: skills?.databases || ["MongoDB", "Mongoose", "FAISS (Vector DB)", "DBMS Concepts"]
    },
    {
      id: 'cloud',
      group: 'cloud',
      title: 'Cloud & Tooling',
      subtitle: 'AWS architecture & DevOps essentials',
      icon: <Cloud className="w-5 h-5 text-cyan-400" />,
      badge: 'Certified',
      items: skills?.cloudTools || ["AWS (Cloud Foundation)", "Git", "GitHub", "Postman", "VS Code"]
    },
    {
      id: 'coreCs',
      group: 'cloud',
      title: 'Core Computer Science',
      subtitle: 'Algorithmic rigor & software design',
      icon: <Cpu className="w-5 h-5 text-rose-400" />,
      badge: 'Foundations',
      items: skills?.coreCs || ["Object-Oriented Programming (OOP)", "Data Structures & Algorithms", "SDLC", "Problem Solving"]
    }
  ];

  const filteredCards = skillCards.filter(c => {
    if (activeCategory === 'all') return true;
    return c.group === activeCategory;
  });

  return (
    <section id="skills" className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/5 pb-4">
        <div>
          <span className="text-xs font-mono font-bold tracking-wider text-purple-400 uppercase">( 02 · The Tech Foundry )</span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-tight mt-1">Stack Discipline & Engineering Arsenal</h2>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { playTone(500, 'sine', 0.04, 0.02); setActiveCategory(cat.id); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition ${
                activeCategory === cat.id
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCards.map((card) => (
          <div key={card.id} className="neo-card p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-2xl bg-slate-900/90 border border-white/10 flex items-center justify-center">
                  {card.icon}
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">{card.title}</h3>
                  <p className="text-[11px] text-slate-400">{card.subtitle}</p>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10">
                {card.badge}
              </span>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2">
              {card.items.map((item, idx) => (
                <span key={idx} className="px-2.5 py-1 text-xs rounded-xl bg-slate-900/80 hover:bg-indigo-600/20 hover:text-indigo-300 hover:border-indigo-500/40 text-slate-300 border border-white/5 transition">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Marquee Ticker */}
      <div className="marquee-wrapper py-3.5 bg-slate-950/60 rounded-2xl border border-white/5">
        <div className="marquee-track font-mono text-xs text-slate-400">
          <span>⚡ React.js</span>
          <span>⚡ Node.js</span>
          <span>⚡ Express.js</span>
          <span>⚡ MongoDB</span>
          <span>⚡ Python</span>
          <span>⚡ FastAPI</span>
          <span>⚡ Google Gemini API</span>
          <span>⚡ LangChain</span>
          <span>⚡ FAISS Vector Search</span>
          <span>⚡ Tailwind CSS</span>
          <span>⚡ AWS Cloud</span>
          <span>⚡ REST APIs</span>
          <span>⚡ JWT Authentication</span>
          <span>⚡ Git & GitHub</span>
          {/* duplicate */}
          <span>⚡ React.js</span>
          <span>⚡ Node.js</span>
          <span>⚡ Express.js</span>
          <span>⚡ MongoDB</span>
          <span>⚡ Python</span>
          <span>⚡ FastAPI</span>
          <span>⚡ Google Gemini API</span>
          <span>⚡ LangChain</span>
          <span>⚡ FAISS Vector Search</span>
          <span>⚡ Tailwind CSS</span>
          <span>⚡ AWS Cloud</span>
          <span>⚡ REST APIs</span>
          <span>⚡ JWT Authentication</span>
          <span>⚡ Git & GitHub</span>
        </div>
      </div>
    </section>
  );
};
