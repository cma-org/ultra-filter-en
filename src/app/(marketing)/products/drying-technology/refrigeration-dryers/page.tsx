import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/shared/PageHero';
import NewsletterCTA from '@/components/shared/NewsletterCTA';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { dryingTechnology } from '@/content/products/drying-technology';

const sub = dryingTechnology.subcategories.find(s => s.slug === 'refrigeration-dryers')!;
export const metadata: Metadata = { title: sub.metaTitle, description: sub.metaDescription };

export default function Page() {
  return (
    <>
      <PageHero title={sub.heroTitle || sub.title} subtitle={sub.description} />
      <Breadcrumbs items={[{ label: 'Products', href: '/products' }, { label: 'Drying Technology', href: '/products/drying-technology' }, { label: sub.title, href: `/products/drying-technology/${sub.slug}` }]} />
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="min-w-0 flex-1">
            <h2 className="mb-4 text-3xl font-light text-[#2f9dbf]">{sub.title}</h2>

            <section className="border border-[#d7d7d7] bg-white">
              <div className="border-b border-[#1f4567]/30 bg-[#0a4c79] px-3 py-1.5 text-xs font-semibold text-white">
                ultra.dry UD 50 Hz
              </div>
              <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-[1fr_180px]">
                <ul className="list-disc space-y-2 pl-5 text-[13px] leading-6 text-[#3f3f3f] marker:text-[#0a4c79]">
                  <li>3°C Dew Point</li>
                  <li>Up to 50% energy savings</li>
                  <li>Improved welds to reduce leakage and for a long service life</li>
                  <li>Easy to install and operate</li>
                  <li>Incl. time-controlled steam trap TD</li>
                  <li>Optionally with level-controlled steam trap CD</li>
                </ul>
                <div className="flex items-center justify-center">
                  <div className="relative h-[120px] w-[160px] border border-[#d9d9d9] bg-white shadow-sm">
                    <Image
                      src="/images/products/drying-technology/Refrigeration%20Dryers/UD%20Hz.jpeg"
                      alt="Refrigeration Dryer ultra.dry UD 50 Hz"
                      fill
                      className="object-contain p-2"
                      sizes="160px"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="border-x border-b border-[#d7d7d7] px-4 py-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="space-y-2 text-[14px]">
                  <a href="/downloads" className="block font-semibold text-[#003366] hover:text-[#e87722]">
                    {'>>'} Download datasheet refrigeration dryer ultra.pulse{' '}
                    <span className="font-normal text-[#666]">(1,159 KB)</span>
                  </a>
                  <a href="/downloads" className="block font-semibold text-[#003366] hover:text-[#e87722]">
                    {'>>'} Download brochure Refrigeration Dryer ultra.pulse (GB){' '}
                    <span className="font-normal text-[#666]">(304 KB)</span>
                  </a>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-[#b62025] text-xs font-bold tracking-wide text-white shadow">
                  PDF
                </div>
              </div>
            </section>

            <section className="mt-6 border border-[#d7d7d7] bg-white">
              <div className="border-b border-[#1f4567]/30 bg-[#0a4c79] px-3 py-1.5 text-xs font-semibold text-white">
                ultra.dry UD 60 Hz
              </div>
              <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-[1fr_180px]">
                <ul className="list-disc space-y-2 pl-5 text-[13px] leading-6 text-[#3f3f3f] marker:text-[#0a4c79]">
                  <li>Suitable for vessels operating at 60Hz</li>
                  <li>Max. inlet temperature up to 50°C</li>
                  <li>3°C dew point</li>
                  <li>Easy to install and operate</li>
                  <li>Incl. time-controlled steam trap TD</li>
                  <li>Optionally with level-controlled steam trap CD</li>
                </ul>
                <div className="flex items-center justify-center">
                  <div className="relative h-[120px] w-[160px] border border-[#d9d9d9] bg-white shadow-sm">
                    <Image
                      src="/images/products/drying-technology/Refrigeration%20Dryers/UD%20Hz.jpeg"
                      alt="Refrigeration Dryer ultra.dry UD 60 Hz"
                      fill
                      className="object-contain p-2"
                      sizes="160px"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="border-x border-b border-[#d7d7d7] px-4 py-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="space-y-2 text-[14px]">
                  <a href="/downloads" className="block font-semibold text-[#003366] hover:text-[#e87722]">
                    {'>>'} Download datasheet refrigeration dryer ultra.pulse{' '}
                    <span className="font-normal text-[#666]">(1,159 KB)</span>
                  </a>
                  <a href="/downloads" className="block font-semibold text-[#003366] hover:text-[#e87722]">
                    {'>>'} Download brochure Refrigeration Dryer ultra.pulse (GB){' '}
                    <span className="font-normal text-[#666]">(304 KB)</span>
                  </a>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-[#b62025] text-xs font-bold tracking-wide text-white shadow">
                  PDF
                </div>
              </div>
            </section>

            <section className="mt-6 border border-[#d7d7d7] bg-white">
              <div className="border-b border-[#1f4567]/30 bg-[#0a4c79] px-3 py-1.5 text-xs font-semibold text-white">
                ultra.dry UDA-UDW
              </div>
              <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-[1fr_180px]">
                <p className="text-[13px] leading-6 text-[#3f3f3f]">
                  The ultra.dry UDA refrigeration dryers are equipped with state-of-the-art microprocessor controls.
                  A detailed digital display provides the user with detailed information; numerous programmable
                  functions allow the dryer operation to be adapted to the specific application requirements.
                </p>
                <div className="flex items-center justify-center">
                  <div className="relative h-[180px] w-[150px] border border-[#d9d9d9] bg-white shadow-sm">
                    <Image
                      src="/images/products/drying-technology/Refrigeration%20Dryers/UDA%20UDW.jpeg"
                      alt="Refrigeration Dryer UDA-UDW"
                      fill
                      className="object-contain p-2"
                      sizes="150px"
                    />
                  </div>
                </div>
              </div>
              <div className="px-4 pb-5">
                <ul className="list-disc space-y-2 pl-5 text-[13px] leading-6 text-[#3f3f3f] marker:text-[#0a4c79]">
                  <li>Air or Water-cooled versions</li>
                  <li>Centrifugal fans</li>
                  <li>Air-cooled condenser with copper fins.</li>
                  <li>Incl. time-controlled steam trap TD</li>
                  <li>Optionally with level-controlled steam trap CD</li>
                </ul>
              </div>
            </section>

            <section className="border-x border-b border-[#d7d7d7] px-4 py-5">
              <h3 className="mb-3 text-[12px] font-bold uppercase tracking-[0.25em] text-[#123f66]">Data Sheet</h3>
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="space-y-2 text-[14px]">
                  <a href="/downloads" className="block font-semibold text-[#003366] hover:text-[#e87722]">
                    {'>>'} Download Data Sheet Refrigeration Dryer UDA-UDW{' '}
                    <span className="font-normal text-[#666]">(385 KB)</span>
                  </a>
                  <a href="/downloads" className="block font-semibold text-[#003366] hover:text-[#e87722]">
                    {'>>'} Download Brochure Refrigeration Dryer UDA UDW (GB){' '}
                    <span className="font-normal text-[#666]">(1,342 KB)</span>
                  </a>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-[#b62025] text-xs font-bold tracking-wide text-white shadow">
                  PDF
                </div>
              </div>
            </section>

            <section className="mt-6 border border-[#d7d7d7] bg-white">
              <div className="border-b border-[#1f4567]/30 bg-[#0a4c79] px-3 py-1.5 text-xs font-semibold text-white">
                ultra.dry UH HP
              </div>
              <div className="p-4">
                <ul className="list-disc space-y-2 pl-5 text-[13px] leading-6 text-[#3f3f3f] marker:text-[#0a4c79]">
                  <li>Pressure limit up to 50 barg</li>
                  <li>constant dew point</li>
                  <li>Stainless steel heat exchanger</li>
                  <li>Easy to install and operate</li>
                  <li>Incl. time-controlled steam trap TD</li>
                  <li>Optionally with level-controlled steam trap CD</li>
                </ul>
              </div>
            </section>

            <div className="mt-6 text-right">
              <a href="/products/drying-technology/refrigeration-dryers" className="text-sm font-semibold text-[#1f4567] hover:text-[#e87722]">
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

            <div className="border-b border-[#d9d9d9] pb-4 text-[13px] leading-6 text-[#444]">
              <h3 className="mb-2 font-semibold text-[#123f66]">Contact Now</h3>
              <p className="font-semibold">ultrafilter GmbH</p>
              <p>Otto-Hahn-Straße 1</p>
              <p>40721 Hilden</p>
              <p>Germany</p>
              <p className="mt-2">Tel: +49 (0) 2103 3336-0</p>
              <p>Fax: +49 (0) 2103 3336-36</p>
              <p>
                eMail:{' '}
                <a href="mailto:info@ultra-filter.de" className="font-semibold text-[#003366] hover:text-[#e87722]">
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
