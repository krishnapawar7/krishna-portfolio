import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

export const Terminal = ({ profile }) => {
  const { playTone } = useTheme();
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    {
      id: 1,
      command: null,
      output: (
        <div className="text-slate-400">
          Welcome to <strong className="text-indigo-400">Krishna Pawar's Interactive Shell</strong> [v2.5.0 - MERN edition]<br/>
          Type <strong className="text-emerald-400">'help'</strong> to inspect commands, or tap any quick chip above.
        </div>
      )
    }
  ]);
  const historyEndRef = useRef(null);

  useEffect(() => {
    historyEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (raw) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    playTone(520, 'sine', 0.05, 0.03);

    if (cmd === 'clear') {
      setHistory([]);
      return;
    }

    let outputContent;

    switch (cmd) {
      case 'help':
        outputContent = (
          <div>
            <div className="text-indigo-400 font-semibold mb-1">Available Commands:</div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-slate-300">
              <span><strong className="text-emerald-400">skills</strong>   - Technical stack & tools</span>
              <span><strong className="text-emerald-400">projects</strong> - Featured project showcases</span>
              <span><strong className="text-emerald-400">exp</strong>      - Professional internship</span>
              <span><strong className="text-emerald-400">edu</strong>      - Academic background</span>
              <span><strong className="text-emerald-400">certs</strong>    - Verified certifications</span>
              <span><strong className="text-emerald-400">contact</strong>  - Email, phone & socials</span>
              <span><strong className="text-emerald-400">whoami</strong>   - Bio & profile summary</span>
              <span><strong className="text-emerald-400">clear</strong>    - Clear terminal window</span>
            </div>
          </div>
        );
        break;

      case 'whoami':
        outputContent = (
          <div className="text-slate-300">
            <p><strong className="text-blue-400">Krishna Pawar</strong> — Computer Science Graduate (B.Tech 2025, Medicaps University).</p>
            <p className="mt-1">Full-Stack & Generative AI Developer skilled in building end-to-end web apps with React.js, Node.js, Express.js, MongoDB, FastAPI, Python, and the Google Gemini API. AWS Cloud Foundation certified.</p>
          </div>
        );
        break;

      case 'skills':
        outputContent = (
          <div className="text-slate-300 space-y-1">
            <div><span className="text-purple-400 font-medium">🤖 AI / GenAI:</span> Python, Gemini API, LangChain, RAG Pipelines, FAISS, Prompt Engineering, NLP</div>
            <div><span className="text-blue-400 font-medium">💻 Frontend:</span> React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Vite, SCSS</div>
            <div><span className="text-emerald-400 font-medium">⚙️ Backend:</span> Node.js, Express.js, Python FastAPI, RESTful APIs, JWT Auth</div>
            <div><span className="text-amber-400 font-medium">🗄️ Databases:</span> MongoDB, FAISS Vector Search</div>
            <div><span className="text-cyan-400 font-medium">☁️ Cloud & Tools:</span> AWS (Certified), Git, GitHub, Postman, Linux basics</div>
            <div><span className="text-pink-400 font-medium">🧠 Core CS:</span> OOP, Data Structures & Algorithms, DBMS, SDLC, Problem Solving</div>
          </div>
        );
        break;

      case 'projects':
        outputContent = (
          <div className="text-slate-300 space-y-2">
            <div>
              <span className="text-emerald-400 font-semibold">1. Document Q&A RAG Pipeline (2026)</span>
              <p className="text-xs text-slate-400">Python • LangChain • FAISS • Gemini API • FastAPI</p>
              <p className="text-sm">End-to-end RAG system with document chunking, semantic vector search, and Gemini API context generation.</p>
            </div>
            <div>
              <span className="text-blue-400 font-semibold">2. Smart Interview AI (2026)</span>
              <p className="text-xs text-slate-400">React.js • Node.js • Express.js • MongoDB • JWT • Gemini API</p>
              <p className="text-sm">Full-stack interview preparation app with AI question synthesis, secure auth, and real-time evaluation.</p>
            </div>
            <div>
              <span className="text-purple-400 font-semibold">3. Google Gemini Clone (2025)</span>
              <p className="text-xs text-slate-400">React.js • Tailwind CSS • Gemini API • JavaScript</p>
              <p className="text-sm">High-fidelity chat interface with streaming responses, code formatting, and responsive dark styling.</p>
            </div>
          </div>
        );
        break;

      case 'exp':
        outputContent = (
          <div className="text-slate-300">
            <div className="text-indigo-400 font-semibold">Web Development Intern @ Teachnook (Remote)</div>
            <ul className="list-disc list-inside text-sm mt-1 space-y-1 text-slate-300">
              <li>Engineered and styled responsive UI components using HTML5, CSS3, and JavaScript.</li>
              <li>Integrated REST APIs connecting client views with backend services.</li>
              <li>Debugged layout quirks and cross-device performance issues.</li>
              <li>Managed codebase collaboration using Git and GitHub.</li>
            </ul>
          </div>
        );
        break;

      case 'edu':
        outputContent = (
          <div className="text-slate-300 space-y-2">
            <div>
              <span className="text-blue-400 font-semibold">Medicaps University, Indore, India (2021 – 2025)</span>
              <p className="text-sm">Bachelor of Technology (B.Tech) in Computer Science Engineering</p>
            </div>
            <div>
              <span className="text-blue-400 font-semibold">Scholars' Den School, Khandwa, India (2020 – 2021)</span>
              <p className="text-sm">Senior Secondary Education (Class XII - Science/PCM)</p>
            </div>
          </div>
        );
        break;

      case 'certs':
        outputContent = (
          <div className="text-slate-300 space-y-1">
            <div>🏆 <strong className="text-amber-300">AWS Cloud Foundation</strong> — Amazon Web Services (2024)</div>
            <div>🏆 <strong className="text-emerald-300">JavaScript Fundamentals</strong> — GreatStack (2025)</div>
          </div>
        );
        break;

      case 'contact':
        outputContent = (
          <div className="text-slate-300 space-y-1">
            <div>📧 <strong>Email:</strong> <a href="mailto:krishpawar214@gmail.com" className="text-indigo-400 hover:underline">krishpawar214@gmail.com</a></div>
            <div>📱 <strong>Phone:</strong> <a href="tel:+918818846012" className="text-indigo-400 hover:underline">+91 8818846012</a></div>
            <div>📍 <strong>Location:</strong> Indore, Madhya Pradesh, India</div>
            <div>🔗 <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/krishna-pawar" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">linkedin.com/in/krishna-pawar</a></div>
            <div>🐙 <strong>GitHub:</strong> <a href="https://github.com/krishnapawar7" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">github.com/krishnapawar7</a></div>
          </div>
        );
        break;

      default:
        outputContent = (
          <div className="text-rose-400">
            Command not found: "{raw}". Type <strong className="text-emerald-400 cursor-pointer" onClick={() => handleCommand('help')}>help</strong> for a list of valid commands.
          </div>
        );
    }

    setHistory(prev => [
      ...prev,
      {
        id: Date.now(),
        command: raw,
        output: outputContent
      }
    ]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    const cmd = inputVal;
    setInputVal('');
    handleCommand(cmd);
  };

  return (
    <div className="bento-card rounded-3xl p-6 flex flex-col h-full">
      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
          <span className="ml-2 font-mono text-xs text-slate-400">krishna@portfolio:~ (bash)</span>
        </div>
        <div className="hidden sm:flex items-center space-x-1.5 text-xs">
          <span className="text-slate-500">Quick run:</span>
          <button onClick={() => handleCommand('skills')} className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/40 transition font-mono">skills</button>
          <button onClick={() => handleCommand('projects')} className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 hover:bg-purple-500/40 transition font-mono">projects</button>
          <button onClick={() => handleCommand('contact')} className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/40 transition font-mono">contact</button>
        </div>
      </div>

      <div className="terminal-window rounded-xl p-4 h-64 overflow-y-auto text-xs leading-relaxed space-y-3 mb-3">
        {history.map((item) => (
          <div key={item.id} className="space-y-1">
            {item.command && (
              <div className="flex items-center space-x-2 text-slate-400">
                <span className="text-emerald-400">guest@krishna-dev</span>:<span className="text-blue-400">~</span>$ <span className="text-white">{item.command}</span>
              </div>
            )}
            <div className={item.command ? "pl-2 border-l border-indigo-500/30" : ""}>
              {item.output}
            </div>
          </div>
        ))}
        <div ref={historyEndRef} />
      </div>

      <form onSubmit={onSubmit} className="flex items-center space-x-2 bg-slate-900/80 px-3 py-2 rounded-xl border border-white/10">
        <span className="text-emerald-400 font-mono text-xs font-bold">guest@krishna:~$</span>
        <input 
          type="text" 
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="type 'skills', 'projects', 'exp', 'edu', or 'help'..." 
          className="bg-transparent border-none outline-none font-mono text-xs text-white flex-1 focus:ring-0"
        />
        <button type="submit" className="text-xs px-2.5 py-1 bg-indigo-600 hover:bg-indigo-500 text-white rounded font-mono transition">
          Enter
        </button>
      </form>
    </div>
  );
};
