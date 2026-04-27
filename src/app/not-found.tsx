import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f5f5f5] px-4 text-center">
      <div className="w-16 h-1 bg-[#0066a4] mb-8" />
      <h1 className="text-8xl font-bold text-[#003366] mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-3">Page Not Found</h2>
      <p className="text-gray-500 max-w-md mb-8">
        The page you are looking for does not exist or may have been moved. Please use the navigation or return to the homepage.
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <Link href="/" className="bg-[#003366] text-white px-6 py-3 font-semibold hover:bg-[#002244] transition-colors rounded">
          Go to Homepage
        </Link>
        <Link href="/contact" className="border-2 border-[#003366] text-[#003366] px-6 py-3 font-semibold hover:bg-[#003366] hover:text-white transition-colors rounded">
          Contact Us
        </Link>
      </div>
    </div>
  );
}

