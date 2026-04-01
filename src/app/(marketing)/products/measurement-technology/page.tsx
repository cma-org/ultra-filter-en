import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import ProductGrid from '@/components/products/ProductGrid';
import ProductCard from '@/components/products/ProductCard';
import NewsletterCTA from '@/components/shared/NewsletterCTA';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { measurementTechnology } from '@/content/products/measurement-technology';

export const metadata: Metadata = {
  title: measurementTechnology.metaTitle,
  description: measurementTechnology.metaDescription,
};

export default function MeasurementTechnologyPage() {
  return (
    <>
      <PageHero title={measurementTechnology.title} subtitle={measurementTechnology.description} image={measurementTechnology.image} />
      <Breadcrumbs items={[{ label: 'Products', href: '/products' }, { label: 'Measurement Technology', href: '/products/measurement-technology' }]} />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <ProductGrid cols={3}>
          {measurementTechnology.subcategories.map((sub) => (
            <ProductCard key={sub.slug} title={sub.title} description={sub.description} image={sub.image} href={`/products/measurement-technology/${sub.slug}`} />
          ))}
        </ProductGrid>
      </div>
      <NewsletterCTA />
    </>
  );
}
