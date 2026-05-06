import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/shared/PageHero';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import NewsletterCTA from '@/components/shared/NewsletterCTA';
import ContactSidebarPlain from '@/components/shared/ContactSidebarPlain';

const pageTitle = 'Cold Regenerating Dryers';

export const metadata: Metadata = {
  title: `${pageTitle} | ultrafilter`,
  description:
    'Cold regenerating adsorption dryers for pressure dew points down to -70Â°C. Product overview of compact, heatless, cabinet, maxi, OFA, ALG, AKC and PN40 variants.',
};

function ProductBlock({
  heading,
  intro,
  bullets,
  image,
  imageAlt,
}: {
  heading: string;
  intro: string;
  bullets: string[];
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="mt-6 border border-[#d7d7d7] bg-white">
      <div className="border-b border-[#1f4567]/30 bg-[#0a4c79] px-3 py-1.5 text-sm font-medium text-white">
        {heading}
      </div>
      <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-[1fr_220px]">
        <div className="space-y-4">
          <p className="text-[13px] leading-7 text-[#3f3f3f]">{intro}</p>
          <ul className="list-disc space-y-2 pl-5 text-[13px] leading-7 text-[#3f3f3f] marker:text-[#0a4c79]">
            {bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative h-[220px] w-[190px] border border-[#d9d9d9] bg-white shadow-sm">
            <Image src={image} alt={imageAlt} fill className="object-contain p-2" sizes="190px" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <PageHero title={pageTitle} subtitle="Cold regenerating adsorption dryers for industrial compressed air treatment." />
      <Breadcrumbs
        items={[
          { label: 'Products', href: '/products' },
          { label: 'Drying Technology', href: '/products/drying-technology' },
          { label: 'Adsorption Dryers', href: '/products/drying-technology/adsorption-dryers' },
          { label: pageTitle, href: '/products/drying-technology/adsorption-dryers/cold-regenerating' },
        ]}
      />

      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="min-w-0 flex-1">
            <h2 className="mb-4 text-3xl font-light text-[#2f9dbf]">{pageTitle}</h2>

            <ProductBlock
              heading="ultra.dry compact UDC"
              intro="With the use of an adsorption sticker ultra.dry compact, the operational reliability of the compressed air application can be ensured. As a complete, ready-to-use treatment package, the ultra.dry compact consists of a pre-filter with steam trap, adsorption dryer and post-filter."
              bullets={[
                'Compact design',
                'Installation vertical and horizontal',
                'Volume flows from 7 mÂ³/h - 620 mÂ³/h',
                'Pressure dew points down to -70Â°C',
                'Service-friendly integrated broadband power supply for 100-240 VAC, 12-24 VDC, 50-60 Hz and can therefore be used worldwide',
              ]}
              image="/images/products/drying-technology/Refrigeration%20Dryers/Adsorption%20Dryers.jpg"
              imageAlt="ultra.dry compact UDC"
            />

            <section className="border-x border-b border-[#d7d7d7] px-4 py-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="space-y-2 text-[14px]">
                  <a href="/downloads" className="block font-semibold text-[#003366] hover:text-[#0066a4]">
                    {'>>'}Download brochure ultra.dry compact <span className="font-normal text-[#666]">(817 KB)</span>
                  </a>
                  <a href="/downloads" className="block font-semibold text-[#003366] hover:text-[#0066a4]">
                    {'>>'}Download brochure ultra.dry compact (GB) <span className="font-normal text-[#666]">(804 KB)</span>
                  </a>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-[#b62025] text-xs font-bold tracking-wide text-white shadow">
                  PDF
                </div>
              </div>
            </section>

            <ProductBlock
              heading="Heatless HL"
              intro="The compact design of the HeatLess HL adsorption dryer saves installation space. The symmetrical design with the central arrangement of the UPEC control system allows service-friendly work. All components are accessible from the operating side of the dryer and are therefore easy to maintain."
              bullets={[
                'High energy efficiency',
                'High capacity reserves',
                'Reliability',
                'Operational reliability, easy maintenance',
                'UPEC 2012 Electronics Control',
                'High corrosion resistance due to galvanized pipelines',
                'Pre- and post-filters (pre-filters incl. steam traps)',
                'Pressure dew point â€“ 20 Â°C up to â€“ 70 Â°C',
                'Grounding connection',
                'Volume flows from 50 m3;3/h â€“ 1000 m3;3/h',
              ]}
              image="/images/products/drying-technology/Cold%20Regenerating%20Dryers/Heatless%20HL.jpg"
              imageAlt="Heatless HL"
            />

            <section className="border-x border-b border-[#d7d7d7] px-4 py-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="space-y-2 text-[14px]">
                  <a href="/downloads" className="block font-semibold text-[#003366] hover:text-[#0066a4]">
                    {'>>'}Download Datasheet Heatless HL <span className="font-normal text-[#666]">(1,137 KB)</span>
                  </a>
                  <a href="/downloads" className="block font-semibold text-[#003366] hover:text-[#0066a4]">
                    {'>>'}Download Brochure Heatless HL (GB) <span className="font-normal text-[#666]">(1,155 KB)</span>
                  </a>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-[#b62025] text-xs font-bold tracking-wide text-white shadow">
                  PDF
                </div>
              </div>
            </section>

            <ProductBlock
              heading="Heatless HL Cabinet"
              intro="The high-performance Heatless HL Kabinett ultra.pure adsorption dryers impress with their compact design. Pre-filters, steam traps, adsorbent dryers and post-filters are housed in a compact sheet metal housing."
              bullets={[
                'High energy efficiency',
                'High capacity reserves',
                'Reliability',
                'Operational reliability, easy maintenance',
                'UPEC 2012 Electronics Control',
                'High corrosion resistance due to galvanized pipelines',
                'Pre- and post-filters (pre-filters incl. steam traps)',
                'Pressure dew point â€“ 20 Â°C up to â€“ 70 Â°C',
                'Volume flows from 50 m3;3/h â€“ 1000 m3;3/h',
              ]}
              image="/images/products/drying-technology/Cold%20Regenerating%20Dryers/Heatless%20HL%20Cabinet.jpg"
              imageAlt="Heatless HL Cabinet"
            />

            <ProductBlock
              heading="Heatless HL Maxi"
              intro="The HeatLess HL MAXI adsorption dryers offer the highest reliability and operational reliability even with larger volume flows. Pneumatic shut-off valves and the electronic control system guarantee optimal operation of the dryer."
              bullets={[
                'Pneumatic butterfly valves',
                'UPEC 2012 Electronics Control',
                'Pneumatic box for sensitive components',
                'Pressure dew point â€“ 20 Â°C up to â€“ 70 Â°C',
                'Volume flows from 1400 m3;3/h â€“ 9500 m3;3/h',
                'High corrosion resistance due to HT-galvanized piping',
              ]}
              image="/images/products/drying-technology/Cold%20Regenerating%20Dryers/Heatless%20HL%20Maxi.jpg"
              imageAlt="Heatless HL Maxi"
            />

            <ProductBlock
              heading="OFA"
              intro="The OFA high-performance adsorption dryers impress with their compact design. These oil-free treatment plants impress with their high operational reliability. The three-stage pre-filtration, steam trap, adsorbent dryer and post-filter are housed in a compact sheet metal housing."
              bullets={[
                'Three-stage pre-filtration',
                'Differential pressure gauge for monitoring the second pre-filter',
                'Oil Breakthrough Stopcock',
                'UPEC 2012 Electronics Control',
                'Pressure dew point â€“ 20 Â°C up to â€“ 70 Â°C',
                'Volume flows from 50 m3;3/h â€“ 1000 m3;3/h',
              ]}
              image="/images/products/drying-technology/Cold%20Regenerating%20Dryers/OFA.jpg"
              imageAlt="OFA adsorption dryer"
            />

            <ProductBlock
              heading="ALG"
              intro="The ultra.pure breathing air units ALG 0050 â€“ 375 are adsorption dryer-based treatment devices for the provision of breathing air in compliance with all relevant international standards and relevant medical regulations."
              bullets={[
                'Two-stage pre-filtration',
                'UPEC 2012 Electronics Control',
                'Pressure dew point â€“ 20 Â°C up to â€“ 40 Â°C',
                'Volume flows from 50 m3;3/h â€“ 375 m3;3/h',
              ]}
              image="/images/products/drying-technology/Cold%20Regenerating%20Dryers/OFA.jpg"
              imageAlt="ALG breathing air device"
            />

            <section className="border-x border-b border-[#d7d7d7] px-4 py-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="space-y-2 text-[14px]">
                  <a href="/downloads" className="block font-semibold text-[#003366] hover:text-[#0066a4]">
                    {'>>'}Download Data Sheet Breathing Air Device ALG{' '}
                    <span className="font-normal text-[#666]">(695 KB)</span>
                  </a>
                  <a href="/downloads" className="block font-semibold text-[#003366] hover:text-[#0066a4]">
                    {'>>'}Download Brochure Air Breathing System ALG (GB){' '}
                    <span className="font-normal text-[#666]">(402 KB)</span>
                  </a>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-[#b62025] text-xs font-bold tracking-wide text-white shadow">
                  PDF
                </div>
              </div>
            </section>

            <ProductBlock
              heading="AKC"
              intro="Activated carbon adsorbers AKC are used for the filtration of oil particles and aerosols. In addition, they absorb oil vapours and guarantee a residual oil content of less than 0.003 ppm after drying. An oil indicator monitors the oil content of the adsorber."
              bullets={['Volume flows 0050 â€“ 9500 mÂ³/h', 'Oil Indicator', 'Pressure gauge']}
              image="/images/products/drying-technology/Cold%20Regenerating%20Dryers/AKC.jpg"
              imageAlt="AKC activated carbon adsorber"
            />

            <ProductBlock
              heading="Heatless HLP PN40"
              intro="The HeatLess HLP PN40 dryer convinces with its compact design. High-pressure pre- and post-filters as well as an electronic steam trap guarantee an optimal and reliable process, as do the pneumatically controlled ball valves."
              bullets={[
                'Stainless steel filter housing',
                'UPEC 2008 Electronics Control',
                'Ermetro screw connection',
                'Grounding connection',
              ]}
              image="/images/products/drying-technology/Cold%20Regenerating%20Dryers/Heatless%20HLP%20PN40.jpg"
              imageAlt="Heatless HLP PN40"
            />

            <div className="mt-8 text-right">
              <a
                href="/products/drying-technology/adsorption-dryers/cold-regenerating"
                className="text-sm font-semibold text-[#123f66] hover:text-[#0066a4]"
              >
                Printable Version
              </a>
              <p className="text-sm font-semibold text-[#123f66]">{pageTitle}</p>
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



