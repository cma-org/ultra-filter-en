export interface NewsArticle {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body?: string;
  image?: string;
  category: 'news' | 'event' | 'review';
}

export interface NewsPage {
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle?: string;
  intro?: string;
}
