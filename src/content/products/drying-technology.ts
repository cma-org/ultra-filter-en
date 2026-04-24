import type { ProductCategory } from '@/types/product';

export const dryingTechnology: ProductCategory = {
  slug: 'drying-technology',
  title: 'Drying Technology',
  description:
    'Compressed air drying solutions for every dew point requirement and volume flow — from energy-efficient refrigeration dryers to adsorption dryers and compact membrane dryers.',
  image: '/drying-technology-hero.png',
  metaTitle: 'Drying Technology – Compressed Air Dryers',
  metaDescription:
    'ultrafilter compressed air dryers: refrigeration dryers (pressure dew point +3 °C), adsorption dryers (to −70 °C), and membrane dryers for low flow rates.',
  subcategories: [
    {
      slug: 'refrigeration-dryers',
      title: 'Refrigeration Dryers',
      description:
        'Energy-efficient compressed air refrigeration dryers achieving a pressure dew point of approximately +3 °C.',
      image: '/images/products/drying-technology/Cold%20Regenerating%20Dryers/Refrigeration%20Dryers.jpg',
      metaTitle: 'Refrigeration Dryers | ultrafilter',
      metaDescription: 'ultrafilter refrigeration dryers — energy-efficient compressed air drying to a pressure dew point of +3 °C. Capacities from 5 to 10,000 m³/h.',
      heroTitle: 'Refrigeration Dryers',
      content: [
        {
          heading: 'Energy-Efficient Drying to +3 °C Dew Point',
          body: '<p>ultrafilter refrigeration dryers are the most economical choice when a pressure dew point of approximately +3 °C is sufficient. The dryers use a refrigerant circuit to cool the compressed air, causing moisture to condense and be separated out before the air is reheated and delivered at the target dew point.</p><p>The range covers volume flows from 5 to over 10,000 m³/h. Models with electronic demand controls (EDC) adjust refrigerant circuit operation to match actual compressed air demand — delivering significant energy savings compared to fixed-cycle dryers.</p>',
          image: '/images/products/drying-technology/refrigeration-dryer-detail.jpg',
          imagePosition: 'right',
          specs: [
            { label: 'Pressure dew point', value: 'approx. +3 °C (ISO 8573-1 Class 4)' },
            { label: 'Volume flow range', value: '5 – 10,000+ m³/h' },
            { label: 'Operating pressure', value: '4 – 16 bar' },
            { label: 'Ambient temperature', value: '+1 °C to +50 °C' },
            { label: 'Refrigerant', value: 'R134a / R410A (HFC-free variants available)' },
            { label: 'Standards', value: 'ISO 8573-1, ISO 7183' },
          ],
          datasheets: [
            { label: 'Refrigeration Dryer Product Range (EN)', href: '/datasheets/ultrafilter-refrigeration-dryers-en.pdf', language: 'EN' },
          ],
        },
      ],
    },
    {
      slug: 'adsorption-dryers',
      title: 'Adsorption Dryers',
      description:
        'Compressed air adsorption dryers achieving pressure dew points from −20 °C to −70 °C for demanding applications.',
      image: '/images/products/drying-technology/Refrigeration%20Dryers/Adsorption%20Dryers.jpg',
      metaTitle: 'Adsorption Dryers | ultrafilter',
      metaDescription: 'ultrafilter adsorption dryers achieve pressure dew points from −20 °C to −70 °C. Heatless, heated, and heat-of-compression variants available.',
      heroTitle: 'Adsorption Dryers',
      content: [
        {
          heading: 'Deep Drying to −70 °C Dew Point',
          body: '<p>When a pressure dew point of +3 °C is not sufficient — for example in outdoor pipework in cold climates, pneumatic instrument air systems, or sensitive manufacturing processes — adsorption dryers provide the solution. ultrafilter adsorption dryers use desiccant material (activated alumina or molecular sieve) to adsorb moisture from compressed air to dew points of −20 °C, −40 °C, or −70 °C.</p>',
          specs: [
            { label: 'Pressure dew point', value: '−20 °C / −40 °C / −70 °C (selectable)' },
            { label: 'Variants', value: 'Heatless (PSA), heated (blower purge), heat-of-compression (HOC)' },
            { label: 'Volume flow range', value: '10 – 10,000+ m³/h' },
            { label: 'Operating pressure', value: '4 – 16 bar' },
            { label: 'Standards', value: 'ISO 8573-1 Class 1–2' },
          ],
          datasheets: [
            { label: 'Adsorption Dryer Data Sheet (EN)', href: '/datasheets/ultrafilter-adsorption-dryers-en.pdf', language: 'EN' },
          ],
        },
      ],
    },
    {
      slug: 'membrane-dryers',
      title: 'Membrane Dryers',
      description:
        'Compact, maintenance-free membrane dryers for low volume flows — dew points from +15 °C down to −40 °C.',
      image: '/images/products/drying-technology/Membrane%20dryers/UFM%20md.jpg',
      metaTitle: 'Membrane Dryers | ultrafilter',
      metaDescription: 'ultrafilter membrane dryers — maintenance-free compressed air drying for low flow rates. Dew points from +15 °C to −40 °C without electricity.',
      heroTitle: 'Membrane Dryers',
      content: [
        {
          heading: 'Maintenance-Free Drying Without Electricity',
          body: '<p>Membrane dryers use a hollow-fibre membrane that is selectively permeable to water vapour. Compressed air flows through the fibres while water vapour permeates through the membrane wall and is purged away by a small countercurrent of dry air. The result is dry compressed air with no moving parts, no electricity, and no refrigerant — truly maintenance-free operation.</p><p>Membrane dryers are ideal for point-of-use applications, remote locations, hazardous areas, and low volume flows where refrigeration or adsorption dryers would be oversized or impractical.</p>',
          specs: [
            { label: 'Pressure dew point', value: '+15 °C to −40 °C (flow-dependent)' },
            { label: 'Volume flow range', value: '0.5 – 100 m³/h' },
            { label: 'Power requirement', value: 'None (no electricity required)' },
            { label: 'Moving parts', value: 'None' },
            { label: 'Hazardous area', value: 'ATEX variants available' },
          ],
        },
      ],
    },
  ],
};
