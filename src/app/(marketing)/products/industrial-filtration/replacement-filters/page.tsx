import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/shared/PageHero';
import ContactInfoBlock from '@/components/shared/ContactInfoBlock';
import NewsletterCTA from '@/components/shared/NewsletterCTA';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import JobPostingBanner from '@/components/shared/JobPostingBanner';
import { industrialFiltration } from '@/content/products/industrial-filtration';

const sub = industrialFiltration.subcategories.find(s => s.slug === 'replacement-filters')!;
export const metadata: Metadata = { title: sub.metaTitle, description: sub.metaDescription };

const compatibleBrands = [
  'Atlas Copco',
  'Beko Technologies',
  'Boge',
  'CompAir',
  'Donaldson',
  'Hankison',
  'Ingersoll Rand',
  'Kaeser',
  'Parker Hannifin',
  'Pneumatech',
  'Sullair',
  'and many more',
];

export default function Page() {
  return (
    <>
      <PageHero title={sub.heroTitle || sub.title} subtitle={sub.description} image={sub.image} />
      <Breadcrumbs items={[{ label: 'Products', href: '/products' }, { label: 'Industrial Filtration', href: '/products/industrial-filtration' }, { label: sub.title, href: `/products/industrial-filtration/${sub.slug}` }]} />
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 min-w-0">
            <h2 className="mb-7 text-3xl font-light text-[#006b8f]">Replacement Filters</h2>

            <div className="space-y-6">
              <section className="border border-[#d8d8d8] bg-white shadow-sm">
                <div className="border-b border-[#1f4567]/30 bg-[#0a4c79] px-3 py-1.5 text-xs font-semibold text-white">
                  Compatible Replacement Elements
                </div>
                <div className="grid grid-cols-1 gap-5 p-4 md:grid-cols-[1fr_260px]">
                  <div className="space-y-4 text-sm leading-relaxed text-[#2b2b2b]">
                    <p>
                      ultrafilter supplies high-quality replacement elements that are compatible with most major brands of
                      compressed air filter housings and oil-water separators. All replacement elements are manufactured to
                      the same quality standards as original ultrafilter elements.
                    </p>
                    <p>
                      We maintain a comprehensive database of cross-references to ensure the correct element is identified
                      for every application. If in doubt, contact our technical team with the original element part number
                      and housing model.
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="relative h-[220px] w-full max-w-[240px] overflow-hidden rounded border border-[#d9d9d9] bg-white">
                      <Image
                        src="/images/products/Industrial%20filtration/Replacement%20Filters.jpg"
                        alt="Replacement Filters"
                        fill
                        className="object-contain p-2"
                        sizes="240px"
                      />
                    </div>
                  </div>
                </div>
              </section>

              <section className="border border-[#d8d8d8] bg-white shadow-sm">
                <div className="border-b border-[#1f4567]/30 bg-[#0a4c79] px-3 py-1.5 text-xs font-semibold text-white">
                  Compatible Brands (Selection)
                </div>
                <div className="p-4">
                  <p className="mb-3 text-sm text-[#2b2b2b]">Replacement elements are available for housings from:</p>
                  <ul className="grid grid-cols-1 gap-x-8 gap-y-1 text-sm text-[#1f1f1f] sm:grid-cols-2">
                    {compatibleBrands.map((brand) => (
                      <li key={brand} className="flex items-start gap-2">
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#003366]" />
                        <span>{brand}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section className="border border-[#d8d8d8] bg-white shadow-sm">
                <div className="border-b border-[#1f4567]/30 bg-[#0a4c79] px-3 py-1.5 text-xs font-semibold text-white">
                  How to Order
                </div>
                <div className="space-y-4 p-4">
                  <p className="text-sm leading-relaxed text-[#2b2b2b]">
                    Please contact us with your existing element part number or housing model and we will identify the
                    correct ultrafilter replacement. We can supply single elements or bulk quantities for service
                    contracts.
                  </p>
                  <div className="flex items-center justify-between gap-3 border-t border-[#ececec] pt-3">
                    <a href="/downloads" className="text-sm font-semibold text-[#003366] hover:text-[#0066a4]">
                      {'>>'} Replacement Filter Cross-Reference Guide <span className="font-normal text-[#555]">(EN)</span>
                    </a>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded bg-[#a31515] text-[10px] font-bold text-white shadow">
                      PDF
                    </span>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <aside className="w-full lg:w-72 shrink-0 space-y-5"><ContactInfoBlock /><JobPostingBanner /></aside>
        </div>
      </div>
      <NewsletterCTA />
    </>
  );
}

