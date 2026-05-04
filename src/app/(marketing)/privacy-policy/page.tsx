import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { companyInfo } from '@/content/company';

export const metadata: Metadata = {
  title: 'Privacy Policy | ultrafilter',
  description: `${companyInfo.name} privacy policy — how we collect, use, and protect your personal data.`,
};

export default function Page() {
  return (
    <>
      <PageHero title="Privacy Policy" subtitle={`How ${companyInfo.name} processes and protects your personal data.`} />
      <Breadcrumbs items={[{ label: 'Privacy Policy', href: '/privacy-policy' }]} />
      <div className="max-w-4xl mx-auto px-4 py-12 prose prose-headings:text-[#003366] prose-a:text-[#0066a4]">
        <h2>1. Data Controller</h2>
        <p>
          The data controller responsible for personal data processing on this website is:
          <br />
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
          Tel: {companyInfo.phone}
          <br />
          Email: <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
        </p>

        <h2>2. Data We Collect</h2>
        <p>
          When you visit this website, our server automatically records certain information including your IP address,
          browser type, operating system, referring URL, and the date and time of your visit. This data is used solely
          for technical operation and security purposes and is not linked to individual persons.
        </p>
        <p>
          When you use our contact form or newsletter registration, we collect the personal data you provide (name,
          email address, phone number, and message content). This data is used exclusively to respond to your enquiry or
          send you the requested newsletter.
        </p>

        <h2>3. Legal Basis for Processing</h2>
        <p>We process your personal data on the following legal bases, as applicable under Indian law (including the Digital Personal Data Protection Act, 2023) and, where relevant, the GDPR:</p>
        <ul>
          <li>
            <strong>Performance of a contract or pre-contractual steps</strong> — Processing necessary to respond to your
            enquiry or deliver requested services
          </li>
          <li>
            <strong>Consent</strong> — Where you have given clear consent (e.g. newsletter subscription)
          </li>
          <li>
            <strong>Legitimate interests</strong> — Such as website security and improving our services, where not
            overridden by your rights
          </li>
        </ul>

        <h2>4. Data Retention</h2>
        <p>
          We retain personal data only for as long as necessary to fulfil the purpose for which it was collected, or as
          required by applicable law. Contact form submissions are retained for up to 3 years for business correspondence
          purposes unless a longer period is required by law.
        </p>

        <h2>5. Cookies</h2>
        <p>
          This website uses a cookie to store your cookie consent preference. No tracking cookies, analytics cookies, or
          third-party cookies are set without your explicit consent. You can withdraw your consent at any time by
          clearing your browser cookies.
        </p>

        <h2>6. Your Rights</h2>
        <p>Depending on applicable law, you may have rights regarding your personal data, including:</p>
        <ul>
          <li>Right of access</li>
          <li>Right to rectification</li>
          <li>Right to erasure</li>
          <li>Right to restrict processing</li>
          <li>Right to data portability</li>
          <li>Right to object</li>
        </ul>
        <p>
          To exercise these rights, please contact us at{' '}
          <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>.
        </p>

        <h2>7. Right to Lodge a Complaint</h2>
        <p>
          You have the right to lodge a complaint with the relevant data protection authority in India (including the Data
          Protection Board of India, as constituted under applicable law) or, where the GDPR applies to you, with a
          supervisory authority in the European Economic Area.
        </p>

        <h2>8. Changes to this Policy</h2>
        <p>We may update this privacy policy from time to time. The current version is always available on this page. Last updated: May 2026.</p>
      </div>
    </>
  );
}
