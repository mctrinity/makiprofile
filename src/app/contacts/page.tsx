// src/app/contacts/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Section from "@/components/Section";
import { siteUrl } from "@/lib/siteUrl";

type Status = "idle" | "sending" | "sent" | "error";

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null;
}

export default function ContactsPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    setError(null);
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
      company: String(data.get("company") ?? ""), // honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        cache: "no-store",
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        let serverMsg = "Failed to send";
        try {
          const j: unknown = await res.json();
          if (isRecord(j) && typeof j.error === "string") {
            serverMsg = j.error;
          }
        } catch {
          /* ignore json parse errors */
        }
        throw new Error(serverMsg);
      }

      setStatus("sent");
      form.reset();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong";
      setError(msg);
      setStatus("error");
    }
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: `${siteUrl}/contacts`,
    name: "Contact — Maki Dizon",
    description: "Get in touch with Maki Dizon for project inquiries and collaborations.",
  };

  return (
    <Section id="contacts-page" title="Get in Touch">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <p className="text-zinc-600 dark:text-zinc-300 mb-8">
        Have a project in mind or want to collaborate? I&apos;d love to hear from you. 
        Send me a message and I&apos;ll get back to you as soon as possible.
      </p>

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
          <form
            onSubmit={handleSubmit}
            aria-busy={status === "sending"}
            className="grid gap-4 rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800"
          >
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
                disabled={status === "sending"}
                className="rounded-xl bg-[#077777] px-4 py-2 text-sm font-medium text-white hover:bg-[#066666] disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </button>

              <span className="text-sm" aria-live="polite">
                {status === "sent" && (
                  <span className="text-emerald-600 dark:text-emerald-400">Sent! I&apos;ll reply soon.</span>
                )}
                {status === "error" && (
                  <span className="text-red-600 dark:text-red-400">{error ?? "Something went wrong"}</span>
                )}
              </span>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
}