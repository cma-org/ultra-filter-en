import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  title: string;
  description: string;
  image?: string;
  href: string;
  className?: string;
}

export default function ProductCard({ title, description, image, href, className }: ProductCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        'group block bg-white border border-gray-200 rounded hover:border-[#0066a4] hover:shadow-md transition-all overflow-hidden',
        className
      )}
    >
      {/* Image */}
      <div className="relative h-44 w-full bg-gray-100 overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#003366] to-[#0066a4]">
            <svg className="w-16 h-16 text-white opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-[#003366] text-base mb-2 group-hover:text-[#0066a4] transition-colors leading-snug">
          {title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
          {description}
        </p>
        <div className="mt-3 flex items-center text-xs font-semibold text-[#e87722] group-hover:gap-2 gap-1 transition-all">
          <span>Learn more</span>
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
