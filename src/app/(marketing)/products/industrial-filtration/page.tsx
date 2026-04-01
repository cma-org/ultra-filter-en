import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import ProductGrid from '@/components/products/ProductGrid';
import ProductCard from '@/components/products/ProductCard';
import NewsletterCTA from '@/components/shared/NewsletterCTA';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { industrialFiltration } from '@/content/products/industrial-filtration';

export const metadata: Metadata = {
  title: industrialFiltration.metaTitle,
  description: industrialFiltration.metaDescription,
};

export default function IndustrialFiltrationPage() {
  return (
    <>
      <PageHero
        title={industrialFiltration.title}
        subtitle={industrialFiltration.description}
        image={industrialFiltration.image}
      />
      <Breadcrumbs items={[
        { label: 'Products', href: '/products' },
        { label: 'Industrial Filtration', href: '/products/industrial-filtration' },
      ]} />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <ProductGrid cols={3}>
          {industrialFiltration.subcategories.map((sub) => (
            <ProductCard
              key={sub.slug}
              title={sub.title}
              description={sub.description}
              image={sub.image}
              href={`/products/industrial-filtration/${sub.slug}`}
            />
          ))}
        </ProductGrid>
      </div>
      <NewsletterCTA />
    </>
  );
}
