import type { MetadataRoute } from 'next';
import { allRoutes } from '@/content/navigation';

const BASE_URL = 'https://ultrafilter-en.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return allRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : route.split('/').length === 2 ? 0.8 : 0.6,
  }));
}
