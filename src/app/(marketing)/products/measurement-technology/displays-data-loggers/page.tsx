import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/shared/PageHero';
import ContactInfoBlock from '@/components/shared/ContactInfoBlock';
import NewsletterCTA from '@/components/shared/NewsletterCTA';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import JobPostingBanner from '@/components/shared/JobPostingBanner';
import { measurementTechnology } from '@/content/products/measurement-technology';

const sub = measurementTechnology.subcategories.find(s => s.slug === 'displays-data-loggers')!;
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
                Displays/Data Loggers/Software
              </div>
              <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-[1fr_250px]">
                <div className="space-y-4 text-[13px] leading-7 text-[#3f3f3f]">
                  <p>
                    With the universal display and data logger, all relevant parameters (flow, consumption, dew point,
                    pressure, temperature, power consumption, compressor status, etc.) can be measured, displayed and
                    recorded in a compressed air system.
                  </p>
                  <p>
                    The new UF 330/331 is a very powerful yet cost-effective data logger/display solution. The
                    high-resolution 5&quot; graphic display allows for easy operation. Compared to many smaller screens
                    with a low resolution, details are clearly visible here.
                  </p>
                  <p>
                    The versatility in terms of sensor inputs is a perfect solution for most measurement tasks.
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative h-[190px] w-[230px] border border-[#d9d9d9] bg-white shadow-sm">
                    <Image
                      src="/images/products/Measurement%20technology/displays.jpg"
                      alt="Displays and data loggers"
                      fill
                      className="object-contain p-2"
                      sizes="230px"
                    />
                  </div>
                </div>
              </div>
            </section>

            <div className="mt-10 text-right">
              <a href="/products/measurement-technology/displays-data-loggers" className="text-sm font-semibold text-[#123f66] hover:text-[#e87722]">
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
