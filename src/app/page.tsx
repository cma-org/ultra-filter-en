import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroCarousel from '@/components/home/HeroCarousel';
import HomeBelowHeroSections from '@/components/home/HomeBelowHeroSections';
import ProductCard from '@/components/products/ProductCard';
import ProductGrid from '@/components/products/ProductGrid';
import ContactInfoBlock from '@/components/shared/ContactInfoBlock';
import NewsletterCTA from '@/components/shared/NewsletterCTA';
import SectionHeading from '@/components/shared/SectionHeading';
import { heroSlides } from '@/content/company';
import { productCategories, valueProps } from '@/content/homepage';

export const metadata: Metadata = {
  title: 'ultrafilter – The Filtration Manufacturer | Compressed Air Filtration, Drying & Measurement',
  description:
    'ultrafilter GmbH — premium manufacturer of compressed air filtration, drying technology, condensate management, and measurement instruments. Made in Germany. Active in 30+ countries.',
};

const iconMap: Record<string, React.ReactNode> = {
  shield: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  globe: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  lab: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  wrench: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Carousel */}
        <HeroCarousel slides={heroSlides} />

        <HomeBelowHeroSections />

        {/* Product Categories */}
        <section className="py-14 bg-[#f5f5f5]">
          <div className="max-w-7xl mx-auto px-4">
            <SectionHeading
              title="Products & Solutions"
              subtitle="Comprehensive compressed air treatment — from filtration to drying, condensate management, and precision measurement."
              align="center"
            />
            <ProductGrid cols={2}>
              {productCategories.map((cat) => (
                <ProductCard
                  key={cat.href}
                  title={cat.title}
                  description={cat.description}
                  image={cat.image}
                  href={cat.href}
                />
              ))}
            </ProductGrid>
          </div>
        </section>

        {/* Value Propositions */}
        <section className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <SectionHeading
              title="Why ultrafilter?"
              subtitle="Owner-operated. Independently owned. Engineered in Germany."
              align="center"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-2">
              {valueProps.map((vp) => (
                <div key={vp.title} className="text-center p-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-[#003366] text-white rounded-full mx-auto mb-4">
                    {iconMap[vp.icon]}
                  </div>
                  <h3 className="font-bold text-[#003366] text-base mb-2">{vp.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{vp.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services strip */}
        <section className="bg-[#003366] py-12">
          <div className="mx-auto max-w-7xl px-4">
            <div className="relative overflow-hidden rounded-md">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/services/maintenance.jpg')" }}
                aria-hidden
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#00264a]/95 via-[#003366]/82 to-[#003366]/45" aria-hidden />
              <div className="relative z-[1] flex min-h-[360px] flex-col justify-end gap-8 p-6 md:p-10">
                <div className="max-w-2xl">
                  <h2 className="mb-3 text-4xl font-bold leading-tight text-white md:text-6xl">Service &amp; Support</h2>
                  <p className="mb-4 text-2xl font-semibold leading-tight text-white md:text-[2rem]">
                    Dedicated to keeping your operations running smoothly.
                  </p>
                  <p className="max-w-xl text-base leading-relaxed text-blue-100 md:text-xl">
                    Expert maintenance, repairs, and comprehensive service plans tailored to your needs.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link
                    href="/contact"
                    className="inline-flex min-w-[220px] items-center justify-center rounded-md bg-[#ef6b57] px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#e25842]"
                  >
                    Request Service
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex min-w-[220px] items-center justify-center rounded-md border border-white/70 bg-[#0a2b4e]/35 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white hover:text-[#003366]"
                  >
                    Support Resources
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact info */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <SectionHeading title="Get in Touch" />
                <p className="text-gray-600 text-sm mb-6 max-w-lg">
                  Have a question about our products or services? Need a quotation or technical advice? Our team is ready to help.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className="inline-block bg-[#e87722] hover:bg-orange-600 text-white font-bold px-6 py-2.5 rounded text-sm transition-colors">
                    Send a Message
                  </Link>
                  <Link href="/downloads" className="inline-block border border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white font-semibold px-6 py-2.5 rounded text-sm transition-colors">
                    Product Downloads
                  </Link>
                </div>
              </div>
              <div>
                <ContactInfoBlock />
              </div>
            </div>
          </div>
        </section>

        {/* YouTube Channel */}
        <section className="py-14 bg-[#f5f5f5]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-10 items-center">
              <div className="lg:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-8 h-8 text-red-600 fill-current" viewBox="0 0 24 24">
                    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8z"/>
                    <path fill="white" d="M9.8 15.5V8.5l6.3 3.5-6.3 3.5z"/>
                  </svg>
                  <h2 className="text-2xl font-bold text-[#003366]">ultrafilter on YouTube</h2>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Watch our product demonstrations, application guides, and technical videos. Learn how ultrafilter compressed air treatment technology works in real installations.
                </p>
                <a
                  href="https://www.youtube.com/channel/UC8Tzmwj8P4Zef_nXVjJCO-A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded transition-colors"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.8 15.5V8.5l6.3 3.5-6.3 3.5z"/>
                  </svg>
                  Visit Our Channel
                </a>
              </div>
              <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                <div className="aspect-video rounded overflow-hidden shadow-md">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/Tq-QJ_Sw1BA"
                    title="ultrafilter Product Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="aspect-video rounded overflow-hidden shadow-md">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/Qqw3OLPWXNU"
                    title="ultrafilter Application Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <NewsletterCTA />
      </main>
      <Footer />
    </div>
  );
}
