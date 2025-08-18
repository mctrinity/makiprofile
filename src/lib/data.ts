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
    image: "/quickpitch.png",
    link: "https://quickpitch-five.vercel.app/",
  },
  {
    slug: "githubviewer",
    title: "GitHub Profile Viewer",
    description: "A blazing-fast, accessible portfolio built with Bun and Typescript.",
    tags: ["Bun", "TypeScript", "CSS"],
    image: "/githubviewer.png",
    link: "https://github-viewer-5bkc.onrender.com/",
  },
  {
    slug: "folio1",
    title: "Scidyllics Website",
    description: "A blazing-fast, accessible portfolio built with Next.js and Tailwind.",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    image: "/cover.png",
    link: "https://www.scidyllics.com/",
  },
  {
    slug: "folio2",
    title: "Scidyllics Website",
    description: "A blazing-fast, accessible portfolio built with Next.js and Tailwind.",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    image: "/cover.png",
    link: "https://www.scidyllics.com/",
  },
  {
    slug: "folio3",
    title: "Scidyllics Website",
    description: "A blazing-fast, accessible portfolio built with Next.js and Tailwind.",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    image: "/cover.png",
    link: "https://www.scidyllics.com/",
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
