import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Privacy Policy | ultrafilter',
  description: 'ultrafilter GmbH privacy policy — how we collect, use, and protect your personal data.',
};

export default function Page() {
  return (
    <>
      <PageHero title="Privacy Policy" subtitle="How ultrafilter GmbH processes and protects your personal data." />
      <Breadcrumbs items={[{ label: 'Privacy Policy', href: '/privacy-policy' }]} />
      <div className="max-w-4xl mx-auto px-4 py-12 prose prose-headings:text-[#003366] prose-a:text-[#0066a4]">
        <h2>1. Data Controller</h2>
        <p>
          The data controller responsible for personal data processing on this website is:<br />
          ultrafilter GmbH, Brüsseler Straße 4, 40878 Ratingen, Germany<br />
          Phone: +49 (0) 2102 / 8 77-0<br />
          Email: <a href="mailto:info@ultrafilter.de">info@ultrafilter.de</a>
        </p>

        <h2>2. Data We Collect</h2>
        <p>When you visit this website, our server automatically records certain information including your IP address, browser type, operating system, referring URL, and the date and time of your visit. This data is used solely for technical operation and security purposes and is not linked to individual persons.</p>
        <p>When you use our contact form or newsletter registration, we collect the personal data you provide (name, email address, phone number, and message content). This data is used exclusively to respond to your enquiry or send you the requested newsletter.</p>

        <h2>3. Legal Basis for Processing</h2>
        <p>We process your personal data on the following legal bases under the GDPR:</p>
        <ul>
          <li><strong>Article 6(1)(b) GDPR</strong> — Processing necessary to perform a contract or take pre-contractual steps</li>
          <li><strong>Article 6(1)(a) GDPR</strong> — Your consent (e.g. newsletter subscription)</li>
          <li><strong>Article 6(1)(f) GDPR</strong> — Our legitimate interests (e.g. website security)</li>
        </ul>

        <h2>4. Data Retention</h2>
        <p>We retain personal data only for as long as necessary to fulfil the purpose for which it was collected, or as required by applicable law. Contact form submissions are retained for up to 3 years for business correspondence purposes.</p>

        <h2>5. Cookies</h2>
        <p>This website uses a cookie to store your cookie consent preference. No tracking cookies, analytics cookies, or third-party cookies are set without your explicit consent. You can withdraw your consent at any time by clearing your browser cookies.</p>

        <h2>6. Your Rights</h2>
        <p>Under the GDPR, you have the following rights regarding your personal data:</p>
        <ul>
          <li>Right of access (Article 15 GDPR)</li>
          <li>Right to rectification (Article 16 GDPR)</li>
          <li>Right to erasure (Article 17 GDPR)</li>
          <li>Right to restriction of processing (Article 18 GDPR)</li>
          <li>Right to data portability (Article 20 GDPR)</li>
          <li>Right to object (Article 21 GDPR)</li>
        </ul>
        <p>To exercise these rights, please contact us at <a href="mailto:datenschutz@ultrafilter.de">datenschutz@ultrafilter.de</a>.</p>

        <h2>7. Right to Lodge a Complaint</h2>
        <p>You have the right to lodge a complaint with a supervisory authority. The competent authority for ultrafilter GmbH is the Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen.</p>

        <h2>8. Changes to this Policy</h2>
        <p>We may update this privacy policy from time to time. The current version is always available on this page. Last updated: January 2026.</p>
      </div>
    </>
  );
}
