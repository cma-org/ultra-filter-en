import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import ContentSection from '@/components/shared/ContentSection';
import ContactInfoBlock from '@/components/shared/ContactInfoBlock';
import NewsletterCTA from '@/components/shared/NewsletterCTA';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import JobPostingBanner from '@/components/shared/JobPostingBanner';
import { processFiltration } from '@/content/products/process-filtration';

const sub = processFiltration.subcategories.find(s => s.slug === 'process-filters')!;
export const metadata: Metadata = { title: sub.metaTitle, description: sub.metaDescription };

export default function Page() {
  return (
    <>
      <PageHero title={sub.heroTitle || sub.title} subtitle={sub.description} />
      <Breadcrumbs items={[{ label: 'Products', href: '/products' }, { label: 'Process Filtration', href: '/products/process-filtration' }, { label: sub.title, href: `/products/process-filtration/${sub.slug}` }]} />
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 min-w-0">
            {sub.content.map((s, i) => <ContentSection key={i} section={s} />)}

            <section className="mt-8 border-t border-[#d7d7d7] pt-6">
              <h3 className="mb-3 text-[12px] font-bold uppercase tracking-[0.25em] text-[#123f66]">Data Sheet</h3>
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="space-y-2 text-[14px]">
                  <a href="/downloads" className="block font-semibold text-[#003366] hover:text-[#0066a4]">
                    {'>>'} Download Data Sheet Process Filter{' '}
                    <span className="font-normal text-[#666]">(4,626 KB)</span>
                  </a>
                  <a href="/downloads" className="block font-semibold text-[#003366] hover:text-[#0066a4]">
                    {'>>'} Download Brochure Process Filter (GB){' '}
                    <span className="font-normal text-[#666]">(3,851 KB)</span>
                  </a>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-[#b62025] text-xs font-bold tracking-wide text-white shadow">
                  PDF
                </div>
              </div>
            </section>

            <div className="mt-6 text-right">
              <a
                href="/products/process-filtration/process-filters"
                className="text-sm font-semibold text-[#1f4567] hover:text-[#0066a4]"
              >
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

