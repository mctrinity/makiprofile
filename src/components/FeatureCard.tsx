// src/components/FeatureCard.tsx
type Feature = {
  slug: string;
  title: string;
  description: string;
  emoji?: string;
  href?: string;
  badge?: string;
};

export default function FeatureCard({ feature }: { feature: Feature }) {
  const CTA = (
    <div className="mt-auto pt-4">
      {feature.href ? (
        // Card itself is the link (see wrapper below). Keep this as decorative text.
        <span className="inline-flex items-center gap-1 text-sm font-medium text-[#065e5e] transition group-hover:underline dark:text-[#7fdede]">
          Learn more <span aria-hidden>↗</span>
        </span>
      ) : (
        // No href: provide a real link to Contact
        <a
          href="#contact"
          className="inline-flex items-center gap-1 text-sm font-medium text-[#065e5e] underline underline-offset-4 transition hover:no-underline dark:text-[#7fdede]"
          aria-label={`${feature.title} — Contact`}
        >
          Learn more <span aria-hidden>→</span>
        </a>
      )}
    </div>
  );

  const Card = (
    <article className="group relative flex h-full min-h-[240px] sm:min-h-[260px] flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950">
      {/* top accent line */}
      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#077777] via-[#0f9f9f] to-[#077777] opacity-60" />

      {/* Top content */}
      <div className="flex items-start gap-4">
        {feature.emoji ? (
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#077777]/10 ring-1 ring-[#077777]/30 dark:bg-[#077777]/15">
            <span className="text-xl">{feature.emoji}</span>
          </div>
        ) : (
          <div className="h-11 w-11 rounded-xl bg-zinc-100 ring-1 ring-zinc-200 dark:bg-zinc-900 dark:ring-zinc-800" />
        )}

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="truncate text-base font-semibold">{feature.title}</h3>
            {feature.badge && (
              <span className="whitespace-nowrap rounded-full bg-[#077777]/10 px-2 py-0.5 text-[10px] font-medium text-[#065e5e] dark:text-[#7fdede]">
                {feature.badge}
              </span>
            )}
          </div>
          <p className="mt-1 line-clamp-4 text-sm text-zinc-600 dark:text-zinc-300">
            {feature.description}
          </p>
        </div>
      </div>

      {/* Bottom CTA (always visible) */}
      {CTA}
    </article>
  );

  return feature.href ? (
    <a
      href={feature.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`${feature.title} — Learn more`}
      className="h-full"
    >
      {Card}
    </a>
  ) : (
    Card
  );
}
