export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  description?: string;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}
