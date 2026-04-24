import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/shared/PageHero';
import ContactInfoBlock from '@/components/shared/ContactInfoBlock';
import NewsletterCTA from '@/components/shared/NewsletterCTA';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import JobPostingBanner from '@/components/shared/JobPostingBanner';
import { measurementTechnology } from '@/content/products/measurement-technology';

const sub = measurementTechnology.subcategories.find(s => s.slug === 'particle-measurement')!;
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
                Particle Measurement
              </div>
              <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-[1fr_250px]">
                <div className="space-y-4 text-[13px] leading-7 text-[#3f3f3f]">
                  <p>
                    The UF 130 is a new generation of laser particle counters, optimized for use in compressed air
                    or compressed gases. With quality in mind and knowledge of customer needs, this device has been
                    designed for continuous operation 7 days a week/24 hours.
                  </p>
                  <p>Depending on the model, the measuring range is 0.1 µm up to 5.0 µm.</p>
                  <p>
                    The measured values show the particle counts per ft³, l or m³ or alternatively in µg / m³.
                    Settings can be made via the integrated display, an external ultrafilter display or via the
                    service software.
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative h-[170px] w-[220px] border border-[#d9d9d9] bg-white shadow-sm">
                    <Image
                      src="/images/products/particle%20counter.jpg"
                      alt="Particle measurement UF 130"
                      fill
                      className="object-contain p-2"
                      sizes="220px"
                    />
                  </div>
                </div>
              </div>
            </section>

            <div className="mt-10 text-right">
              <a href="/products/measurement-technology/particle-measurement" className="text-sm font-semibold text-[#123f66] hover:text-[#e87722]">
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
