import Link from 'next/link';
import { cn } from '@/lib/utils';

interface CTAButtonProps {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  external?: boolean;
}

export default function CTAButton({
  label,
  href,
  variant = 'primary',
  size = 'md',
  className,
  external = false,
}: CTAButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';

  const variantClasses = {
    primary: 'bg-[#e87722] hover:bg-orange-600 text-white focus-visible:ring-[#e87722]',
    secondary: 'bg-[#003366] hover:bg-[#002244] text-white focus-visible:ring-[#003366]',
    outline: 'border-2 border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white focus-visible:ring-[#003366]',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3 text-base',
  };

  const linkProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <Link
      href={href}
      className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
      {...linkProps}
    >
      {label}
      {external && (
        <svg className="ml-1.5 w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      )}
    </Link>
  );
}
