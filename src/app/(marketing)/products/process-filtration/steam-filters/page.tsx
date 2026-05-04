import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/shared/PageHero';
import NewsletterCTA from '@/components/shared/NewsletterCTA';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { processFiltration } from '@/content/products/process-filtration';
import ContactSidebarPlain from '@/components/shared/ContactSidebarPlain';

const sub = processFiltration.subcategories.find(s => s.slug === 'steam-filters')!;
export const metadata: Metadata = { title: sub.metaTitle, description: sub.metaDescription };

export default function Page() {
  return (
    <>
      <PageHero title={sub.heroTitle || sub.title} subtitle={sub.description} />
      <Breadcrumbs items={[{ label: 'Products', href: '/products' }, { label: 'Process Filtration', href: '/products/process-filtration' }, { label: sub.title, href: `/products/process-filtration/${sub.slug}` }]} />
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="min-w-0 flex-1">
            <h2 className="mb-6 text-3xl font-light text-[#2f9dbf]">Dampffilter (P)-GS</h2>

            <section className="border border-[#d7d7d7] bg-white">
              <div className="border-b border-[#1f4567]/30 bg-[#0a4c79] px-3 py-1.5 text-xs font-semibold text-white">
                ultrafilter P-GS
              </div>

              <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-[1fr_180px]">
                <div className="space-y-3 text-[14px] leading-6 text-[#434343]">
                  <p>
                    The ultrafilter P-GS filter is designed to remove particles from gases, liquids and water vapour.
                  </p>
                  <p>
                    The P-GS is made from a regenerateable, seamless filter tube made of sintered stainless steel.
                  </p>
                  <p>The retention rate ranges from 1 to 25 microns.</p>
                </div>

                <div className="flex items-center justify-center">
                  <div className="relative h-[150px] w-[140px] border border-[#d9d9d9] bg-white p-2 shadow-sm">
                    <Image
                      src="/images/products/Process%20filtration/ultrafilter%20P-GS.jpg"
                      alt="Steam Filters (P)-GS"
                      fill
                      className="object-contain p-2"
                      sizes="140px"
                    />
                  </div>
                </div>
              </div>

              <div className="border-t border-[#d7d7d7] px-4 py-6">
                <h3 className="mb-4 text-[12px] font-bold uppercase tracking-[0.25em] text-[#123f66]">
                  Features and Benefits
                </h3>
                <ul className="list-disc space-y-2 pl-5 text-[13px] leading-6 text-[#3f3f3f] marker:text-[#123f66]">
                  <li>Good resistance to most liquids, gases and vapours.</li>
                  <li>
                    The porosity level is more than 50% and ensures a high particle and dirt resistance as well as a
                    good flow rate at low differential pressure.
                  </li>
                  <li>Regeneration through ultrasonic bath.</li>
                  <li>18 different sizes for application volumes from 60 to 23,010 Nm3/h based on 7 bar.</li>
                  <li>Complies with the requirements of the European directive 97/23/EC for pressure vessels.</li>
                  <li>Plug-in connection ensures that the elements remain securely fixed at all times.</li>
                  <li>Different size elements can be installed due to the modular design.</li>
                </ul>
              </div>

              <div className="border-t border-[#d7d7d7] px-4 py-5">
                <h3 className="mb-3 text-[12px] font-bold uppercase tracking-[0.25em] text-[#123f66]">Data Sheet</h3>
                <div className="space-y-2 text-[14px]">
                  <a href="/downloads" className="block font-semibold text-[#003366] hover:text-[#0066a4]">
                    {'>>'} Download Datasheet P-GS <span className="font-normal text-[#666]">(1,343 KB)</span>
                  </a>
                  <a href="/downloads" className="block font-semibold text-[#003366] hover:text-[#0066a4]">
                    {'>>'} Download Brochure P-GS (GB) <span className="font-normal text-[#666]">(1,551 KB)</span>
                  </a>
                </div>
                <div className="mt-4 flex justify-end">
                  <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-[#b62025] text-xs font-bold tracking-wide text-white shadow">
                    PDF
                  </div>
                </div>
              </div>
            </section>

            <div className="mt-6 text-right">
              <a href="/products/process-filtration/steam-filters" className="text-sm font-semibold text-[#1f4567] hover:text-[#0066a4]">
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

            <div>
              <h3 className="mb-2 text-[13px] font-semibold text-[#123f66]">Ultrafilters worldwide</h3>
              <p className="text-sm text-[#555]">India · Global ultrafilter network</p>
            </div>
          </aside>
        </div>
      </div>
      <NewsletterCTA />
    </>
  );
}

