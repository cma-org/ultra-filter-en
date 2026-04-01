import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import ProductGrid from '@/components/products/ProductGrid';
import ProductCard from '@/components/products/ProductCard';
import NewsletterCTA from '@/components/shared/NewsletterCTA';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { dryingTechnology } from '@/content/products/drying-technology';

export const metadata: Metadata = {
  title: dryingTechnology.metaTitle,
  description: dryingTechnology.metaDescription,
};

export default function DryingTechnologyPage() {
  return (
    <>
      <PageHero title={dryingTechnology.title} subtitle={dryingTechnology.description} image={dryingTechnology.image} />
      <Breadcrumbs items={[{ label: 'Products', href: '/products' }, { label: 'Drying Technology', href: '/products/drying-technology' }]} />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <ProductGrid cols={3}>
          {dryingTechnology.subcategories.map((sub) => (
            <ProductCard key={sub.slug} title={sub.title} description={sub.description} image={sub.image} href={`/products/drying-technology/${sub.slug}`} />
          ))}
        </ProductGrid>
      </div>
      <NewsletterCTA />
    </>
  );
}
