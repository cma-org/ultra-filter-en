import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';
import NewsletterCTA from '@/components/shared/NewsletterCTA';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { careersPage, openPositions } from '@/content/company/careers';

export const metadata: Metadata = { title: careersPage.metaTitle, description: careersPage.metaDescription };

export default function Page() {
  return (
    <>
      <PageHero title={careersPage.heroTitle || careersPage.title} subtitle={careersPage.intro} image="/images/company/careers-hero.jpg" />
      <Breadcrumbs items={[{ label: 'Company', href: '/company/about-us' }, { label: 'Careers', href: '/company/careers' }]} />
      <div className="max-w-7xl mx-auto px-4 py-10 space-y-10">
        {careersPage.sections.map((section, i) => (
          <div key={i}>
            {section.heading && (
              <h2 className="text-2xl font-bold text-[#003366] mb-4 pb-2 border-b-2 border-[#0066a4]">
                {section.heading}
              </h2>
            )}
            <div className="prose max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: section.body }} />
          </div>
        ))}

        <div>
          <h2 className="text-2xl font-bold text-[#003366] mb-6 pb-2 border-b-2 border-[#0066a4]">Current Openings</h2>
          {openPositions.length > 0 ? (
            <div className="space-y-4">
              {openPositions.map((job, i) => (
                <div key={i} className="border border-gray-200 rounded p-6 hover:border-[#0066a4] transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-[#003366]">{job.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">{job.location} Â· {job.type}</p>
                    </div>
                    <Link
                      href={job.href || '/company/careers/open-positions'}
                      className="shrink-0 bg-[#0066a4] text-white px-5 py-2 text-sm font-semibold hover:bg-[#00558a] transition-colors rounded"
                    >
                      View Details
                    </Link>
                  </div>
                  <p className="mt-3 text-gray-700 text-sm leading-relaxed">{job.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">There are currently no open positions. Please check back soon or send us an unsolicited application.</p>
          )}
          <div className="mt-6">
            <Link href="/company/careers/open-positions" className="text-[#0066a4] font-semibold hover:underline">
              View all open positions â†’
            </Link>
          </div>
        </div>

        <div className="bg-[#f5f5f5] p-6 rounded">
          <h3 className="text-lg font-bold text-[#003366] mb-2">Unsolicited Application</h3>
          <p className="text-gray-700 mb-4">Don&apos;t see a suitable opening? We welcome unsolicited applications from motivated candidates. Send your CV and cover letter to <a href="mailto:careers@ultrafilter.de" className="text-[#0066a4] hover:underline">careers@ultrafilter.de</a>.</p>
        </div>
      </div>
      <NewsletterCTA />
    </>
  );
}

