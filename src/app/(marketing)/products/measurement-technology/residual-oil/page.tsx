import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/shared/PageHero';
import ContactInfoBlock from '@/components/shared/ContactInfoBlock';
import NewsletterCTA from '@/components/shared/NewsletterCTA';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import JobPostingBanner from '@/components/shared/JobPostingBanner';
import { measurementTechnology } from '@/content/products/measurement-technology';

const sub = measurementTechnology.subcategories.find(s => s.slug === 'residual-oil')!;
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
                Residual oil measurement
              </div>
              <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-[1fr_250px]">
                <div className="space-y-4 text-[13px] leading-7 text-[#3f3f3f]">
                  <p>
                    The new UF 120 residual oil sensor monitors the oil content of compressed air and gases.
                    It is available as a stationary version or as a portable solution for on-site inspection.
                  </p>
                  <p>
                    The simple installation on UF 551 or UF 331 data loggers and the excellent performance make the
                    UF 120 the ideal solution when residual oil levels are to be measured and monitored.
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative h-[170px] w-[220px] border border-[#d9d9d9] bg-white shadow-sm">
                    <Image
                      src="/images/products/residual%20oil.jpg"
                      alt="Residual oil measurement UF 120"
                      fill
                      className="object-contain p-2"
                      sizes="220px"
                    />
                  </div>
                </div>
              </div>
            </section>

            <div className="mt-10 text-right">
              <a href="/products/measurement-technology/residual-oil" className="text-sm font-semibold text-[#123f66] hover:text-[#0066a4]">
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

