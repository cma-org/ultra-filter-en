import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/shared/PageHero';
import NewsletterCTA from '@/components/shared/NewsletterCTA';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { processFiltration } from '@/content/products/process-filtration';
import ContactSidebarPlain from '@/components/shared/ContactSidebarPlain';

const sub = processFiltration.subcategories.find(s => s.slug === 'process-filter-housings')!;
export const metadata: Metadata = { title: sub.metaTitle, description: sub.metaDescription };

export default function Page() {
  return (
    <>
      <PageHero title={sub.heroTitle || sub.title} subtitle={sub.description} />
      <Breadcrumbs items={[{ label: 'Products', href: '/products' }, { label: 'Process Filtration', href: '/products/process-filtration' }, { label: sub.title, href: `/products/process-filtration/${sub.slug}` }]} />
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="min-w-0 flex-1">
            <h2 className="mb-4 text-3xl font-light text-[#2f9dbf]">{sub.title}</h2>

            <section className="border border-[#d7d7d7] bg-white">
              <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-[1fr_180px]">
                <div className="space-y-3 text-[13px] leading-6 text-[#3f3f3f]">
                  <p>
                    The stainless steel housings P-EG are available to match the sterile filters. The series consists
                    of 12 single housings (1 filter element) and 6 multi housings (up to 19 filter elements).
                  </p>
                  <p>Both housing variants are available in 1.4301 (V2A) and 1.4404 (V4A) stainless steel.</p>
                  <p>All housings have the usual connections for the ultrafilter filter elements.</p>
                  <p>
                    Design, testing and manufacturing according to AD2000. The classification and acceptance of the
                    housings is carried out in accordance with PED 97/23/EC for fluids of fluid group 2.
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative h-[150px] w-[150px] border border-[#d9d9d9] bg-white shadow-sm">
                    <Image
                      src="/images/products/Process%20filtration/Process%20Filter%20Housings%20(P%20EG).jpg"
                      alt="Process Filter Housings (P-EG)"
                      fill
                      className="object-contain p-2"
                      sizes="150px"
                    />
                  </div>
                </div>
              </div>

              <div className="border-t border-[#1f4567]/30 bg-[#0a4c79] px-3 py-1.5 text-xs font-semibold text-white">
                ultrafilter P-EG
              </div>
            </section>

            <section className="mt-6 space-y-5">
              <div className="border border-[#dcdcdc]">
                <h3 className="border-b border-[#e5e5e5] px-4 py-2 text-[12px] font-bold uppercase tracking-[0.2em] text-[#123f66]">
                  P-EG 0006-0192
                </h3>
                <table className="w-full border-collapse text-[12px] text-[#444]">
                  <tbody>
                    <tr className="border-b border-[#e8e8e8]">
                      <td className="w-1/2 px-4 py-1.5">PS :</td>
                      <td className="px-4 py-1.5">16 bar</td>
                    </tr>
                    <tr className="border-b border-[#e8e8e8]">
                      <td className="px-4 py-1.5">Temperature :</td>
                      <td className="px-4 py-1.5">-25 / + 150 Â°C</td>
                    </tr>
                    <tr className="border-b border-[#e8e8e8]">
                      <td className="px-4 py-1.5">Connections :</td>
                      <td className="px-4 py-1.5">ASA</td>
                    </tr>
                    <tr className="border-b border-[#e8e8e8]">
                      <td className="px-4 py-1.5" />
                      <td className="px-4 py-1.5">BSP</td>
                    </tr>
                    <tr className="border-b border-[#e8e8e8]">
                      <td className="px-4 py-1.5" />
                      <td className="px-4 py-1.5">NPT</td>
                    </tr>
                    <tr className="border-b border-[#e8e8e8]">
                      <td className="px-4 py-1.5" />
                      <td className="px-4 py-1.5">DIN Flange</td>
                    </tr>
                    <tr className="border-b border-[#e8e8e8]">
                      <td className="px-4 py-1.5" />
                      <td className="px-4 py-1.5">ANSI Flange</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-1.5" />
                      <td className="px-4 py-1.5">Others on request</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="border border-[#dcdcdc]">
                <h3 className="border-b border-[#e5e5e5] px-4 py-2 text-[12px] font-bold uppercase tracking-[0.2em] text-[#123f66]">
                  P-EG 0288
                </h3>
                <table className="w-full border-collapse text-[12px] text-[#444]">
                  <tbody>
                    <tr className="border-b border-[#e8e8e8]">
                      <td className="w-1/2 px-4 py-1.5">PS :</td>
                      <td className="px-4 py-1.5">12 bar</td>
                    </tr>
                    <tr className="border-b border-[#e8e8e8]">
                      <td className="px-4 py-1.5">Temperature :</td>
                      <td className="px-4 py-1.5">-25 / + 150 Â°C</td>
                    </tr>
                    <tr className="border-b border-[#e8e8e8]">
                      <td className="px-4 py-1.5">Connections :</td>
                      <td className="px-4 py-1.5">ASA</td>
                    </tr>
                    <tr className="border-b border-[#e8e8e8]">
                      <td className="px-4 py-1.5" />
                      <td className="px-4 py-1.5">BSP</td>
                    </tr>
                    <tr className="border-b border-[#e8e8e8]">
                      <td className="px-4 py-1.5" />
                      <td className="px-4 py-1.5">NPT</td>
                    </tr>
                    <tr className="border-b border-[#e8e8e8]">
                      <td className="px-4 py-1.5" />
                      <td className="px-4 py-1.5">DIN Flange</td>
                    </tr>
                    <tr className="border-b border-[#e8e8e8]">
                      <td className="px-4 py-1.5" />
                      <td className="px-4 py-1.5">ANSI Flange</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-1.5" />
                      <td className="px-4 py-1.5">Others on request</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="border border-[#dcdcdc]">
                <h3 className="border-b border-[#e5e5e5] px-4 py-2 text-[12px] font-bold uppercase tracking-[0.2em] text-[#123f66]">
                  P-EG 0432-1920
                </h3>
                <table className="w-full border-collapse text-[12px] text-[#444]">
                  <tbody>
                    <tr className="border-b border-[#e8e8e8]">
                      <td className="w-1/2 px-4 py-1.5">PS :</td>
                      <td className="px-4 py-1.5">10 bar</td>
                    </tr>
                    <tr className="border-b border-[#e8e8e8]">
                      <td className="px-4 py-1.5">Temperature :</td>
                      <td className="px-4 py-1.5">-25 / + 150 Â°C</td>
                    </tr>
                    <tr className="border-b border-[#e8e8e8]">
                      <td className="px-4 py-1.5">Connections :</td>
                      <td className="px-4 py-1.5">ASA</td>
                    </tr>
                    <tr className="border-b border-[#e8e8e8]">
                      <td className="px-4 py-1.5" />
                      <td className="px-4 py-1.5">BSP</td>
                    </tr>
                    <tr className="border-b border-[#e8e8e8]">
                      <td className="px-4 py-1.5" />
                      <td className="px-4 py-1.5">NPT</td>
                    </tr>
                    <tr className="border-b border-[#e8e8e8]">
                      <td className="px-4 py-1.5" />
                      <td className="px-4 py-1.5">DIN Flange</td>
                    </tr>
                    <tr className="border-b border-[#e8e8e8]">
                      <td className="px-4 py-1.5" />
                      <td className="px-4 py-1.5">ANSI Flange</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-1.5" />
                      <td className="px-4 py-1.5">Others on request</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <p className="mt-5 text-[12px] text-[#666]">Larger housings on request.</p>

            <section className="mt-4 border-t border-[#d7d7d7] pt-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="space-y-2 text-[14px]">
                  <a href="/downloads" className="block font-semibold text-[#003366] hover:text-[#0066a4]">
                    {'>>'} Download Datasheet Process Filter Housing P-EG{' '}
                    <span className="font-normal text-[#666]">(439 KB)</span>
                  </a>
                  <a href="/downloads" className="block font-semibold text-[#003366] hover:text-[#0066a4]">
                    {'>>'} Download Brochure Processfilter Housing P EG (GB){' '}
                    <span className="font-normal text-[#666]">(433 KB)</span>
                  </a>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-[#b62025] text-xs font-bold tracking-wide text-white shadow">
                  PDF
                </div>
              </div>
            </section>

            <div className="mt-6 text-right">
              <a
                href="/products/process-filtration/process-filter-housings"
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



