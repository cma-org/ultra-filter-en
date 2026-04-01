import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ultra-filter.com';
const SITE_NAME = 'ultrafilter – The Filtration Manufacturer';

export function generatePageMetadata({
  title,
  description,
  path = '',
  image,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = `${BASE_URL}${path}`;
  const ogImage = image || `${BASE_URL}/images/og-default.jpg`;

  return {
    title: `${title} | ultrafilter`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ultrafilter`,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ultrafilter`,
      description,
      images: [ogImage],
    },
  };
}
