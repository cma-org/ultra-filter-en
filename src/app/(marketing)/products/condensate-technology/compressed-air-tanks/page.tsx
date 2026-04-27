import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import ContactInfoBlock from '@/components/shared/ContactInfoBlock';
import NewsletterCTA from '@/components/shared/NewsletterCTA';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import JobPostingBanner from '@/components/shared/JobPostingBanner';
import { condensateTechnology } from '@/content/products/condensate-technology';

const sub = condensateTechnology.subcategories.find(s => s.slug === 'compressed-air-tanks')!;
export const metadata: Metadata = { title: sub.metaTitle, description: sub.metaDescription };

export default function Page() {
  return (
    <>
      <PageHero title={sub.heroTitle || sub.title} subtitle={sub.description} />
      <Breadcrumbs items={[{ label: 'Products', href: '/products' }, { label: 'Condensate Technology', href: '/products/condensate-technology' }, { label: sub.title, href: `/products/condensate-technology/${sub.slug}` }]} />
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 min-w-0">
            <h2 className="mb-4 text-3xl font-light text-[#2f9dbf]">{sub.title}</h2>

            <section className="border border-[#d7d7d7] bg-white">
              <div className="border-b border-[#1f4567]/30 bg-[#0a4c79] px-3 py-1.5 text-sm font-medium text-white">
                Compressed air storage
              </div>
              <div className="p-4">
                <ul className="list-disc space-y-2 pl-5 text-[13px] leading-7 text-[#3f3f3f] marker:text-[#0a4c79]">
                  <li>Horizontal and vertical compressed air storage tanks</li>
                  <li>Galvanized or painted</li>
                  <li>Capacity from 50 L - 10,000 L, in pressure levels 11 and 16 bar</li>
                  <li>Connection set for shut-off valves optionally available</li>
                </ul>
              </div>
            </section>

            <div className="mt-8 text-right">
              <a href="/products/condensate-technology/compressed-air-tanks" className="text-sm font-semibold text-[#123f66] hover:text-[#0066a4]">
                Printable version
              </a>
            </div>
          </div>
          <aside className="w-full lg:w-72 shrink-0 space-y-5"><ContactInfoBlock /><JobPostingBanner /></aside>
        </div>
      </div>
      <NewsletterCTA />
    </>
  );
}

