# ⚡ Krishna Pawar — Full-Stack MERN Portfolio Application

A production-ready, feature-packed **MERN Stack** (MongoDB, Express.js, React.js, Node.js) portfolio web application engineered for **Krishna Pawar** (B.Tech CSE 2025, Medicaps University).

---

## 🌟 Unique & Standout Features

### 1. 🤖 Floating AI Recruiter Assistant ("Ask Krishna's AI")
- Accessible via the bottom-left floating widget.
- Recruiters can ask questions or click preset chips (*"Why should we hire Krishna?"*, *"Explain Krishna's RAG Pipeline"*, *"What did Krishna build at Teachnook?"*, *"Is Krishna open to relocation?"*).
- Grounded in Krishna's resume data and powered by a backend Express endpoint (`POST /api/ai/chat`).

### 2. 🧪 Interactive Live RAG Vector Search Visualizer
- A live lab demonstrating how Krishna's **Document Q&A RAG Pipeline** operates.
- Step-by-step visual workflow:
  1. **Semantic Chunking**: Overlapping text segmentation.
  2. **FAISS Vector Index**: Cosine distance evaluation with live similarity scores (`0.985`).
  3. **Gemini Grounding**: Context-aware prompt template assembly.
  4. **FastAPI Delivery**: Synthesized zero-hallucination answers.

### 3. 🎯 ATS Job Role Fit & Skill Matcher
- Recruiters can click target roles (*MERN Developer*, *Generative AI & Python Engineer*, *Frontend React Developer*, *Backend & Cloud Developer*).
- Displays a real-time **Compatibility Index (94% - 97%)**, matching qualifications checklist, verified project proofs, and a 1-click tailored interview invitation trigger.

### 4. 💻 Production Code Architecture Inspector
- Tabbed syntax-highlighted code explorer showcasing real implementation logic:
  - `rag_service.py`: Overlapping chunker and FAISS retriever.
  - `authMiddleware.js`: Stateless JWT header validation.
  - `geminiChatService.js`: Streaming generative AI wrapper.

### 5. 📡 Live MERN REST API Console
- Recruiters can test backend endpoints in real-time right from their browser (`/api/health`, `/api/profile`, `/api/projects?category=ai`, `/api/contact/messages`).
- Displays live HTTP status code (`200 OK`), millisecond latency, and structured JSON payloads.

### 6. ⚡ Spotlight Command Palette (`Ctrl + K` / `Cmd + K`)
- Instant macOS/Raycast-style spotlight search for quick navigation, copying contact info, switching themes, or downloading the ATS resume.

### 7. 📄 ATS Resume Preview & One-Click PDF Print
- Formatted clean resume document ready for immediate printing or PDF export.

---

## 📡 REST API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/health` | Server health check and database connection status |
| `GET` | `/api/profile` | Fetches Krishna's bio, education, experience, and contact |
| `GET` | `/api/profile/skills` | Fetches categorized skill lists |
| `GET` | `/api/projects` | Lists all projects (Supports `?category=ai` or `?featured=true`) |
| `POST` | `/api/contact` | Submits a contact inquiry directly to MongoDB database |
| `POST` | `/api/ai/chat` | AI Persona conversational endpoint grounded in Krishna's resume |
| `GET` | `/api/contact/messages` | Lists submitted contact inquiries for admin review |

---

## 🚀 How to Run Locally

```bash
# Start unified MERN server (Express API + built React frontend on port 5000)
npm start

# Run React Vite frontend in dev mode (port 3000)
npm run client

# Run Express backend in watch mode (port 5000)
npm run server

# Rebuild frontend for production
npm run build
```

Open **[http://localhost:5000](http://localhost:5000)** in your browser!

---

## 🗂️ Project Structure

```text
port/
├── client/
│   ├── public/              # Static public assets
│   └── src/
│       ├── components/      # Reusable React UI components
│       ├── context/         # React context providers
│       ├── App.jsx
│       ├── index.css
│       └── main.jsx
├── server/
│   ├── src/
│   │   ├── config/          # Database configuration
│   │   ├── data/            # Seed data
│   │   ├── models/          # Mongoose models
│   │   ├── routes/         # Express API routes
│   │   └── server.js        # Express application entry point
│   └── .env.example         # Server environment template
└── package.json             # Root development and build scripts
```
