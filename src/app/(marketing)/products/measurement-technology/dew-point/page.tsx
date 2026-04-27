import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/shared/PageHero';
import ContactInfoBlock from '@/components/shared/ContactInfoBlock';
import NewsletterCTA from '@/components/shared/NewsletterCTA';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import JobPostingBanner from '@/components/shared/JobPostingBanner';
import { measurementTechnology } from '@/content/products/measurement-technology';

const sub = measurementTechnology.subcategories.find(s => s.slug === 'dew-point')!;
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
                Dew Point Measurement
              </div>
              <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-[1fr_220px]">
                <div className="space-y-4 text-[13px] leading-7 text-[#3f3f3f]">
                  <p>
                    Measuring the pressure dew point in compressed air systems and gas distribution networks has
                    become increasingly important for some time now.
                  </p>
                  <p>
                    The industry worldwide is becoming more and more aware of the negative effects of too much
                    moisture in compressed air / gas:
                  </p>
                </div>
                <div className="flex items-start justify-center">
                  <div className="relative h-[200px] w-[170px] border border-[#d9d9d9] bg-white shadow-sm">
                    <Image
                      src="/images/products/dew%20point.jpg"
                      alt="Dew Point Sensor"
                      fill
                      className="object-contain p-2"
                      sizes="170px"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-6 px-4">
              <ul className="list-disc space-y-2 pl-5 text-[13px] leading-7 text-[#3f3f3f] marker:text-[#0a4c79]">
                <li>Corrosion in air/gas pipes</li>
                <li>Reduced service life of the compressed air system</li>
                <li>Faults and failures in plant components</li>
                <li>Contamination of the compressed air/gas system</li>
                <li>Unpredictable production downtime</li>
                <li>Unforeseeable, additional production costs</li>
              </ul>
            </section>

            <div className="mt-8 text-right">
              <a href="/products/measurement-technology/dew-point" className="text-sm font-semibold text-[#123f66] hover:text-[#0066a4]">
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

