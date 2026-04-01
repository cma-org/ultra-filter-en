export interface ContentBlock {
  type: 'text' | 'list' | 'cta';
  heading?: string;
  body?: string;
  items?: string[];
  ctaLabel?: string;
  ctaHref?: string;
}

export interface ServicePage {
  slug: string;
  title: string;
  description: string;
  image?: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle?: string;
  intro?: string;
  blocks: ContentBlock[];
}
