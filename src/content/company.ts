export const companyInfo = {
  name: 'Ultrafilter (India) Pvt. Ltd.',
  tagline: 'The Filtration Manufacturer',
  taglineDe: 'Die Aufbereitungsexperten',
  /** Optional membership line (e.g. industry association). Leave empty to hide in footer/sidebars. */
  vdma: '',
  address: {
    headline: 'Registered Office & Works',
    lines: ['Plot No. 70, Bommasandra Indl. Area', 'Bangalore - 560099, Karnataka, INDIA'],
  },
  phone: '+91 80 4142 9900',

  /** Primary number for tel: links */
  phoneTel: '+918041429900',
  fax: undefined as string | undefined,
  email: 'info@ultrafilterindia.com',
  emailDisplay: 'info@ultrafilterindia.com',
  website: 'www.ultrafilterindia.com',
  description:
    'Ultrafilter (India) Pvt. Ltd. supplies compressed air filtration, drying, condensate management, and measurement technology across India — backed by the ultrafilter product range and engineering standards.',
  founded: '1973',
  employees: '100+',
  certifications: ['ISO 9001:2015', 'ISO 14001:2015'],
};

export const heroSlides = [
  {
    image: '/images/home/h-1.jpg',
    heading: 'The Filtration Manufacturer',
    subheading: 'Premium compressed air filtration — engineered to ultrafilter standards, supplied from India.',
    ctaLabel: 'Explore Products',
    ctaHref: '/products',
  },
  {
    image: '/images/home/h-2.jpg',
    heading: 'Submicron Filtration',
    subheading: 'High-performance filter elements achieving the cleanest compressed air — down to 0.01 µm.',
    ctaLabel: 'View Filter Elements',
    ctaHref: '/products/industrial-filtration/high-performance-filter-elements',
  },
  {
    image: '/drying-technology-hero.png',
    heading: 'Drying Technology',
    subheading: 'Refrigeration, adsorption, and membrane dryers for every application.',
    ctaLabel: 'View Dryers',
    ctaHref: '/products/drying-technology',
  },
];
