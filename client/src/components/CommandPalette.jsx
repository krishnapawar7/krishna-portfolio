import React, { useState, useEffect } from 'react';
import { Search, Sparkles, FolderGit2, FileText, Mail, Phone, Sun, Moon, Volume2, VolumeX, ArrowRight, X, Cpu, BookOpen, Terminal } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const CommandPalette = ({ isOpen, onClose, onOpenResume, onShowToast }) => {
  const { theme, toggleTheme, setThemeMode, soundEnabled, toggleSound, playTone, playRetroJingle } = useTheme();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        onClose(prev => !prev);
      }
      if (e.key === 'Escape' && isOpen) {
        onClose(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      id: 'devdex',
      title: 'Open The Krishna Dev-Dex 🎮',
      subtitle: 'Interactive retro Pokémon-style developer catalog',
      icon: <Sparkles className="w-4 h-4 text-rose-400" />,
      perform: () => {
        window.location.hash = 'devdex';
        onClose(false);
      }
    },
    {
      id: 'rag',
      title: 'Open Neural Vector Lab ⚡',
      subtitle: 'Simulate sub-millisecond FAISS vector retrieval & Gemini RAG',
      icon: <Cpu className="w-4 h-4 text-cyan-400" />,
      perform: () => {
        window.location.hash = 'rag';
        onClose(false);
      }
    },
    {
      id: 'api',
      title: 'Open REST API Sandbox 🔌',
      subtitle: 'Live Express & MongoDB latency benchmark',
      icon: <Terminal className="w-4 h-4 text-emerald-400" />,
      perform: () => {
        window.location.hash = 'api';
        onClose(false);
      }
    },
    {
      id: 'garden',
      title: 'Open Digital Garden & Technical Notes 🌿',
      subtitle: 'Architectural deep-dives on RAG, JWT Security & AWS Principles',
      icon: <BookOpen className="w-4 h-4 text-emerald-400" />,
      perform: () => {
        window.location.hash = 'garden';
        onClose(false);
      }
    },
    {
      id: 'projects',
      title: 'Explore Featured Projects',
      subtitle: 'Document RAG Pipeline, Smart Interview AI, Gemini Clone',
      icon: <FolderGit2 className="w-4 h-4 text-emerald-400" />,
      perform: () => {
        window.location.hash = 'projects';
        onClose(false);
      }
    },
    {
      id: 'skills',
      title: 'View Skills & Tech Stack',
      subtitle: 'React, Node, Express, MongoDB, Python, FastAPI, Gemini API',
      icon: <Cpu className="w-4 h-4 text-purple-400" />,
      perform: () => {
        window.location.hash = 'skills';
        onClose(false);
      }
    },
    {
      id: 'resume',
      title: 'Open ATS Resume & Print PDF',
      subtitle: 'Medicaps University B.Tech CSE 2025 • Full-Stack / GenAI',
      icon: <FileText className="w-4 h-4 text-indigo-400" />,
      perform: () => {
        onClose(false);
        onOpenResume();
      }
    },
    {
      id: 'copy-email',
      title: 'Copy Email Address',
      subtitle: 'krishpawar214@gmail.com',
      icon: <Mail className="w-4 h-4 text-blue-400" />,
      perform: () => {
        navigator.clipboard.writeText('krishpawar214@gmail.com');
        playTone(784, 'sine', 0.1, 0.05);
        onShowToast('Copied krishpawar214@gmail.com');
        onClose(false);
      }
    },
    {
      id: 'copy-phone',
      title: 'Copy Phone / WhatsApp',
      subtitle: '+91 8818846012',
      icon: <Phone className="w-4 h-4 text-emerald-400" />,
      perform: () => {
        navigator.clipboard.writeText('+918818846012');
        playTone(784, 'sine', 0.1, 0.05);
        onShowToast('Copied +91 8818846012');
        onClose(false);
      }
    },
    {
      id: 'contact',
      title: 'Send a Message',
      subtitle: 'Submit message directly to MongoDB backend API',
      icon: <Sparkles className="w-4 h-4 text-amber-400" />,
      perform: () => {
        window.location.hash = 'contact';
        onClose(false);
      }
    },
    {
      id: 'theme',
      title: theme === 'dark' ? 'Switch to Light Mode ☀️' : 'Switch to Dark Gaming Mode 🎮',
      subtitle: theme === 'dark' ? 'Clean daylight reading aesthetic' : 'Stealth dark palette with gaming sound effects',
      icon: theme === 'dark' ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-indigo-400" />,
      perform: () => {
        toggleTheme();
        onClose(false);
      }
    },
    {
      id: 'audio',
      title: `${soundEnabled ? 'Mute' : 'Enable'} UI Audio Feedback`,
      subtitle: 'Subtle sound effects on clicks and commands',
      icon: soundEnabled ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />,
      perform: () => {
        toggleSound();
        onClose(false);
      }
    }
  ];

  const filtered = actions.filter(a => 
    a.title.toLowerCase().includes(query.toLowerCase()) || 
    a.subtitle.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-start justify-center pt-20 px-4">
      <div className="w-full max-w-xl bg-slate-900/95 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-2xl">
        
        {/* Search Input Bar */}
        <div className="flex items-center px-4 border-b border-white/10">
          <Search className="w-5 h-5 text-slate-400 mr-3" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search (e.g. projects, resume, email, theme)..."
            className="w-full py-4 bg-transparent text-sm text-white placeholder-slate-400 focus:outline-none"
          />
          <button 
            onClick={() => onClose(false)}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length > 0 ? (
            filtered.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  playTone(550, 'triangle', 0.05, 0.03);
                  item.perform();
                }}
                className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-indigo-600/15 hover:border-indigo-500/30 border border-transparent transition text-left group"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-slate-800 border border-white/5 group-hover:border-indigo-500/30 transition">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white group-hover:text-indigo-300 transition">
                      {item.title}
                    </div>
                    <div className="text-xs text-slate-400">
                      {item.subtitle}
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition" />
              </button>
            ))
          ) : (
            <div className="py-8 text-center text-xs text-slate-500">
              No matching actions found for "{query}".
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-slate-950/70 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500">
          <span>Navigate with mouse or tap</span>
          <div className="flex items-center space-x-2">
            <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-white/10 font-mono">ESC</span>
            <span>to close</span>
          </div>
        </div>

      </div>
    </div>
  );
};
