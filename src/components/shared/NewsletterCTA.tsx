import Link from 'next/link';

interface NewsletterCTAProps {
  compact?: boolean;
}

export default function NewsletterCTA({ compact = false }: NewsletterCTAProps) {
  if (compact) {
    return (
      <div className="bg-[#f5f5f5] border border-gray-200 rounded p-5">
        <h3 className="text-sm font-bold text-[#003366] mb-2">Newsletter</h3>
        <p className="text-xs text-gray-600 mb-3">Product updates, technical articles, and industry news — delivered monthly.</p>
        <Link
          href="/news/newsletter"
          className="inline-block bg-[#e87722] hover:bg-orange-600 text-white text-xs font-semibold px-4 py-2 rounded transition-colors"
        >
          Subscribe
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-[#003366] py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Stay Up to Date</h2>
        <p className="text-blue-200 text-base mb-6 max-w-xl mx-auto">
          Subscribe to the ultrafilter newsletter for product updates, technical articles, energy-saving tips, and industry news — delivered monthly.
        </p>
        <Link
          href="/news/newsletter"
          className="inline-block bg-[#e87722] hover:bg-orange-600 text-white font-bold px-8 py-3 rounded text-sm transition-colors"
        >
          Subscribe to Newsletter
        </Link>
      </div>
    </section>
  );
}
