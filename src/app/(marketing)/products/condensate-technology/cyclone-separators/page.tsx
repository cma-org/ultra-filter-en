import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/shared/PageHero';
import ContactInfoBlock from '@/components/shared/ContactInfoBlock';
import NewsletterCTA from '@/components/shared/NewsletterCTA';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import JobPostingBanner from '@/components/shared/JobPostingBanner';
import { condensateTechnology } from '@/content/products/condensate-technology';

const sub = condensateTechnology.subcategories.find(s => s.slug === 'cyclone-separators')!;
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
                ultra.cyclon AG-Z
              </div>
              <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-[1fr_230px]">
                <div className="space-y-2 text-[13px] leading-7 text-[#3f3f3f]">
                  <p>AG-Z aluminium housing with threaded connection</p>
                  <p>- Volume flows from 125 m3;3/h to 2,250 m3;3/h</p>
                  <p>- Maximum operating temperature 120° C</p>
                  <p>- Maximum operating overpressure 16 bar</p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative h-[250px] w-[190px] border border-[#d9d9d9] bg-white shadow-sm">
                    <Image
                      src="/images/products/condensate-technology/Cyclone%20Separators/ultra.cyclon%20AG-Z.jpeg"
                      alt="ultra.cyclon AG-Z"
                      fill
                      className="object-contain p-2"
                      sizes="190px"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-8 border border-[#d7d7d7] bg-white">
              <div className="border-b border-[#1f4567]/30 bg-[#0a4c79] px-3 py-1.5 text-sm font-medium text-white">
                ultra.cyclon SG-Z
              </div>
              <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-[1fr_230px]">
                <div className="space-y-2 text-[13px] leading-7 text-[#3f3f3f]">
                  <p>SG-Z steel housing with flange connection</p>
                  <p>- Volume flows from 2,400 m3;3/h to 15,000 m3;3/h</p>
                  <p>- Maximum operating temperature 65° C</p>
                  <p>- Maximum operating overpressure 12 bar</p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative h-[250px] w-[190px] border border-[#d9d9d9] bg-white shadow-sm">
                    <Image
                      src="/images/products/condensate-technology/Cyclone%20Separators/ultra.cyclon%20SG-Z.jpeg"
                      alt="ultra.cyclon SG-Z"
                      fill
                      className="object-contain p-2"
                      sizes="190px"
                    />
                  </div>
                </div>
              </div>
            </section>

            <div className="mt-8 text-right">
              <a href="/products/condensate-technology/cyclone-separators" className="text-sm font-semibold text-[#123f66] hover:text-[#e87722]">
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
