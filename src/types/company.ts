export interface Department {
  name: string;
  description: string;
  image?: string;
}

export interface CompanyPage {
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle?: string;
  intro?: string;
  sections: CompanySection[];
}

export interface CompanySection {
  heading?: string;
  body: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right';
  items?: string[];
}

export interface JobPosting {
  title: string;
  location: string;
  type: string;
  description: string;
  href?: string;
}
