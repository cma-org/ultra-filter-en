import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/shared/PageHero';
import NewsletterCTA from '@/components/shared/NewsletterCTA';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { processFiltration } from '@/content/products/process-filtration';
import ContactSidebarPlain from '@/components/shared/ContactSidebarPlain';

const sub = processFiltration.subcategories.find(s => s.slug === 'industrial-as-process')!;
export const metadata: Metadata = { title: sub.metaTitle, description: sub.metaDescription };

export default function Page() {
  return (
    <>
      <PageHero title={sub.heroTitle || sub.title} subtitle={sub.description} />
      <Breadcrumbs items={[{ label: 'Products', href: '/products' }, { label: 'Process Filtration', href: '/products/process-filtration' }, { label: sub.title, href: `/products/process-filtration/${sub.slug}` }]} />
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="min-w-0 flex-1">
            <h2 className="mb-4 text-3xl font-light text-[#2f9dbf]">
Industrial as Process</h2>

            <section className="border border-[#d7d7d7] bg-white">
              <div className="border-b border-[#1f4567]/30 bg-[#0a4c79] px-3 py-1.5 text-xs font-semibold text-white">
                ultrafilter P-FF/P-MF/PSMF
              </div>
              <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-[1fr_220px]">
                <div className="space-y-3 text-[13px] leading-6 text-[#3f3f3f]">
                  <p>
                    Ultrafilter high-performance depth filter for the removal of water and oil aerosols as well as
                    compressed air and gases.
                  </p>
                  <p>
                    Thanks to the unique combination of binder-free, non-woven filter media and pleated technology, a
                    reduction in energy costs of 70% is achieved as well as improved filter performance.
                  </p>
                  <p>
                    The new filter material ultrafilter is oleophobic, which means that oil and water are actively
                    repelled, so that the differential pressure and thus the operating costs are reduced to a minimum
                    compared to conventional filter elements.
                  </p>
                  <p>You will get obvious benefits when you use the new pleated ultrafilter high performance filter element:</p>
                  <ul className="list-disc space-y-1 pl-5 marker:text-[#0a4c79]">
                    <li>Low differential pressure</li>
                    <li>Improved filter performance</li>
                    <li>Greater dirt holding capacity</li>
                    <li>70% lower energy costs</li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative h-[180px] w-[180px] border border-[#d9d9d9] bg-white shadow-sm">
                    <Image
                      src="/images/products/process-filtration/industrial-as-process.jpg"
                      alt="Industrial as Process"
                      fill
                      className="object-contain p-2"
                      sizes="180px"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-6 border-t border-[#d7d7d7] pt-6 text-[13px] leading-6 text-[#3f3f3f]">
              <h3 className="mb-3 text-[12px] font-bold uppercase tracking-[0.25em] text-[#123f66]">Benefits of Innovation</h3>
              <p className="mb-3">
                The quality of filter elements is increasingly important; firstly because the requirements for clean
                compressed air and technical gases are constantly being raised, and secondly because awareness of the
                environment and energy efficiency is increasing.
              </p>
              <p>
                Ultrafilter has once again shown that it is one of the most innovative suppliers on the market with
                the introduction of its new ultrafilter high-performance filter elements with an efficiency of
                99.9999%.
              </p>
            </section>

            <section className="mt-6 border-t border-[#d7d7d7] pt-6 text-[13px] leading-6 text-[#3f3f3f]">
              <h3 className="mb-3 text-[12px] font-bold uppercase tracking-[0.25em] text-[#123f66]">450% More Filter Area</h3>
              <p>
                The secret of this great increase in performance lies in the folding of the filter media. The folding
                process mechanically folds the fleece, making the filter area 450% larger than that of a conventional
                filter element.
              </p>
            </section>

            <section className="mt-6 border-t border-[#d7d7d7] pt-6">
              <h3 className="mb-3 text-[12px] font-bold uppercase tracking-[0.25em] text-[#123f66]">Applications</h3>
              <ul className="list-disc space-y-2 pl-5 text-[13px] leading-6 text-[#3f3f3f] marker:text-[#0a4c79]">
                <li>Chemical and petrochemical industry</li>
                <li>Pharmacy</li>
                <li>Food &amp; Beverage Industry</li>
                <li>Plastic Industry</li>
                <li>Process Filtration</li>
                <li>Air Instrumentation</li>
              </ul>
            </section>

            <div className="mt-8 text-right">
              <a
                href="/products/process-filtration/industrial-as-process"
                className="text-sm font-semibold text-[#1f4567] hover:text-[#0066a4]"
              >
                Printable version
              </a>
            </div>
          </div>

          <aside className="w-full shrink-0 space-y-5 lg:w-72">
            <div className="border-b border-[#d9d9d9] pb-4">
              <h3 className="mb-2 text-[13px] font-semibold text-[#123f66]">Language selection</h3>
              <select className="w-full border border-[#cfcfcf] bg-white px-2 py-1 text-xs text-[#555]">
                <option>Select Language</option>
              </select>
              <p className="mt-1 text-[10px] text-[#888]">Powered by Google Translate</p>
            </div>

            <ContactSidebarPlain />

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

            <div className="border-b border-[#d9d9d9] pb-4">
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

            <div>
              <button
                type="button"
                className="w-full rounded-full bg-gradient-to-b from-[#45b4f0] to-[#0b6bb2] px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white shadow"
              >
                Newsletter
              </button>
            </div>
          </aside>
        </div>
      </div>
      <NewsletterCTA />
    </>
  );
}

