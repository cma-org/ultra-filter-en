import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/shared/PageHero';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import NewsletterCTA from '@/components/shared/NewsletterCTA';
import { events } from '@/content/news';

export const metadata: Metadata = {
  title: 'Events | ultrafilter',
  description: 'Upcoming trade shows, exhibitions, and events where you can meet the ultrafilter team.',
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function Page() {
  return (
    <>
      <PageHero
        title="Events"
        subtitle="Meet the ultrafilter team at trade fairs, exhibitions, and industry events."
        image="/images/news/events-hero.jpg"
      />
      <Breadcrumbs items={[{ label: 'News', href: '/news' }, { label: 'Events', href: '/news/events' }]} />
      <div className="max-w-7xl mx-auto px-4 py-12">
        {events.length > 0 ? (
          <div className="space-y-6">
            {events.map((event) => (
              <div key={event.slug} className="flex flex-col sm:flex-row gap-6 border border-gray-200 rounded overflow-hidden hover:border-[#0066a4] transition-colors">
                {event.image && (
                  <div className="relative w-full sm:w-48 h-40 shrink-0">
                    <Image src={event.image} alt={event.title} fill className="object-cover" />
                  </div>
                )}
                <div className="p-5 flex flex-col justify-center">
                  <p className="text-sm text-[#e87722] font-semibold mb-1">{formatDate(event.date)}</p>
                  <h2 className="text-xl font-bold text-[#003366] mb-2">{event.title}</h2>
                  <p className="text-gray-700">{event.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-center py-16">No upcoming events at this time. Please check back soon.</p>
        )}
      </div>
      <NewsletterCTA />
    </>
  );
}
