const express = require('express');
const router = express.Router();
const { profileData, projectsData } = require('../data/seedData');

// Knowledge base grounded in Krishna's resume
const KNOWLEDGE_RESPONSES = [
  {
    keywords: ['hire', 'why hire', 'fresher', 'value', 'strength'],
    answer: "Krishna is a 2025 Computer Science graduate from Medicaps University who uniquely bridges full-stack MERN engineering (React, Node, Express, MongoDB) with hands-on Generative AI (Gemini API, RAG, FAISS). He has prior internship experience at Teachnook, holds an AWS Cloud Foundation certification, and builds production-grade architectures with clean, maintainable code."
  },
  {
    keywords: ['rag', 'document', 'pipeline', 'faiss', 'langchain'],
    answer: "In his Document Q&A RAG Pipeline (2026), Krishna implemented an end-to-end Python system using LangChain and FAISS. It ingests dense documents, chunks them with semantic overlap, generates vector embeddings for cosine similarity lookups, and feeds grounded context to the Google Gemini API to eliminate hallucinations, served through FastAPI REST endpoints."
  },
  {
    keywords: ['interview', 'smart interview', 'mern', 'auth', 'jwt'],
    answer: "Krishna engineered Smart Interview AI (2026) using React.js, Vite, Node.js, Express.js, and MongoDB with stateless JWT authentication. The app dynamically generates domain-specific technical questions using the Gemini API, records candidate responses, and provides automated scoring and performance telemetry."
  },
  {
    keywords: ['teachnook', 'intern', 'experience', 'work'],
    answer: "As a Web Development Intern at Teachnook (Remote), Krishna built and maintained responsive UI components using HTML, CSS, and modern JavaScript, integrated RESTful APIs between front-end views and back-end microservices, resolved cross-viewport layout bugs, and collaborated via Git/GitHub."
  },
  {
    keywords: ['location', 'relocate', 'remote', 'indore', 'bangalore', 'pune', 'gurgaon'],
    answer: "Krishna is based in Indore, India and is available immediately for on-site roles in Indore, Bangalore, Pune, Gurgaon, Hyderabad, Noida, or remote opportunities worldwide."
  },
  {
    keywords: ['contact', 'email', 'phone', 'reach', 'number'],
    answer: "You can reach Krishna directly at krishpawar214@gmail.com or by phone / WhatsApp at +91 8818846012. He is actively interviewing for Full-Stack and AI Developer roles."
  },
  {
    keywords: ['aws', 'cloud', 'certificate', 'certification'],
    answer: "Krishna is AWS Cloud Foundation certified (Amazon Web Services, 2024), demonstrating understanding of AWS infrastructure, IAM security, EC2, S3, and cloud scalability. He also holds a JavaScript Fundamentals certification from GreatStack (2025)."
  }
];

// POST /api/ai/chat - Intelligent Assistant response
router.post('/chat', async (req, res) => {
  try {
    const { message } = req.body;
    if (!message || !message.trim()) {
      return res.status(400).json({ success: false, message: 'Message is required.' });
    }

    const lower = message.toLowerCase();

    // Check knowledge base
    let matched = KNOWLEDGE_RESPONSES.find(item => 
      item.keywords.some(kw => lower.includes(kw))
    );

    let reply = matched 
      ? matched.answer 
      : `Krishna Pawar is a B.Tech CSE (2025) graduate specializing in MERN Stack development and Generative AI (Gemini API & RAG). He is skilled in React.js, Node.js, Express, MongoDB, Python, FastAPI, and AWS. Feel free to contact him at krishpawar214@gmail.com or +91 8818846012!`;

    res.json({
      success: true,
      data: {
        reply,
        timestamp: new Date().toISOString()
      }
    });
  } catch (error) {
    console.error('AI chat endpoint error:', error);
    res.status(500).json({ success: false, message: 'AI Assistant temporary error.' });
  }
});

module.exports = router;
