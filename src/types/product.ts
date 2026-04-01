export interface ProductSpec {
  label: string;
  value: string;
}

export interface Datasheet {
  label: string;
  href: string;
  language?: string;
}

export interface ProductContentSection {
  heading?: string;
  body: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right';
  specs?: ProductSpec[];
  datasheets?: Datasheet[];
}

export interface ProductSubcategory {
  slug: string;
  title: string;
  description: string;
  image?: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle?: string;
  content: ProductContentSection[];
}

export interface ProductCategory {
  slug: string;
  title: string;
  description: string;
  image: string;
  metaTitle: string;
  metaDescription: string;
  subcategories: ProductSubcategory[];
}
