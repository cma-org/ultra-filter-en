import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';
import NewsletterCTA from '@/components/shared/NewsletterCTA';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { openPositions } from '@/content/company/careers';

export const metadata: Metadata = {
  title: 'Open Positions | ultrafilter Careers',
  description: 'Current job openings at ultrafilter GmbH in Hilden, Germany. Join our team of compressed air treatment specialists.',
};

export default function Page() {
  return (
    <>
      <PageHero
        title="Open Positions"
        subtitle="Current vacancies at ultrafilter GmbH â€” join our team of compressed air treatment specialists."
        image="/images/company/careers-hero.jpg"
      />
      <Breadcrumbs items={[
        { label: 'Company', href: '/company/about-us' },
        { label: 'Careers', href: '/company/careers' },
        { label: 'Open Positions', href: '/company/careers/open-positions' },
      ]} />
      <div className="max-w-7xl mx-auto px-4 py-10">
        {openPositions.length > 0 ? (
          <div className="space-y-6">
            {openPositions.map((job, i) => (
              <div key={i} className="border border-gray-200 rounded p-6 hover:border-[#0066a4] transition-colors">
                <h2 className="text-xl font-bold text-[#003366] mb-1">{job.title}</h2>
                <p className="text-sm text-gray-500 mb-3">{job.location} Â· {job.type}</p>
                <p className="text-gray-700 leading-relaxed mb-4">{job.description}</p>
                <a
                  href={`mailto:careers@ultrafilter.de?subject=Application: ${encodeURIComponent(job.title)}`}
                  className="inline-block bg-[#0066a4] text-white px-6 py-2 font-semibold hover:bg-[#00558a] transition-colors rounded text-sm"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg mb-4">There are currently no advertised vacancies.</p>
            <p className="text-gray-500">We welcome unsolicited applications â€” send your CV to <a href="mailto:careers@ultrafilter.de" className="text-[#0066a4] hover:underline">careers@ultrafilter.de</a>.</p>
          </div>
        )}
        <div className="mt-10">
          <Link href="/company/careers" className="text-[#0066a4] font-semibold hover:underline">â† Back to Careers</Link>
        </div>
      </div>
      <NewsletterCTA />
    </>
  );
}

