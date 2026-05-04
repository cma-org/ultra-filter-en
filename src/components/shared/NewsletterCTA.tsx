import Image from 'next/image';
import Link from 'next/link';

/** Industrial / technology photo from Unsplash (allowed in next.config.ts). */
const NEWSLETTER_BG_SRC =
  'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=2400&q=80';

interface NewsletterCTAProps {
  compact?: boolean;
}

export default function NewsletterCTA({ compact = false }: NewsletterCTAProps) {
  if (compact) {
    return (
      <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-5">
        <div
          className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-[#003366]/10"
          aria-hidden
        />
        <h3 className="text-sm font-bold text-[#003366] mb-2">Stay up to date</h3>
        <p className="text-xs text-slate-600 mb-4 leading-relaxed">
          Product updates, technical articles, and industry news — delivered monthly.
        </p>
        <Link
          href="/news/newsletter"
          className="inline-flex items-center justify-center rounded-md bg-[#003366] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#004080] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003366]"
        >
          Subscribe
        </Link>
      </div>
    );
  }

  return (
    <section className="mt-12 px-4 max-w-7xl mx-auto" aria-labelledby="newsletter-cta-heading">
      <div className="relative overflow-hidden rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,51,102,0.35)] min-h-[300px] md:min-h-[360px]">
        <Image
          src={NEWSLETTER_BG_SRC}
          alt=""
          fill
          className="object-cover object-center scale-105 sm:scale-100"
          sizes="(max-width: 1280px) 100vw, 1280px"
          priority={false}
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#002244]/95 via-[#003366]/88 to-[#005a9e]/72"
          aria-hidden
        />
        <div className="relative grid md:grid-cols-12 gap-8 lg:gap-10 items-center p-8 md:p-10 lg:p-14">
          <div className="md:col-span-7 lg:col-span-6 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200/90">
              Newsletter
            </p>
            <h2
              id="newsletter-cta-heading"
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight"
            >
              Stay up to date
            </h2>
            <p className="text-base md:text-lg text-blue-100/95 max-w-lg leading-relaxed">
              Subscribe for product updates, technical articles, energy-saving tips, and industry news —
              curated monthly for engineers and procurement teams.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/news/newsletter"
                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-bold text-[#003366] shadow-md transition-all hover:bg-cyan-50 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Subscribe to newsletter
              </Link>
              <span className="text-sm text-blue-200/90 hidden sm:inline">
                Free · Unsubscribe anytime
              </span>
            </div>
          </div>
          <div className="md:col-span-5 lg:col-span-6 hidden md:flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] aspect-[4/3] rounded-xl overflow-hidden shadow-2xl ring-2 ring-white/20">
              <Image
                src="/images/sections/newsletter-panel.png"
                alt=""
                fill
                className="object-cover"
                sizes="340px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
