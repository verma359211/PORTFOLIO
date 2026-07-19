export type ProjectAccent = "purple" | "lime" | "cream" | "mint";

export type ProjectImageFit = "cover" | "contain";

export type PortfolioProject = {
  id: string;
  number: string;
  title: string;
  type: string;
  description: string;
  image: string;
  imageAlt: string;
  imageFit: ProjectImageFit;
  technologies: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  liveLabel: "Live Demo" | "Live Site" | "View App";
  accent: ProjectAccent;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "banana-type",
    number: "01",
    title: "Banana Type",
    type: "Typing Game",
    description:
      "A fast and engaging typing game designed to improve speed, accuracy and focus through multiple modes, leaderboards and real-time performance tracking.",
    image: "/assets/projects/banana-type-preview.webp",
    imageAlt:
      "Banana Type typing game interface with a banana mascot and keyboard",
    imageFit: "cover",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: null,
    liveUrl: null,
    liveLabel: "Live Demo",
    accent: "purple",
  },
  {
    id: "ecommerce",
    number: "02",
    title: "E-commerce Website",
    type: "Full Stack",
    description:
      "A modern commerce platform with product discovery, filtering, cart management, secure checkout, order tracking and an administration workflow.",
    image: "/assets/projects/ecommerce-preview.webp",
    imageAlt: "E-commerce storefront featuring new arrivals and product cards",
    imageFit: "cover",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    githubUrl: null,
    liveUrl: null,
    liveLabel: "Live Site",
    accent: "lime",
  },
  {
    id: "deployhub",
    number: "03",
    title: "DeployHub",
    type: "Auto-Deploy Platform",
    description:
      "A Vercel-inspired deployment platform that builds projects from Git repositories, creates preview deployments and exposes deployment status through a clean workflow.",
    image: "/assets/projects/deployhub-preview.webp",
    imageAlt:
      "DeployHub terminal showing a project being built, tested and deployed",
    imageFit: "contain",
    technologies: ["Next.js", "Docker", "PostgreSQL", "Redis", "GitHub API"],
    githubUrl: null,
    liveUrl: null,
    liveLabel: "Live Demo",
    accent: "cream",
  },
  {
    id: "bug-tracker",
    number: "04",
    title: "Bug Tracker",
    type: "Issue Tracking System",
    description:
      "A collaborative bug-management system for creating, assigning and resolving issues using labels, comments, priorities, status tracking and real-time updates.",
    image: "/assets/projects/bug-tracker-preview.webp",
    imageAlt: "Bug Tracker dashboard showing issues and priority labels",
    imageFit: "cover",
    technologies: ["React", "Express.js", "MongoDB", "Socket.IO"],
    githubUrl: null,
    liveUrl: null,
    liveLabel: "Live Demo",
    accent: "purple",
  },
  {
    id: "rag-pipeline",
    number: "05",
    title: "RAG Pipeline",
    type: "AI / NLP",
    description:
      "A Retrieval-Augmented Generation pipeline that processes private documents, creates vector embeddings, retrieves relevant context and generates grounded answers.",
    image: "/assets/projects/rag-pipeline-preview.webp",
    imageAlt:
      "RAG pipeline diagram from documents through embeddings and vector retrieval to an answer",
    imageFit: "contain",
    technologies: ["Python", "LangChain", "FAISS", "OpenAI", "FastAPI"],
    githubUrl: null,
    liveUrl: null,
    liveLabel: "Live Demo",
    accent: "mint",
  },
];

export const projectsClosingLinks = {
  viewAllUrl: null as string | null,
  githubUrl: null as string | null,
};
