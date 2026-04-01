import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/shared/PageHero';
import NewsletterCTA from '@/components/shared/NewsletterCTA';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { aboutUs } from '@/content/company/about-us';

export const metadata: Metadata = { title: aboutUs.metaTitle, description: aboutUs.metaDescription };

export default function Page() {
  return (
    <>
      <PageHero title={aboutUs.heroTitle || aboutUs.title} subtitle={aboutUs.intro} image="/images/company/about-hero.jpg" />
      <Breadcrumbs items={[{ label: 'Company', href: '/company/about-us' }, { label: 'About Us', href: '/company/about-us' }]} />
      <div className="max-w-7xl mx-auto px-4 py-10 space-y-12">
        {aboutUs.sections.map((section, i) => (
          <div key={i} className={`flex flex-col ${section.image && section.imagePosition === 'right' ? 'lg:flex-row' : section.image ? 'lg:flex-row-reverse' : ''} gap-8 items-start`}>
            <div className="flex-1 min-w-0">
              {section.heading && (
                <h2 className="text-2xl font-bold text-[#003366] mb-4 pb-2 border-b-2 border-[#e87722]">
                  {section.heading}
                </h2>
              )}
              <div className="prose max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: section.body }} />
              {section.items && (
                <ul className="mt-4 list-disc pl-6 space-y-2 text-gray-700">
                  {section.items.map((item, j) => <li key={j}>{item}</li>)}
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
