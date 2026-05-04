import Image from 'next/image';
import Link from 'next/link';

export interface HeroSectionProps {
  imageSrc: string;
  heading: string;
  subheading: string;
  ctaLabel: string;
  ctaHref: string;
  imageAlt?: string;
}

export default function HeroSection({
  imageSrc,
  heading,
  subheading,
  ctaLabel,
  ctaHref,
  imageAlt,
}: HeroSectionProps) {
  return (
    <section className="relative w-full h-[420px] md:h-[520px] lg:h-[580px] overflow-hidden bg-[#003366]" aria-labelledby="hero-heading">
      <Image
        src={imageSrc}
        alt={imageAlt ?? heading}
        fill
        priority
        className="object-cover object-[center_35%]"
        sizes="100vw"
      />
      {/* Light blue tint over the photo */}
      <div className="absolute inset-0 bg-[#003366]/35" aria-hidden />
      {/* Darker fade on the left for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#001a33]/72 via-[#003366]/35 to-transparent" aria-hidden />

      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto max-w-7xl w-full px-4">
          <div className="max-w-xl">
            <h1 id="hero-heading" className="mb-4 text-3xl font-black leading-tight text-white md:text-4xl lg:text-5xl">
              {heading}
            </h1>
            <p className="mb-6 text-base leading-relaxed text-blue-100 md:text-lg">{subheading}</p>
            <Link
              href={ctaHref}
              className="inline-block rounded border border-white bg-transparent px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-white hover:text-[#003366]"
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
