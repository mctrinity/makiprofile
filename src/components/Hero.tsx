// src/components/Hero.tsx
export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#077777] text-white p-10 text-center shadow-sm">
      <div className="mx-auto max-w-3xl">
        <span className="inline-block rounded-full border border-white/40 px-3 py-1 text-xs tracking-wide text-white/90">
          Available for freelance
        </span>

        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          <p>Hi, I’m Maki.</p> 
        </h1>

        <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          <p>I design & ship web apps.</p>
        </h2>

        <p className="mt-4 text-white/90">
          Full-stack engineer with a love for clean UI and pragmatic DX. Based in Manila, working globally.
        </p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <a
            href="#projects"
            className="rounded-xl border border-white/40 px-4 py-2 text-sm text-white hover:bg-white/10"
          >
            See work
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-white/40 px-4 py-2 text-sm text-white hover:bg-white/10"
          >
            Contact
          </a>
        </div>
      </div>

      {/* subtle highlight on teal; remove this div if you prefer a flat color */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(255,255,255,0.06),transparent_60%)]" />
    </section>
  );
}
