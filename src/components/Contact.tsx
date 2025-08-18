// src/components/Contact.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Section from "@/components/Section";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const honeypot = String(data.get("company") ?? ""); // spam trap
    if (honeypot) return;

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

    // Opens user's email client; replace with a server action/service if you want real submissions
    window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
    setStatus("sent");
    e.currentTarget.reset();
  }

  return (
    <Section id="contact" title="Drop me a line">
      <div className="grid items-center gap-8 lg:grid-cols-12">
        {/* Left: image */}
        <div className="lg:col-span-5">
          <div className="relative w-full overflow-hidden rounded-2xl h-[320px] sm:h-[360px] lg:h-[400px]">
          <Image
            src="/contact.png"
            alt="Get in touch"
            fill
            sizes="(min-width:1024px) 40vw, 100vw"
            className="object-cover"
            priority={false}
          />
        </div>

        </div>

        {/* Right: form */}
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="grid gap-4 rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800">
            {/* Honeypot */}
            <input
              type="text"
              name="company"
              autoComplete="off"
              tabIndex={-1}
              className="hidden"
              aria-hidden="true"
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm text-zinc-600 dark:text-zinc-300">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="mt-1 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:focus:border-zinc-700"
                  placeholder="Jane Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-zinc-600 dark:text-zinc-300">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:focus:border-zinc-700"
                  placeholder="you@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-zinc-600 dark:text-zinc-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="mt-1 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:focus:border-zinc-700"
                placeholder="Tell me a bit about your project…"
              />
            </div>

            <div className="flex items-center gap-3">
              <button
                type="submit"
                className="rounded-xl bg-[#077777] px-4 py-2 text-sm font-medium text-white hover:bg-[#066666]"
              >
                Send message
              </button>
              {status === "sent" && (
                <span className="text-sm text-zinc-600 dark:text-zinc-300">
                  Thanks! Your email app should have opened.
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
}
