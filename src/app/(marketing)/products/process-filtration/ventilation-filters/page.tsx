import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/shared/PageHero';
import NewsletterCTA from '@/components/shared/NewsletterCTA';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { processFiltration } from '@/content/products/process-filtration';

const sub = processFiltration.subcategories.find(s => s.slug === 'ventilation-filters')!;
export const metadata: Metadata = { title: sub.metaTitle, description: sub.metaDescription };

export default function Page() {
  return (
    <>
      <PageHero title={sub.heroTitle || sub.title} subtitle={sub.description} />
      <Breadcrumbs items={[{ label: 'Products', href: '/products' }, { label: 'Process Filtration', href: '/products/process-filtration' }, { label: sub.title, href: `/products/process-filtration/${sub.slug}` }]} />
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="min-w-0 flex-1">
            <h2 className="mb-4 text-3xl font-light text-[#2f9dbf]">Ventilation Filters</h2>
            <p className="mb-6 text-[13px] text-[#4a4a4a]">
              The use of filters ensures the sterility of containers and tanks during emptying or ventilation.
            </p>

            <section className="border border-[#d7d7d7] bg-white">
              <div className="border-b border-[#1f4567]/30 bg-[#0a4c79] px-3 py-1.5 text-xs font-semibold text-white">
                ultrafilter P-BE
              </div>
              <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-[1fr_190px]">
                <div className="space-y-3 text-[13px] leading-6 text-[#3f3f3f]">
                  <p>
                    With a P-BE filter, 100% sterility can be ensured when storing pharmaceutical products,
                    chemicals or foodstuffs.
                  </p>
                  <p>
                    The P-BE is a depth filter with inner and outer protective caps made of stainless steel,
                    consisting of a three-dimensional borosilicate glass depth media.
                  </p>
                  <p>
                    A retention rate of &gt; 99.999%, based on 0.01 um, is achieved during operation. All components
                    meet FDA requirements.
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative h-[150px] w-[150px] border border-[#d9d9d9] bg-white shadow-sm">
                    <Image
                      src="/images/products/Process%20filtration/ultrafilter%20P-BE.jpeg"
                      alt="Ventilation Filter P-BE"
                      fill
                      className="object-contain p-2"
                      sizes="150px"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="border-x border-b border-[#d7d7d7] px-4 py-5">
              <h3 className="mb-3 text-[12px] font-bold uppercase tracking-[0.25em] text-[#123f66]">Data Sheet</h3>
              <div className="space-y-2 text-[14px]">
                <a href="/downloads" className="block font-semibold text-[#003366] hover:text-[#0066a4]">
                  {'>>'} Download Datasheet Vent Filter P-BE <span className="font-normal text-[#666]">(924 KB)</span>
                </a>
                <a href="/downloads" className="block font-semibold text-[#003366] hover:text-[#0066a4]">
                  {'>>'} Download Brochure Vent Filter P-BE (GB){' '}
                  <span className="font-normal text-[#666]">(1,123 KB)</span>
                </a>
              </div>
              <div className="mt-3 flex justify-end">
                <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-[#b62025] text-xs font-bold tracking-wide text-white shadow">
                  PDF
                </div>
              </div>
            </section>

            <section className="mt-6 border border-[#d7d7d7] bg-white">
              <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-[1fr_190px]">
                <div>
                  <h3 className="mb-4 text-[12px] font-bold uppercase tracking-[0.25em] text-[#123f66]">
                    P-BE Filter - Functions and Advantages
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-[13px] leading-6 text-[#3f3f3f] marker:text-[#123f66]">
                    <li>Non-fibre-releasing filter elements.</li>
                    <li>Manufactured without use of binders or other chemical additives.</li>
                    <li>Complies with GMP requirements and is manufactured according to DIN EN ISO 9001.</li>
                    <li>12 different sizes for operation with volume from 3,980 Nm3 / h based on 1 bar.</li>
                    <li>
                      Different element sizes can be used due to modular design. Apart from sterile filters,
                      polypropylene or Teflon membrane filters can be used.
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative h-[150px] w-[150px] border border-[#d9d9d9] bg-white shadow-sm">
                    <Image
                      src="/images/products/Process%20filtration/P-BE%20filter%20.jpeg"
                      alt="P-BE Filter Housing"
                      fill
                      className="object-contain p-2"
                      sizes="150px"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="border-x border-b border-[#d7d7d7] px-4 py-5">
              <h3 className="mb-3 text-[12px] font-bold uppercase tracking-[0.25em] text-[#123f66]">Data Sheet</h3>
              <div className="space-y-2 text-[14px]">
                <a href="/downloads" className="block font-semibold text-[#003366] hover:text-[#0066a4]">
                  {'>>'} Download Datasheet P-BE Housing <span className="font-normal text-[#666]">(370 KB)</span>
                </a>
                <a href="/downloads" className="block font-semibold text-[#003366] hover:text-[#0066a4]">
                  {'>>'} Download Brochure P-BE Housing (GB) <span className="font-normal text-[#666]">(364 KB)</span>
                </a>
              </div>
              <div className="mt-3 flex justify-end">
                <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-[#b62025] text-xs font-bold tracking-wide text-white shadow">
                  PDF
                </div>
              </div>
            </section>
          </div>

          <aside className="w-full shrink-0 space-y-5 lg:w-72">
            <div className="border-b border-[#d9d9d9] pb-4">
              <h3 className="mb-2 text-[13px] font-semibold text-[#123f66]">Language selection</h3>
              <select className="w-full border border-[#cfcfcf] bg-white px-2 py-1 text-xs text-[#555]">
                <option>Select Language</option>
              </select>
              <p className="mt-1 text-[10px] text-[#888]">Powered by Google Translate</p>
            </div>

            <div className="border-b border-[#d9d9d9] pb-4 text-[13px] leading-6 text-[#444]">
              <h3 className="mb-2 font-semibold text-[#123f66]">Contact Now</h3>
              <p className="font-semibold">ultrafilter GmbH</p>
              <p>Otto-Hahn-StraÃŸe 1</p>
              <p>97218 HÃ¶sbach</p>
              <p>Germany</p>
              <p className="mt-2">Tel: +49 (0) 2103 3336-0</p>
              <p>Fax: +49 (0) 2103 3336-36</p>
              <p>
                eMail:{' '}
                <a href="mailto:info@ultra-filter.de" className="font-semibold text-[#003366] hover:text-[#0066a4]">
                  info@ultra-filter.de
                </a>
              </p>
              <p className="mt-2 text-[12px] text-[#666]">Member of VDMA - No. 6136</p>
            </div>

            <div className="border-b border-[#d9d9d9] pb-4">
              <h3 className="mb-2 text-[13px] font-semibold text-[#123f66]">Job advertisement</h3>
              <div className="flex h-24 items-center justify-center bg-gradient-to-r from-[#d8dee8] via-white to-[#c0cadb] text-sm font-semibold text-[#1f4567]">
                Gesucht
              </div>
            </div>

            <div className="border-b border-[#d9d9d9] pb-4">
              <div className="flex h-28 items-center justify-center rounded-full border-4 border-[#1a4d7d] text-center text-[#1a4d7d]">
                <div>
                  <p className="text-4xl font-bold leading-none text-[#c2252b]">24</p>
                  <p className="text-xs font-semibold uppercase tracking-widest">Stunden</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-[13px] font-semibold text-[#123f66]">Ultrafilters worldwide</h3>
              <div className="grid grid-cols-3 gap-2 text-center text-[10px] text-[#555]">
                <div className="border border-[#d9d9d9] p-1">DE</div>
                <div className="border border-[#d9d9d9] p-1">CH</div>
                <div className="border border-[#d9d9d9] p-1">MX</div>
                <div className="border border-[#d9d9d9] p-1">UK</div>
                <div className="border border-[#d9d9d9] p-1">AT</div>
                <div className="border border-[#d9d9d9] p-1">FR</div>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <NewsletterCTA />
    </>
  );
}

