import type { ProductCategory } from '@/types/product';

export const industrialFiltration: ProductCategory = {
  slug: 'industrial-filtration',
  title: 'Industrial Filtration',
  description:
    'High-performance filter elements and housings for compressed air and technical gas purification — developed using nanotechnology and manufactured to the highest quality standards.',
  image: '/images/products/industrial-filtration-hero.jpg',
  metaTitle: 'Industrial Filtration – Filter Elements & Housings',
  metaDescription:
    'High-performance filter elements and housings for compressed air purification. ultrafilter — The Filtration Manufacturer.',
  subcategories: [
    {
      slug: 'high-performance-filter-elements',
      title: 'High-Performance Filter Elements',
      description:
        'Nanotechnology-developed filter elements for maximum separation efficiency in compressed air and gas treatment.',
      image: '/images/products/Industrial%20filtration/High-Performance%20Filter%20Elements.jpg',
      metaTitle: 'High-Performance Filter Elements | ultrafilter',
      metaDescription:
        'ultrafilter high-performance filter elements — nanotechnology-based, multi-layer construction for superior oil, water, and particle separation in compressed air systems.',
      heroTitle: 'High-Performance Filter Elements',
      content: [
        {
          heading: 'Maximum Purity — Nanotechnology Inside',
          body: '<p>ultrafilter high-performance filter elements represent the state of the art in compressed air purification. Developed using advanced nanotechnology, the multi-layer construction achieves outstanding separation of oil aerosols, water, solid particles, and oil vapour across all operating conditions.</p><p>The elements are designed for use in the ultrafilter high-performance filter housings and are available in a wide range of grades — from coarse pre-filtration to sterile-grade final filtration.</p>',
          image: '/images/products/filter-elements.jpg',
          imagePosition: 'right',
        },
        {
          heading: 'Filter Grades',
          body: '<p>ultrafilter elements are available in the following grades:</p>',
          specs: [
            { label: 'Grade P', value: 'Coarse pre-filter — removes bulk liquid water and large particles' },
            { label: 'Grade S', value: 'Fine filter — oil aerosol residual content ≤ 0.1 mg/m³' },
            { label: 'Grade A', value: 'Sub-micro filter — oil aerosol residual content ≤ 0.01 mg/m³' },
            { label: 'Grade AA', value: 'Ultra-fine filter — oil aerosol residual content ≤ 0.001 mg/m³' },
            { label: 'Grade ACS', value: 'Activated carbon + sub-micro — oil vapour residual content ≤ 0.003 mg/m³' },
            { label: 'Grade D', value: 'Dust filter — particulate removal to ≤ 1 µm' },
          ],
        },
        {
          heading: 'Technical Data',
          body: '<p>Elements are available for volume flows from 20 to 20,000 m³/h and operating pressures up to 16 bar. Genuine ultrafilter elements are produced within the ultrafilter manufacturing network and certified to ISO 12500 and ISO 8573-1.</p>',
          specs: [
            { label: 'Volume flow range', value: '20 – 20,000 m³/h' },
            { label: 'Operating pressure', value: 'up to 16 bar' },
            { label: 'Operating temperature', value: '+1 °C to +66 °C' },
            { label: 'Standards', value: 'ISO 12500, ISO 8573-1' },
            { label: 'Origin', value: 'ultrafilter manufacturing network' },
          ],
          datasheets: [
            { label: 'Filter Element Data Sheet (EN)', href: '/datasheets/ultrafilter-filter-elements-en.pdf', language: 'EN' },
          ],
        },
      ],
    },
    {
      slug: 'high-performance-filters',
      title: 'High-Performance Filters',
      description:
        'Complete filter housings for industrial compressed air and gas purification — robust, reliable, and certified.',
      image: '/images/products/Industrial%20filtration/High-Performance%20Filters.jpg',
      metaTitle: 'High-Performance Filters | ultrafilter',
      metaDescription:
        'ultrafilter high-performance filter housings for compressed air — modular design, low pressure drop, available in sizes for 20 to 20,000 m³/h.',
      heroTitle: 'High-Performance Filters',
      content: [
        {
          heading: 'Robust Housings for Every Application',
          body: '<p>The ultrafilter high-performance filter range covers every stage of compressed air purification — from bulk liquid separation through coarse and fine filtration to activated carbon treatment. All housings are designed for quick and easy element replacement, minimising maintenance downtime.</p><p>Housings are manufactured from anodised aluminium (up to DN 150) and carbon steel or stainless steel for larger sizes. All models carry the required pressure-vessel certifications for the European market (CE / PED).</p>',
          image: '/images/products/filter-elements.jpg',
          imagePosition: 'right',
        },
        {
          heading: 'Technical Specifications',
          body: '',
          specs: [
            { label: 'Volume flow', value: '20 – 20,000 m³/h' },
            { label: 'Operating pressure', value: 'up to 16 bar (higher on request)' },
            { label: 'Housing material', value: 'Anodised aluminium / Carbon steel / Stainless steel' },
            { label: 'Connection sizes', value: 'G¼" to DN 200' },
            { label: 'Certification', value: 'CE / PED 2014/68/EU' },
            { label: 'Element compatibility', value: 'All ultrafilter element grades (P, S, A, AA, ACS, D)' },
          ],
          datasheets: [
            { label: 'High-Performance Filter Catalogue (EN)', href: '/datasheets/ultrafilter-hpf-catalogue-en.pdf', language: 'EN' },
          ],
        },
      ],
    },
    {
      slug: 'replacement-filters',
      title: 'Replacement Filters',
      description:
        'Compatible replacement filter elements for third-party oil/water separation and filtration systems — quality matched.',
      image: '/images/products/Industrial%20filtration/Replacement%20Filters.jpg',
      metaTitle: 'Replacement Filters for Third-Party Systems | ultrafilter',
      metaDescription:
        'ultrafilter supplies high-quality replacement filter elements compatible with most major brands of compressed air filters and oil-water separators.',
      heroTitle: 'Replacement Filters',
      content: [
        {
          heading: 'Compatible Replacement Elements',
          body: '<p>ultrafilter supplies high-quality replacement elements that are compatible with most major brands of compressed air filter housings and oil-water separators. All replacement elements are manufactured to the same quality standards as original ultrafilter elements — providing superior performance at a competitive price.</p><p>We maintain a comprehensive database of cross-references to ensure the correct element is identified for every application. If in doubt, contact our technical team with the original element part number and housing model.</p>',
        },
        {
          heading: 'Compatible Brands (Selection)',
          body: '<p>Replacement elements are available for housings from:</p>',
          items: [
            'Atlas Copco',
            'Beko Technologies',
            'Boge',
            'CompAir',
            'Donaldson',
            'Hankison',
            'Ingersoll Rand',
            'Kaeser',
            'Parker Hannifin',
            'Pneumatech',
            'Sullair',
            'and many more',
          ],
        } as any,
        {
          heading: 'How to Order',
          body: '<p>Please contact us with your existing element part number or housing model and we will identify the correct ultrafilter replacement. We can supply single elements or bulk quantities for service contracts.</p>',
          datasheets: [
            { label: 'Replacement Filter Cross-Reference Guide', href: '/datasheets/ultrafilter-crossref-en.pdf', language: 'EN' },
          ],
        },
      ],
    },
  ],
};
