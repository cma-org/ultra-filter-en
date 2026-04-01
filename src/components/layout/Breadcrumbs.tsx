import Link from 'next/link';
import type { BreadcrumbItem } from '@/types/navigation';

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="bg-[#f5f5f5] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <ol className="flex items-center flex-wrap gap-1 text-xs text-gray-500" itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/" className="hover:text-[#003366] transition-colors" itemProp="item">
              <span itemProp="name">Home</span>
            </Link>
            <meta itemProp="position" content="1" />
          </li>
          {items.map((item, i) => (
            <li key={item.href} className="flex items-center gap-1" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <svg className="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              {i === items.length - 1 ? (
                <span className="text-[#003366] font-medium" itemProp="name">{item.label}</span>
              ) : (
                <Link href={item.href} className="hover:text-[#003366] transition-colors" itemProp="item">
                  <span itemProp="name">{item.label}</span>
                </Link>
              )}
              <meta itemProp="position" content={String(i + 2)} />
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
