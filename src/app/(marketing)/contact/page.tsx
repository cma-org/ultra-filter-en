import type { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfoBlock from '@/components/shared/ContactInfoBlock';

export const metadata: Metadata = {
  title: 'Contact | ultrafilter',
  description: 'Contact Ultrafilter (India) Pvt. Ltd. — product enquiries, technical support, service requests, or general information.',
};

export default function Page() {
  return (
    <>
      <PageHero
        title="Contact"
        subtitle="We are here to help. Get in touch with our team for product enquiries, technical questions, or service requests."
        image="/images/contact/contact-hero.jpg"
      />
      <Breadcrumbs items={[{ label: 'Contact', href: '/contact' }]} />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold text-[#003366] mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>
          <aside className="w-full lg:w-80 shrink-0 space-y-6">
            <ContactInfoBlock />
            <div className="bg-[#f5f5f5] rounded p-6">
              <h3 className="font-bold text-[#003366] mb-3">Opening Hours</h3>
              <dl className="space-y-1 text-sm text-gray-700">
                <div className="flex justify-between"><dt>Monday – Thursday</dt><dd>07:30 – 17:00</dd></div>
                <div className="flex justify-between"><dt>Friday</dt><dd>07:30 – 15:00</dd></div>
                <div className="flex justify-between"><dt>Saturday – Sunday</dt><dd>Closed</dd></div>
              </dl>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
