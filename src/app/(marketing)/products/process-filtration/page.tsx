import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import ProductGrid from '@/components/products/ProductGrid';
import ProductCard from '@/components/products/ProductCard';
import NewsletterCTA from '@/components/shared/NewsletterCTA';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { processFiltration } from '@/content/products/process-filtration';

export const metadata: Metadata = {
  title: processFiltration.metaTitle,
  description: processFiltration.metaDescription,
};

export default function ProcessFiltrationPage() {
  return (
    <>
      <PageHero title={processFiltration.title} subtitle={processFiltration.description} image={processFiltration.image} />
      <Breadcrumbs items={[{ label: 'Products', href: '/products' }, { label: 'Process Filtration', href: '/products/process-filtration' }]} />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <ProductGrid cols={3}>
          {processFiltration.subcategories.map((sub) => (
            <ProductCard key={sub.slug} title={sub.title} description={sub.description} image={sub.image} href={`/products/process-filtration/${sub.slug}`} />
          ))}
        </ProductGrid>
      </div>
      <NewsletterCTA />
    </>
  );
}
