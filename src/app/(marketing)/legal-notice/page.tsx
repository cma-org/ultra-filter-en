import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { companyInfo } from '@/content/company';

export const metadata: Metadata = {
  title: 'Legal Notice | ultrafilter',
  description: `Legal notice for ${companyInfo.name} — company information and liability disclaimer.`,
};

export default function Page() {
  return (
    <>
      <PageHero title="Legal Notice" subtitle={`Company information and legal disclosure for ${companyInfo.name}.`} />
      <Breadcrumbs items={[{ label: 'Legal Notice', href: '/legal-notice' }]} />
      <div className="max-w-4xl mx-auto px-4 py-12 prose prose-headings:text-[#003366] prose-a:text-[#0066a4]">
        <h2>Company Information</h2>
        <p>
          <strong>{companyInfo.name}</strong>
          <br />
          {companyInfo.address.headline ? (
            <>
              {companyInfo.address.headline}
              <br />
            </>
          ) : null}
          {companyInfo.address.lines.map((line) => (
            <span key={line}>
              {line}
              <br />
            </span>
          ))}
        </p>
        <p>
          Tel: {companyInfo.phone}
          <br />
          E-mail: <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
        </p>

        <h2>Commercial Register</h2>
        <p>
          Corporate identification and tax registration details for India are maintained at the registered office above
          and can be provided on request.
        </p>

        <h2>Managing Director</h2>
        <p>Managing Director: [Name]</p>

        <h2>Responsible for Content</h2>
        <p>
          Responsible for the content of this website: Managing Director, {companyInfo.name}, address as above.
        </p>

        <h2>Liability for Content</h2>
        <p>
          The content of our pages has been created with the greatest care. However, we cannot accept any liability for
          the accuracy, completeness, or topicality of the content. As a service provider, we are responsible for our own
          content on these pages under applicable law. We are not obligated to monitor transmitted or stored third-party
          information or to investigate circumstances that indicate illegal activity unless required by law.
        </p>

        <h2>Liability for Links</h2>
        <p>
          Our website contains links to external third-party websites whose content is beyond our control. We cannot
          therefore accept any liability for such external content. In each case, the relevant provider or operator of
          the linked pages is responsible for the content of those pages. The linked pages were checked for possible
          legal violations at the time of linking. Illegal content was not recognisable at the time of linking.
        </p>

        <h2>Copyright</h2>
        <p>
          The content and works on these pages created by the site operators are subject to applicable copyright law. The
          reproduction, editing, distribution, and any kind of exploitation outside the limits of copyright require the
          written consent of the respective author or creator. Downloads and copies of this site are only permitted for
          private, non-commercial use. Where content on this site was not created by the operator, the copyrights of
          third parties are respected.
        </p>
      </div>
    </>
  );
}
