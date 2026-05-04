'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { navigation } from '@/content/navigation';
import { companyInfo } from '@/content/company';
import { cn } from '@/lib/utils';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close mega-menu on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // Lock body scroll when mobile nav is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-[#003366] text-white text-xs py-1.5">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <span className="hidden sm:block">Die Aufbereitungsexperten | The Filtration Manufacturer</span>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${companyInfo.phoneTel ?? companyInfo.phone.replace(/[^\d+]/g, '')}`}
              className="hover:text-[#9fd3ff] transition-colors"
            >
              {companyInfo.phone}
            </a>
            <a href={`mailto:${companyInfo.email}`} className="hover:text-[#9fd3ff] transition-colors hidden sm:block">
              {companyInfo.email}
            </a>
            <a
              href="https://www.youtube.com/channel/UC8Tzmwj8P4Zef_nXVjJCO-A"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400 transition-colors hidden sm:flex items-center gap-1"
              aria-label="ultrafilter YouTube channel"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.8 15.5V8.5l6.3 3.5-6.3 3.5z"/></svg>
              <span className="text-xs">YouTube</span>
            </a>
            <Link href="/contact" className="border border-white bg-transparent text-white hover:bg-white hover:text-[#003366] px-3 py-0.5 rounded text-xs font-semibold transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center" aria-label="ultrafilter home">
            <div className="relative h-12 w-56 min-w-[11rem] sm:h-14 sm:w-64 sm:min-w-[14rem] md:h-14 md:w-72">
              <Image
                src="/images/ultrafilter%20logo.png"
                alt="ultrafilter â€“ The Filtration Manufacturer"
                fill
                className="object-contain object-left"
                sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, 288px"
                priority
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <nav ref={menuRef} className="hidden lg:flex items-center gap-0" aria-label="Main navigation">
            {navigation.map((item) => (
              <div key={item.href} className="relative">
                {item.children ? (
                  <button
                    type="button"
                    className={cn(
                      'flex cursor-pointer items-center gap-1 border-b-2 px-4 py-5 text-sm font-semibold transition-colors bg-transparent',
                      activeMenu === item.href
                        ? 'text-[#003366] border-[#0066a4]'
                        : 'border-transparent text-gray-700 hover:border-[#0066a4] hover:text-[#003366]'
                    )}
                    onMouseEnter={() => setActiveMenu(item.href)}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveMenu(activeMenu === item.href ? null : item.href);
                    }}
                    aria-expanded={activeMenu === item.href}
                  >
                    {item.label}
                    <svg className="w-3.5 h-3.5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-4 py-5 text-sm font-semibold transition-colors border-b-2 text-gray-700 border-transparent hover:text-[#003366] hover:border-[#0066a4]"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Mega / Dropdown menu */}
                {item.children && activeMenu === item.href && (
                  <div
                    className={cn(
                      'absolute top-full z-50 animate-in border-t-2 border-[#0066a4] bg-white shadow-xl fade-in duration-150',
                      item.children.some(c => c.children)
                        ? 'left-1/2 w-screen max-w-none -translate-x-1/2'
                        : 'right-0 w-[min(92vw,360px)]'
                    )}
                    onMouseLeave={() => setActiveMenu(null)}
                  >
                    {/* Products: two-column mega menu */}
                    {item.children.some(c => c.children) ? (
                      <div className="grid min-h-0 grid-cols-2 gap-0 p-5">
                        {item.children.map((cat) => (
                          <div key={cat.href} className="mb-3 pr-6">
                            {cat.children?.length ? (
                              <span className="mb-2 block text-base font-bold text-[#003366]">{cat.label}</span>
                            ) : (
                              <Link
                                href={cat.href}
                                className="mb-2 block text-base font-bold text-[#003366] transition-colors hover:text-[#0066a4]"
                                onClick={() => setActiveMenu(null)}
                              >
                                {cat.label}
                              </Link>
                            )}
                            {cat.children?.length ? (
                              <p className="mb-2 text-sm leading-snug text-gray-500">
                                {cat.description}{' '}
                                <Link
                                  href={cat.href}
                                  className="font-semibold text-[#0066a4] underline-offset-2 hover:text-[#003366] hover:underline"
                                  onClick={() => setActiveMenu(null)}
                                >
                                  View all →
                                </Link>
                              </p>
                            ) : (
                              cat.description && (
                                <p className="mb-2 text-sm leading-snug text-gray-500">{cat.description}</p>
                              )
                            )}
                            {cat.children?.map((sub) => (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                className="block border-l-2 border-transparent py-0.5 pl-2 text-sm text-gray-600 transition-colors hover:border-[#0066a4] hover:text-[#0066a4]"
                                onClick={() => setActiveMenu(null)}
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    ) : (
                      // Simple dropdown
                      <ul className="py-1.5">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="block px-6 py-2 text-base text-gray-700 transition-colors hover:bg-blue-50 hover:text-[#003366]"
                              onClick={() => setActiveMenu(null)}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-[#003366] hover:bg-gray-100 rounded transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[calc(var(--header-height,112px))] bg-white z-40 overflow-y-auto border-t border-gray-200">
          <nav className="px-4 py-4">
            {navigation.map((item) => (
              <div key={item.href} className="border-b border-gray-100 last:border-0">
                {item.children ? (
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-2 py-3 text-left text-sm font-bold text-[#003366]"
                    onClick={() => setMobileExpanded(mobileExpanded === item.href ? null : item.href)}
                    aria-expanded={mobileExpanded === item.href}
                    aria-controls={`mobile-submenu-${item.href.replace(/\//g, '-')}`}
                    id={`mobile-nav-${item.href.replace(/\//g, '-')}`}
                  >
                    {item.label}
                    <svg
                      className={cn('h-4 w-4 shrink-0 text-gray-500 transition-transform', mobileExpanded === item.href && 'rotate-180')}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-3 text-sm font-bold text-[#003366]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
                {item.children && mobileExpanded === item.href && (
                  <div
                    id={`mobile-submenu-${item.href.replace(/\//g, '-')}`}
                    className="pb-3 pl-4"
                    role="region"
                    aria-labelledby={`mobile-nav-${item.href.replace(/\//g, '-')}`}
                  >
                    {item.children.map((child) => (
                      <div key={child.href}>
                        <Link
                          href={child.href}
                          className="block py-1.5 text-sm font-semibold text-gray-700 hover:text-[#003366]"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                        {child.children?.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="block py-1 text-xs text-gray-500 hover:text-[#0066a4] pl-3"
                            onClick={() => setMobileOpen(false)}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
              <Link href="/contact" className="block w-full text-center border border-white bg-transparent text-white hover:bg-white hover:text-[#003366] py-2.5 rounded font-semibold text-sm transition-colors" onClick={() => setMobileOpen(false)}>
                Contact Us
              </Link>
              <Link href="/downloads" className="block w-full text-center border border-[#003366] text-[#003366] py-2.5 rounded font-semibold text-sm" onClick={() => setMobileOpen(false)}>
                Downloads
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

