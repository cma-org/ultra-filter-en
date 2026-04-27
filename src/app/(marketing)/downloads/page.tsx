import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import NewsletterCTA from '@/components/shared/NewsletterCTA';

export const metadata: Metadata = {
  title: 'Downloads | ultrafilter',
  description: 'Download datasheets, technical specifications, certificates, and brochures for ultrafilter products.',
};

const downloads = [
  {
    category: 'Industrial Filtration',
    items: [
      { label: 'High-Performance Filter Elements â€” Datasheet', file: '/datasheets/ultrafilter-hfe-datasheet.pdf' },
      { label: 'High-Performance Filters â€” Technical Specification', file: '/datasheets/ultrafilter-hpf-spec.pdf' },
      { label: 'Industrial Filtration â€” Product Range Overview', file: '/datasheets/ultrafilter-industrial-range.pdf' },
    ],
  },
  {
    category: 'Process Filtration',
    items: [
      { label: 'Sterile Filters P-SRF â€” Datasheet', file: '/datasheets/ultrafilter-srf-datasheet.pdf' },
      { label: 'Steam Filters P-GS â€” Technical Data', file: '/datasheets/ultrafilter-gs-datasheet.pdf' },
      { label: 'Process Filtration â€” Product Catalogue', file: '/datasheets/ultrafilter-process-catalogue.pdf' },
    ],
  },
  {
    category: 'Drying Technology',
    items: [
      { label: 'Refrigeration Dryers â€” Performance Data', file: '/datasheets/ultrafilter-rd-performance.pdf' },
      { label: 'Adsorption Dryers â€” Technical Specification', file: '/datasheets/ultrafilter-ad-spec.pdf' },
      { label: 'Membrane Dryers â€” Datasheet', file: '/datasheets/ultrafilter-membrane-datasheet.pdf' },
    ],
  },
  {
    category: 'Condensate Technology',
    items: [
      { label: 'Condensate Drains â€” Product Overview', file: '/datasheets/ultrafilter-drain-overview.pdf' },
      { label: 'Oil-Water Separators â€” Technical Data', file: '/datasheets/ultrafilter-ows-datasheet.pdf' },
    ],
  },
  {
    category: 'Measurement Technology',
    items: [
      { label: 'Dew Point Instruments â€” Datasheet', file: '/datasheets/ultrafilter-dewpoint-datasheet.pdf' },
      { label: 'Flow Measurement â€” Technical Data', file: '/datasheets/ultrafilter-flow-datasheet.pdf' },
      { label: 'Residual Oil Measurement â€” Datasheet', file: '/datasheets/ultrafilter-oil-datasheet.pdf' },
    ],
  },
  {
    category: 'Certificates & Approvals',
    items: [
      { label: 'ISO 9001:2015 Certificate', file: '/datasheets/ultrafilter-iso9001-cert.pdf' },
      { label: 'ISO 14001:2015 Certificate', file: '/datasheets/ultrafilter-iso14001-cert.pdf' },
      { label: 'CE Declaration of Conformity', file: '/datasheets/ultrafilter-ce-declaration.pdf' },
    ],
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        title="Downloads"
        subtitle="Datasheets, technical specifications, certificates, and brochures for all ultrafilter products."
        image="/images/downloads/downloads-hero.jpg"
      />
      <Breadcrumbs items={[{ label: 'Downloads', href: '/downloads' }]} />
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-10">
        {downloads.map((group) => (
          <div key={group.category}>
            <h2 className="text-xl font-bold text-[#003366] mb-4 pb-2 border-b border-gray-200">{group.category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {group.items.map((item) => (
                <a
                  key={item.file}
                  href={item.file}
                  className="flex items-center gap-3 border border-gray-200 rounded p-4 hover:border-[#0066a4] hover:bg-blue-50 transition-all group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-8 h-8 text-[#0066a4] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM12 17l-4-4h2.5v-3h3v3H16l-4 4z" />
                  </svg>
                  <span className="text-sm text-gray-700 group-hover:text-[#003366] font-medium leading-snug">{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <NewsletterCTA />
    </>
  );
}

