import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutHub } from './components/AboutHub';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ProjectModal } from './components/ProjectModal';
import { EngineeringLab } from './components/EngineeringLab';
import { DigitalGarden } from './components/DigitalGarden';
import { Journey } from './components/Journey';
import { Contact } from './components/Contact';
import { ResumeModal } from './components/ResumeModal';
import { CommandPalette } from './components/CommandPalette';
import { AiAssistant } from './components/AiAssistant';
import { Toast } from './components/Toast';
import { CustomCursor } from './components/CustomCursor';
import { KineticTicker } from './components/KineticTicker';
import { ArrowUp } from 'lucide-react';

const FALLBACK_PROFILE = {
  name: "Krishna Pawar",
  role: "Full-Stack & Generative AI Developer",
  location: "Indore, India",
  phone: "+91 8818846012",
  email: "krishpawar214@gmail.com",
  skills: {
    aiGenAi: ["Python", "Google Gemini API", "LangChain", "RAG Pipelines", "FAISS Vector Search", "Prompt Engineering", "NLP"],
    frontend: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Vite", "SCSS"],
    backend: ["Node.js", "Express.js", "FastAPI", "Python", "RESTful APIs", "JWT Authentication"],
    databases: ["MongoDB", "FAISS (Vector DB)", "DBMS Concepts"],
    cloudTools: ["AWS (Certified)", "Git", "GitHub", "Postman", "VS Code"],
    coreCs: ["Object-Oriented Programming (OOP)", "Data Structures & Algorithms", "SDLC", "Problem Solving"]
  }
};

const FALLBACK_PROJECTS = [
  {
    title: "EdTech Store",
    slug: "edtech-store",
    year: "2026",
    category: "fullstack",
    tags: ["Next.js", "React", "Prisma", "Razorpay", "PostgreSQL"],
    summary: "A production-ready EdTech e-commerce platform for buying CBSE study materials, subscriptions, and chapter access with secure payments and entitlement management.",
    highlights: [
      "Built a hierarchical curriculum catalogue with real-time search and student library entitlements.",
      "Implemented secure JWT cookie authentication, cart pricing, coupons, GST calculations, and upgrade credits.",
      "Integrated Razorpay checkout with HMAC payment verification and idempotent webhook entitlement grants.",
      "Supports SQLite for local development and PostgreSQL for production, with Prisma ORM and Vitest coverage."
    ],
    techStack: ["Next.js 15", "React 19", "Prisma", "PostgreSQL", "SQLite", "Razorpay", "Tailwind CSS", "Vitest"],
    impact: "Provides an end-to-end purchasing and digital library experience with verified server-side access control.",
    githubUrl: "https://github.com/krishnapawar7/EdTech-Store",
    liveUrl: "https://edtech-store-krishna7.vercel.app"
  },
  {
    title: "Document Q&A RAG Pipeline",
    slug: "document-qa-rag-pipeline",
    year: "2026",
    category: "ai",
    tags: ["GenAI", "Python", "RAG", "FastAPI", "FAISS"],
    summary: "An end-to-end Retrieval-Augmented Generation (RAG) system engineered in Python to synthesize natural language answers from dense internal documents with strict grounding and zero hallucination.",
    highlights: [
      "Developed an end-to-end Retrieval-Augmented Generation (RAG) pipeline in Python.",
      "Implemented document ingestion, chunking, embedding generation and semantic search.",
      "Integrated the Gemini API to generate context-aware responses without hallucination.",
      "Exposed the system through FastAPI REST endpoints with structured JSON outputs."
    ],
    techStack: ["Python", "LangChain", "FAISS", "Google Gemini API", "FastAPI", "Pydantic"],
    impact: "Sub-second grounded answers from internal documents.",
    githubUrl: "https://github.com/krishnapawar7"
  },
  {
    title: "Smart Interview AI",
    slug: "smart-interview-ai",
    year: "2026",
    category: "fullstack",
    tags: ["MERN", "React.js", "Node.js", "MongoDB", "JWT", "Gemini API"],
    summary: "A full-stack technical interview preparation platform designed specifically for students and fresh graduates with dynamic questions, timer constraints, and automated performance reviews.",
    highlights: [
      "Developed a full-stack interview preparation application with a React.js front end, Node.js and Express.js APIs and MongoDB database integration.",
      "Implemented JWT-based authentication and secure backend APIs for user management, interview handling and AI-driven question generation.",
      "Designed a responsive and user-friendly interface using Vite and SCSS for a seamless candidate experience."
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "Google Gemini API", "Vite", "SCSS"],
    impact: "Enables candidates to practice realistic technical rounds on demand.",
    githubUrl: "https://github.com/krishnapawar7"
  },
  {
    title: "Google Gemini Clone",
    slug: "google-gemini-clone",
    year: "2025",
    category: "frontend",
    tags: ["React.js", "Tailwind CSS", "Gemini API", "JavaScript"],
    summary: "A pixel-perfect, highly responsive conversational AI application replicating the Google Gemini web interface, designed to demonstrate mastery of modern React component architecture, responsive design, and streaming API states.",
    highlights: [
      "Developed a clean and responsive chat-based user interface using React.js.",
      "Integrated the Gemini API to display real-time AI-generated responses.",
      "Styled the interface with Tailwind CSS for a modern, consistent look.",
      "Optimized performance to ensure smooth real-time interaction."
    ],
    techStack: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Google Gemini API"],
    impact: "Delivers an intuitive chat experience with zero lag.",
    githubUrl: "https://github.com/krishnapawar7"
  }
];

export default function App() {
  const [profile, setProfile] = useState(FALLBACK_PROFILE);
  const [projects, setProjects] = useState(FALLBACK_PROJECTS);
  const [selectedProject, setSelectedProject] = useState(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState('');
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    fetch('/api/profile')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data) {
          setProfile(data.data);
        }
      })
      .catch(() => console.log('Using local profile data fallback'));

    fetch('/api/projects')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data) {
          setProjects(data.data);
        }
      })
      .catch(() => console.log('Using local projects data fallback'));
  }, []);

  const triggerToast = (msg) => {
    setToastMsg(msg);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3200);
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-main)] bg-dot-matrix relative selection:bg-indigo-500 selection:text-white transition-colors duration-300">

      {/* Ambient Mesh Glows */}
      <div className="ambient-mesh">
        <div className="mesh-circle-1"></div>
        <div className="mesh-circle-2"></div>
        <div className="mesh-circle-3"></div>
      </div>

      {/* Custom Fluid Morphing Cursor */}
      <CustomCursor />

      <Toast message={toastMsg} isVisible={showToast} />

      <CommandPalette
        isOpen={paletteOpen}
        onClose={setPaletteOpen}
        onOpenResume={() => setResumeOpen(true)}
        onShowToast={triggerToast}
      />

      <AiAssistant profile={profile} />

      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        onOpenPalette={() => setPaletteOpen(true)}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 space-y-28 relative z-10">

        {/* 1. Hero */}
        <Hero
          profile={profile}
          onOpenResume={() => setResumeOpen(true)}
          onShowToast={triggerToast}
        />

        {/* Kinetic Ticker Ribbon */}
        <div className="-mx-4 sm:-mx-6 lg:-mx-8">
          <KineticTicker speed={32} />
        </div>

        {/* 01 · Kernel & Recruiter Telemetry (Bento About + ATS Matcher Hub) */}
        <AboutHub profile={profile} />

        {/* 02 · The Tech Foundry (Skills Matrix) */}
        <Skills skills={profile.skills} />

        {/* 03 · Selected Works & Architecture (Projects & The Krishna Dev-Dex) */}
        <Projects
          projects={projects}
          onSelectProject={(p) => setSelectedProject(p)}
          onShowToast={triggerToast}
        />

        {/* 04 · Interactive Engineering Lab (Dev-Dex + RAG Simulator + Code Inspector + API Sandbox) */}
        <EngineeringLab onShowToast={triggerToast} />

        {/* 05 · Field Notes & Digital Garden */}
        <DigitalGarden onShowToast={triggerToast} />

        {/* 06 · The Track Record & Accreditations (Experience + Education + Certifications) */}
        <Journey
          education={profile.education}
          experience={profile.experience}
          certifications={profile.certifications}
        />

        {/* Reverse Kinetic Ribbon */}
        <div className="-mx-4 sm:-mx-6 lg:-mx-8">
          <KineticTicker reverse={true} speed={28} />
        </div>

        {/* 07 · The Interview Slip */}
        <Contact
          profile={profile}
          onOpenResume={() => setResumeOpen(true)}
          onShowToast={triggerToast}
        />
      </main>

      <footer className="border-t border-white/5 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
        <div className="flex items-center space-x-2">
          <span className="w-6 h-6 rounded-lg bg-indigo-600 text-white font-bold flex items-center justify-center text-[10px]">
            KP
          </span>
          <span>© 2026 Krishna Pawar. Built with MERN Stack (MongoDB, Express, React, Node.js) & Tailwind CSS.</span>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => setPaletteOpen(true)}
            className="hover:text-indigo-400 transition flex items-center space-x-1"
          >
            <span>Command Palette (Ctrl+K)</span>
          </button>
          <span>•</span>
          <a href="#hero" className="hover:text-indigo-400 transition flex items-center space-x-1">
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </footer>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
