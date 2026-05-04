import { companyInfo } from '@/content/company';

/**
 * Plain-text “Contact Now” block used on legacy product sidebars (matches original layout).
 */
export default function ContactSidebarPlain() {
  const telHref = companyInfo.phoneTel ?? companyInfo.phone.replace(/[^\d+]/g, '');
  const showFax = Boolean(companyInfo.fax?.trim());
  const showVdma = Boolean(companyInfo.vdma?.trim());

  return (
    <div className="border-b border-[#d9d9d9] pb-4 text-[13px] leading-6 text-[#444]">
      <h3 className="mb-2 font-semibold text-[#123f66]">Contact Now</h3>
      {companyInfo.address.headline ? (
        <p className="mb-1 text-[12px] font-semibold text-[#555]">{companyInfo.address.headline}</p>
      ) : null}
      <p className="font-semibold">{companyInfo.name}</p>
      {companyInfo.address.lines.map((line) => (
        <p key={line}>{line}</p>
      ))}
      <p className="mt-2">
        Tel:{' '}
        <a href={`tel:${telHref}`} className="font-semibold text-[#003366] hover:text-[#0066a4]">
          {companyInfo.phone}
        </a>
      </p>
      {showFax ? (
        <p>
          Fax: <span className="font-semibold">{companyInfo.fax}</span>
        </p>
      ) : null}
      <p>
        E-mail:{' '}
        <a href={`mailto:${companyInfo.email}`} className="font-semibold text-[#003366] hover:text-[#0066a4]">
          {companyInfo.email}
        </a>
      </p>
      {showVdma ? <p className="mt-2 text-[12px] text-[#666]">{companyInfo.vdma}</p> : null}
    </div>
  );
}
