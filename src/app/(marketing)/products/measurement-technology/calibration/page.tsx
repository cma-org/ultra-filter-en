import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/shared/PageHero';
import ContactInfoBlock from '@/components/shared/ContactInfoBlock';
import NewsletterCTA from '@/components/shared/NewsletterCTA';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { measurementTechnology } from '@/content/products/measurement-technology';

const sub = measurementTechnology.subcategories.find(s => s.slug === 'calibration')!;
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
                Calibration
              </div>
              <div className="grid grid-cols-1 gap-6 p-4 md:grid-cols-[1fr_220px]">
                <div className="space-y-6 text-[13px] leading-7 text-[#3f3f3f]">
                  <p>
                    Ultrafilter offers a calibration service for all sensors, including third-party brands, and on-site
                    testing.
                  </p>
                  <p>
                    For other physical units, we have contractual partners in Germany. All references refer to national
                    standards and are recalibrated at regular intervals.
                  </p>
                </div>
                <div className="flex items-start justify-center">
                  <div className="relative h-[220px] w-[220px] overflow-hidden border border-[#d9d9d9] bg-white shadow-sm">
                    <Image
                      src="/images/products/callibration.jpg"
                      alt="Calibration measuring tool"
                      fill
                      className="object-contain p-2"
                      sizes="220px"
                    />
                  </div>
                </div>
              </div>
            </section>

            <div className="mt-10 text-right">
              <a href="/products/measurement-technology/calibration" className="text-sm font-semibold text-[#123f66] hover:text-[#0066a4]">
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


