import React, { useState } from 'react';
import { BentoAbout } from './BentoAbout';
import { JobFitAnalyzer } from './JobFitAnalyzer';
import { Terminal as TerminalIcon, Target } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const AboutHub = ({ profile }) => {
  const { playTone } = useTheme();
  const [activeTab, setActiveTab] = useState('blueprint'); // 'blueprint' | 'ats'

  const handleTabChange = (tab) => {
    playTone(520, 'sine', 0.05, 0.03);
    setActiveTab(tab);
  };

  return (
    <section id="about" className="space-y-6">
      
      {/* Editorial Header with Integrated Switcher */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b border-white/5 pb-4">
        <div>
          <span className="text-xs font-mono font-bold tracking-wider text-indigo-400 uppercase">
            ( 01 · Kernel & Recruiter Telemetry )
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-tight mt-1">
            Engineering Mindset & Role Compatibility
          </h2>
          <p className="text-sm text-slate-400 max-w-xl font-sans mt-1">
            Explore Krishna's core architectural philosophy and Unix terminal, or benchmark ATS vacancy requirements against his live qualifications.
          </p>
        </div>

        {/* Mode Switcher Tabs */}
        <div className="flex items-center p-1 bg-slate-900/90 rounded-2xl border border-white/10 text-xs font-semibold shadow-inner flex-shrink-0">
          <button
            onClick={() => handleTabChange('blueprint')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition ${
              activeTab === 'blueprint'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>Core Blueprint & Terminal</span>
          </button>
          
          <button
            onClick={() => handleTabChange('ats')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition ${
              activeTab === 'ats'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Target className="w-3.5 h-3.5 text-amber-400" />
            <span>ATS Role Matcher (97%)</span>
          </button>
        </div>
      </div>

      {/* Tab Content with Smooth Fade-in */}
      <div className="transition-all duration-300">
        {activeTab === 'blueprint' ? (
          <BentoAbout profile={profile} embedded={true} />
        ) : (
          <JobFitAnalyzer embedded={true} />
        )}
      </div>

    </section>
  );
};
