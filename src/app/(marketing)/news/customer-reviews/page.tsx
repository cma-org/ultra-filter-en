import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import NewsletterCTA from '@/components/shared/NewsletterCTA';
import { customerReviews } from '@/content/news';

export const metadata: Metadata = {
  title: 'Customer Reviews | ultrafilter',
  description: 'What ultrafilter customers say about our compressed air filtration products and service.',
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function Page() {
  return (
    <>
      <PageHero
        title="Customer Reviews"
        subtitle="What our customers say about ultrafilter products and service."
        image="/images/news/reviews-hero.jpg"
      />
      <Breadcrumbs items={[{ label: 'News', href: '/news' }, { label: 'Customer Reviews', href: '/news/customer-reviews' }]} />
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
        {customerReviews.map((review) => (
          <div key={review.slug} className="bg-white border border-gray-200 rounded p-8 relative">
            <div className="text-6xl text-[#e87722] font-serif leading-none mb-2 opacity-30 select-none">&ldquo;</div>
            <p className="text-lg text-gray-700 italic leading-relaxed mb-4">{review.excerpt}</p>
            <div className="flex items-center justify-between">
              <p className="text-[#003366] font-semibold">{review.title}</p>
              <p className="text-sm text-gray-400">{formatDate(review.date)}</p>
            </div>
          </div>
        ))}
      </div>
      <NewsletterCTA />
    </>
  );
}
