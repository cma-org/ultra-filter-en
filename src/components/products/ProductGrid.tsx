import { cn } from '@/lib/utils';

interface ProductGridProps {
  children: React.ReactNode;
  cols?: 2 | 3;
  className?: string;
}

export default function ProductGrid({ children, cols = 3, className }: ProductGridProps) {
  return (
    <div
      className={cn(
        'grid gap-6',
        cols === 3 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2',
        className
      )}
    >
      {children}
    </div>
  );
}
