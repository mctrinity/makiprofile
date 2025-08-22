// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type NavLink = { href: string; label: string; hideOnBlog?: boolean };

const LINKS: NavLink[] = [
  { href: "/#about", label: "About", hideOnBlog: true },
  { href: "/#projects", label: "Projects", hideOnBlog: true },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact", hideOnBlog: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isBlog = pathname?.startsWith("/blog");
  const visibleLinks = LINKS.filter((l) => !(isBlog && l.hideOnBlog));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-zinc-950/60 border-b border-zinc-200 dark:border-zinc-800"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Home" className="flex items-center gap-2">
          <Image
            src="/dizonlogo.png"
            alt="Maki Dizon logo"
            width={120}
            height={24}
            className="w-24 sm:w-28 lg:w-32"           // 96px / 112px / 128px
            style={{ height: "auto" }}                  // keep aspect ratio (prevents Next warning)
            sizes="(min-width:1024px) 8rem, (min-width:640px) 7rem, 6rem"
          />
        </Link>

        <ul className="flex items-center gap-5 text-sm">
          {visibleLinks.map((l) => {
            const isActive = l.href === "/blog" && isBlog;
            return (
              <li key={l.href}>
                <Link
                  className={`hover:underline underline-offset-4 ${
                    isActive ? "font-semibold underline" : ""
                  }`}
                  href={l.href}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
