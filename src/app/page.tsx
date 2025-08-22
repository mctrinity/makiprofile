// src/app/page.tsx
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import FeatureCard from "@/components/FeatureCard";
import ShapeDivider from "@/components/ShapeDivider";
import BlogCard from "@/components/BlogCard";
import About from "@/components/About";
import Contact from "@/components/Contact";
import {
  projects,
  features,
  blogPosts,
  type Feature,
  type BlogPost,
} from "@/lib/data";

export default function HomePage() {
  const DIVIDER_HEIGHT = 150;

  return (
    <>
      <Hero />

      {/* Divider: Hero (teal) -> page background */}
      <div
        className="relative mx-[calc(50%-50vw)] w-screen my-8 -mt-px"
        style={{ height: DIVIDER_HEIGHT }}
      >
        <ShapeDivider
          position="top"
          height={DIVIDER_HEIGHT}
          fillClassName="fill-[#077777] dark:fill-[#077777]/10"
          seamless
        />
      </div>

      <Section id="features" title="Services">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f: Feature) => (
            <FeatureCard key={f.slug} feature={f} />
          ))}
        </div>
      </Section>

      {/* Divider: Services -> Featured Projects (tinted) */}
      <div
        className="relative mx-[calc(50%-50vw)] w-screen my-8 -mb-px [&_svg]:rotate-180"
        style={{ height: DIVIDER_HEIGHT }}
      >
        <ShapeDivider
          position="bottom"
          height={DIVIDER_HEIGHT}
          fillClassName="fill-[#077777]/5 dark:fill-[#077777]/10"
          seamless
        />
      </div>

      <Section
        id="projects"
        title="Featured Projects"
        className="bg-[#077777]/5 dark:bg-[#077777]/10 border-0 ring-0 shadow-none outline-none"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Section>

      {/* Divider: Featured Projects -> next content */}
      <div
        className="relative mx-[calc(50%-50vw)] w-screen my-8 -mt-px"
        style={{ height: DIVIDER_HEIGHT }}
      >
        <ShapeDivider
          position="top"
          height={DIVIDER_HEIGHT}
          fillClassName="fill-[#077777]/5 dark:fill-zinc-950"
          seamless
        />
      </div>

      <Section id="blog" title="Featured Blog">
        <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post: BlogPost) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </Section>

      {/* Divider: Blog -> About/Contact */}
      <div
        className="relative mx-[calc(50%-50vw)] w-screen my-8 -mb-px [&_svg]:rotate-180"
        style={{ height: DIVIDER_HEIGHT }}
      >
        <ShapeDivider
          position="bottom"
          height={DIVIDER_HEIGHT}
          fillClassName="fill-[#077777]/5 dark:fill-[#077777]/10"
          seamless
        />
      </div>

      {/* Only on homepage */}
      <About />
      <Contact />
    </>
  );
}
