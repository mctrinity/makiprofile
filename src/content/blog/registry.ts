// src/content/blog/registry.ts
// ❗ No MDX imports here

export type PostMeta = {
  slug: string;
  title: string;
  description?: string;
  date?: string;         // ISO yyyy-mm-dd preferred
  readingTime?: string;  // e.g. "5 min"
  image?: string;        // e.g. "/blog/devops-starter/cover.png"
  imageAlt?: string;     // optional alt text
  tintClass?: string;    // optional bg tint utility (e.g. "bg-[#077777]/5 dark:bg-[#077777]/10")
};

// Keep this in sync with your actual files in src/content/blog/{slug}.mdx
export const manifest: PostMeta[] = [
  {
    slug: "devops-starter",
    title: "DevOps Starter",
    description: "Spin up CI/CD, IaC, and observability the sane way.",
    date: "2025-08-18",
    readingTime: "4 min",
    image: "/blog/devops-starter/cover.png",
    imageAlt: "Pipelines and infra starter layout",
    tintClass: "bg-[#077777]/5 dark:bg-[#077777]/10",
  },
  {
    slug: "platform-engineering",
    title: "Platform Engineering for Small Teams",
    description: "Golden paths, paved roads, and developer experience.",
    date: "2025-08-19",
    readingTime: "5 min",
    image: "/blog/platform-engineering/cover.png",
    imageAlt: "Internal developer platform diagram",
    tintClass: "bg-[#077777]/5 dark:bg-[#077777]/10",
  },
  {
    slug: "ai-integration",
    title: "AI Integration That Ships",
    description: "Retrieval, function calling, evals—without the hype.",
    date: "2025-08-20",
    readingTime: "6 min",
    image: "/blog/ai-integration/cover.png",
    imageAlt: "App wiring LLM tasks and tools",
    tintClass: "bg-[#077777]/5 dark:bg-[#077777]/10",
  },
  {
    slug: "augmented-intelligence",
    title: "AI as Augmented Intelligence: Empowering Humans, Not Replacing Them",
    description: "Why AI works best as a partner that enhances human decision-making.",
    date: "2025-09-09",
    readingTime: "6 min",
    image: "/blog/augmented-intelligence/cover.png",
    imageAlt: "Augmented Intelligence diagram",
    tintClass: "bg-[#077777]/5 dark:bg-[#077777]/10",
  },
  {
    slug: "vibe-coding",
    title: "Vibe Coding: Flow, Creativity, and the Future of Programming",
    description: "Why coding with vibes—rapid, intuitive exploration—matters for innovation and creativity.",
    date: "2025-09-09",
    readingTime: "7 min",
    image: "/blog/vibe-coding/cover.png",
    imageAlt: "Vibe coding image",
    tintClass: "bg-[#077777]/5 dark:bg-[#077777]/10",
  },
];

export function getAllSlugs(): { slug: string }[] {
  return manifest.map((p) => ({ slug: p.slug }));
}

export function getAllPosts(): PostMeta[] {
  // Optional: newest first if dates exist
  return [...manifest].sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
}

export function getPostMetaBySlug(slug: string): PostMeta | null {
  return manifest.find((p) => p.slug === slug) ?? null;
}
