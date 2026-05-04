import Image from 'next/image';
import Link from 'next/link';
import { navigation } from '@/content/navigation';
import { companyInfo } from '@/content/company';

const footerCompanyLinks = [
  { label: 'About Us', href: '/company/about-us' },
  { label: 'Careers', href: '/company/careers' },
  { label: 'Open Positions', href: '/company/careers/open-positions' },
  { label: 'Production', href: '/company/production' },
  { label: 'Research & Development', href: '/company/research-development' },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#003366] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <div className="mb-4">
              <Link href="/" className="inline-block" aria-label="ultrafilter home">
                <div className="relative h-12 w-52 sm:h-14 sm:w-60">
                  <Image
                    src="/images/White%20Ultrafilter%20logo-cropped.png"
                    alt="ultrafilter â€“ The Filtration Manufacturer"
                    fill
                    className="object-contain object-left"
                    sizes="(max-width: 640px) 208px, 240px"
                  />
                </div>
              </Link>
            </div>
            <address className="not-italic text-sm text-blue-100 leading-relaxed">
              {companyInfo.address.headline ? (
                <p className="text-xs font-semibold text-blue-200">{companyInfo.address.headline}</p>
              ) : null}
              <p className="font-semibold text-white">{companyInfo.name}</p>
              {companyInfo.address.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </address>
            <div className="mt-3 text-sm text-blue-100 space-y-1">
              <p>
                <span className="text-blue-300">Tel:</span>{' '}
                <a href={`tel:${companyInfo.phoneTel ?? companyInfo.phone.replace(/[^\d+]/g, '')}`} className="hover:text-white transition-colors">
                  {companyInfo.phone}
                </a>
              </p>
              {companyInfo.fax ? (
                <p>
                  <span className="text-blue-300">Fax:</span> {companyInfo.fax}
                </p>
              ) : null}
              <p>
                <span className="text-blue-300">Email:</span>{' '}
                <a href={`mailto:${companyInfo.email}`} className="hover:text-white transition-colors">
                  {companyInfo.emailDisplay}
                </a>
              </p>
            </div>
            {companyInfo.vdma ? <p className="mt-3 text-xs text-blue-300">{companyInfo.vdma}</p> : null}
          </div>

          {/* Products nav */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-[#0066a4]">Products</h3>
            <ul className="space-y-1.5 text-sm text-blue-100">
              <li>
                <Link href="/products" className="hover:text-white transition-colors font-semibold">
                  All products
                </Link>
              </li>
              {navigation.find(n => n.label === 'Products')?.children?.map((cat) => (
                <li key={cat.href}>
                  <Link href={cat.href} className="hover:text-white transition-colors">
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services + Company nav */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-[#0066a4]">Services</h3>
            <ul className="space-y-1.5 text-sm text-blue-100 mb-6">
              <li>
                <Link href="/services" className="font-semibold transition-colors hover:text-white">
                  All services
                </Link>
              </li>
              {navigation.find(n => n.label === 'Services')?.children?.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-[#0066a4]">Company</h3>
            <ul className="space-y-1.5 text-sm text-blue-100">
              {footerCompanyLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter + Quick links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-[#0066a4]">Stay Informed</h3>
            <p className="text-sm text-blue-100 mb-4">
              Subscribe to our newsletter for product updates, technical articles, and industry news.
            </p>
            <Link
              href="/news/newsletter"
              className="inline-block border border-white bg-transparent text-white hover:bg-white hover:text-[#003366] px-5 py-2.5 rounded font-semibold text-sm transition-colors mb-6"
            >
              Subscribe
            </Link>

            <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-[#0066a4]">Quick Links</h3>
            <ul className="space-y-1.5 text-sm text-blue-100">
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/downloads" className="hover:text-white transition-colors">Downloads</Link></li>
              <li><Link href="/company/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/news/events" className="hover:text-white transition-colors">Events</Link></li>
            </ul>

            <h3 className="text-sm font-bold uppercase tracking-wider mt-5 mb-3 text-[#0066a4]">Follow Us</h3>
            <a
              href="https://www.youtube.com/channel/UC8Tzmwj8P4Zef_nXVjJCO-A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-blue-100 hover:text-red-400 transition-colors"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.8 15.5V8.5l6.3 3.5-6.3 3.5z"/>
              </svg>
              YouTube Channel
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-blue-800 bg-[#002244]">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-blue-300">
          <p>© {year} {companyInfo.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/legal-notice" className="hover:text-white transition-colors">Legal Notice</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

