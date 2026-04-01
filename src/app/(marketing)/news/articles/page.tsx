import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import NewsletterCTA from '@/components/shared/NewsletterCTA';
import NewsCard from '@/components/news/NewsCard';
import { articles } from '@/content/news';

export const metadata: Metadata = {
  title: 'Articles | ultrafilter News',
  description: 'Technical articles, product announcements, and company news from ultrafilter GmbH.',
};

export default function Page() {
  return (
    <>
      <PageHero
        title="Articles"
        subtitle="Technical insights, product announcements, and industry news from the ultrafilter team."
        image="/images/news/articles-hero.jpg"
      />
      <Breadcrumbs items={[{ label: 'News', href: '/news' }, { label: 'Articles', href: '/news/articles' }]} />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <NewsCard key={article.slug} article={article} baseHref="/news/articles" />
          ))}
        </div>
      </div>
      <NewsletterCTA />
    </>
  );
}
