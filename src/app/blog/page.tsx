// src/app/blog/page.tsx
import Section from "@/components/Section";
import BlogCard from "@/components/BlogCard";
import { blogPosts, type BlogPost } from "@/lib/data";

export const metadata = {
  title: "Blog — Maki Dizon",
  description: "Notes on DevOps, Platform, and AI integration.",
};

export default function BlogIndex() {
  return (
    <Section id="blog-index" title="Blog">
      {blogPosts.length === 0 ? (
        <p className="text-zinc-600 dark:text-zinc-300">No posts yet. Coming soon.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {blogPosts.map((post: BlogPost) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </Section>
  );
}
