import Link from 'next/link';

export default function JobPostingBanner() {
  return (
    <div className="bg-[#0066a4] text-white rounded p-5">
      <h3 className="font-bold text-base mb-1">We are Hiring!</h3>
      <p className="text-sm text-blue-100 mb-3">
        Join the ultrafilter team â€” view our current open positions.
      </p>
      <Link
        href="/company/careers/open-positions"
        className="inline-block border border-white bg-transparent text-white hover:bg-white hover:text-[#003366] font-semibold text-xs px-4 py-2 rounded transition-colors"
      >
        View Open Positions â†’
      </Link>
    </div>
  );
}

