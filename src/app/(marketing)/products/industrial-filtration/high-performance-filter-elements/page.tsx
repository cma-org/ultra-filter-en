import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/shared/PageHero';
import ContactInfoBlock from '@/components/shared/ContactInfoBlock';
import NewsletterCTA from '@/components/shared/NewsletterCTA';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { industrialFiltration } from '@/content/products/industrial-filtration';

const sub = industrialFiltration.subcategories.find(s => s.slug === 'high-performance-filter-elements')!;

export const metadata: Metadata = { title: sub.metaTitle, description: sub.metaDescription };

const sectionRows = [
  {
    title: 'ultra.pure PE',
    image: '/images/products/Industrial%20filtration/HPFE/ultra%20pure%20pe.jpeg',
    body: 'For efficient water, oil aerosol, and particle removal from compressed air and gases.',
    bullets: [
      'Pure high molecular weight polyethylene media',
      'Particle retention down to 0.5 um',
      'High dirt absorption and low differential pressure',
      'Homogeneous pore structure for optimized separation capacity',
    ],
    downloads: [
      { label: 'Download Data Sheet Filter Element PE', size: '(560 KB)' },
      { label: 'Download Brochure Filter Element PE (GB)', size: '(560 KB)' },
    ],
  },
  {
    title: 'ultra.pure SB',
    image: '/images/products/Industrial%20filtration/HPFE/ultra%20pure%20sb.jpeg',
    body: 'Reliable pre-filtration stage for coarse particles and liquids.',
    bullets: [
      'Lower differential pressure',
      'Improved filtering performance',
      'Greater contamination holding capacity',
    ],
    downloads: [{ label: 'Download Data Sheet Filter Element SB', size: '(540 KB)' }],
  },
  {
    title: 'ultra.pure FF / MF / SMF',
    image: '/images/products/Industrial%20filtration/HPFE/FF%20MF%20SMF.jpeg',
    body: 'Fine and ultra-fine filtration grades for compressed air treatment trains.',
    bullets: [
      'Removes water and oil aerosols in pre-treatment stages',
      'Stable filtration behavior at fluctuating load',
      'Designed for high process reliability',
    ],
    downloads: [
      { label: 'Download Data Sheet Filter Element FF MF SMF', size: '(1,039 KB)' },
      { label: 'Download Brochure Filter Element FF MF SMF (GB)', size: '(1,246 KB)' },
    ],
  },
  {
    title: 'ultra.pure AK',
    image: '/images/products/Industrial%20filtration/HPFE/AK.jpeg',
    body: 'For compressed removal of oil vapors and odors from compressed air.',
    bullets: ['Activated carbon based adsorption stage'],
    downloads: [
      { label: 'Download Data Sheet Filter Element AK', size: '(991 KB)' },
      { label: 'Download Brochure Filter Element AK (GB)', size: '(1,009 KB)' },
    ],
  },
  {
    title: 'ultra.pure AKC',
    image: '/images/products/Industrial%20filtration/HPFE/AKC.jpeg',
    body: 'Specially developed for efficient removal of vapors and odors from compressed air.',
    bullets: [
      'Operating temperature range 1.5 - 45 deg C',
      'Combination of SMF and activated carbon',
    ],
    downloads: [],
  },
  {
    title: 'ultra.pure FPP / MFP / SMFP silicone-free',
    image: '/images/products/Industrial%20filtration/HPFE/FF%20MF%20SMFG%20silicon%20free.jpeg',
    body: 'High-capacity silicone-free media for demanding industrial applications.',
    bullets: [
      '450% larger filter media than standard elements',
      'Free of release agents',
      'Silicone-free',
      'Low differential pressure',
      'Improved filter performance',
      'Greater dirt holding capacity',
      '70% lower energy costs',
    ],
    downloads: [
      { label: 'Download Data Sheet Filter Element FPP MFP SMFP Silicone-free', size: '' },
      { label: 'Download Brochure Filter Element FPP MFP SMFP Silicone-free (GB)', size: '(783 KB)' },
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
            <h2 className="mb-2 text-3xl font-light text-[#006b8f]">High-Performance Filter Elements</h2>
            <h3 className="mb-4 text-base font-semibold uppercase tracking-wide text-[#003366]">ultrafilter - high performance filter</h3>
            <p className="mb-8 max-w-4xl text-sm leading-relaxed text-[#2b2b2b]">
              If you want to remove water, oil aerosols and particles from compressed air and gases, we recommend these filter
              elements. With their technology and pleated design, they are unique in our industry. The filter design can reduce
              energy savings compared to conventional filter elements in the market.
            </p>

            <div className="space-y-7">
              {sectionRows.map((row) => (
                <section key={row.title} className="border border-[#d7d7d7] bg-white shadow-sm">
                  <div className="border-b border-[#1f4567]/30 bg-[#0a4c79] px-3 py-1.5 text-xs font-semibold text-white">
                    {row.title}
                  </div>
                  <div className="grid grid-cols-1 gap-5 p-4 md:grid-cols-[1fr_160px]">
                    <div>
                      <p className="mb-2 text-sm text-[#1f1f1f]">{row.body}</p>
                      <ul className="space-y-1 text-sm text-[#232323]">
                        {row.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-2 leading-snug">
                            <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#003366]" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="relative mx-auto h-[150px] w-[110px]">
                      <Image
                        src={row.image}
                        alt={`${row.title} filter element`}
                        fill
                        className="object-contain"
                        sizes="110px"
                      />
                    </div>
                  </div>

                  {row.downloads.length > 0 && (
                    <div className="space-y-2 border-t border-[#e3e3e3] px-4 py-3">
                      {row.downloads.map((download) => (
                        <div key={download.label} className="flex items-center justify-between gap-3">
                          <a href="/downloads" className="text-sm font-semibold text-[#003366] hover:text-[#0066a4]">
                            {'>>'} {download.label} <span className="font-normal text-[#555]">{download.size}</span>
                          </a>
                          <span className="inline-flex h-9 w-9 items-center justify-center rounded bg-[#a31515] text-[10px] font-bold text-white shadow">
                            PDF
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              ))}
            </div>
          </div>
          <aside className="w-full lg:w-72 shrink-0 space-y-5">
            <ContactInfoBlock />
            
          </aside>
        </div>
      </div>
      <NewsletterCTA />
    </>
  );
}


