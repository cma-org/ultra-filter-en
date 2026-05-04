import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import ProductGrid from '@/components/products/ProductGrid';
import ProductCard from '@/components/products/ProductCard';
import NewsletterCTA from '@/components/shared/NewsletterCTA';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { industrialFiltration } from '@/content/products/industrial-filtration';
import { processFiltration } from '@/content/products/process-filtration';
import { dryingTechnology } from '@/content/products/drying-technology';
import { condensateTechnology } from '@/content/products/condensate-technology';
import { measurementTechnology } from '@/content/products/measurement-technology';

const categories = [
  industrialFiltration,
  processFiltration,
  dryingTechnology,
  condensateTechnology,
  measurementTechnology,
] as const;

export const metadata: Metadata = {
  title: 'Products | ultrafilter',
  description:
    'Compressed air filtration, drying, condensate management, process filtration, and measurement technology from Ultrafilter (India) Pvt. Ltd.',
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Products"
        subtitle="Solutions for clean, dry compressed air — filtration, drying, condensate handling, process filtration, and measurement."
        image="/images/products/industrial-filtration-hero.jpg"
      />
      <Breadcrumbs items={[{ label: 'Products', href: '/products' }]} />
      <div className="mx-auto max-w-7xl px-4 py-12">
        <ProductGrid cols={2}>
          {categories.map((cat) => (
            <ProductCard
              key={cat.slug}
              title={cat.title}
              description={cat.description}
              image={cat.image}
              href={`/products/${cat.slug}`}
            />
          ))}
        </ProductGrid>
      </div>
      <NewsletterCTA />
    </>
  );
}
