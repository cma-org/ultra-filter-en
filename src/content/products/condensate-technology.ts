import type { ProductCategory } from '@/types/product';

export const condensateTechnology: ProductCategory = {
  slug: 'condensate-technology',
  title: 'Condensate Technology',
  description:
    'Complete condensate management for compressed air systems — zero-loss drains, oil-water separators, cyclone separators, storage tanks, and pre/after-coolers.',
  image: '/images/products/condensate-technology.jpg',
  metaTitle: 'Condensate Technology – Drains, Separators & Coolers',
  metaDescription:
    'ultrafilter condensate technology: zero-loss condensate drains (ultra.drain), oil-water separators (ultra.sep), cyclone separators, tanks, and coolers.',
  subcategories: [
    {
      slug: 'condensate-drains',
      title: 'Condensate Drains',
      description: 'Zero-loss electronic condensate drains (ultra.drain) — no compressed air wasted during condensate discharge.',
      image: '/images/products/condensate%20drains.jpg',
      metaTitle: 'Condensate Drains – ultra.drain | ultrafilter',
      metaDescription: 'ultrafilter ultra.drain zero-loss condensate drains — discharge condensate without compressed air losses. Capacitive, level-controlled, and timer variants.',
      heroTitle: 'Condensate Drains – ultra.drain',
      content: [
        {
          heading: 'Zero-Loss Condensate Discharge',
          body: '<p>The ultrafilter <strong>ultra.drain</strong> range of condensate drains uses electronic level sensing to discharge condensate only when present — eliminating the compressed air losses associated with timed solenoid or float drains. This translates directly into energy savings and lower operating costs across the entire compressed air installation.</p><p>The range includes capacitive level-controlled drains, ball-valve drains, and large-volume drains for separators and after-coolers — all with integrated status indication and alarm output.</p>',
          specs: [
            { label: 'Operating pressure', value: '0 – 16 bar' },
            { label: 'Temperature range', value: '+1 °C to +60 °C' },
            { label: 'Power supply', value: '230 V AC / 24 V DC' },
            { label: 'Compressed air loss', value: 'Zero (level-controlled)' },
            { label: 'Alarm output', value: 'Yes — potential-free contact' },
          ],
          datasheets: [
            { label: 'ultra.drain Product Range (EN)', href: '/datasheets/ultrafilter-drain-en.pdf', language: 'EN' },
          ],
        },
      ],
    },
    {
      slug: 'oil-water-separators',
      title: 'Oil-Water Separators',
      description: 'ultra.sep oil-water separators for environmentally safe condensate treatment and disposal.',
      image: '/images/products/oil%20water%20separators.jpg',
      metaTitle: 'Oil-Water Separators – ultra.sep | ultrafilter',
      metaDescription: 'ultrafilter ultra.sep oil-water separators — separate mineral and synthetic compressor oil emulsions from condensate for environmentally compliant disposal.',
      heroTitle: 'Oil-Water Separators – ultra.sep',
      content: [
        {
          heading: 'Environmentally Compliant Condensate Treatment',
          body: '<p>Compressed air condensate contains oil — from compressor lubricants, pipe corrosion inhibitors, and atmospheric contamination. Discharging oily condensate to drain is illegal in most jurisdictions. The ultrafilter <strong>ultra.sep</strong> oil-water separator treats condensate to produce clean water suitable for drain disposal and a small volume of oil concentrate for proper disposal.</p>',
          specs: [
            { label: 'Inlet condensate', value: 'Compressor condensate with mineral or synthetic oil' },
            { label: 'Water quality', value: 'Residual oil content ≤ 20 ppm (discharge to drain)' },
            { label: 'Capacities', value: '15 – 2,000 litres/day condensate throughput' },
            { label: 'No power required', value: 'Gravity-fed operation' },
          ],
        },
      ],
    },
    {
      slug: 'compressed-air-tanks',
      title: 'Compressed Air Tanks',
      description: 'Certified pressure vessels for compressed air storage — steel and stainless steel, horizontal and vertical.',
      image: '/images/products/compressed%20air%20tanks.jpg',
      metaTitle: 'Compressed Air Storage Tanks | ultrafilter',
      metaDescription: 'ultrafilter compressed air storage tanks — CE-certified pressure vessels in carbon steel and stainless steel, from 10 to 10,000 litres.',
      heroTitle: 'Compressed Air Storage Tanks',
      content: [
        {
          heading: 'CE-Certified Pressure Vessels',
          body: '<p>ultrafilter compressed air storage tanks are CE-certified pressure vessels complying with the European Pressure Equipment Directive (PED 2014/68/EU). Available in carbon steel or stainless steel, in horizontal and vertical configurations, from 10 to 10,000 litres capacity, these tanks provide buffer storage and system stability for any compressed air installation.</p>',
          specs: [
            { label: 'Capacity range', value: '10 – 10,000 litres' },
            { label: 'Max. working pressure', value: '11 bar / 16 bar' },
            { label: 'Material', value: 'Carbon steel (painted) / 316L stainless steel' },
            { label: 'Orientation', value: 'Vertical or horizontal' },
            { label: 'Certification', value: 'CE / PED 2014/68/EU' },
          ],
        },
      ],
    },
    {
      slug: 'cyclone-separators',
      title: 'Cyclone Separators',
      description: 'AG-Z cyclone separators for bulk liquid and particle removal from compressed air — no filter element required.',
      image: '/images/products/cyclone%20seperators.jpg',
      metaTitle: 'Cyclone Separators AG-Z | ultrafilter',
      metaDescription: 'ultrafilter AG-Z cyclone separators — centrifugal separation of bulk water and solid particles from compressed air. No consumables, capacities 125–2,250 m³/h.',
      heroTitle: 'Cyclone Separators – AG-Z',
      content: [
        {
          heading: 'Centrifugal Pre-Separation — No Consumables',
          body: '<p>The ultrafilter <strong>AG-Z</strong> cyclone separator uses centrifugal force to remove bulk liquid water and solid particles from compressed air — without a filter element. High-velocity air spirals through the aluminium housing, throwing droplets and particles to the outer wall where they fall into the integral sump and are discharged by the condensate drain.</p>',
          specs: [
            { label: 'Housing material', value: 'Anodised aluminium' },
            { label: 'Volume flow', value: '125 – 2,250 m³/h' },
            { label: 'Separation efficiency', value: '>99% for droplets ≥ 10 µm' },
            { label: 'Filter element', value: 'None required' },
            { label: 'Pressure drop', value: '< 50 mbar at rated flow' },
          ],
        },
      ],
    },
    {
      slug: 'pre-after-coolers',
      title: 'Pre- & After-Coolers',
      description: 'Air-cooled and water-cooled heat exchangers for compressor inlet air conditioning and after-cooling.',
      image: '/images/home/Precision%20filtration%20technology/liquid_filtration.jpg',
      metaTitle: 'Pre- and After-Coolers | ultrafilter',
      metaDescription: 'ultrafilter pre-coolers and after-coolers — air-cooled and water-cooled heat exchangers to reduce compressed air temperature before filtration and drying.',
      heroTitle: 'Pre- & After-Coolers',
      content: [
        {
          heading: 'Effective Cooling Before Filtration and Drying',
          body: '<p>Reducing compressed air temperature before it enters filtration and drying equipment improves the effectiveness of both stages. ultrafilter pre-coolers and after-coolers are compact, efficient heat exchangers available in air-cooled and water-cooled versions, sized to match the air flow and temperature conditions of each installation.</p>',
          specs: [
            { label: 'Cooling medium', value: 'Air (fan-cooled) or water' },
            { label: 'Volume flow range', value: '100 – 10,000+ m³/h' },
            { label: 'Inlet temperature', value: 'up to 200 °C' },
            { label: 'Outlet temperature', value: 'Ambient + 5–10 K (air-cooled)' },
            { label: 'Applications', value: 'After-coolers, inter-coolers, pre-coolers before dryers' },
          ],
        },
      ],
    },
  ],
};
