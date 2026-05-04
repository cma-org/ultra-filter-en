import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/shared/PageHero';
import NewsletterCTA from '@/components/shared/NewsletterCTA';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { processFiltration } from '@/content/products/process-filtration';
import ContactSidebarPlain from '@/components/shared/ContactSidebarPlain';

const sub = processFiltration.subcategories.find(s => s.slug === 'sm-filters')!;
export const metadata: Metadata = { title: sub.metaTitle, description: sub.metaDescription };

export default function Page() {
  return (
    <>
      <PageHero title={sub.heroTitle || sub.title} subtitle={sub.description} />
      <Breadcrumbs items={[{ label: 'Products', href: '/products' }, { label: 'Process Filtration', href: '/products/process-filtration' }, { label: sub.title, href: `/products/process-filtration/${sub.slug}` }]} />
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="min-w-0 flex-1">
            <h2 className="mb-4 text-4xl font-light text-[#2f9dbf]">SM-Filter</h2>
            <p className="mb-8 max-w-5xl text-[13px] leading-7 text-[#3e3e3e]">
              Stainless steel filter elements used for particle filtration. The range of filter fineness of these
              surface filters ranges from 1 Âµm to 1000 Âµm.
            </p>

            <section className="border border-[#d7d7d7] bg-white">
              <div className="border-b border-[#1f4567]/30 bg-[#0a4c79] px-3 py-1.5 text-xs font-semibold text-white">
                ultrafilter SM
              </div>

              <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-[1fr_210px]">
                <div className="space-y-6 text-[13px] leading-7 text-[#3f3f3f]">
                  <p>
                    ... for the filtration of particles in the degree ranges of 5 micron, 25 micron, 50 micron, 100
                    micron, 250 um
                  </p>
                  <p>
                    pre- and post-filter with absolute separation rate for particle removal from aqueous solutions,
                    water and other liquids as well as gases.
                  </p>
                  <p>
                    The P-SM is made of a regenerateable stainless steel mesh, with stainless steel end caps and
                    external protection. The retention rate ranges from 5 microns to 250 microns.
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative h-[150px] w-[150px] border border-[#d9d9d9] bg-white shadow-sm">
                    <Image
                      src="/images/products/Process%20filtration/SM%20filter.jpg"
                      alt="SM Filter"
                      fill
                      className="object-contain p-2"
                      sizes="150px"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-6 border border-[#d7d7d7] border-x-0 px-4 py-6">
              <h3 className="mb-4 text-[12px] font-bold uppercase tracking-[0.25em] text-[#123f66]">
                Features and Benefits
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-[13px] leading-7 text-[#3f3f3f] marker:text-[#0a4c79]">
                <li>The P-SM offers a particularly economical pre- and final filtration.</li>
                <li>Regeneration of stainless steel mesh in an ultrasonic bath or backwash</li>
                <li>
                  Welded contact points guarantee a constant pore diameter, even under extreme operating conditions
                </li>
                <li>Also suitable for highly viscous liquids</li>
                <li>Withstands a differential pressure of up to 5 bar (flow from the outside to the inside)</li>
                <li>Suitable for operating temperatures of up to 200 oC.</li>
              </ul>
            </section>

            <section className="border border-[#d7d7d7] border-x-0 px-4 py-6">
              <h3 className="mb-4 text-[12px] font-bold uppercase tracking-[0.25em] text-[#123f66]">Application:</h3>
              <ul className="list-disc space-y-2 pl-5 text-[13px] leading-7 text-[#3f3f3f] marker:text-[#0a4c79]">
                <li>Particle Separation</li>
                <li>Water filtration</li>
                <li>Chemicals</li>
                <li>Solvents</li>
                <li>biological fluids</li>
                <li>Pharmacy</li>
                <li>Cosmetics</li>
                <li>Oils</li>
                <li>Food and drinks</li>
                <li>Syrup</li>
                <li>Compressed air and other gases</li>
              </ul>
            </section>

            <section className="border border-[#d7d7d7] border-x-0 px-4 py-5">
              <h3 className="mb-3 text-[12px] font-bold uppercase tracking-[0.25em] text-[#123f66]">Data Sheet</h3>
              <div className="space-y-2 text-[14px]">
                <a href="/downloads" className="block font-semibold text-[#003366] hover:text-[#0066a4]">
                  {'>>'} Download Data Sheet P-SM <span className="font-normal text-[#666]">(749 KB)</span>
                </a>
                <a href="/downloads" className="block font-semibold text-[#003366] hover:text-[#0066a4]">
                  {'>>'} Download Brochure P-SM (GB) <span className="font-normal text-[#666]">(952 KB)</span>
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

