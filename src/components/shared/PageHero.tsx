import Image from 'next/image';
import { cn } from '@/lib/utils';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function PageHero({
  title,
  subtitle,
  image,
  imageAlt,
  size = 'md',
}: PageHeroProps) {
  return (
    <div
      className={cn(
        'relative w-full bg-[#003366] overflow-hidden flex items-center',
        size === 'sm' && 'min-h-[140px]',
        size === 'md' && 'min-h-[200px]',
        size === 'lg' && 'min-h-[280px]'
      )}
    >
      {/* Background image */}
      {image && (
        <Image
          src={image}
          alt={imageAlt || title}
          fill
          className="object-cover opacity-30"
          priority
        />
      )}
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#003366]/90 via-[#003366]/70 to-transparent" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-8 z-10">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-2 text-base md:text-lg text-blue-200 max-w-2xl">
            {subtitle}
          </p>
        )}
        {/* Accent underline */}
        <div className="mt-3 w-16 h-1 bg-[#e87722] rounded" />
      </div>
    </div>
  );
}
