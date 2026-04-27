import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/shared/PageHero';
import ContactInfoBlock from '@/components/shared/ContactInfoBlock';
import NewsletterCTA from '@/components/shared/NewsletterCTA';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import JobPostingBanner from '@/components/shared/JobPostingBanner';
import { dryingTechnology } from '@/content/products/drying-technology';

const sub = dryingTechnology.subcategories.find(s => s.slug === 'membrane-dryers')!;
export const metadata: Metadata = { title: sub.metaTitle, description: sub.metaDescription };

export default function Page() {
  return (
    <>
      <PageHero title={sub.heroTitle || sub.title} subtitle={sub.description} />
      <Breadcrumbs items={[{ label: 'Products', href: '/products' }, { label: 'Drying Technology', href: '/products/drying-technology' }, { label: sub.title, href: `/products/drying-technology/${sub.slug}` }]} />
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 min-w-0">
            <h2 className="mb-4 text-3xl font-light text-[#2f9dbf]">{sub.title}</h2>

            <section className="border border-[#d7d7d7] bg-white">
              <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-[1fr_230px]">
                <div className="space-y-4">
                  <h3 className="text-[24px] font-bold uppercase tracking-[0.28em] text-[#123f66]">
                    ultra.dry UFM membrane dryer
                  </h3>
                  <p className="text-[13px] leading-7 text-[#3f3f3f]">
                    ultra.dry UFM membrane dryers are qualified for point of use applications and for small volume
                    flows. The compressed air flows through a bundle of hollow fibers.
                  </p>
                  <p className="text-[13px] leading-7 text-[#3f3f3f]">
                    As the moist compressed air flows downwards into the bore of the fibre, water vapour diffuses
                    through the walls of the fibres. At the outlet of the device, a small volume of dry compressed air
                    is expanded into the space around the outside of the fibers. The dry air removes the moisture from
                    the outside of the fibers and the exhaust gases into the atmosphere as a moist air stream.
                  </p>
                  <p className="text-[14px] font-semibold text-[#333]">ultra.dry UFM - The membrane dryer with unique features:</p>
                </div>
                <div className="flex items-start justify-center">
                  <div className="relative h-[210px] w-[210px] border border-[#d9d9d9] bg-white shadow-sm">
                    <Image
                      src="/images/products/drying-technology/Membrane%20dryers/UFM%20md.jpg"
                      alt="Membrane Dryer UFM"
                      fill
                      className="object-contain p-2"
                      sizes="210px"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-6 border border-[#d7d7d7] bg-white">
              <div className="border-b border-[#1f4567]/30 bg-[#0a4c79] px-3 py-1.5 text-sm font-medium text-white">
                ultra.dry UFM
              </div>
              <div className="p-4">
                <ul className="list-disc space-y-2 pl-5 text-[13px] leading-7 text-[#3f3f3f] marker:text-[#0a4c79]">
                  <li>
                    14 different sizes with capacities between 2 and 180 m3; / h (at a dew point reduction of 15Â° C)
                    ensure perfect adaptation to the required flow rate.
                  </li>
                  <li>ultra.dry UFM membrane dryers reach pressure dew points down to -40Â°C for a wide range of applications.</li>
                  <li>Each membrane dryer is equipped with a calibrated air purification mixer. No further adjustments are necessary.</li>
                  <li>Due to the non-fiber-releasing membrane, ultra.dry UFM membrane dryers are suitable for medical applications.</li>
                  <li>
                    ultra.dry UFM membrane dryers are extremely efficient due to their new, improved hollow fiber
                    technology. Even with low pressure dew points, only relatively little air purification is required.
                  </li>
                </ul>
              </div>
            </section>

            <section className="border-x border-b border-[#d7d7d7] px-4 py-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="space-y-2 text-[14px]">
                  <a href="/downloads" className="block font-semibold text-[#003366] hover:text-[#0066a4]">
                    {'>>'} Download Datasheet Membrane Dryer D <span className="font-normal text-[#666]">(357 KB)</span>
                  </a>
                  <a href="/downloads" className="block font-semibold text-[#003366] hover:text-[#0066a4]">
                    {'>>'} Download Brochure Membrane Dryer (GB) <span className="font-normal text-[#666]">(1.191 KB)</span>
                  </a>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-[#b62025] text-xs font-bold tracking-wide text-white shadow">
                  PDF
                </div>
              </div>
            </section>

            <section className="mt-8 space-y-8">
              <div>
                <h3 className="mb-2 text-[24px] font-bold uppercase tracking-[0.28em] text-[#123f66]">Easy to Install</h3>
                <p className="text-[13px] leading-7 text-[#3f3f3f]">
                  ultra.dry UFM membrane dryers are designed with easy installation and operation. Easy to connect the
                  inlet and outlet terminals of 1/2&quot; BSP (up to 125 gdp) or 1/4&quot; BSP (type 150 + 180).
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-[24px] font-bold uppercase tracking-[0.28em] text-[#123f66]">Maintenance-Free Operation</h3>
                <p className="text-[13px] leading-7 text-[#3f3f3f]">
                  ultra.dry UFM membrane dryers are maintenance-free, reliable and offer the lowest total cost of
                  ownership.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-[24px] font-bold uppercase tracking-[0.28em] text-[#123f66]">The Right Encore</h3>
                <p className="text-[13px] leading-7 text-[#3f3f3f]">
                  To ensure and extend the service life of the membranes, we recommend the installation of an
                  ultra.pure MF microfilter with fiber technology as a pre-filter.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative h-[300px] w-[420px] max-w-full">
                  <Image
                    src="/images/products/drying-technology/Membrane%20dryers/The%20right%20encore.jpg"
                    alt="Membrane dryer flow schematic"
                    fill
                    className="object-contain"
                    sizes="420px"
                  />
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-[24px] font-bold uppercase tracking-[0.28em] text-[#123f66]">Secure Installation</h3>
                <p className="text-[13px] leading-7 text-[#3f3f3f]">
                  ultra.dry UFM membrane dryers can be installed easily and safely. Pre-filters can be connected
                  directly to the membrane dryer and fixed by a wall bracket, either a single housing or a combination
                  of housings.
                </p>
              </div>
            </section>

            <div className="mt-6 text-right">
              <a href="/products/drying-technology/membrane-dryers" className="text-sm font-semibold text-[#123f66] hover:text-[#0066a4]">
                Printable version
              </a>
            </div>
          </div>
          <aside className="w-full lg:w-72 shrink-0 space-y-5"><ContactInfoBlock /><JobPostingBanner /></aside>
        </div>
      </div>
      <NewsletterCTA />
    </>
  );
}

