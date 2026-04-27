import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import ContactInfoBlock from '@/components/shared/ContactInfoBlock';
import NewsletterCTA from '@/components/shared/NewsletterCTA';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import JobPostingBanner from '@/components/shared/JobPostingBanner';
import { dryingTechnology } from '@/content/products/drying-technology';

const sub = dryingTechnology.subcategories.find(s => s.slug === 'adsorption-dryers')!;
export const metadata: Metadata = { title: sub.metaTitle, description: sub.metaDescription };

export default function Page() {
  return (
    <>
      <PageHero title={sub.heroTitle || sub.title} subtitle={sub.description} />
      <Breadcrumbs items={[{ label: 'Products', href: '/products' }, { label: 'Drying Technology', href: '/products/drying-technology' }, { label: sub.title, href: `/products/drying-technology/${sub.slug}` }]} />
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 min-w-0">
            <h2 className="mb-6 text-3xl font-light text-[#2f9dbf]">{sub.title}</h2>

            <section className="border-t border-[#d7d7d7] pt-6">
              <div className="border-b border-[#1f4567]/30 bg-[#0a4c79] px-3 py-1.5 text-base font-medium text-white">
                Cold regenerating
              </div>
              <div className="space-y-3 py-4 text-[13px] leading-7 text-[#444]">
                <p>
                  After refrigeration dryers, cold-regenerating adsorption dryers are the most commonly used drying
                  method. These adsorption dryers impress with their reliable operation and simple operation.
                </p>
                <p>
                  Maximum operational reliability with low operating costs and high serviceability are the attributes
                  that stand for this adsorption dryer.
                </p>
                <p>
                  With this drying method, the contaminated desiccant is regenerated with a partial flow of the
                  already dried compressed air.
                </p>
                <p>
                  On average, 10 - 20 % of the compressed air generated is needed for regeneration. Pressure dew points
                  down to -70Â°C can be realized. This corresponds to a residual water content of only 0.0028 g/mÂ³!
                </p>
              </div>
            </section>

            <section className="border-t border-[#d7d7d7] py-8">
              <a
                href="/products/drying-technology/adsorption-dryers/cold-regenerating"
                className="text-[18px] font-semibold text-[#123f66] hover:text-[#0066a4]"
              >
                {'>>'}Here you will find our cold regenerating dryers.
              </a>
            </section>

            <section className="border-t border-[#d7d7d7] pt-6">
              <div className="border-b border-[#1f4567]/30 bg-[#0a4c79] px-3 py-1.5 text-base font-medium text-white">
                Heat regenerating
              </div>
              <div className="space-y-3 py-4 text-[13px] leading-7 text-[#444]">
                <p>
                  Adsorption dryers are typically used at pressure dew points below 0Â°C. Maximum efficiency and the
                  highest operational reliability, combined with low operating costs, are among the great advantages
                  of adsorption dryers.
                </p>
                <p>
                  State-of-the-art technology and selected components and their materials form the basis for maximum
                  operational reliability.
                </p>
                <p>
                  For larger volume flows, heat-regenerating adispensation dryers offer economic advantages in the
                  regeneration of the desiccant.
                </p>
                <p>
                  The consumption of regeneration energy by heaters and blowers is significantly lower than that of
                  cold-refrigerating adidispensation dryers. Pressure dew points down to -70Â°C can be realized.
                  This corresponds to a residual water content of only 0.0028 g/mÂ³!
                </p>
              </div>
            </section>

            <section className="border-t border-[#d7d7d7] py-8">
              <a
                href="/products/drying-technology/adsorption-dryers/heat-regenerating"
                className="text-[18px] font-semibold text-[#123f66] hover:text-[#0066a4]"
              >
                {'>>'}Here you will find our heat-regenerating dryers.
              </a>
            </section>

            <div className="text-right">
              <a href="/products/drying-technology/adsorption-dryers" className="text-sm font-semibold text-[#123f66] hover:text-[#0066a4]">
                Printable Version
              </a>
              <p className="text-sm font-semibold text-[#123f66]">Cold Regenerating</p>
            </div>
          </div>
          <aside className="w-full lg:w-72 shrink-0 space-y-5"><ContactInfoBlock /><JobPostingBanner /></aside>
        </div>
      </div>
      <NewsletterCTA />
    </>
  );
}

