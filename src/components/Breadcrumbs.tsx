// src/components/Breadcrumbs.tsx
import Link from "next/link";

type Crumb = { href?: string; label: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4 text-sm text-zinc-500">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((c, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={`${c.label}-${i}`} className="flex items-center gap-2">
              {c.href && !isLast ? (
                <Link href={c.href} className="hover:underline underline-offset-4">
                  {c.label}
                </Link>
              ) : (
                <span className="text-zinc-700 dark:text-zinc-300">{c.label}</span>
              )}
              {!isLast && <span aria-hidden>›</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
