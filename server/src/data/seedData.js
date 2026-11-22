// Seed data directly extracted from Krishna Pawar's Resume

const profileData = {
  name: "Krishna Pawar",
  role: "Full-Stack & Generative AI Developer",
  location: "Indore, India",
  phone: "+91 8818846012",
  email: "krishpawar214@gmail.com",
  linkedin: "https://linkedin.com/in/krishna-pawar",
  github: "https://github.com/krishnapawar7",
  summary: "Computer Science graduate (B.Tech, 2025) seeking a MERN / Full-Stack / Python Developer role. I build full-stack applications with React.js, Node.js, Express.js and MongoDB, design secure REST APIs with JWT authentication, and integrate AI features using the Gemini API, LangChain, and FAISS vector search. I also build responsive React interfaces styled with Tailwind CSS, hold an AWS Cloud Foundation certification, and use Git and GitHub daily.",
  education: [
    {
      institution: "Medicaps University",
      degree: "Bachelor of Technology in Computer Science Engineering",
      location: "Indore, India",
      period: "2021 – 2025",
      highlights: "Core studies in Data Structures, Algorithms, DBMS, OOP, Software Engineering, Cloud Computing."
    },
    {
      institution: "Scholars’ Den School",
      degree: "Senior Secondary (Class XII - Science/PCM)",
      location: "Khandwa, India",
      period: "2020 – 2021",
      highlights: "Science and Mathematics analytical foundation."
    }
  ],
  experience: [
    {
      role: "Web Development Intern",
      company: "Teachnook",
      mode: "Remote",
      period: "Recent",
      responsibilities: [
        "Developed and maintained front-end pages and application features using HTML, CSS and JavaScript.",
        "Integrated REST APIs between front-end pages and back-end services.",
        "Debugged layout and functional issues to improve responsiveness and reliability across devices.",
        "Used Git and GitHub for version control and collaborative development."
      ]
    }
  ],
  certifications: [
    {
      title: "AWS Cloud Foundation",
      issuer: "Amazon Web Services",
      year: "2024",
      description: "Cloud computing fundamentals, AWS security, IAM, VPC, EC2, S3, and serverless architectures."
    },
    {
      title: "JavaScript Fundamentals",
      issuer: "GreatStack",
      year: "2025",
      description: "ES6+, asynchronous programming, closures, promises, event loop, and modern DOM interactions."
    }
  ],
  skills: {
    aiGenAi: ["Python", "Google Gemini API", "LangChain", "RAG Pipelines", "FAISS Vector Search", "Prompt Engineering", "NLP"],
    frontend: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Vite", "SCSS"],
    backend: ["Node.js", "Express.js", "FastAPI", "Python", "RESTful APIs", "JWT Authentication"],
    databases: ["MongoDB", "FAISS (Vector DB)", "DBMS Concepts"],
    cloudTools: ["AWS (Certified)", "Git", "GitHub", "Postman", "VS Code"],
    coreCs: ["Object-Oriented Programming (OOP)", "Data Structures & Algorithms", "SDLC", "Problem Solving"]
  }
};

const projectsData = [
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
    architecture: [
      "Next.js Client: Catalogue, cart, library, account, and secured study-note flows.",
      "API Routes: Server-side catalogue, pricing, payment, and entitlement authorization.",
      "Prisma ORM: Products, orders, payments, coupons, and entitlement persistence.",
      "Razorpay Integration: Checkout, payment signature verification, and webhook processing.",
      "Database Flexibility: SQLite for local development and PostgreSQL for production."
    ],
    impact: "Provides an end-to-end purchasing and digital library experience with verified server-side access control.",
    githubUrl: "https://github.com/krishnapawar7/EdTech-Store",
    liveUrl: "https://edtech-store-krishna7.vercel.app",
    featured: true
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
    architecture: [
      "Document Ingestion & Cleaning: Multi-format parsing of PDFs, text files, and markdown.",
      "Recursive Character Chunking: Semantic windowing with overlap to preserve conceptual context.",
      "Vector Embeddings: High-dimensional embeddings indexed into FAISS for lightning-fast cosine similarity lookups.",
      "Context-Aware Prompt Synthesis: Dynamic prompt engineering feeding retrieved chunks directly to Google Gemini API.",
      "FastAPI Service Layer: Asynchronous endpoints with validation schemas, response streaming, and error handling."
    ],
    impact: "Eliminates repetitive manual document search by delivering sub-second grounded answers directly from technical documentation.",
    githubUrl: "https://github.com/krishnapawar7",
    liveUrl: "#",
    featured: true
  },
  {
    title: "Smart Interview AI",
    slug: "smart-interview-ai",
    year: "2026",
    category: "fullstack",
    tags: ["MERN", "React.js", "Node.js", "MongoDB", "JWT", "Gemini API"],
    summary: "A full-stack technical interview preparation platform designed specifically for students and fresh graduates. Simulates real-world developer interviews with dynamic questions, timer constraints, and automated performance reviews.",
    highlights: [
      "Developed a full-stack interview preparation application with a React.js front end, Node.js and Express.js APIs and MongoDB database integration.",
      "Implemented JWT-based authentication and secure backend APIs for user management, interview handling and AI-driven question generation.",
      "Designed a responsive and user-friendly interface using Vite and SCSS for a seamless candidate experience."
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "Google Gemini API", "Vite", "SCSS"],
    architecture: [
      "Client Tier: Modern React interface built with Vite and Tailwind CSS for rapid state updates, timers, and code inputs.",
      "Auth & Security: Stateless JWT authentication with bcrypt password hashing and protected API routes.",
      "Gemini Question Generator: Custom prompt templates dynamically generate coding and behavioral questions tailored to role & level.",
      "MongoDB Data Store: Manages candidate profiles, completed session transcripts, scores, and categorized strengths/weaknesses.",
      "RESTful API Backend: Express.js micro-architecture handling session workflows, submissions, and telemetry."
    ],
    impact: "Enables candidates to practice realistic technical rounds on demand, increasing confidence and interview readiness.",
    githubUrl: "https://github.com/krishnapawar7",
    liveUrl: "#",
    featured: true
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
    architecture: [
      "Modern Chat Interface: Recreated Gemini’s signature layout, including collapsable sidebars, recent query cards, and prompt suggestions.",
      "API Integration: Direct integration with Google Gemini API to parse and display rich AI responses.",
      "Markdown & Code Styling: Custom code block syntax highlighting and markdown parsing for structured explanations.",
      "Responsive & Accessible: Built from the ground up with mobile-first Tailwind CSS utilities and keyboard shortcuts."
    ],
    impact: "Delivers an intuitive chat experience with zero lag, demonstrating front-end finesse and real-world API consumption.",
    githubUrl: "https://github.com/krishnapawar7",
    liveUrl: "#",
    featured: true
  }
];

module.exports = { profileData, projectsData };
