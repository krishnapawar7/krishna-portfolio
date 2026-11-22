import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { BookOpen, Sparkles, Clock, ArrowRight, ExternalLink, Calendar, Tag, CheckCircle2, X, Compass, Code, BrainCircuit, Shield } from 'lucide-react';

export const DigitalGarden = ({ onShowToast }) => {
  const { playTone } = useTheme();
  const [activeShelf, setActiveShelf] = useState('all');
  const [selectedNote, setSelectedNote] = useState(null);

  const SHELVES = [
    { id: 'all', label: 'All Shelves' },
    { id: 'genai', label: 'Generative AI & LLMs' },
    { id: 'fullstack', label: 'Full-Stack MERN' },
    { id: 'cloud', label: 'Cloud & CS Rigor' }
  ];

  const NOTES = [
    {
      id: 'rag-grounding',
      shelf: 'genai',
      title: 'Building Grounded RAG with FAISS & Google Gemini API',
      subtitle: 'Eliminating hallucinations through vector similarity chunk retrieval',
      date: 'November 2026',
      readTime: '4 min read',
      tag: 'GenAI Architecture',
      tagColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      summary: 'Why generic LLMs fail on internal proprietary data, and how recursive character chunking paired with FAISS cosine indexing provides strict grounding for Google Gemini 1.5 Flash.',
      content: [
        {
          heading: '1. The Problem with Direct Prompting',
          text: 'When prompting an LLM with massive private manuals, developers often face context window bottlenecks, expensive token costs, and subtle hallucinations. Retrieval-Augmented Generation (RAG) solves this by separating storage from generation.'
        },
        {
          heading: '2. Chunking & Vectorization Strategy',
          text: 'In my Document Q&A RAG Pipeline, documents are partitioned using RecursiveCharacterTextSplitter with a 500-token chunk window and 60-token overlap to maintain semantic continuity across section boundaries.'
        },
        {
          heading: '3. Sub-Millisecond Search with FAISS',
          text: 'Rather than performing expensive sequential scans, FAISS maps each chunk into a high-dimensional vector space. When a user asks a question, the query embedding computes cosine distances in < 15ms, passing only the top-k chunks into Gemini prompt context.'
        },
        {
          heading: '4. Production Key Takeaway',
          text: 'Strict system instructions ("Only answer from provided context. If unknown, return NO_GROUNDED_ANSWER") guarantee zero speculation and audit-ready reliability.'
        }
      ]
    },
    {
      id: 'jwt-mern-security',
      shelf: 'fullstack',
      title: 'Stateless JWT Authentication in Modern MERN Applications',
      subtitle: 'Designing tamper-proof user sessions without database session bottlenecks',
      date: 'October 2026',
      readTime: '3 min read',
      tag: 'Backend & Security',
      tagColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      summary: 'A deep dive into implementing cryptographic JWT tokens in Express.js, handling bcrypt password salting, and writing reusable middleware authorization barriers.',
      content: [
        {
          heading: '1. Stateless vs Stateful Sessions',
          text: 'Traditional server sessions require database or memory store lookups on every request. In a stateless MERN architecture, the server signs a cryptographically secure token payload with HMAC-SHA256, allowing any horizontal server instance to verify access instantly.'
        },
        {
          heading: '2. Middleware Verification Layer',
          text: 'Express middleware intercepts incoming requests, strips the Bearer token from req.headers.authorization, verifies validity with jwt.verify, and injects decoded user credentials directly into req.user.'
        },
        {
          heading: '3. Security Hardening',
          text: 'Never store sensitive secrets in token payloads. Store passwords using salted bcrypt hashes (cost factor 10+), enforce token expirations (e.g., 24h), and sanitize input with express-validator.'
        }
      ]
    },
    {
      id: 'gemini-streaming-react',
      shelf: 'genai',
      title: 'Real-Time Conversational Streaming with React & Gemini API',
      subtitle: 'Delivering zero-perceived-latency AI interfaces using chunked streams',
      date: 'September 2026',
      readTime: '3 min read',
      tag: 'Frontend Engineering',
      tagColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      summary: 'How to consume asynchronous generator streams from the Gemini API in a React 18 client, updating DOM nodes dynamically without UI thread freezing or stutter.',
      content: [
        {
          heading: '1. The UX Problem with Blocking Responses',
          text: 'Waiting 3-5 seconds for an LLM to generate 500 words creates friction. Streaming delivers the first token in under 200ms, creating the perception of instantaneous thought.'
        },
        {
          heading: '2. Asynchronous Stream Handling',
          text: 'Using model.sendMessageStream(prompt) returns an async iterable stream. In React, appending tokens into local state via requestAnimationFrame preserves 60 FPS fluidity while markdown parses incrementally.'
        }
      ]
    },
    {
      id: 'aws-cloud-foundations',
      shelf: 'cloud',
      title: 'Core AWS Cloud Architecture Principles for Web Engineers',
      subtitle: 'What my AWS Cloud Foundation certification taught me about real-world infrastructure',
      date: 'August 2026',
      readTime: '4 min read',
      tag: 'Cloud & Infrastructure',
      tagColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      summary: 'Foundational cloud computing principles: IAM least privilege, resilient VPC subnet segregation, S3 storage tiers, and EC2 elastic scaling.',
      content: [
        {
          heading: '1. IAM & Least Privilege Principle',
          text: 'Never hardcode root credentials or monolithic access keys. Grant granular IAM role permissions tied strictly to necessary service actions.'
        },
        {
          heading: '2. High-Availability Multi-AZ Design',
          text: 'Production systems must distribute compute and database replicas across multiple Availability Zones to withstand hardware degradation without downtime.'
        },
        {
          heading: '3. Cloud Security & Storage',
          text: 'Leveraging S3 server-side encryption (SSE-S3), bucket policies, and presigned temporary upload URLs keeps web application file management airtight.'
        }
      ]
    }
  ];

  const filteredNotes = NOTES.filter(n => {
    if (activeShelf === 'all') return true;
    return n.shelf === activeShelf;
  });

  const handleOpenNote = (note) => {
    playTone(600, 'triangle', 0.05, 0.03);
    setSelectedNote(note);
  };

  return (
    <section id="garden" className="space-y-8">
      
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/5 pb-4">
        <div>
          <span className="text-xs font-mono font-bold tracking-wider text-emerald-400 uppercase">
            ( 05 · Field Notes & Digital Garden )
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-tight mt-1">
            Engineering Shelves & Architectural Notes
          </h2>
        </div>
        <p className="text-sm text-slate-400 max-w-md font-sans">
          Curated technical notes, architectural deep-dives, and learning reflections documenting how I build modern web applications and AI systems.
        </p>
      </div>

      {/* Real-Time "Now" Status Board */}
      <div className="neo-card p-6 rounded-3xl grid grid-cols-1 md:grid-cols-3 gap-6 border-l-4 border-l-emerald-500">
        
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Current Focus (Now)</span>
          </div>
          <p className="text-sm text-white font-medium">
            Building end-to-end RAG pipelines and modern MERN microservices with sub-second response times.
          </p>
          <div className="text-xs text-slate-400 font-sans">
            Refining vector search retrieval and prompt grounding for zero hallucinations.
          </div>
        </div>

        <div className="space-y-2 border-t md:border-t-0 md:border-l border-white/10 md:pl-6 pt-4 md:pt-0">
          <div className="flex items-center space-x-2 text-xs font-mono text-indigo-400 font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Currently Reading & Exploring</span>
          </div>
          <p className="text-sm text-white font-medium">
            Distributed Systems & Scalable Database Architecture
          </p>
          <div className="text-xs text-slate-400 font-sans">
            Deepening knowledge of caching hierarchies (Redis), database sharding, and AWS serverless primitives.
          </div>
        </div>

        <div className="space-y-2 border-t md:border-t-0 md:border-l border-white/10 md:pl-6 pt-4 md:pt-0">
          <div className="flex items-center space-x-2 text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Location & Availability</span>
          </div>
          <p className="text-sm text-white font-medium">
            Indore, India · Immediate Joiner (0 Days)
          </p>
          <div className="text-xs text-slate-400 font-sans">
            Open to on-site roles in Bengaluru, Pune, Hyderabad, NCR, or remote worldwide.
          </div>
        </div>

      </div>

      {/* Shelf Filter Navigation */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex flex-wrap items-center gap-2">
          {SHELVES.map((shelf) => (
            <button
              key={shelf.id}
              onClick={() => { playTone(520, 'sine', 0.04, 0.02); setActiveShelf(shelf.id); }}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all ${
                activeShelf === shelf.id
                  ? 'bg-emerald-600 text-white font-bold shadow-lg shadow-emerald-600/30'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {shelf.label}
            </button>
          ))}
        </div>

        <span className="text-xs font-mono text-slate-400">
          Showing {filteredNotes.length} curated notes
        </span>
      </div>

      {/* Grid of Notes / Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredNotes.map((note) => (
          <div
            key={note.id}
            onClick={() => handleOpenNote(note)}
            className="neo-card p-6 sm:p-7 rounded-3xl space-y-4 hover:border-emerald-500/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className={`px-2.5 py-0.5 rounded-full border text-[11px] font-semibold ${note.tagColor}`}>
                  {note.tag}
                </span>
                <span className="text-slate-400 flex items-center space-x-1">
                  <Clock className="w-3 h-3 text-slate-500" />
                  <span>{note.readTime}</span>
                </span>
              </div>

              <h3 className="text-xl font-display font-bold text-white group-hover:text-emerald-400 transition-colors leading-snug">
                {note.title}
              </h3>

              <div className="text-xs font-mono text-slate-400">
                {note.subtitle}
              </div>

              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed line-clamp-3">
                {note.summary}
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/5 text-xs">
              <span className="text-slate-500 font-mono">{note.date}</span>
              <span className="font-mono font-semibold text-emerald-400 flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                <span>Read Note</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Note Reader Modal */}
      {selectedNote && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-2xl max-h-[85vh] bg-slate-900 border border-white/10 rounded-3xl p-6 sm:p-8 overflow-y-auto space-y-6 shadow-2xl relative">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-white/10 pb-4">
              <div>
                <span className={`px-2.5 py-0.5 rounded-full border text-[11px] font-mono font-semibold ${selectedNote.tagColor}`}>
                  {selectedNote.tag}
                </span>
                <h3 className="text-2xl font-display font-black text-white mt-2 leading-tight">
                  {selectedNote.title}
                </h3>
                <div className="text-xs font-mono text-slate-400 mt-1 flex items-center space-x-3">
                  <span>{selectedNote.date}</span>
                  <span>•</span>
                  <span>{selectedNote.readTime}</span>
                </div>
              </div>

              <button
                onClick={() => setSelectedNote(null)}
                className="p-2 text-slate-400 hover:text-white rounded-xl bg-white/5 hover:bg-white/10 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Note Body */}
            <div className="space-y-5 text-sm font-sans text-slate-200 leading-relaxed">
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono">
                💡 Summary: {selectedNote.summary}
              </div>

              {selectedNote.content.map((sec, idx) => (
                <div key={idx} className="space-y-2">
                  <h4 className="text-base font-mono font-bold text-white">
                    {sec.heading}
                  </h4>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {sec.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-mono">
              <span className="text-slate-400">Krishna Pawar · Digital Garden</span>
              <button
                onClick={() => setSelectedNote(null)}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold"
              >
                Done Reading
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
