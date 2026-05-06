import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/shared/PageHero';
import ContactInfoBlock from '@/components/shared/ContactInfoBlock';
import NewsletterCTA from '@/components/shared/NewsletterCTA';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { condensateTechnology } from '@/content/products/condensate-technology';

const sub = condensateTechnology.subcategories.find(s => s.slug === 'oil-water-separators')!;
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
                ultra.sep UAS
              </div>
              <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-[1fr_220px]">
                <div>
                  <ul className="list-disc space-y-2 pl-5 text-[13px] leading-7 text-[#3f3f3f] marker:text-[#0a4c79]">
                    <li>Separates compressed air condensates regardless of the compressor oil used</li>
                    <li>Can be used for all types of compressors</li>
                    <li>Perfect function guaranteed with all steam traps</li>
                    <li>Does not require a space-consuming condensate calming tank (thus reduced bacterial growth)</li>
                    <li>Easy and fast element change</li>
                    <li>Optical overflow indicator</li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative h-[190px] w-[190px] border border-[#d9d9d9] bg-white shadow-sm">
                    <Image
                      src="/images/products/condensate-technology/ultra.sep%20UAS.jpg"
                      alt="ultra.sep UAS"
                      fill
                      className="object-contain p-2"
                      sizes="190px"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-6 border-t border-[#d7d7d7] px-1 py-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="space-y-2 text-[14px]">
                  <a href="/downloads" className="block font-semibold text-[#003366] hover:text-[#0066a4]">
                    {'>>'} Download datasheet ultrasep <span className="font-normal text-[#666]">(1,039 KB)</span>
                  </a>
                  <a href="/downloads" className="block font-semibold text-[#003366] hover:text-[#0066a4]">
                    {'>>'} Download Brochure ultra.sep (GB) <span className="font-normal text-[#666]">(1,051 KB)</span>
                  </a>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-[#b62025] text-xs font-bold tracking-wide text-white shadow">
                  PDF
                </div>
              </div>
            </section>

            <div className="mt-10 text-right">
              <a href="/products/condensate-technology/oil-water-separators" className="text-sm font-semibold text-[#123f66] hover:text-[#0066a4]">
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


