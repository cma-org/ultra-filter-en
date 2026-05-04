import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import NewsletterCTA from '@/components/shared/NewsletterCTA';
import NewsCard from '@/components/news/NewsCard';
import { articles, events } from '@/content/news';

export const metadata: Metadata = {
  title: 'News & Events | ultrafilter',
  description: 'Latest news, events, and updates from Ultrafilter (India) — compressed air filtration, drying, and measurement technology.',
};

export default function Page() {
  const latest = [...articles, ...events].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);

  return (
    <>
      <PageHero
        title="News & Events"
        subtitle="Stay up to date with the latest developments from ultrafilter — new products, upcoming events, and industry insights."
        image="/images/news/news-hero.jpg"
      />
      <Breadcrumbs items={[{ label: 'News', href: '/news' }]} />
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-[#003366]">Latest News</h2>
            <Link href="/news/articles" className="text-[#0066a4] font-semibold hover:underline text-sm">All articles →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latest.map((item) => (
              <NewsCard key={item.slug} article={item} baseHref={item.category === 'event' ? '/news/events' : '/news/articles'} />
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Articles', href: '/news/articles', desc: 'Technical articles and company news' },
            { label: 'Events', href: '/news/events', desc: 'Trade shows and upcoming events' },
            { label: 'Newsletter', href: '/news/newsletter', desc: 'Subscribe to the ultrafilter newsletter' },
            { label: 'Customer Reviews', href: '/news/customer-reviews', desc: 'What our customers say about us' },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="block border border-gray-200 rounded p-5 hover:border-[#0066a4] hover:shadow-sm transition-all">
              <h3 className="font-bold text-[#003366] mb-1">{item.label}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </Link>
          ))}
        </section>
      </div>
      <NewsletterCTA />
    </>
  );
}
