import type { ProductCategory } from '@/types/product';

export const processFiltration: ProductCategory = {
  slug: 'process-filtration',
  title: 'Process Filtration',
  description:
    'Sterile and process filtration solutions for the food, beverage, and pharmaceutical industries — depth filters, process filter housings, and integrated sterile filtration systems.',
  image: '/images/products/process-filtration.jpg',
  metaTitle: 'Process Filtration – Sterile Filters & Process Filter Systems',
  metaDescription:
    'ultrafilter process filtration products: sterile filters, steam filters, ventilation filters, and complete stainless steel filter systems for hygienic applications.',
  subcategories: [
    {
      slug: 'sterile-filters',
      title: 'Sterile Filters (P)-SRF',
      description: 'Borosilicate glass fibre wound depth filter elements for sterile filtration down to 0.1 µm.',
      image: '/images/products/Process%20filtration/Sterilfilter%20(P)-SRF.jpg',
      metaTitle: 'Sterile Filters (P)-SRF | ultrafilter',
      metaDescription: 'Borosilicate wound depth filter cartridges for sterile filtration. Applications in food, beverage, and pharmaceutical production.',
      heroTitle: 'Sterile Filters (P)-SRF',
      content: [
        {
          heading: 'Depth Filtration to Sterile Grade',
          body: '<p>The ultrafilter (P)-SRF range are wound borosilicate glass fibre depth filter elements providing sterilising-grade filtration down to 0.1 µm. They achieve a 10⁻⁶ reduction in organism count — meeting the requirements for sterile compressed air and technical gas supply in pharmaceutical and food/beverage production.</p>',
          specs: [
            { label: 'Filtration rating', value: '0.1 – 700 µm' },
            { label: 'Organism reduction', value: '10⁻⁶ (sterilising grade)' },
            { label: 'Material', value: 'Borosilicate glass fibre (wound)' },
            { label: 'Applications', value: 'Pharmaceutical, food & beverage, biotech' },
          ],
        },
      ],
    },
    {
      slug: 'steam-filters',
      title: 'Steam Filters (P)-GS',
      description: 'Particle removal from steam, gases, and liquids at elevated temperatures.',
      image: '/images/products/Process%20filtration/Steam%20Filters%20(P)-GS.jpg',
      metaTitle: 'Steam Filters (P)-GS | ultrafilter',
      metaDescription: 'ultrafilter steam filters for particle removal from steam, technical gases, and liquids at high temperatures — sanitary design.',
      heroTitle: 'Steam Filters (P)-GS',
      content: [
        {
          heading: 'Particle Filtration for High-Temperature Media',
          body: '<p>The (P)-GS steam filter range is designed for effective particle removal from saturated steam, technical gases, and liquids at elevated temperatures. The sanitary design meets hygienic requirements for in-line steam filtration in food, beverage, and pharmaceutical processes.</p>',
          specs: [
            { label: 'Media', value: 'Saturated steam, technical gases, liquids' },
            { label: 'Max. temperature', value: '180 °C (steam)' },
            { label: 'Max. pressure', value: '10 bar' },
            { label: 'Filter rating', value: '1 – 100 µm' },
          ],
        },
      ],
    },
    {
      slug: 'ventilation-filters',
      title: 'Ventilation Filters',
      description: 'Sterile vent filters for maintaining container and tank sterility during filling and emptying operations.',
      image: '/images/products/Process%20filtration/Ventilation%20Filters.jpg',
      metaTitle: 'Ventilation Filters – Tank & Container Sterility | ultrafilter',
      metaDescription: 'Sterile vent filters to maintain container and tank sterility. Hydrophobic membrane filtration for bioreactors, storage tanks, and process vessels.',
      heroTitle: 'Ventilation Filters',
      content: [
        {
          heading: 'Maintaining Sterility During Pressure Equalisation',
          body: '<p>When filling or emptying tanks, containers, and bioreactors, incoming air must be sterile to prevent contamination. ultrafilter ventilation (vent) filters use hydrophobic PTFE membrane cartridges to remove all microorganisms from incoming air while allowing free pressure equalisation.</p>',
          specs: [
            { label: 'Filter medium', value: 'Hydrophobic PTFE membrane' },
            { label: 'Retention', value: 'Bacteria, fungi, spores — sterilising grade' },
            { label: 'Applications', value: 'Bioreactors, storage tanks, process vessels, CIP/SIP' },
          ],
        },
      ],
    },
    {
      slug: 'sm-filters',
      title: 'SM Filters',
      description: 'Stainless steel depth filter elements for liquid and gas filtration in demanding process environments.',
      image: '/images/products/Process%20filtration/SM-Filter.jpg',
      metaTitle: 'SM Filters – Stainless Steel Depth Filter Elements | ultrafilter',
      metaDescription: 'ultrafilter SM stainless steel depth filter elements for liquid and gas filtration in chemical, pharmaceutical, and food industry applications.',
      heroTitle: 'SM Filters',
      content: [
        {
          heading: 'Stainless Steel Depth Filtration',
          body: '<p>SM filter elements are manufactured from sintered stainless steel fibre — providing excellent chemical resistance, high temperature capability, and the ability to be cleaned and re-used. Ideal for liquid and gas filtration in chemical processing, pharmaceutical manufacturing, and the food industry.</p>',
          specs: [
            { label: 'Material', value: 'Sintered stainless steel fibre (316L)' },
            { label: 'Filtration rating', value: '1 – 100 µm' },
            { label: 'Max. temperature', value: '350 °C' },
            { label: 'Cleanable', value: 'Yes — back-flush or ultrasonic cleaning' },
          ],
        },
      ],
    },
    {
      slug: 'process-filters',
      title: 'Process Filters',
      description: 'Complete filter systems for liquid and technical gas filtration in process industry applications.',
      image: '/images/products/Process%20filtration/Process%20filters.jpg',
      metaTitle: 'Process Filters for Liquid & Gas Filtration | ultrafilter',
      metaDescription: 'ultrafilter process filter systems for liquid and technical gas filtration — stainless steel construction, CIP/SIP capable, hygienic design.',
      heroTitle: 'Process Filters',
      content: [
        {
          heading: 'Complete Filtration Systems',
          body: '<p>ultrafilter process filter systems are complete, ready-to-install filtration solutions for liquid and technical gas treatment in the chemical, pharmaceutical, and food & beverage industries. Designed for CIP/SIP capability and available in a range of hygienic connection standards (DIN, SMS, Tri-Clamp).</p>',
        },
      ],
    },
    {
      slug: 'industrial-as-process',
      title: 'Industrial as Process',
      description: 'Industrial compressed air filtration adapted to meet process and hygienic requirements.',
      image: '/images/products/process-filtration/industrial-as-process.jpg',
      metaTitle: 'Industrial as Process Filtration | ultrafilter',
      metaDescription: 'Bridging industrial compressed air filtration and process industry requirements — ultrafilter solutions for demanding hygienic applications.',
      heroTitle: 'Industrial as Process',
      content: [
        {
          heading: 'Where Industrial Meets Process',
          body: '<p>Many production environments require compressed air quality that meets process-level purity standards, even when served by standard industrial compressor systems. ultrafilter bridges this gap with industrial filter housings and elements adapted for hygienic duty — combining industrial robustness with process-grade filtration performance.</p>',
        },
      ],
    },
    {
      slug: 'process-filter-housings',
      title: 'Process Filter Housings (P-EG)',
      description: 'Hygienic stainless steel filter housings for process filtration — single and multi-element configurations.',
      image: '/images/products/Process%20filtration/Process%20Filter%20Housings%20(P%20EG).jpg',
      metaTitle: 'Process Filter Housings P-EG | ultrafilter',
      metaDescription: 'Stainless steel process filter housings (P-EG) for hygienic liquid and gas filtration. Single and multi-round configurations, CIP/SIP capable.',
      heroTitle: 'Process Filter Housings (P-EG)',
      content: [
        {
          heading: 'Hygienic Stainless Steel Housings',
          body: '<p>The P-EG process filter housing range is manufactured entirely from 316L stainless steel and designed for hygienic filtration duty. Available in single-element and multi-element (up to 19 rounds) configurations, all housings support CIP and SIP cleaning procedures and accept standard 10" and 20" process filter cartridges.</p>',
          specs: [
            { label: 'Material', value: '316L stainless steel, electropolished' },
            { label: 'Cartridge compatibility', value: '10" / 20" standard process cartridges' },
            { label: 'Configurations', value: '1 to 19 rounds' },
            { label: 'CIP/SIP', value: 'Fully capable' },
            { label: 'Connections', value: 'DIN / SMS / Tri-Clamp' },
          ],
        },
      ],
    },
    {
      slug: 'sterile-filter-box',
      title: 'Sterile Filter Box P-SLF',
      description: 'Integrated sterile filtration solution in a compact, skid-mounted enclosure.',
      image: '/images/products/Sterile%20Filter%20Box/Sterile%20Filter%20Box%20P%20SLF.jpg',
      metaTitle: 'Sterile Filter Box P-SLF | ultrafilter',
      metaDescription: 'The ultrafilter P-SLF Sterile Filter Box — a complete, skid-mounted sterile compressed air filtration unit for pharmaceutical and biotech applications.',
      heroTitle: 'Sterile Filter Box P-SLF',
      content: [
        {
          heading: 'Complete Sterile Filtration — Out of the Box',
          body: '<p>The ultrafilter P-SLF Sterile Filter Box is a complete, pre-assembled and tested sterile compressed air filtration unit. Delivered as a compact skid, it includes all pre-filters, sterile filter housings, pressure gauges, and connection points needed for immediate installation — minimising engineering and commissioning effort.</p>',
        },
      ],
    },
  ],
};
