import Link from 'next/link';
import Image from 'next/image';
import type { NewsArticle } from '@/types/news';

interface NewsCardProps {
  article: NewsArticle;
  baseHref: string;
}

export default function NewsCard({ article, baseHref }: NewsCardProps) {
  return (
    <article className="bg-white border border-gray-200 rounded overflow-hidden hover:shadow-md transition-shadow group">
      {article.image && (
        <div className="relative h-40 w-full bg-gray-100 overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-5">
        <time className="text-xs text-gray-400 block mb-2">
          {new Date(article.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
        </time>
        <h3 className="font-bold text-[#003366] text-sm mb-2 group-hover:text-[#0066a4] transition-colors leading-snug">
          <Link href={`${baseHref}/${article.slug}`}>{article.title}</Link>
        </h3>
        <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">{article.excerpt}</p>
        <Link
          href={`${baseHref}/${article.slug}`}
          className="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-[#e87722] hover:text-orange-600 transition-colors"
        >
          Read more
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
