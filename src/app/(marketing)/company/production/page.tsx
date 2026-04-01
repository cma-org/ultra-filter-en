import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/shared/PageHero';
import NewsletterCTA from '@/components/shared/NewsletterCTA';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { productionPage } from '@/content/company/production';

export const metadata: Metadata = { title: productionPage.metaTitle, description: productionPage.metaDescription };

export default function Page() {
  return (
    <>
      <PageHero title={productionPage.heroTitle || productionPage.title} subtitle={productionPage.intro} image="/images/company/production-hero.jpg" />
      <Breadcrumbs items={[{ label: 'Company', href: '/company/about-us' }, { label: 'Production', href: '/company/production' }]} />
      <div className="max-w-7xl mx-auto px-4 py-10 space-y-12">
        {productionPage.sections.map((section, i) => (
          <div key={i} className={`flex flex-col ${section.image && section.imagePosition === 'right' ? 'lg:flex-row' : section.image ? 'lg:flex-row-reverse' : ''} gap-8 items-start`}>
            <div className="flex-1 min-w-0">
              {section.heading && (
                <h2 className="text-2xl font-bold text-[#003366] mb-4 pb-2 border-b-2 border-[#e87722]">
                  {section.heading}
                </h2>
              )}
              <div className="prose max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: section.body }} />
              {section.items && (
                <ul className="mt-4 space-y-2">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-700">
                      <span className="mt-1 w-2 h-2 bg-[#e87722] rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {section.image && (
              <div className="w-full lg:w-80 shrink-0">
                <div className="relative h-56 w-full rounded overflow-hidden">
                  <Image src={section.image} alt={section.imageAlt || section.heading || ''} fill className="object-cover" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <NewsletterCTA />
    </>
  );
}
