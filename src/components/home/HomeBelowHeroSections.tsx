import Image from 'next/image';
import Link from 'next/link';

const headingBlue = 'text-[#004a80]';
const bodyGray = 'text-[#333333]';
const divider = 'border-[#dddddd]';

const imgYoutubeOverlay = '/images/home/youtube.jpg';
const imgMicroscope = '/images/home/submicron.jpg';
const imgIndustrial = '/images/home/Precision%20filtration%20technology/industrial_filtration.jpg';
const imgProcess = '/images/home/Precision%20filtration%20technology/process_filtration.jpg';
const imgLiquid = '/images/home/Precision%20filtration%20technology/liquid_filtration.jpg';

function UltrafilterLogoMark({ className }: { className?: string }) {
  return (
    <div
      className={`rounded border border-white/90 bg-white/10 px-3 py-2 backdrop-blur-sm ${className ?? ''}`}
    >
      <div className="flex items-center gap-2">
        <svg className="h-9 w-9 shrink-0 text-white" viewBox="0 0 40 40" fill="none" aria-hidden>
          <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M10 20c4-8 16-8 20 0-4 8-16 8-20 0Z"
            stroke="currentColor"
            strokeWidth="1.25"
            fill="none"
          />
        </svg>
        <div className="text-white leading-tight">
          <div className="text-[11px] font-bold tracking-wide md:text-xs">ULTRAFILTER</div>
          <div className="text-[8px] font-normal uppercase tracking-wider text-white/90 md:text-[9px]">
            The Filtration Manufacturer
          </div>
        </div>
      </div>
    </div>
  );
}

function DrinktecSplash() {
  return (
    <svg
      className="pointer-events-none absolute -right-4 -top-6 h-28 w-[55%] max-w-md text-amber-400/90 md:h-36"
      viewBox="0 0 400 120"
      fill="none"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M120 8c40-12 88-8 120 12 32 28 48 72 140 64 24-2 44 8 20 36-28 32-96 18-152-6C292 84 232 96 180 72 128 48 80 20 120 8Z"
        opacity="0.95"
      />
      <path
        fill="#f59e0b"
        d="M60 40c28-24 76-32 120-18 52 16 88 56 160 44 20-3 36 14 18 32-24 22-72 14-128-14-48-24-100-56-170-44Z"
        opacity="0.85"
      />
    </svg>
  );
}

export default function HomeBelowHeroSections() {
  return (
    <div className="bg-white">
      {/* —— Welcome, drinktec, video —— */}
      <section className={`border-b ${divider}`}>
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-14">
          <h2 className={`mb-4 text-left text-xl font-bold uppercase leading-snug md:text-2xl ${headingBlue}`}>
            Welcome to ultrafilter - The Filtration Manufacturer
          </h2>
          <p className={`mb-8 max-w-none text-left text-base leading-relaxed md:text-lg ${bodyGray}`}>
            Leading in cutting-edge filtration technology, Ultrafilter (India) Pvt. Ltd. empowers industries across India
            with scalable, high-quality filtration solutions. Committed to excellence, our products set new standards in
            operational performance, ensuring your processes benefit from unparalleled purity and precision. Discover the
            power of advanced filtration technology with ultrafilter today.
          </p>

          <hr className={`mb-10 mt-2 border-0 border-t ${divider}`} />

          <div className={`overflow-hidden border ${divider} bg-neutral-100`}>
            <Link
              href="https://www.youtube.com/channel/UC8Tzmwj8P4Zef_nXVjJCO-A"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Watch ultrafilter videos on YouTube"
              className="group relative block w-full"
            >
              <Image
                src={imgYoutubeOverlay}
                alt="Ultrafilter laboratory and filtration equipment"
                width={1366}
                height={390}
                className="h-auto w-full object-contain"
                sizes="(max-width: 1280px) 100vw, 1200px"
                priority
              />
              <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-white/95 bg-white/25 backdrop-blur-[2px] md:h-20 md:w-20">
                <svg
                  className="ml-1 h-7 w-7 text-white md:h-9 md:w-9"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M8 5v14l11-7L8 5z" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* —— Partner + lab banner —— */}
      <section className={`border-b ${divider}`}>
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-14">
          <h2 className={`mb-4 text-left text-xl font-bold uppercase leading-snug md:text-2xl ${headingBlue}`}>
            Your partner in purity and efficiency
          </h2>
          <p className={`mb-8 text-left text-base leading-relaxed md:text-lg ${bodyGray}`}>
            Recognizing the diverse requirements across industries, Ultrafilter (India) Pvt. Ltd. offers tailored filtration
            solutions to address your specific challenges. Whether you operate in food processing, pharmaceuticals, or
            technology, our precision-engineered filtration solutions ensure your products meet the highest safety and
            quality standards. With a promise of rapid service and delivery, we stand as a dependable partner in securing
            the essential elements that power life.
          </p>

          <div className={`relative overflow-hidden border ${divider} bg-neutral-200`}>
            <div className="relative w-full">
              <Image
                src={imgMicroscope}
                alt="Ultrafilter research scientist using a microscope in the laboratory"
                width={1366}
                height={390}
                className="h-auto w-full object-contain object-center"
                sizes="(max-width: 1280px) 100vw, 1200px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* —— Precision filtration —— */}
      <section className={`border-b ${divider}`}>
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-14">
          <h2 className={`mb-4 text-left text-xl font-bold uppercase tracking-wide md:text-2xl ${headingBlue}`}>
            Precision filtration technology
          </h2>
          <p className={`mb-8 text-left text-base leading-relaxed md:text-lg ${bodyGray}`}>
            Optimize your operations with expert filtration solutions. We specialize in industrial, process, and liquid
            filtration for compressed air, technical gases, steam, and liquids. Ensure top performance and industry
            compliance with our cutting-edge filtration technology. Download our product portfolio to discover the
            perfect filtration solution for your needs.
          </p>

          <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-3 md:gap-4">
            <Link
              href="/products/industrial-filtration"
              className={`group flex flex-col overflow-hidden border ${divider} bg-neutral-100 transition-shadow hover:shadow-md`}
            >
              <div className="relative aspect-[4/3] bg-neutral-200">
                <Image
                  src={imgIndustrial}
                  alt="Industrial filtration products"
                  fill
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <div className="bg-[#74b1d9] py-3 text-center text-sm font-semibold uppercase italic tracking-wide text-white md:text-base">
                Industrial filtration
              </div>
            </Link>
            <Link
              href="/products/process-filtration"
              className={`group flex flex-col overflow-hidden border ${divider} bg-neutral-100 transition-shadow hover:shadow-md`}
            >
              <div className="relative aspect-[4/3] bg-neutral-200">
                <Image
                  src={imgProcess}
                  alt="Process filtration products"
                  fill
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <div className="bg-[#74b1d9] py-3 text-center text-sm font-semibold uppercase italic tracking-wide text-white md:text-base">
                Process filtration
              </div>
            </Link>
            <Link
              href="/products/process-filtration"
              className={`group flex flex-col overflow-hidden border ${divider} bg-neutral-100 transition-shadow hover:shadow-md`}
            >
              <div className="relative aspect-[4/3] bg-neutral-200">
                <Image
                  src={imgLiquid}
                  alt="Liquid filtration applications"
                  fill
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <div className="bg-[#74b1d9] py-3 text-center text-sm font-semibold uppercase italic tracking-wide text-white md:text-base">
                Liquid filtration
              </div>
            </Link>
          </div>

          <Link
            href="/downloads"
            className="inline-block border border-black bg-gradient-to-b from-neutral-100 to-neutral-300 px-5 py-2.5 text-base font-semibold text-black shadow-sm transition hover:from-neutral-200 hover:to-neutral-400"
          >
            Download Product Portfolio
          </Link>
        </div>
      </section>
    </div>
  );
}
