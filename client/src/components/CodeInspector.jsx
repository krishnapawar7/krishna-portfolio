import React, { useState } from 'react';
import { Code2, Copy, Check, Terminal } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const CodeInspector = ({ onShowToast, embedded = false }) => {
  const { playTone } = useTheme();
  const [activeFile, setActiveFile] = useState('rag');
  const [copied, setCopied] = useState(false);

  const CODE_SNIPPETS = {
    rag: {
      name: 'rag_service.py',
      lang: 'Python / LangChain / FAISS',
      code: `from langchain_community.vectorstores import FAISS
from langchain.text_splitter import RecursiveCharacterTextSplitter
from google.generativeai import GenerativeModel
import os

class RAGPipeline:
    def __init__(self, embedding_model):
        self.embeddings = embedding_model
        self.vector_store = None
        self.llm = GenerativeModel("gemini-1.5-flash")

    def ingest_and_index(self, documents: list[str]):
        """Splits documents into overlapping chunks and indexes into FAISS."""
        splitter = RecursiveCharacterTextSplitter(
            chunk_size=500,
            chunk_overlap=60,
            separators=["\\n\\n", "\\n", " ", ""]
        )
        chunks = splitter.split_documents(documents)
        self.vector_store = FAISS.from_documents(chunks, self.embeddings)
        return len(chunks)

    def query(self, question: str, k: int = 3) -> str:
        """Retrieves top-k chunks and generates grounded Gemini answer."""
        retriever = self.vector_store.as_retriever(search_kwargs={"k": k})
        docs = retriever.invoke(question)
        context = "\\n".join([doc.page_content for doc in docs])

        prompt = f"""You are a helpful assistant. Answer strictly using the context:
Context:
{context}

Question: {question}
Answer:"""
        response = self.llm.generate_content(prompt)
        return response.text`
    },
    auth: {
      name: 'authMiddleware.js',
      lang: 'Node.js / Express / JWT',
      code: `const jwt = require('jsonwebtoken');

/**
 * Express middleware to verify stateless JWT tokens from Bearer header
 */
const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      success: false,
      message: 'Access denied. No authentication token provided.'
    });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret_key');
    req.user = decoded; // Attach user payload to request context
    next();
  } catch (error) {
    return res.status(403).json({
      success: false,
      message: 'Invalid or expired session token.'
    });
  }
};

module.exports = verifyToken;`
    },
    gemini: {
      name: 'geminiChatService.js',
      lang: 'React / Gemini API Stream',
      code: `import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

/**
 * Handles real-time conversational streaming for Google Gemini Clone
 */
export async function streamGeminiChat(prompt, onChunkReceived) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  
  const chat = model.startChat({
    history: [],
    generationConfig: {
      temperature: 0.7,
      maxOutputTokens: 1024,
    },
  });

  const result = await chat.sendMessageStream(prompt);
  let accumulatedText = "";

  for await (const chunk of result.stream) {
    const chunkText = chunk.text();
    accumulatedText += chunkText;
    onChunkReceived(accumulatedText);
  }

  return accumulatedText;
}`
    }
  };

  const currentSnippet = CODE_SNIPPETS[activeFile];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentSnippet.code);
    playTone(784, 'sine', 0.1, 0.05);
    setCopied(true);
    onShowToast(`Copied ${currentSnippet.name} to clipboard`);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="space-y-6">
      {!embedded && (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/5 pb-4">
          <div>
            <span className="text-xs font-mono font-bold tracking-wider text-indigo-400 uppercase">( 07 · Under The Hood // Source Audit )</span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-tight mt-1">Production Source Code Inspector</h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md font-sans">
            Inspect how I structure modular, production-ready Python and JavaScript logic.
          </p>
        </div>
      )}

      <div className="neo-card overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
        
        {/* File tabs bar */}
        <div className="flex items-center justify-between bg-slate-950/80 px-4 py-3 border-b border-white/10">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
            
            <div className="flex items-center space-x-2 ml-4">
              {Object.entries(CODE_SNIPPETS).map(([key, snippet]) => (
                <button
                  key={key}
                  onClick={() => { playTone(500, 'sine', 0.04, 0.02); setActiveFile(key); }}
                  className={`px-3 py-1 rounded-lg text-xs font-mono transition flex items-center space-x-1.5 ${
                    activeFile === key
                      ? 'bg-indigo-600/30 text-indigo-300 border border-indigo-500/40'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <span>{snippet.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <span className="hidden sm:inline-block text-[11px] font-mono text-slate-500">
              {currentSnippet.lang}
            </span>
            <button
              onClick={handleCopy}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center space-x-1 transition"
              title="Copy snippet"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline text-[11px]">{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>

        {/* Code view */}
        <div className="p-5 bg-slate-950 font-mono text-xs overflow-x-auto text-slate-300 leading-relaxed max-h-[380px]">
          <pre className="text-emerald-400/90 whitespace-pre">
            {currentSnippet.code}
          </pre>
        </div>

      </div>
    </section>
  );
};
