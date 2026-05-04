import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/shared/PageHero';
import ContactInfoBlock from '@/components/shared/ContactInfoBlock';
import NewsletterCTA from '@/components/shared/NewsletterCTA';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import JobPostingBanner from '@/components/shared/JobPostingBanner';
import { industrialFiltration } from '@/content/products/industrial-filtration';

const sub = industrialFiltration.subcategories.find(s => s.slug === 'high-performance-filters')!;
export const metadata: Metadata = { title: sub.metaTitle, description: sub.metaDescription };

const housingRows = [
  {
    title: 'ultrafilter AG housing',
    image: '/images/products/Industrial%20filtration/HPF/uf%20AG%20housing.jpeg',
    downloads: [
      { label: 'Download Datasheet Filter Housing', size: '(1,365 KB)' },
      { label: 'Download Brochure Filter Housing (GB)', size: '(1,641 KB)' },
      { label: 'Download Datasheet IF Overview AG0002-0072', size: '(105 KB)' },
      { label: 'Download Datasheet IF Overview AG0108-0288 SG0108-3840', size: '(102 KB)' },
    ],
  },
  {
    title: 'ultrafilter AG Superplus housing',
    image: '/images/products/Industrial%20filtration/HPF/uf%20AG%20superplus%20housing.jpeg',
    downloads: [
      { label: 'Download datasheet filter housing ultra.plus', size: '(490 KB)' },
      { label: 'Download brochure Filter Housing ultra.plus (GB)', size: '(470 KB)' },
    ],
  },
  {
    title: 'ultrafilter SG housing',
    image: '/images/products/Industrial%20filtration/HPF/uf%20SG%20housing.jpeg',
    downloads: [
      { label: 'Download Datasheet Filter Housing SG Superplus', size: '(681 KB)' },
      { label: 'Download Brochure Filter Housing SG Superplus (GB)', size: '(686 KB)' },
    ],
  },
] as const;

export default function Page() {
  return (
    <>
      <PageHero title={sub.heroTitle || sub.title} subtitle={sub.description} />
      <Breadcrumbs items={[{ label: 'Products', href: '/products' }, { label: 'Industrial Filtration', href: '/products/industrial-filtration' }, { label: sub.title, href: `/products/industrial-filtration/${sub.slug}` }]} />
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 min-w-0">
            <h2 className="mb-7 text-3xl font-light text-[#006b8f]">High-Performance Filters</h2>

            <div className="space-y-8">
              {housingRows.map((row) => (
                <section key={row.title} className="bg-white">
                  <div className="border-b border-[#1f4567]/30 bg-[#0a4c79] px-3 py-1.5 text-xs font-semibold text-white">
                    {row.title}
                  </div>

                  <div className="grid grid-cols-1 gap-6 py-4 md:grid-cols-[1fr_200px]">
                    <div />
                    <div className="ml-auto">
                      <div className="relative h-[170px] w-[160px] rounded-sm border border-[#d9d9d9] bg-white shadow-sm">
                        <Image
                          src={row.image}
                          alt={`${row.title} product image`}
                          fill
                          className="object-contain p-2"
                          sizes="160px"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 pb-2">
                    {row.downloads.map((download) => (
                      <div key={download.label} className="flex items-center justify-between gap-3">
                        <a href="/downloads" className="text-sm font-semibold text-[#003366] hover:text-[#0066a4]">
                          {'>>'} {download.label} <span className="font-normal text-[#555]">{download.size}</span>
                        </a>
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded bg-[#a31515] text-[10px] font-bold text-white shadow">
                          PDF
                        </span>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
          <aside className="w-full lg:w-72 shrink-0 space-y-5"><ContactInfoBlock /><JobPostingBanner /></aside>
        </div>
      </div>
      <NewsletterCTA />
    </>
  );
}

