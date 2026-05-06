import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/shared/PageHero';
import ContentSection from '@/components/shared/ContentSection';
import ContactInfoBlock from '@/components/shared/ContactInfoBlock';
import NewsletterCTA from '@/components/shared/NewsletterCTA';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { processFiltration } from '@/content/products/process-filtration';

const sub = processFiltration.subcategories.find(s => s.slug === 'sterile-filter-box')!;
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
            <div className="mt-6 flex justify-center md:justify-end">
              <div className="relative h-[260px] w-[200px] overflow-hidden rounded border border-[#d9d9d9] bg-white shadow-sm">
                <Image
                  src="/images/products/Sterile%20Filter%20Box/Sterile%20Filter%20Box%20P%20SLF.jpg"
                  alt="Sterile Filter Box P-SLF"
                  fill
                  className="object-contain"
                  sizes="200px"
                />
              </div>
            </div>
          </div>
          <aside className="w-full lg:w-72 shrink-0 space-y-5"><ContactInfoBlock /></aside>
        </div>
      </div>
      <NewsletterCTA />
    </>
  );
}

