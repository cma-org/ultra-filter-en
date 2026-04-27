import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import ContactInfoBlock from '@/components/shared/ContactInfoBlock';
import NewsletterCTA from '@/components/shared/NewsletterCTA';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { services } from '@/content/services';

const svc = services.find(s => s.slug === 'quality-measurement-lab')!;
export const metadata: Metadata = { title: svc.metaTitle, description: svc.metaDescription };

export default function Page() {
  return (
    <>
      <PageHero title={svc.heroTitle || svc.title} subtitle={svc.intro} image={svc.image} />
      <Breadcrumbs items={[{ label: 'Services', href: '/services' }, { label: svc.title, href: `/services/${svc.slug}` }]} />
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 min-w-0 space-y-8">
            {svc.blocks.map((block, i) =>
              block.type === 'text' ? (
                <div key={i}>
                  {block.heading && <h2 className="text-2xl font-bold text-[#003366] mb-3">{block.heading}</h2>}
                  {block.body && <div className="prose max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: block.body }} />}
                </div>
              ) : block.type === 'list' ? (
                <div key={i}>
                  {block.heading && <h2 className="text-2xl font-bold text-[#003366] mb-3">{block.heading}</h2>}
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    {block.items?.map((item, j) => <li key={j}>{item}</li>)}
                  </ul>
                </div>
              ) : (
                <div key={i} className="bg-[#003366] text-white p-6 rounded">
                  {block.heading && <h2 className="text-xl font-bold mb-2">{block.heading}</h2>}
                  {block.body && <p className="mb-4 opacity-90">{block.body}</p>}
                  {block.ctaLabel && block.ctaHref && (
                    <a href={block.ctaHref} className="inline-block bg-[#0066a4] text-white px-6 py-2 font-semibold hover:bg-[#00558a] transition-colors">
                      {block.ctaLabel}
                    </a>
                  )}
                </div>
              )
            )}
          </div>
          <aside className="w-full lg:w-72 shrink-0">
            <ContactInfoBlock />
          </aside>
        </div>
      </div>
      <NewsletterCTA />
    </>
  );
}

