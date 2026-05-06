import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import ContactInfoBlock from '@/components/shared/ContactInfoBlock';
import NewsletterCTA from '@/components/shared/NewsletterCTA';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { measurementTechnology } from '@/content/products/measurement-technology';

const sub = measurementTechnology.subcategories.find(s => s.slug === 'service')!;
export const metadata: Metadata = { title: sub.metaTitle, description: sub.metaDescription };

export default function Page() {
  return (
    <>
      <PageHero title={sub.heroTitle || sub.title} subtitle={sub.description} />
      <Breadcrumbs items={[{ label: 'Products', href: '/products' }, { label: 'Measurement Technology', href: '/products/measurement-technology' }, { label: sub.title, href: `/products/measurement-technology/${sub.slug}` }]} />
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 min-w-0">
            <h2 className="mb-4 text-3xl font-light text-[#2f9dbf]">{sub.title}</h2>

            <section className="border border-[#d7d7d7] bg-white">
              <div className="border-b border-[#1f4567]/30 bg-[#0a4c79] px-3 py-1.5 text-sm font-medium text-white">
                Service
              </div>
              <div className="space-y-4 p-4 text-[13px] leading-7 text-[#3f3f3f]">
                <h3 className="text-[24px] font-bold uppercase tracking-[0.28em] text-[#123f66]">On-Site Service</h3>
                <p>We offer the following tests:</p>
                <ul className="list-disc space-y-2 pl-5 marker:text-[#0a4c79]">
                  <li>Pressure dew point measurement</li>
                  <li>Flow/Consumption Measurement</li>
                  <li>Pressure measurement</li>
                  <li>Temperature measurement</li>
                  <li>Locate leakage</li>
                  <li>Data collection over several days or weeks</li>
                </ul>
              </div>
            </section>

            <div className="mt-10 text-right">
              <a href="/products/measurement-technology/service" className="text-sm font-semibold text-[#123f66] hover:text-[#0066a4]">
                Printable version
              </a>
            </div>
          </div>
          <aside className="w-full lg:w-72 shrink-0 space-y-5"><ContactInfoBlock /></aside>
        </div>
      </div>
      <NewsletterCTA />
    </>
  );
}


