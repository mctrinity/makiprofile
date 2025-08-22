import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/data";

function isExternal(href?: string) {
  return !!href && /^(https?:)?\/\//i.test(href);
}

export default function BlogCard({ post }: { post: BlogPost }) {
  const Card = (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950">
      {/* top accent line */}
      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#077777] via-[#0f9f9f] to-[#077777] opacity-60" />

      {/* image (optional) */}
      {post.image ? (
        <div className="relative mb-4 aspect-[16/9] w-full overflow-hidden rounded-xl">
          <Image
            src={post.image}
            alt=""
            fill
            sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            priority={false}
          />
        </div>
      ) : (
        <div className="mb-4 h-32 w-full rounded-xl bg-[#077777]/5 dark:bg-[#077777]/10" />
      )}

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-500">
          <time dateTime={post.date}>{post.date}</time>
          {post.readingTime && <span>• {post.readingTime}</span>}
        </div>

        <h3 className="mt-2 line-clamp-2 text-lg font-semibold">
          {post.title}
        </h3>

        <p className="mt-2 line-clamp-3 text-sm text-zinc-600 dark:text-zinc-300">
          {post.excerpt}
        </p>
      </div>

      {/* CTA */}
      <div className="mt-4">
        <span className="inline-flex items-center gap-1 text-sm font-medium text-[#065e5e] transition group-hover:underline dark:text-[#7fdede]">
          Read more <span aria-hidden>↗</span>
        </span>
      </div>
    </article>
  );

  // Wrap the card with link only if href exists
  if (!post.href) return Card;

  return isExternal(post.href) ? (
    <a
      href={post.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`${post.title} — Read more`}
      className="h-full"
    >
      {Card}
    </a>
  ) : (
    <Link href={post.href} aria-label={`${post.title} — Read more`} className="h-full">
      {Card}
    </Link>
  );
}
