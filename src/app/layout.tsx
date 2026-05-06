import type { Metadata } from 'next';
import './globals.css';
import CookieConsent from '@/components/layout/CookieConsent';
import NavigationScroll from '@/components/layout/NavigationScroll';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ultra-filter.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'ultrafilter – The Filtration Manufacturer',
    template: '%s | ultrafilter',
  },
  description:
    'Ultrafilter (India) Pvt. Ltd. — compressed air filtration, drying technology, condensate management, and measurement instruments for the Indian market.',
  keywords: [
    'compressed air filtration',
    'filter elements',
    'refrigeration dryer',
    'adsorption dryer',
    'condensate drain',
    'dew point measurement',
    'oil water separator',
    'ultrafilter',
  ],
  icons: {
    icon: '/images/favicon.png',
    shortcut: '/images/favicon.png',
  },
  openGraph: {
    siteName: 'ultrafilter – The Filtration Manufacturer',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="flex min-h-full flex-col antialiased">
        <NavigationScroll />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
