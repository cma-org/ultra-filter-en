import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import ContactForm from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Newsletter | ultrafilter',
  description: 'Subscribe to the ultrafilter newsletter — product news, technical articles, and event announcements delivered to your inbox.',
};

export default function Page() {
  return (
    <>
      <PageHero
        title="Newsletter"
        subtitle="Stay informed — subscribe to receive product news, technical articles, and event announcements from ultrafilter."
        image="/images/news/newsletter-hero.jpg"
      />
      <Breadcrumbs items={[{ label: 'News', href: '/news' }, { label: 'Newsletter', href: '/news/newsletter' }]} />
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white border border-gray-200 rounded p-8">
          <h2 className="text-2xl font-bold text-[#003366] mb-2">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-6">
            Receive the ultrafilter newsletter with the latest technical articles, product announcements, and industry news.
            We send approximately 4–6 newsletters per year and never share your data with third parties.
          </p>
          <ContactForm />
        </div>
      </div>
    </>
  );
}
