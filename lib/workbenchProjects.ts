export type WorkbenchProject = {
  id: "lab-rag" | "video-mcq" | "banana-type";
  number: string;
  title: string;
  category: string;
  description: string;
  highlight: string;
  technologies: string[];
  repository: string;
  secondary: { label: string; href: string };
};

// Descriptions checked against the public repositories, October 2026.
export const workbenchProjects: WorkbenchProject[] = [
  {
    id: "lab-rag",
    number: "03",
    title: "Lab RAG",
    category: "RETRIEVAL & EVALUATION",
    description: "A document Q&A lab. Upload PDFs, compare retrieval methods and inspect the evidence behind each answer.",
    highlight: "Hybrid search, cross-encoder reranking and RAGAS evaluations.",
    technologies: ["React", "FastAPI", "LangChain", "PGVector"],
    repository: "https://github.com/verma359211/lab-rag",
    secondary: { label: "Architecture notes", href: "https://github.com/verma359211/lab-rag/blob/main/backend-python/README.md" },
  },
  {
    id: "video-mcq",
    number: "04",
    title: "VideoMCQ",
    category: "AI & LEARNING",
    description: "Turn videos into study material: segmented transcripts, editable quiz questions and exportable PDFs.",
    highlight: "Whisper transcription meets local question generation with Ollama.",
    technologies: ["Next.js", "Whisper", "Ollama", "MongoDB"],
    repository: "https://github.com/verma359211/VideoMCQ",
    secondary: { label: "Watch walkthrough", href: "https://www.linkedin.com/posts/cverma7_ai-learning-edtech-ugcPost-7369643448129290241-El84" },
  },
  {
    id: "banana-type",
    number: "05",
    title: "Banana Type",
    category: "REAL-TIME & INTERACTION",
    description: "A typing playground for speed, accuracy and a little competition—with timed tests and multiplayer rooms.",
    highlight: "Live WPM, accuracy feedback and Socket.IO rooms.",
    technologies: ["Next.js", "TypeScript", "Socket.IO", "Tailwind CSS"],
    repository: "https://github.com/verma359211/bananatype",
    secondary: { label: "Try typing", href: "https://bananatype.vercel.app/" },
  },
];
