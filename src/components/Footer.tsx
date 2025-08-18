// src/components/Footer.tsx
import { Linkedin, Instagram, Twitter, Facebook } from "lucide-react";

const SOCIALS = {
  linkedin: "https://www.linkedin.com/in/your-handle",
  instagram: "https://www.instagram.com/your-handle",
  x: "https://x.com/your-handle",             // uses Twitter icon
  facebook: "https://facebook.com/your-handle",
};

export default function Footer() {
  const year = new Date().getFullYear();
  const iconClasses =
    "h-4 w-4 transition-transform duration-200 group-hover:scale-110";

  const itemClasses =
    "group inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900";

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-10 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-zinc-600 dark:text-zinc-300">
          © {year} Maki Dizon. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          <a
            href={SOCIALS.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className={itemClasses}
            title="LinkedIn"
          >
            <Linkedin className={iconClasses} />
          </a>

          <a
            href={SOCIALS.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className={itemClasses}
            title="Instagram"
          >
            <Instagram className={iconClasses} />
          </a>

          <a
            href={SOCIALS.x}
            target="_blank"
            rel="noreferrer"
            aria-label="X"
            className={itemClasses}
            title="X"
          >
            <Twitter className={iconClasses} />
          </a>

          <a
            href={SOCIALS.facebook}
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className={itemClasses}
            title="Facebook"
          >
            <Facebook className={iconClasses} />
          </a>
        </div>

        <p className="text-sm text-zinc-500">
          Built with Next.js & Tailwind
        </p>
      </div>
    </footer>
  );
}
