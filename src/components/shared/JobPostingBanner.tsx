import Link from 'next/link';

export default function JobPostingBanner() {
  return (
    <div className="bg-[#e87722] text-white rounded p-5">
      <h3 className="font-bold text-base mb-1">We are Hiring!</h3>
      <p className="text-sm text-orange-100 mb-3">
        Join the ultrafilter team — view our current open positions.
      </p>
      <Link
        href="/company/careers/open-positions"
        className="inline-block bg-white text-[#e87722] hover:bg-orange-50 font-semibold text-xs px-4 py-2 rounded transition-colors"
      >
        View Open Positions →
      </Link>
    </div>
  );
}
