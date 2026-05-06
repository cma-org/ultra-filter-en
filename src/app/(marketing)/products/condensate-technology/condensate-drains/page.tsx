import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/shared/PageHero';
import ContactInfoBlock from '@/components/shared/ContactInfoBlock';
import NewsletterCTA from '@/components/shared/NewsletterCTA';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { condensateTechnology } from '@/content/products/condensate-technology';

const sub = condensateTechnology.subcategories.find(s => s.slug === 'condensate-drains')!;
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
                ultra.drain UAD S012
              </div>
              <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-[1fr_220px]">
                <div className="space-y-4">
                  <p className="text-base font-bold italic tracking-[0.2em] text-[#b01217]">* N E W * N E W * N E W *</p>
                  <ul className="list-disc space-y-2 pl-5 text-[13px] leading-7 text-[#3f3f3f] marker:text-[#0a4c79]">
                    <li>Reliable operation</li>
                    <li>No compressed air losses</li>
                    <li>Electronics separated from the condensate chamber</li>
                    <li>Dirt-resistant</li>
                    <li>Integrated, replaceable strainer at the condensate outlet</li>
                    <li>Horizontal and vertical installation possible</li>
                    <li>Potential-free alarm contact ULTRADRAIN UAD S012</li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative h-[180px] w-[180px] border border-[#d9d9d9] bg-white shadow-sm">
                    <Image
                      src="/images/products/condensate-technology/condensate%20drains/uad%20so12.jpeg"
                      alt="ultra.drain UAD S012"
                      fill
                      className="object-contain p-2"
                      sizes="180px"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="border-x border-b border-[#d7d7d7] px-4 py-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="space-y-2 text-[14px]">
                  <a href="/downloads" className="block font-semibold text-[#003366] hover:text-[#0066a4]">
                    {'>>'}Download Datasheet UAD S012 <span className="font-normal text-[#666]">(458 KB)</span>
                  </a>
                  <a href="/downloads" className="block font-semibold text-[#003366] hover:text-[#0066a4]">
                    {'>>'}Download Brochure UAD S012 (GB) <span className="font-normal text-[#666]">(469 KB)</span>
                  </a>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-[#b62025] text-xs font-bold tracking-wide text-white shadow">
                  PDF
                </div>
              </div>
            </section>

            <section className="mt-6 border border-[#d7d7d7] bg-white">
              <div className="border-b border-[#1f4567]/30 bg-[#0a4c79] px-3 py-1.5 text-sm font-medium text-white">
                ultra.drain UAD
              </div>
              <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-[1fr_220px]">
                <div>
                  <ul className="list-disc space-y-2 pl-5 text-[13px] leading-7 text-[#3f3f3f] marker:text-[#0a4c79]">
                    <li>Level controlled steam trap UAD</li>
                    <li>4 sizes for capacities from 30 to 150 l/h condensate</li>
                    <li>Robust design due to the use of high-quality materials</li>
                    <li>Condensation discharge by condensate ingress from above / alternatively from the rear</li>
                    <li>High resistance even to aggressive condensates due to standard coating</li>
                    <li>Rounded control panel visible at any installation height</li>
                    <li>Available for worldwide use in voltages of 230V and 115V</li>
                    <li>Reliable function in the removal of dirt-laden condensate thanks to large cross-sections</li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative h-[180px] w-[180px] border border-[#d9d9d9] bg-white shadow-sm">
                    <Image
                      src="/images/products/condensate-technology/condensate%20drains/uad.jpeg"
                      alt="ultra.drain UAD"
                      fill
                      className="object-contain p-2"
                      sizes="180px"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="border-x border-b border-[#d7d7d7] px-4 py-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="space-y-2 text-[14px]">
                  <a href="/downloads" className="block font-semibold text-[#003366] hover:text-[#0066a4]">
                    {'>>'}Download datasheet ultradrain <span className="font-normal text-[#666]">(1.295 KB)</span>
                  </a>
                  <a href="/downloads" className="block font-semibold text-[#003366] hover:text-[#0066a4]">
                    {'>>'}Download brochure ultradrain GB <span className="font-normal text-[#666]">(1.293 KB)</span>
                  </a>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-[#b62025] text-xs font-bold tracking-wide text-white shadow">
                  PDF
                </div>
              </div>
            </section>

            <div className="mt-6 text-right">
              <a href="/products/condensate-technology/condensate-drains" className="text-sm font-semibold text-[#123f66] hover:text-[#0066a4]">
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


