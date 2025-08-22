// src/components/About.tsx
import Image from "next/image";
import Section from "@/components/Section";

export default function About() {
  const tags = [
    "Next.js", "TypeScript", "Tailwind", "Vercel",
    "Docker", "Postgres", "Edge Functions", "LLMs",
  ];

  return (
    <Section
      id="about"
      title="About Me"
      className="bg-[#077777]/5 dark:bg-[#077777]/10"
    >
      <div className="grid items-center gap-8 lg:grid-cols-12">
        {/* Image */}
        <div className="lg:col-span-5">
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
            <Image
              src="/about.png" // place your image in /public
              alt="Maki — developer/designer based in Manila"
              fill
              sizes="(min-width:1024px) 40vw, 100vw"
              className="object-cover"
              priority={false}
            />
          </div>
        </div>

        {/* Copy */}
        <div className="lg:col-span-7">
          <p className="leading-relaxed text-zinc-600 dark:text-zinc-300">
            I’m Maki — a developer/designer focused on building delightful web experiences.
            I work across the stack with a strong eye for UX and a bias for simple, scalable systems.
            Lately I’ve been shipping on Next.js, deploying to Vercel, and integrating AI features
            that actually help users get things done.
          </p>

          {/* Highlights (mini-cards) */}
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            <li className="rounded-xl border border-zinc-200 p-3 text-sm dark:border-zinc-800">
              <span className="block font-medium">DevOps Consultant</span>
              <span className="text-zinc-500 dark:text-zinc-400">
                CI/CD, IaC, and observability baked in.
              </span>
            </li>
            <li className="rounded-xl border border-zinc-200 p-3 text-sm dark:border-zinc-800">
              <span className="block font-medium">Platform Engineering</span>
              <span className="text-zinc-500 dark:text-zinc-400">
                Golden paths and internal tooling for great DX.
              </span>
            </li>
            <li className="rounded-xl border border-zinc-200 p-3 text-sm dark:border-zinc-800">
              <span className="block font-medium">AI Integration</span>
              <span className="text-zinc-500 dark:text-zinc-400">
                Retrieval, function calling, and evals that ship.
              </span>
            </li>
            <li className="rounded-xl border border-zinc-200 p-3 text-sm dark:border-zinc-800">
              <span className="block font-medium">Performance & A11y</span>
              <span className="text-zinc-500 dark:text-zinc-400">
                Fast, accessible, and maintainable by default.
              </span>
            </li>
          </ul>

          {/* Tech tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-zinc-200 px-2 py-0.5 text-xs text-zinc-600 dark:border-zinc-800 dark:text-zinc-300"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Optional CTA */}
          {/* <div className="mt-6">
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 px-4 py-2 text-sm hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
            >
              View Résumé ↗
            </a>
          </div> */}
        </div>
      </div>
    </Section>
  );
}
