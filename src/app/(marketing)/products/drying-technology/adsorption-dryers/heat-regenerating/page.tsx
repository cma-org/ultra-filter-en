import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/shared/PageHero';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import ContactInfoBlock from '@/components/shared/ContactInfoBlock';
import NewsletterCTA from '@/components/shared/NewsletterCTA';

const pageTitle = 'Heat Regenerating Dryers';

export const metadata: Metadata = {
  title: `${pageTitle} | ultrafilter`,
  description:
    'Heat regenerating adsorption dryers from ultrafilter: HRE, VarioBlo, VarioBlo Loop and CompHeat series for efficient compressed air drying.',
};

function SectionWithImage({
  heading,
  description,
  bullets,
  imageSrc,
  imageAlt,
}: {
  heading: string;
  description: string;
  bullets: string[];
  imageSrc: string;
  imageAlt: string;
}) {
  return (
    <section className="mt-6 border border-[#d7d7d7] bg-white">
      <div className="border-b border-[#1f4567]/30 bg-[#0a4c79] px-3 py-1.5 text-sm font-medium text-white">{heading}</div>
      <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-[1fr_220px]">
        <div className="space-y-4">
          <p className="text-[13px] leading-7 text-[#3f3f3f]">{description}</p>
          <ul className="list-disc space-y-2 pl-5 text-[13px] leading-7 text-[#3f3f3f] marker:text-[#0a4c79]">
            {bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative h-[220px] w-[190px] border border-[#d9d9d9] bg-white shadow-sm">
            <Image src={imageSrc} alt={imageAlt} fill className="object-contain p-2" sizes="190px" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <PageHero title={pageTitle} subtitle="Warm regenerating adsorption dryers for high-efficiency compressed air treatment." />
      <Breadcrumbs
        items={[
          { label: 'Products', href: '/products' },
          { label: 'Drying Technology', href: '/products/drying-technology' },
          { label: 'Adsorption Dryers', href: '/products/drying-technology/adsorption-dryers' },
          { label: pageTitle, href: '/products/drying-technology/adsorption-dryers/heat-regenerating' },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 min-w-0">
            <h2 className="mb-4 text-3xl font-light text-[#2f9dbf]">{pageTitle}</h2>

            <SectionWithImage
              heading="ultra.dry HRE"
              description="ultra.dry HRE adsorption dryers are blower air dryers that suck in ambient air and regenerate the desiccant by means of an electric heater. The desiccant is cooled by means of purge air, a small percentage of compressed air that has already dried."
              bullets={[
                'High energy efficiency',
                'High capacity reserves',
                'Reliability',
                'Operational reliability, easy maintenance',
                'Touch display for service- and operation-friendly work',
                'Pneumatic box for the protection of sensitive components',
                'High corrosion resistance due to HT-galvanized piping',
                'Volume flows 0400 m3;3/h - 9500m3;3/h',
                'Pressure dew points down to -40Â°C',
              ]}
              imageSrc="/images/products/drying-technology/Heat%20Regenerating%20Dryers/ultra.dry%20HRE.jpg"
              imageAlt="ultra.dry HRE"
            />

            <section className="border-x border-b border-[#d7d7d7] px-4 py-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="space-y-2 text-[14px]">
                  <a href="/downloads" className="block font-semibold text-[#003366] hover:text-[#0066a4]">
                    {'>>'} Download Datasheet HRE <span className="font-normal text-[#666]">(453 KB)</span>
                  </a>
                  <a href="/downloads" className="block font-semibold text-[#003366] hover:text-[#0066a4]">
                    {'>>'} Download Brochure HRE (GB) <span className="font-normal text-[#666]">(409 KB)</span>
                  </a>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-[#b62025] text-xs font-bold tracking-wide text-white shadow">
                  PDF
                </div>
              </div>
            </section>

            <SectionWithImage
              heading="VarioBlo"
              description="VarioBlo adsorption dryers are blower air dryers that suck in ambient air and regenerate the desiccant by means of an electric heater. The desiccant is cooled by means of ambient air sucked in."
              bullets={[
                'Zero flush, with flush option (Two in One safe operation, easy to maintain)',
                'High energy efficiency',
                'High capacity reserves',
                'Reliability',
                'Operational reliability, easy maintenance',
                'Touch display for service- and operation-friendly work',
                'Pneumatic box for the protection of sensitive components',
                'High corrosion resistance due to HT-galvanized piping',
                'Volume flows 0400 m3;3/h â€“ 9500m3;3/h',
                'Pressure dew points down to -40Â°C',
              ]}
              imageSrc="/images/products/drying-technology/Heat%20Regenerating%20Dryers/VarioBlo.jpeg"
              imageAlt="VarioBlo adsorption dryer"
            />

            <section className="border-x border-b border-[#d7d7d7] px-4 py-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="space-y-2 text-[14px]">
                  <a href="/downloads" className="block font-semibold text-[#003366] hover:text-[#0066a4]">
                    {'>>'}Download Brochure VarioBlo <span className="font-normal text-[#666]">(1.070 KB)</span>
                  </a>
                  <a href="/downloads" className="block font-semibold text-[#003366] hover:text-[#0066a4]">
                    {'>>'}Download Brochure VarioBlo (GB) <span className="font-normal text-[#666]">(1.445 KB)</span>
                  </a>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-[#b62025] text-xs font-bold tracking-wide text-white shadow">
                  PDF
                </div>
              </div>
            </section>

            <SectionWithImage
              heading="VarioBlo Loop"
              description="VarioBlo Loop adsorption dryers are blower air dryers that suck in ambient air and regenerate the desiccant by means of an electric heater. The desiccant is cooled in a closed circuit (loop version) by means of an integrated intercooler."
              bullets={[
                'Zero flush, with flush option (Two in One safe operation, easy to maintain)',
                'High energy efficiency',
                'High capacity reserves',
                'Reliability',
                'Operational reliability, easy maintenance',
                'Touch display for service- and operation-friendly work',
                'Pneumatic box for the protection of sensitive components',
                'High corrosion resistance due to HT-galvanized piping',
                'Volume flows 0400 m3;3/h â€“ 9500m3;3/h',
                'Pressure dew points down to -70Â°C',
              ]}
              imageSrc="/images/products/drying-technology/Heat%20Regenerating%20Dryers/VarioBlo%20Loop.jpg"
              imageAlt="VarioBlo Loop adsorption dryer"
            />

            <section className="border-x border-b border-[#d7d7d7] px-4 py-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="space-y-2 text-[14px]">
                  <a href="/downloads" className="block font-semibold text-[#003366] hover:text-[#0066a4]">
                    {'>>'}Download Brochure VarioBlo <span className="font-normal text-[#666]">(1.070 KB)</span>
                  </a>
                  <a href="/downloads" className="block font-semibold text-[#003366] hover:text-[#0066a4]">
                    {'>>'}Download Brochure VarioBlo (GB) <span className="font-normal text-[#666]">(1.445 KB)</span>
                  </a>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-[#b62025] text-xs font-bold tracking-wide text-white shadow">
                  PDF
                </div>
              </div>
            </section>

            <section className="mt-6 border border-[#d7d7d7] bg-white">
              <div className="border-b border-[#1f4567]/30 bg-[#0a4c79] px-3 py-1.5 text-sm font-medium text-white">CompHeatÂ³</div>
              <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-[1fr_220px]">
                <p className="text-[13px] leading-7 text-[#3f3f3f]">CompHeat90000</p>
                <div className="flex items-center justify-center">
                  <div className="relative h-[160px] w-[220px] border border-[#d9d9d9] bg-white shadow-sm">
                    <Image
                      src="/images/products/drying-technology/Heat%20Regenerating%20Dryers/CompHeat.jpg"
                      alt="CompHeat3 adsorption dryer"
                      fill
                      className="object-contain p-2"
                      sizes="220px"
                    />
                  </div>
                </div>
              </div>
            </section>

            <div className="mt-6 text-right">
              <a
                href="/products/drying-technology/adsorption-dryers/heat-regenerating"
                className="text-sm font-semibold text-[#123f66] hover:text-[#0066a4]"
              >
                Printable Version
              </a>
              <p className="text-sm font-semibold text-[#123f66]">{pageTitle}</p>
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


