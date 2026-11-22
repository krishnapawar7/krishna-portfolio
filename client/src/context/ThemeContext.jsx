import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'light' ? 'light' : 'dark';
  });

  const [soundEnabled, setSoundEnabled] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.classList.remove('dark', 'light', 'retro-dex');

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.add('light');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  // Strictly two modes: Dark Gaming Mode & Light Mode
  const toggleTheme = () => {
    setTheme(prev => {
      const next = prev === 'dark' ? 'light' : 'dark';
      if (next === 'dark') {
        playTone(587, 'triangle', 0.08, 0.04);
      } else {
        playTone(784, 'sine', 0.08, 0.04);
      }
      return next;
    });
  };

  const setThemeMode = (mode) => {
    const validMode = mode === 'light' ? 'light' : 'dark';
    setTheme(validMode);
    if (validMode === 'dark') {
      playTone(587, 'triangle', 0.08, 0.04);
    }
  };

  const toggleSound = () => {
    setSoundEnabled(prev => !prev);
  };

  const playTone = (freq = 440, type = 'sine', duration = 0.08, gainVal = 0.04) => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(gainVal, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {
      console.warn('Audio feedback failed', e);
    }
  };

  // Authentic 8-bit Pokédex Chirp
  const playPokedexChirp = (pitch = 660) => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'square';
      osc1.frequency.setValueAtTime(pitch, ctx.currentTime);
      osc1.frequency.setValueAtTime(pitch * 1.5, ctx.currentTime + 0.04);
      gain1.gain.setValueAtTime(0.05, ctx.currentTime);
      gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);

      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start();
      osc1.stop(ctx.currentTime + 0.12);
    } catch (e) {
      console.warn('Pokedex sound failed', e);
    }
  };

  // Retro startup jingle
  const playRetroJingle = () => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.08);
        gain.gain.setValueAtTime(0.04, ctx.currentTime + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.08 + 0.12);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.08);
        osc.stop(ctx.currentTime + idx * 0.08 + 0.12);
      });
    } catch (e) {
      console.warn('Retro jingle failed', e);
    }
  };

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      toggleTheme, 
      setThemeMode, 
      soundEnabled, 
      toggleSound, 
      playTone, 
      playPokedexChirp,
      playRetroJingle 
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
