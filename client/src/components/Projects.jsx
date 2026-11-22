import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { DevDex } from './DevDex';
import { Github, ExternalLink, ArrowRight, Gamepad2, LayoutGrid } from 'lucide-react';

export const Projects = ({ projects, onSelectProject, onShowToast }) => {
  const { playTone } = useTheme();
  const [viewMode, setViewMode] = useState('dex'); // 'dex' | 'grid'
  const [filter, setFilter] = useState('all');
  const [activeTabs, setActiveTabs] = useState({});

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'devdex' || hash === 'projects') {
        if (hash === 'devdex') {
          setViewMode('dex');
        }
        const el = document.getElementById('projects');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const filteredProjects = projects.filter(p => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  const getTab = (slug) => activeTabs[slug] || 'highlights';

  const setTab = (slug, tab) => {
    playTone(520, 'sine', 0.04, 0.02);
    setActiveTabs(prev => ({ ...prev, [slug]: tab }));
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  const getArchitectureDiagram = (slug) => {
    switch (slug) {
      case 'document-qa-rag-pipeline':
        return [
          { step: '1. Ingestion', desc: 'PDF / Text ingestion & chunking' },
          { step: '2. Embeddings', desc: 'Vectorization & FAISS indexing' },
          { step: '3. Query Search', desc: 'Cosine similarity top-k lookup' },
          { step: '4. Gemini API', desc: 'Context-grounded prompt synthesis' },
          { step: '5. FastAPI', desc: 'Async JSON REST response stream' },
        ];
      case 'smart-interview-ai':
        return [
          { step: '1. React Client', desc: 'Vite UI with real-time timers & inputs' },
          { step: '2. Express Auth', desc: 'JWT token validation & user session' },
          { step: '3. Gemini Engine', desc: 'Dynamic role question generation' },
          { step: '4. MongoDB', desc: 'Candidate answers & score storage' },
          { step: '5. Feedback', desc: 'Real-time performance analytics' },
        ];
      case 'deep-packet-analyzer':
        return [
          { step: '1. PCAP Reader', desc: 'Parse classic PCAP packets and frames' },
          { step: '2. Packet Parser', desc: 'Decode Ethernet, IPv4, TCP, and UDP' },
          { step: '3. Flow Analysis', desc: 'Track five-tuple flows and extract HTTP/TLS metadata' },
          { step: '4. Rule Engine', desc: 'Classify traffic and apply IP/domain/app filters' },
          { step: '5. PCAP Output', desc: 'Write filtered packets and print analysis statistics' },
        ];
      case 'edtech-store':
        return [
          { step: '1. Next.js Client', desc: 'Catalogue, cart, library, and secure account flows' },
          { step: '2. API Routes', desc: 'Server-side pricing, entitlement, and validation logic' },
          { step: '3. Prisma ORM', desc: 'Products, orders, entitlements, and payment records' },
          { step: '4. Razorpay', desc: 'Checkout, signature verification, and webhook events' },
          { step: '5. PostgreSQL', desc: 'Persistent production data and verified access control' },
        ];
      default:
        return [
          { step: '1. User Input', desc: 'React chat state & history capture' },
          { step: '2. Prompt Stream', desc: 'Gemini API streaming payload' },
          { step: '3. Markdown Parse', desc: 'Syntax highlighting & code blocks' },
          { step: '4. UI Render', desc: 'Tailwind CSS responsive view' },
        ];
    }
  };

  return (
    <section id="projects" className="space-y-6">

      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/5 pb-4">
        <div>
          <span className="text-xs font-mono font-bold tracking-wider text-indigo-400 uppercase">
            ( 03 · Selected Works & Architecture )
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-tight mt-1">
            Featured Production Systems
          </h2>
          <p className="text-sm text-slate-400 mt-1 font-sans">
            Full-stack web applications and AI systems engineered from ground up with architectural rigor.
          </p>
        </div>

        {/* View Switcher: Dev-Dex Console vs Modern 3D Grid */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center p-1 bg-slate-900/90 rounded-2xl border border-white/10 text-xs font-semibold shadow-inner">
            <button
              onClick={() => { playTone(520, 'sine', 0.05, 0.03); setViewMode('dex'); }}
              className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl transition ${
                viewMode === 'dex'
                  ? 'bg-slate-800 text-white border border-white/10 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Gamepad2 className="w-3.5 h-3.5 text-rose-400" />
              <span>Dev-Dex Console</span>
            </button>
            <button
              onClick={() => { playTone(550, 'triangle', 0.05, 0.03); setViewMode('grid'); }}
              className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl transition ${
                viewMode === 'grid'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5 text-indigo-400" />
              <span>Modern 3D Grid</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mode 1: The Krishna Dev-Dex Console View */}
      {viewMode === 'dex' ? (
        <div className="transition-all duration-300">
          <DevDex
            projects={projects}
            onSelectProject={onSelectProject}
            onShowToast={onShowToast}
            embedded={true}
          />
        </div>
      ) : (
        /* Mode 2: Modern 3D Specular Grid Cards */
        <div className="space-y-6 transition-all duration-300">
          {/* Domain Filter Pills */}
          <div className="flex items-center space-x-1.5 p-1 rounded-2xl bg-slate-900/80 border border-white/5 self-start w-fit">
            {[
              { id: 'all', label: 'All' },
              { id: 'ai', label: 'AI & GenAI' },
              { id: 'fullstack', label: 'MERN Stack' },
              { id: 'frontend', label: 'Frontend UI' },
              { id: 'backend', label: 'Backend & Networking' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => { playTone(500, 'sine', 0.05, 0.03); setFilter(cat.id); }}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition ${filter === cat.id
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => {
              const currentTab = getTab(project.slug);
              const archSteps = getArchitectureDiagram(project.slug);

              return (
                <div
                  key={project.slug || project._id}
                  onMouseMove={handleMouseMove}
                  data-cursor="view"
                  className="neo-card specular-card flex flex-col justify-between overflow-hidden group hover:border-indigo-500/50 transition-all duration-300"
                >
                  <div>

                    {/* Visual Header Strip */}
                    <div className="p-6 pb-4 bg-slate-900/80 border-b border-white/5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                          {project.category}
                        </span>
                        <span className="font-mono text-xs text-slate-400">{project.year}</span>
                      </div>

                      <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                        {project.summary}
                      </p>
                    </div>

                    {/* Tab Selector: Highlights vs Architecture */}
                    <div className="flex border-b border-white/5 text-xs font-mono">
                      <button
                        onClick={() => setTab(project.slug, 'highlights')}
                        className={`flex-1 py-2 text-center transition ${currentTab === 'highlights'
                          ? 'border-b-2 border-indigo-500 text-indigo-400 font-bold bg-white/5'
                          : 'text-slate-400 hover:text-white'
                          }`}
                      >
                        Key Highlights
                      </button>
                      <button
                        onClick={() => setTab(project.slug, 'arch')}
                        className={`flex-1 py-2 text-center transition ${currentTab === 'arch'
                          ? 'border-b-2 border-indigo-500 text-indigo-400 font-bold bg-white/5'
                          : 'text-slate-400 hover:text-white'
                          }`}
                      >
                        System Architecture
                      </button>
                    </div>

                    {/* Tab Body */}
                    <div className="p-6 text-xs text-slate-300 min-h-[190px]">

                      {currentTab === 'highlights' ? (
                        <ul className="space-y-2">
                          {project.highlights?.map((hl, i) => (
                            <li key={i} className="flex items-start space-x-2">
                              <span className="text-indigo-400 font-bold mt-0.5">▹</span>
                              <span className="leading-relaxed">{hl}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <div className="space-y-2.5 font-mono text-[11px]">
                          {archSteps.map((s, idx) => (
                            <div key={idx} className="flex items-start space-x-2 p-1.5 rounded-lg bg-slate-900/60 border border-white/5">
                              <span className="text-indigo-400 font-bold">{s.step}</span>
                              <span className="text-slate-300">{s.desc}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-white/5">
                        {project.techStack?.map((t, idx) => (
                          <span key={idx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-300 border border-white/5">
                            {t}
                          </span>
                        ))}
                      </div>

                      {project.impact && (
                        <div className="mt-3 text-[11px] text-slate-400 bg-slate-900/50 p-2.5 rounded-xl border border-white/5">
                          💡 <strong className="text-indigo-300">Impact:</strong> {project.impact}
                        </div>
                      )}
                    </div>

                  </div>

                  {/* Action Buttons */}
                  <div className="p-6 pt-0 flex items-center space-x-3 border-t border-white/5">
                    <button
                      onClick={() => { playTone(600, 'triangle', 0.05, 0.04); onSelectProject(project); }}
                      data-cursor="view"
                      className="flex-1 py-2.5 rounded-xl bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white text-xs font-semibold border border-indigo-500/30 transition text-center flex items-center justify-center space-x-1"
                    >
                      <span>Detailed Deep-Dive</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    {project.liveUrl && project.liveUrl !== '#' && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1.5 px-3 py-2.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 transition"
                        title="Open Live Website"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-xs font-semibold">Live</span>
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      )}

    </section>
  );
};
