import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import ProductGrid from '@/components/products/ProductGrid';
import ProductCard from '@/components/products/ProductCard';
import NewsletterCTA from '@/components/shared/NewsletterCTA';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { services } from '@/content/services';

export const metadata: Metadata = {
  title: 'Services – Repair, Maintenance & Energy Audits',
  description: 'ultrafilter service portfolio: repair service, inspection & maintenance, full-service packages, energy audits, quality measurement, and leak detection.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Services"
        subtitle="From repair and planned maintenance to energy audits and quality measurement — ultrafilter keeps your compressed air system at peak efficiency."
        image="/images/services/services-hero.jpg"
      />
      <Breadcrumbs items={[{ label: 'Services', href: '/services' }]} />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <ProductGrid cols={3}>
          {services.map((svc) => (
            <ProductCard
              key={svc.slug}
              title={svc.title}
              description={svc.description}
              image={svc.image}
              href={`/services/${svc.slug}`}
            />
          ))}
        </ProductGrid>
      </div>
      <NewsletterCTA />
    </>
  );
}
