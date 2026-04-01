import type { NewsArticle } from '@/types/news';

export const articles: NewsArticle[] = [
  {
    slug: 'iso-8573-compressed-air-quality',
    title: 'Understanding ISO 8573-1 Compressed Air Quality Classes',
    date: '2025-11-15',
    excerpt: 'A practical guide to the ISO 8573-1 standard — what the particle, moisture, and oil classes mean, and how to achieve them in your compressed air system.',
    category: 'news',
    image: '/images/news/iso-8573.jpg',
  },
  {
    slug: 'energy-savings-leak-detection',
    title: 'How a Single Leak Detection Survey Saved One Manufacturer €28,000 Per Year',
    date: '2025-09-10',
    excerpt: 'A case study from a German automotive supplier shows how an ultrafilter leak detection survey identified 47 leaks responsible for 18% of total compressor output.',
    category: 'news',
    image: '/images/news/leak-detection-case.jpg',
  },
  {
    slug: 'new-ultra-drain-series',
    title: 'New ultra.drain Series — Zero-Loss Condensate Discharge for All Pipe Sizes',
    date: '2025-07-01',
    excerpt: 'ultrafilter launches the new ultra.drain condensate drain range, covering pipe sizes DN 15 to DN 100 with electronic level control and integrated alarm output.',
    category: 'news',
    image: '/images/news/ultra-drain-new.jpg',
  },
];

export const events: NewsArticle[] = [
  {
    slug: 'hannover-messe-2026',
    title: 'Hannover Messe 2026 — Visit us at Hall 26, Stand D18',
    date: '2026-04-22',
    excerpt: 'Meet the ultrafilter team at Hannover Messe 2026, 22–26 April. We will be presenting our new measurement technology range and full-service offerings.',
    category: 'event',
    image: '/images/news/hannover-messe.jpg',
  },
];

export const customerReviews: NewsArticle[] = [
  {
    slug: 'pharma-customer-review',
    title: 'Sterile Air for Pharmaceutical Production — Reliable Partnership',
    date: '2025-10-20',
    excerpt: '"ultrafilter has been supplying our sterile compressed air filtration for seven years. The equipment reliability and responsive service team give us complete confidence in our air quality."',
    category: 'review',
  },
  {
    slug: 'food-beverage-review',
    title: 'Food Grade Compressed Air — Consistent Quality at Scale',
    date: '2025-08-05',
    excerpt: '"Since installing the ultrafilter filtration and drying system, we have passed every air quality audit with no findings. The ongoing service contract gives us peace of mind."',
    category: 'review',
  },
];
