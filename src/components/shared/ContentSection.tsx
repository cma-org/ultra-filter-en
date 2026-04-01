import Image from 'next/image';
import type { ProductContentSection } from '@/types/product';
import { cn } from '@/lib/utils';

interface ContentSectionProps {
  section: ProductContentSection;
  className?: string;
}

export default function ContentSection({ section, className }: ContentSectionProps) {
  const hasImage = !!section.image;
  const imageRight = section.imagePosition !== 'left';

  return (
    <div className={cn('py-8 border-b border-gray-100 last:border-0', className)}>
      {hasImage ? (
        <div className={cn('flex flex-col lg:flex-row gap-8 items-start', !imageRight && 'lg:flex-row-reverse')}>
          <div className="flex-1 min-w-0">
            {section.heading && (
              <h2 className="text-xl font-bold text-[#003366] mb-4">{section.heading}</h2>
            )}
            <div
              className="prose text-gray-700 text-sm"
              dangerouslySetInnerHTML={{ __html: section.body }}
            />
            {section.specs && section.specs.length > 0 && (
              <SpecTable specs={section.specs} />
            )}
            {section.datasheets && section.datasheets.length > 0 && (
              <DatasheetList datasheets={section.datasheets} />
            )}
          </div>
          <div className="w-full lg:w-[320px] shrink-0">
            <div className="relative h-52 lg:h-64 w-full rounded overflow-hidden bg-gray-100">
              <Image
                src={section.image!}
                alt={section.imageAlt || section.heading || ''}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      ) : (
        <div>
          {section.heading && (
            <h2 className="text-xl font-bold text-[#003366] mb-4">{section.heading}</h2>
          )}
          <div
            className="prose text-gray-700 text-sm"
            dangerouslySetInnerHTML={{ __html: section.body }}
          />
          {section.specs && section.specs.length > 0 && (
            <SpecTable specs={section.specs} />
          )}
          {section.datasheets && section.datasheets.length > 0 && (
            <DatasheetList datasheets={section.datasheets} />
          )}
        </div>
      )}
    </div>
  );
}

function SpecTable({ specs }: { specs: NonNullable<ProductContentSection['specs']> }) {
  return (
    <div className="mt-5 overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <tbody>
          {specs.map((spec, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-[#f5f5f5]' : 'bg-white'}>
              <td className="px-3 py-2 font-semibold text-[#003366] border border-gray-200 w-[40%]">
                {spec.label}
              </td>
              <td className="px-3 py-2 text-gray-700 border border-gray-200">
                {spec.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DatasheetList({ datasheets }: { datasheets: NonNullable<ProductContentSection['datasheets']> }) {
  return (
    <div className="mt-5 flex flex-wrap gap-3">
      {datasheets.map((ds, i) => (
        <a
          key={i}
          href={ds.href}
          download
          className="inline-flex items-center gap-2 bg-[#003366] hover:bg-[#002244] text-white text-xs font-semibold px-4 py-2 rounded transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          </svg>
          {ds.label}
          {ds.language && <span className="opacity-70">({ds.language})</span>}
        </a>
      ))}
    </div>
  );
}
