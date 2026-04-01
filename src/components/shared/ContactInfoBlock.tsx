import { companyInfo } from '@/content/company';
import { cn } from '@/lib/utils';

interface ContactInfoBlockProps {
  className?: string;
  dark?: boolean;
}

export default function ContactInfoBlock({ className, dark = false }: ContactInfoBlockProps) {
  return (
    <div className={cn(
      'rounded border p-6',
      dark ? 'bg-[#003366] text-white border-blue-700' : 'bg-[#f5f5f5] border-gray-200',
      className
    )}>
      <h3 className={cn('font-bold text-base mb-3', dark ? 'text-[#e87722]' : 'text-[#003366]')}>
        Contact Us
      </h3>
      <address className="not-italic text-sm leading-relaxed space-y-1">
        <p className="font-semibold">{companyInfo.name}</p>
        <p>{companyInfo.address.street}</p>
        <p>{companyInfo.address.city}, {companyInfo.address.country}</p>
      </address>
      <div className={cn('mt-3 text-sm space-y-1', dark ? 'text-blue-100' : 'text-gray-600')}>
        <p>
          <span className={dark ? 'text-blue-300' : 'text-gray-400'}>Tel: </span>
          <a
            href={`tel:${companyInfo.phone.replace(/[\s()]/g, '')}`}
            className={cn('hover:underline', dark ? 'text-white' : 'text-[#0066a4]')}
          >
            {companyInfo.phone}
          </a>
        </p>
        <p>
          <span className={dark ? 'text-blue-300' : 'text-gray-400'}>Fax: </span>
          {companyInfo.fax}
        </p>
        <p>
          <span className={dark ? 'text-blue-300' : 'text-gray-400'}>Email: </span>
          <a
            href={`mailto:${companyInfo.email}`}
            className={cn('hover:underline', dark ? 'text-white' : 'text-[#0066a4]')}
          >
            {companyInfo.emailDisplay}
          </a>
        </p>
      </div>
    </div>
  );
}
