import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({ title, subtitle, align = 'left', className }: SectionHeadingProps) {
  return (
    <div className={cn('mb-8', align === 'center' && 'text-center', className)}>
      <h2 className="text-2xl md:text-3xl font-bold text-[#003366] leading-tight">{title}</h2>
      {subtitle && <p className="mt-2 text-gray-600 text-base md:text-lg max-w-2xl">{subtitle}</p>}
      <div className={cn('mt-3 h-1 w-14 bg-[#e87722] rounded', align === 'center' && 'mx-auto')} />
    </div>
  );
}
