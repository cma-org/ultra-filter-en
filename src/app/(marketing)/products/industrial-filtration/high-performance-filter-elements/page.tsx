import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import ContentSection from '@/components/shared/ContentSection';
import ContactInfoBlock from '@/components/shared/ContactInfoBlock';
import NewsletterCTA from '@/components/shared/NewsletterCTA';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import JobPostingBanner from '@/components/shared/JobPostingBanner';
import { industrialFiltration } from '@/content/products/industrial-filtration';

const sub = industrialFiltration.subcategories.find(s => s.slug === 'high-performance-filter-elements')!;

export const metadata: Metadata = { title: sub.metaTitle, description: sub.metaDescription };

export default function Page() {
  return (
    <>
      <PageHero title={sub.heroTitle || sub.title} subtitle={sub.description} />
      <Breadcrumbs items={[{ label: 'Products', href: '/products' }, { label: 'Industrial Filtration', href: '/products/industrial-filtration' }, { label: sub.title, href: `/products/industrial-filtration/${sub.slug}` }]} />
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 min-w-0">
            {sub.content.map((section, i) => <ContentSection key={i} section={section} />)}
          </div>
          <aside className="w-full lg:w-72 shrink-0 space-y-5">
            <ContactInfoBlock />
            <JobPostingBanner />
          </aside>
        </div>
      </div>
      <NewsletterCTA />
    </>
  );
}
