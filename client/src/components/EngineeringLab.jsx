import React, { useState, useEffect } from 'react';
import { RagSimulator } from './RagSimulator';
import { CodeInspector } from './CodeInspector';
import { ApiPlayground } from './ApiPlayground';
import { Cpu, Code2, Terminal } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const EngineeringLab = ({ onShowToast }) => {
  const { playTone } = useTheme();
  const [activeTab, setActiveTab] = useState('rag'); // 'rag' | 'code' | 'api'

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (['rag', 'code', 'api', 'lab'].includes(hash)) {
        if (hash !== 'lab') {
          setActiveTab(hash);
        }
        const el = document.getElementById('lab');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const TABS = [
    {
      id: 'rag',
      label: 'Neural Vector Lab',
      badge: 'FAISS + Gemini',
      icon: <Cpu className="w-4 h-4 text-cyan-400" />,
      desc: 'Sub-millisecond RAG vector retrieval simulator'
    },
    {
      id: 'code',
      label: 'Source Inspector',
      badge: 'Production Audit',
      icon: <Code2 className="w-4 h-4 text-indigo-400" />,
      desc: 'Modular Python, LangChain & JWT auth logic'
    },
    {
      id: 'api',
      label: 'REST API Sandbox',
      badge: 'Express + Mongo',
      icon: <Terminal className="w-4 h-4 text-emerald-400" />,
      desc: 'Live backend latency & endpoint telemetry'
    }
  ];

  const handleSelectTab = (tabId) => {
    playTone(580, 'triangle', 0.05, 0.03);
    setActiveTab(tabId);
  };

  return (
    <section id="lab" className="space-y-6">
      
      {/* Editorial Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b border-white/5 pb-4">
        <div>
          <span className="text-xs font-mono font-bold tracking-wider text-cyan-400 uppercase">
            ( 04 · Interactive Engineering Lab )
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-tight mt-1">
            System Telemetry & Live Sandboxes
          </h2>
          <p className="text-sm text-slate-400 max-w-xl font-sans mt-1">
            Test live REST endpoints, inspect production source code, and simulate vector similarity retrieval in real-time.
          </p>
        </div>

        {/* Current Active Mode Indicator */}
        <div className="flex items-center space-x-2 text-xs font-mono text-slate-400 bg-slate-900/60 px-3.5 py-1.5 rounded-xl border border-white/5 self-start lg:self-auto">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Active Sandbox: <strong className="text-white capitalize">{TABS.find(t => t.id === activeTab)?.label}</strong></span>
        </div>
      </div>

      {/* Cockpit Switcher Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-2 rounded-3xl bg-slate-900/70 border border-white/10 backdrop-blur-md">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => handleSelectTab(tab.id)}
              className={`p-3.5 rounded-2xl text-left transition flex flex-col justify-between border relative overflow-hidden group ${
                isActive
                  ? 'bg-slate-900 border-indigo-500/60 shadow-md'
                  : 'bg-slate-950/40 border-white/5 hover:border-white/10 hover:bg-slate-900/50'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <div className={`p-2 rounded-xl transition ${isActive ? 'bg-white/10' : 'bg-slate-800/60 group-hover:bg-slate-800'}`}>
                  {tab.icon}
                </div>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                  isActive 
                    ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30' 
                    : 'bg-slate-800/60 text-slate-400 border-transparent'
                }`}>
                  {tab.badge}
                </span>
              </div>
              <div className="mt-3">
                <div className={`text-xs font-bold transition ${isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                  {tab.label}
                </div>
                <div className="text-[11px] text-slate-400 font-sans mt-0.5 line-clamp-1">
                  {tab.desc}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Tool Viewport */}
      <div className="pt-2 transition-all duration-300">
        {activeTab === 'rag' && <RagSimulator embedded={true} />}
        {activeTab === 'code' && <CodeInspector embedded={true} onShowToast={onShowToast} />}
        {activeTab === 'api' && <ApiPlayground embedded={true} />}
      </div>

    </section>
  );
};
