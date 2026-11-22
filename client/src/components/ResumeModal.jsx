import React from 'react';
import { FileText, Printer, X } from 'lucide-react';

export const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-3xl p-6 sm:p-8 max-h-[92vh] overflow-y-auto shadow-2xl relative">
        
        {/* Header Toolbar */}
        <div className="no-print flex items-center justify-between border-b border-white/10 pb-4 mb-6">
          <div className="flex items-center space-x-2">
            <FileText className="w-5 h-5 text-indigo-400" />
            <span className="text-sm font-bold text-white uppercase tracking-wider">Krishna Pawar — Resume Preview</span>
          </div>
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => window.print()}
              className="flex items-center space-x-1.5 px-3.5 py-1.5 text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl transition shadow"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button 
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ATS Resume View */}
        <div className="bg-white text-slate-900 p-8 sm:p-12 rounded-2xl shadow-xl font-sans text-sm leading-relaxed space-y-6">
          
          <div className="text-center border-b border-slate-300 pb-4">
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Krishna Pawar</h1>
            <div className="text-xs text-slate-600 mt-1.5 flex flex-wrap justify-center items-center gap-2">
              <span>Indore, India</span>
              <span>•</span>
              <a href="tel:+918818846012" className="text-indigo-600 font-medium">+91 8818846012</a>
              <span>•</span>
              <a href="mailto:krishpawar214@gmail.com" className="text-indigo-600 font-medium">krishpawar214@gmail.com</a>
              <span>•</span>
              <span className="text-indigo-600 font-medium">LinkedIn</span>
              <span>•</span>
              <span className="text-indigo-600 font-medium">GitHub</span>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-widest border-b border-slate-300 pb-1 mb-2">Profile Summary</h2>
            <p className="text-xs text-slate-700 leading-relaxed text-justify">
              Computer Science graduate (B.Tech, 2025) seeking a MERN / Full-Stack / Python Developer role. I build full-stack applications with React.js, Node.js, Express.js, and MongoDB, design secure REST APIs with JWT authentication, and integrate AI features using the Gemini API, LangChain, and vector search (FAISS). I also build responsive React interfaces styled with Tailwind CSS, hold an AWS Cloud Foundation certification, and use Git and GitHub daily.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-widest border-b border-slate-300 pb-1 mb-2">Education</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-start text-xs">
                <div>
                  <strong className="text-slate-900 font-bold">Medicaps University</strong>
                  <div className="italic text-slate-700">Bachelor of Technology in Computer Science Engineering</div>
                </div>
                <div className="text-right">
                  <span className="font-medium">2021 – 2025</span>
                  <div className="text-slate-600">Indore, India</div>
                </div>
              </div>
              <div className="flex justify-between items-start text-xs">
                <div>
                  <strong className="text-slate-900 font-bold">Scholars’ Den School</strong>
                  <div className="italic text-slate-700">Senior Secondary (Class XII - Science/PCM)</div>
                </div>
                <div className="text-right">
                  <span className="font-medium">2020 – 2021</span>
                  <div className="text-slate-600">Khandwa, India</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-widest border-b border-slate-300 pb-1 mb-2">Technical Skills</h2>
            <div className="text-xs space-y-1 text-slate-800">
              <div><strong>AI / GenAI:</strong> Python, Gemini API, LangChain, RAG Pipelines, FAISS, NLP, Prompt Engineering</div>
              <div><strong>Frontend:</strong> React.js, JavaScript (ES6+), HTML5, Tailwind CSS, Vite, SCSS</div>
              <div><strong>Backend:</strong> FastAPI, Node.js, Express.js, REST APIs, JWT Authentication</div>
              <div><strong>Databases:</strong> MongoDB, FAISS (Vector DB)</div>
              <div><strong>Core Concepts:</strong> SDLC, Object-Oriented Programming (OOP), DBMS, Problem Solving</div>
              <div><strong>Cloud & Tools:</strong> AWS (Cloud Foundation Certified), Git, GitHub, Postman</div>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-widest border-b border-slate-300 pb-1 mb-2">Experience</h2>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between items-baseline">
                <strong className="font-bold text-slate-900">Web Development Intern</strong>
                <span className="text-slate-600">Remote</span>
              </div>
              <div className="italic text-slate-700 mb-1.5">Teachnook</div>
              <ul className="list-disc list-inside space-y-1 text-slate-700">
                <li>Developed and maintained front-end pages and application features using HTML, CSS and JavaScript.</li>
                <li>Integrated REST APIs between front-end pages and back-end services for asynchronous data delivery.</li>
                <li>Debugged layout and functional issues to improve responsiveness and reliability across devices.</li>
                <li>Used Git and GitHub for version control, branch management, and collaborative team reviews.</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-widest border-b border-slate-300 pb-1 mb-2">Projects</h2>
            <div className="space-y-4 text-xs">
              <div>
                <div className="flex justify-between font-bold text-slate-900">
                  <span>Document Q&A RAG Pipeline</span>
                  <span>2026</span>
                </div>
                <div className="italic text-slate-600 mb-1">Python, LangChain, FAISS, Gemini API, FastAPI</div>
                <ul className="list-disc list-inside space-y-0.5 text-slate-700">
                  <li>Developed an end-to-end Retrieval-Augmented Generation (RAG) pipeline in Python.</li>
                  <li>Implemented document ingestion, chunking, embedding generation and semantic vector search.</li>
                  <li>Integrated the Gemini API to generate context-aware, hallucination-free responses.</li>
                  <li>Exposed the system through FastAPI REST endpoints with structured JSON outputs.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between font-bold text-slate-900">
                  <span>Smart Interview AI</span>
                  <span>2026</span>
                </div>
                <div className="italic text-slate-600 mb-1">React.js, Node.js, Express.js, MongoDB, JWT, Vite, SCSS</div>
                <ul className="list-disc list-inside space-y-0.5 text-slate-700">
                  <li>Developed a full-stack interview preparation application with a React.js front end, Node.js and Express.js APIs and MongoDB database integration.</li>
                  <li>Implemented JWT-based authentication and secure backend APIs for user management, interview handling and AI-driven question generation.</li>
                  <li>Designed a responsive and user-friendly interface using Vite and SCSS for a seamless candidate experience.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between font-bold text-slate-900">
                  <span>Google Gemini Clone</span>
                  <span>2025</span>
                </div>
                <div className="italic text-slate-600 mb-1">React.js, JavaScript, Tailwind CSS, Gemini API</div>
                <ul className="list-disc list-inside space-y-0.5 text-slate-700">
                  <li>Developed a clean and responsive chat-based user interface using React.js.</li>
                  <li>Integrated the Gemini API to display real-time AI-generated responses.</li>
                  <li>Styled the interface with Tailwind CSS for a modern, consistent look.</li>
                  <li>Optimized performance to ensure smooth real-time interaction.</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-widest border-b border-slate-300 pb-1 mb-2">Certifications</h2>
            <div className="text-xs space-y-1.5 text-slate-800">
              <div className="flex justify-between">
                <div><strong>AWS Cloud Foundation</strong> — Amazon Web Services</div>
                <span className="text-slate-600">2024</span>
              </div>
              <div className="flex justify-between">
                <div><strong>JavaScript Fundamentals</strong> — GreatStack</div>
                <span className="text-slate-600">2025</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
