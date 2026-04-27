'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface Slide {
  image: string;
  heading: string;
  subheading: string;
  ctaLabel: string;
  ctaHref: string;
}

interface HeroCarouselProps {
  slides: Slide[];
  interval?: number;
}

export default function HeroCarousel({ slides, interval = 5000 }: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = useCallback((index: number) => {
    setFading(true);
    setTimeout(() => {
      setCurrent(index);
      setFading(false);
    }, 300);
  }, []);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, slides.length, goTo]);

  useEffect(() => {
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [next, interval]);

  const slide = slides[current];

  return (
    <div className="relative w-full h-[420px] md:h-[520px] lg:h-[580px] overflow-hidden bg-[#003366]">
      {/* Background Image */}
      <div
        className={cn(
          'absolute inset-0 transition-opacity duration-300',
          fading ? 'opacity-0' : 'opacity-100'
        )}
      >
        <Image
          src={slide.image}
          alt={slide.heading}
          fill
          className="object-cover"
          priority={current === 0}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001a33]/80 via-[#003366]/50 to-transparent" />
      </div>

      {/* Content */}
      <div
        className={cn(
          'absolute inset-0 flex items-center transition-opacity duration-300',
          fading ? 'opacity-0' : 'opacity-100'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
              {slide.heading}
            </h1>
            <p className="text-base md:text-lg text-blue-100 mb-6 leading-relaxed">
              {slide.subheading}
            </p>
            <Link
              href={slide.ctaHref}
              className="inline-block border border-white bg-transparent text-white hover:bg-white hover:text-[#003366] font-bold px-8 py-3 rounded text-sm transition-colors"
            >
              {slide.ctaLabel}
            </Link>
          </div>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={cn(
              'w-2.5 h-2.5 rounded-full transition-all',
              i === current ? 'bg-[#0066a4] w-6' : 'bg-white/60 hover:bg-white/90'
            )}
          />
        ))}
      </div>

      {/* Arrow controls */}
      <button
        onClick={() => goTo((current - 1 + slides.length) % slides.length)}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full w-9 h-9 flex items-center justify-center transition-colors z-10"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => goTo((current + 1) % slides.length)}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full w-9 h-9 flex items-center justify-center transition-colors z-10"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

