import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Gamepad2, FileText, Search, Menu, X } from 'lucide-react';

export const Navbar = ({ onOpenResume, onOpenPalette }) => {
  const { theme, toggleTheme, playTone } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = () => {
    playTone(520, 'sine', 0.05, 0.03);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-4 z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Clean, Streamlined Floating Glass Navbar */}
      <div className="nav-glass px-4 sm:px-6 py-2.5 flex items-center justify-between rounded-full shadow-xl transition-all duration-300">

        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={() => playTone(600, 'triangle', 0.05, 0.04)}
          className="flex items-center space-x-3 group"
        >
          <div className="relative">
            <div className="w-10 h-10 rounded-2xl bg-indigo-600 flex items-center justify-center font-extrabold text-white text-base shadow group-hover:scale-105 transition-transform">
              KP
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white dark:border-slate-900"></span>
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="font-display font-bold text-base text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                Krishna Pawar
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-indigo-500/15 text-indigo-600 dark:text-indigo-300">
                MERN
              </span>
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
              Full Stack & AI Engineer
            </div>
          </div>
        </a>

        {/* Streamlined Desktop Links (Clean & Essential) */}
        <nav className="hidden md:flex items-center space-x-1 text-xs font-semibold text-slate-600 dark:text-slate-300">
          <a href="#about" onClick={handleNavClick} className="px-3.5 py-1.5 rounded-full hover:text-indigo-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">About</a>
          <a href="#projects" onClick={handleNavClick} className="px-3.5 py-1.5 rounded-full hover:text-indigo-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">Projects</a>
          <a href="#lab" onClick={handleNavClick} className="px-3.5 py-1.5 rounded-full hover:text-indigo-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">Lab</a>
          <a href="#experience" onClick={handleNavClick} className="px-3.5 py-1.5 rounded-full hover:text-indigo-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">Experience</a>
          <a href="#contact" onClick={handleNavClick} className="px-3.5 py-1.5 rounded-full hover:text-indigo-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">Contact</a>
        </nav>

        {/* Right Action Group: Search + Theme + Resume */}
        <div className="hidden sm:flex items-center space-x-2">

          {/* Quick Search */}
          <button
            onClick={() => { playTone(500, 'sine', 0.05, 0.03); onOpenPalette(true); }}
            className="flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900/90 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-xs transition-colors group"
          >
            <Search className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
            <span className="font-medium">Search</span>
            <kbd className="px-1.5 py-0.5 rounded-md bg-slate-200 dark:bg-slate-800 text-[10px] font-mono text-slate-500 dark:text-slate-400">
              Ctrl K
            </kbd>
          </button>

          {/* Theme Toggle (Dark Gaming Mode vs Light Mode) */}
          <button
            onClick={toggleTheme}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium transition-colors bg-slate-100 hover:bg-slate-200 dark:bg-slate-900/90 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-black/5 dark:border-white/10"
            title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Gaming Mode"}
            aria-label="Toggle theme mode"
          >
            {theme === 'dark' ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-[11px] font-bold text-slate-300">Light</span>
              </>
            ) : (
              <>
                <Gamepad2 className="w-3.5 h-3.5 text-indigo-600" />
                <span className="text-[11px] font-bold text-slate-700">Gaming</span>
              </>
            )}
          </button>

          {/* Resume CTA */}
          <button
            onClick={onOpenResume}
            className="flex items-center space-x-2 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-full shadow transition transform hover:-translate-y-0.5"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

        </div>

        {/* Mobile Hamburger */}
        <div className="flex sm:hidden items-center space-x-2">
          <button
            onClick={() => onOpenPalette(true)}
            className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-full hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
          >
            <Search className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-full hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden mt-2 p-4 space-y-2 rounded-3xl nav-glass shadow-2xl backdrop-blur-2xl">
          <a href="#about" onClick={handleNavClick} className="block px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white rounded-xl hover:bg-slate-100 dark:hover:bg-white/10">About</a>
          <a href="#projects" onClick={handleNavClick} className="block px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white rounded-xl hover:bg-slate-100 dark:hover:bg-white/10">Projects</a>
          <a href="#lab" onClick={handleNavClick} className="block px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white rounded-xl hover:bg-slate-100 dark:hover:bg-white/10">Lab</a>
          <a href="#experience" onClick={handleNavClick} className="block px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white rounded-xl hover:bg-slate-100 dark:hover:bg-white/10">Experience</a>
          <a href="#contact" onClick={handleNavClick} className="block px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white rounded-xl hover:bg-slate-100 dark:hover:bg-white/10">Contact</a>
          <div className="pt-2 space-y-2">
            <button
              onClick={() => { toggleTheme(); }}
              className="w-full py-2 text-center text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900/80 rounded-full border border-black/5 dark:border-white/10 flex items-center justify-center space-x-2"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span>Switch to Light Mode</span>
                </>
              ) : (
                <>
                  <Gamepad2 className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Switch to Dark Gaming Mode</span>
                </>
              )}
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenResume(); }}
              className="w-full py-2.5 text-center text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-full shadow"
            >
              Open ATS Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
