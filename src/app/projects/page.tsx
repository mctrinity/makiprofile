// src/app/projects/page.tsx
import type { Metadata } from "next";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { siteUrl } from "@/lib/siteUrl";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects — Maki Dizon",
  description: "A showcase of personal and professional projects by Maki Dizon.",
  alternates: { canonical: `${siteUrl}/projects` },
  openGraph: {
    type: "website",
    url: `${siteUrl}/projects`,
    title: "Projects — Maki Dizon",
    description: "A showcase of personal and professional projects by Maki Dizon.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects — Maki Dizon",
    description: "A showcase of personal and professional projects by Maki Dizon.",
  },
};

export default function ProjectsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    url: `${siteUrl}/projects`,
    name: "Maki Dizon — Projects",
    description: "A showcase of personal and professional projects by Maki Dizon.",
  };

  return (
    <Section id="projects-page" title="Projects">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <p className="text-zinc-600 dark:text-zinc-300 mb-8">
        Here&apos;s a collection of projects I&apos;ve worked on, ranging from web applications to AI integrations and developer tools.
      </p>

      {projects.length === 0 ? (
        <p className="text-zinc-600 dark:text-zinc-300">
          No projects yet. Coming soon.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </Section>
  );
}