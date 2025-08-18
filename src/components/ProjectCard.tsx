// src/components/ProjectCard.tsx
import Image from "next/image";

type Project = {
  slug: string;
  title: string;
  description: string;
  tags: readonly string[];
  image?: string;
  link?: string;
};

export default function ProjectCard({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:bg-zinc-950 dark:border-zinc-800">
      {project.image && (
        <div className="relative aspect-[16/10]">
          <Image
            src={project.image}
            alt={project.title || "Project cover"}
            fill
            // 👇 sizes fixes the other warning
            sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
            priority={priority}
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </div>
      )}
      <div className="space-y-2 p-4">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-base font-semibold">{project.title}</h3>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="text-sm underline underline-offset-4 hover:no-underline"
            >
              Live ↗
            </a>
          )}
        </div>
        <p className="text-sm text-zinc-600 dark:text-zinc-300">
          {project.description}
        </p>
        <ul className="mt-2 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <li
              key={t}
              className="rounded-full border border-[#077777]/30 px-2 py-0.5 text-xs dark:border-[#077777]/40"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
