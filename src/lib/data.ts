// src/lib/data.ts
export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: readonly string[];
  image?: string;
  link?: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  summary?: string;
  link?: string; // optional
};

export type Feature = {
  slug: string;
  title: string;
  description: string;
  emoji?: string;
  href?: string;
  badge?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;         // ISO or pretty text
  readingTime?: string; // e.g. "5 min read"
  href: string;
  image?: string;
  imageAlt?: string;

};

export const projects: Project[] = [
  {
    slug: "folio",
    title: "Scidyllics Website",
    description: "A blazing-fast, accessible portfolio built with Next.js and Tailwind.",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    image: "/cover.png",
    link: "https://www.scidyllics.com/",
  },
  {
    slug: "quickpitch",
    title: "QuickPitch",
    description: "Transform business ideas into pitch deck built with Next.js and Tailwind.",
    tags: ["Next.js", "Tailwind", "TypeScript", "AI", "Vibe-coding with Cursor"],
    image: "/pitchdeck.png",
    link: "https://quickpitch-five.vercel.app/",
  },
  {
    slug: "githubviewer",
    title: "GitHub Profile Viewer",
    description: "A blazing-fast, accessible portfolio built with Bun and Typescript.",
    tags: ["Bun", "TypeScript", "CSS"],
    image: "/github-viewer.webp",
    link: "https://github-viewer-5bkc.onrender.com/",
  },
  {
    slug: "readytensor",
    title: "LangChain as Code",
    description: "LangChain as a Coding Assistant: Fibonacci & Unit Testing",
    tags: ["Python", "LangChain", "OpenAI"],
    image: "/readytensor.png",
    link: "https://app.readytensor.ai/publications/T08j5PKJNXfQ",
  },
  {
    slug: "spamclassifier",
    title: "Spam Email Classifier",
    description: "A spam email classifier using TF-IDF plus Deep Learning.",
    tags: ["Python", "LSTM", "Streamlit", "AI"],
    image: "/spam_email_classifier.webp",
    link: "https://spamemailclassifier-jnmx74ud2dsdnwbdjzzhuh.streamlit.app/",
  },
  {
    slug: "dataextractor",
    title: "Data Extractor",
    description: "Extract data from an API or a website and export it to your preferred format.",
    tags: ["Python", "Web scraping", "Streamlit"],
    image: "/data_extractor.webp",
    link: "https://mctrinity-data-extractor-uistreamlit-app-e2zp8b.streamlit.app/",
  },
];


// NEW: Feature cards (services)
export const features: Feature[] = [
  {
    slug: "devops-consultant",
    title: "DevOps Consultant",
    description:
      "CI/CD pipelines, Infrastructure as Code, and observability so you ship faster and safer. GitHub Actions, Terraform, and monitoring baked in.",
    emoji: "🛠️",
    badge: "Service",
  },
  {
    slug: "platform-engineering",
    title: "Platform Engineering",
    description:
      "Internal developer platforms and golden paths. Containerized workloads, templates, and docs for smooth DX and scalable teams.",
    emoji: "🏗️",
    badge: "Engineering",
  },
  {
    slug: "ai-integration",
    title: "AI Integration Service",
    description:
      "Embed LLMs into your product: retrieval, function calling, and evaluation. Build features that deliver value—not just a chat box.",
    emoji: "🤖",
    badge: "AI",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "devops-starter",
    title: "From Zero to CI/CD: A Practical DevOps Starter",
    excerpt: "Ship faster with a minimal pipeline: lint, test, build, preview, and production gates.",
    date: "2025-08-10",
    readingTime: "6 min read",
    image: "/blog/devops-starter/cover.png",
    imageAlt: "Screenshot of Platform Engineering workflows",
    href: "/blog/devops-starter",
  },
  {
    slug: "platform-engineering",
    title: "Golden Paths: Platform Engineering That Developers Love",
    excerpt: "Standardize the boring; empower the creative. Patterns that reduce cognitive load.",
    date: "2025-08-05",
    readingTime: "7 min read",
    image: "/blog/platform-engineering/cover.png",
    imageAlt: "Screenshot of Platform Engineering workflows",
    href: "/blog/platform-engineering",
  },
  {
    slug: "ai-integration",
    title: "Pragmatic AI Integration: RAG Without the Hype",
    excerpt: "Data prep, retrieval quality, and guardrails—the three pillars of successful AI features.",
    date: "2025-08-01",
    readingTime: "5 min read",
    image: "/blog/ai-integration/cover.png",
    imageAlt: "Screenshot of AI workflows",
    href: "/blog/ai-integration",
  },
];