import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Legal Notice | ultrafilter',
  description: 'Legal notice (Impressum) for ultrafilter GmbH — company information, registration, and liability disclaimer.',
};

export default function Page() {
  return (
    <>
      <PageHero title="Legal Notice" subtitle="Company information and legal disclosure for ultrafilter GmbH." />
      <Breadcrumbs items={[{ label: 'Legal Notice', href: '/legal-notice' }]} />
      <div className="max-w-4xl mx-auto px-4 py-12 prose prose-headings:text-[#003366] prose-a:text-[#0066a4]">
        <h2>Company Information</h2>
        <p>
          <strong>ultrafilter GmbH</strong><br />
          Brüsseler Straße 4<br />
          40878 Ratingen<br />
          Germany
        </p>
        <p>
          Phone: +49 (0) 2102 / 8 77-0<br />
          Fax: +49 (0) 2102 / 8 77-100<br />
          Email: <a href="mailto:info@ultrafilter.de">info@ultrafilter.de</a>
        </p>

        <h2>Commercial Register</h2>
        <p>
          Registered at: Amtsgericht Düsseldorf<br />
          Registration number: HRB XXXXX<br />
          VAT identification number: DE XXX XXX XXX
        </p>

        <h2>Managing Director</h2>
        <p>Managing Director: [Name]</p>

        <h2>Responsible for Content</h2>
        <p>Responsible for the content of this website pursuant to § 18(2) MStV: Managing Director, ultrafilter GmbH, address as above.</p>

        <h2>Liability for Content</h2>
        <p>The content of our pages has been created with the greatest care. However, we cannot accept any liability for the accuracy, completeness, or topicality of the content. As a service provider, we are responsible for our own content on these pages under the general laws in accordance with § 7(1) TMG. However, according to §§ 8 to 10 TMG, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.</p>

        <h2>Liability for Links</h2>
        <p>Our website contains links to external third-party websites whose content is beyond our control. We cannot therefore accept any liability for such external content. In each case, the relevant provider or operator of the linked pages is responsible for the content of those pages. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognisable at the time of linking.</p>

        <h2>Copyright</h2>
        <p>The content and works on these pages created by the site operators are subject to German copyright law. The reproduction, editing, distribution, and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use. Where content on this site was not created by the operator, the copyrights of third parties are respected.</p>
      </div>
    </>
  );
}
