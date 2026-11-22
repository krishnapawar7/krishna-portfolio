import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, MessageSquare, User, CornerDownLeft, RefreshCw } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const AiAssistant = ({ profile }) => {
  const { playTone } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: "Hi! I'm Krishna's AI Representative. Ask me anything about his technical stack, projects, internship at Teachnook, or suitability for your engineering openings!"
    }
  ]);
  const messagesEndRef = useRef(null);

  const samplePrompts = [
    "Why should our team hire Krishna?",
    "Explain Krishna's Document RAG Pipeline project",
    "What did Krishna work on at Teachnook?",
    "Is Krishna open to relocation or remote roles?"
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSend = async (question) => {
    const textToSend = question || input;
    if (!textToSend.trim() || loading) return;

    playTone(600, 'triangle', 0.05, 0.03);

    const userMessage = { role: 'user', text: textToSend };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: textToSend })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setMessages(prev => [...prev, { role: 'assistant', text: data.data.reply }]);
        playTone(750, 'sine', 0.08, 0.04);
      } else {
        throw new Error('API request failed');
      }
    } catch (err) {
      // Local fallback
      setTimeout(() => {
        setMessages(prev => [
          ...prev, 
          { 
            role: 'assistant', 
            text: "Krishna is a B.Tech CSE (2025) graduate specializing in Full-Stack MERN and Generative AI (Gemini API & LangChain). He is AWS Cloud Foundation certified and has internship experience at Teachnook. Reach him directly at krishpawar214@gmail.com or +91 8818846012." 
          }
        ]);
        playTone(750, 'sine', 0.08, 0.04);
      }, 500);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Widget Trigger */}
      <div className="fixed bottom-6 left-6 z-40">
        {!isOpen && (
          <button
            onClick={() => {
              playTone(600, 'triangle', 0.06, 0.04);
              setIsOpen(true);
            }}
            className="flex items-center space-x-2.5 px-4 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white shadow-xl hover:scale-105 transition transform border border-white/10 group"
          >
            <div className="relative">
              <Bot className="w-5 h-5 text-white" />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            </div>
            <span className="text-xs font-semibold">Ask Krishna's AI</span>
          </button>
        )}
      </div>

      {/* Chat Window Modal / Drawer */}
      {isOpen && (
        <div className="fixed bottom-6 left-6 z-50 w-full max-w-sm sm:max-w-md bg-slate-900/95 border border-indigo-500/30 rounded-3xl shadow-2xl backdrop-blur-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-6">
          
          {/* Header */}
          <div className="p-4 bg-slate-900 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-white flex items-center space-x-1.5">
                  <span>Krishna AI Assistant</span>
                  <span className="px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[9px]">ONLINE</span>
                </h3>
                <p className="text-[10px] text-slate-400">Trained on resume & project telemetry</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="p-4 h-72 overflow-y-auto space-y-3 text-xs">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex items-start space-x-2 ${
                  m.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {m.role === 'assistant' && (
                  <div className="w-6 h-6 rounded-lg bg-indigo-600/30 text-indigo-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}
                <div
                  className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                    m.role === 'user'
                      ? 'bg-indigo-600 text-white rounded-tr-sm'
                      : 'bg-slate-800/90 text-slate-200 border border-white/5 rounded-tl-sm'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex items-center space-x-2 text-slate-400 text-xs">
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-indigo-400" />
                <span>Generating grounded answer...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Prompt Chips */}
          <div className="px-4 py-2 bg-slate-950/60 border-t border-white/5 flex flex-wrap gap-1.5">
            {samplePrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(p)}
                className="text-[10px] px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-indigo-600/20 hover:text-indigo-300 text-slate-400 border border-white/5 transition truncate max-w-full"
              >
                {p}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-slate-950 border-t border-white/10 flex items-center space-x-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question about Krishna..."
              className="flex-1 bg-slate-900 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="p-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white disabled:opacity-40 transition"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>
      )}
    </>
  );
};
