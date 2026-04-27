import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/shared/PageHero';
import ContactInfoBlock from '@/components/shared/ContactInfoBlock';
import NewsletterCTA from '@/components/shared/NewsletterCTA';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import JobPostingBanner from '@/components/shared/JobPostingBanner';
import { processFiltration } from '@/content/products/process-filtration';

const sub = processFiltration.subcategories.find(s => s.slug === 'sterile-filters')!;
export const metadata: Metadata = { title: sub.metaTitle, description: sub.metaDescription };

export default function Page() {
  return (
    <>
      <PageHero title={sub.heroTitle || sub.title} subtitle={sub.description} />
      <Breadcrumbs items={[{ label: 'Products', href: '/products' }, { label: 'Process Filtration', href: '/products/process-filtration' }, { label: sub.title, href: `/products/process-filtration/${sub.slug}` }]} />
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 min-w-0">
            <h2 className="mb-7 text-3xl font-light text-[#2d9bc0]">Sterilfilter (P)-SRF</h2>

            <section className="border border-[#d5d5d5] bg-[#fafafa]">
              <div className="border-b border-[#1f4567]/30 bg-[#0a4c79] px-3 py-1.5 text-xs font-semibold text-white">
                ultrafilter P-SRF
              </div>

              <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-[1fr_200px]">
                <div className="space-y-5 text-[15px] leading-7 text-[#3f3f3f]">
                  <p>
                    The ultrafilter P-SRF and SRF sterile filter is a wound depth filter made of a borosilicate glass
                    fiber filter medium. The inner and outer support jackets as well as the end caps are made of
                    stainless steel.
                  </p>
                  <p>
                    The separation efficiency is 99.99998% based on 0.01 um. The three-dimensional depth medium has a
                    hollow volume of 99%. This guarantees a high dirt holding capacity with low differential pressure and
                    high flow rate.
                  </p>
                  <p>
                    For the food industry, depth filters are recommended as sterile filters, these are typically
                    installed locally, the closer to the point of use, the better. We recommend prior central compressed
                    air preparation by means of particle and activated carbon filters as well as adsorption drying.
                  </p>
                  <p>
                    These filter elements are sterilizable. Sterilization can be done either in-line with steam or in an
                    autoclave. To ensure steam quality for sterilization, we recommend our P-GS steam filters.
                    Sterilization should be carried out after each production batch if possible. The sterilization
                    temperatures vary between 110 degrees and 140 degrees, depending on the duration.
                  </p>
                </div>

                <div className="flex items-center justify-center">
                  <div className="relative h-[180px] w-[160px] rounded-sm border border-[#d9d9d9] bg-white shadow-sm">
                    <Image
                      src="/images/products/Process%20filtration/ultrafilter%20P-SRF.jpeg"
                      alt="Sterile Filters (P)-SRF"
                      fill
                      className="object-contain p-2"
                      sizes="160px"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-3 border-t border-[#d9d9d9] px-4 py-5">
                <a href="/downloads" className="block text-base font-semibold text-[#003366] hover:text-[#0066a4]">
                  {'>>'}Download Datasheet Sterile Filter P-SRF <span className="font-normal text-[#555]">(830 KB)</span>
                </a>
                <a href="/downloads" className="block text-base font-semibold text-[#003366] hover:text-[#0066a4]">
                  {'>>'}Download Brochure Sterile Air Filter P-SRF (GB){' '}
                  <span className="font-normal text-[#555]">(1,040 KB)</span>
                </a>
              </div>
            </section>

            <div className="mt-7 text-right">
              <a href="/products/process-filtration/sterile-filters" className="text-sm font-semibold text-[#1f4567] hover:text-[#0066a4]">
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

