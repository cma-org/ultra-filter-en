import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import ProductGrid from '@/components/products/ProductGrid';
import ProductCard from '@/components/products/ProductCard';
import NewsletterCTA from '@/components/shared/NewsletterCTA';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { condensateTechnology } from '@/content/products/condensate-technology';

export const metadata: Metadata = {
  title: condensateTechnology.metaTitle,
  description: condensateTechnology.metaDescription,
};

export default function CondensateTechnologyPage() {
  return (
    <>
      <PageHero title={condensateTechnology.title} subtitle={condensateTechnology.description} image={condensateTechnology.image} />
      <Breadcrumbs items={[{ label: 'Products', href: '/products' }, { label: 'Condensate Technology', href: '/products/condensate-technology' }]} />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <ProductGrid cols={3}>
          {condensateTechnology.subcategories.map((sub) => (
            <ProductCard key={sub.slug} title={sub.title} description={sub.description} image={sub.image} href={`/products/condensate-technology/${sub.slug}`} />
          ))}
        </ProductGrid>
      </div>
      <NewsletterCTA />
    </>
  );
}
