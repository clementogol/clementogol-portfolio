// src/app/blog/page.tsx

// 1. Import the Image component
import Image from 'next/image';
import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';
import { formatDate } from '@/utils/formatDate';

export default function BlogPage() {
    const allPosts = getSortedPostsData();

    return (
        <main className="max-w-4xl mx-auto px-4 py-24 sm:py-32 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                    From the Blog
                </h1>
                <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
                    All my thoughts on design, development, and the future of tech.
                </p>
            </div>

            <div className="space-y-16">
                {allPosts.map(({ slug, date, title, excerpt, coverImage }) => (
                    <article key={slug} className="group relative">
                        <Link href={`/blog/${slug}`} className="block">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                                <div className="relative col-span-1 h-48 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
                                    {/* 2. Replace <img> with <Image /> and use the "fill" property */}
                                    <Image
                                        src={coverImage}
                                        alt={`Cover image for ${title}`}
                                        className="object-cover" // Note: w-full and h-full are no longer needed here
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Optional but recommended for performance
                                    />
                                </div>
                                <div className="col-span-2 mt-4 md:mt-0">
                                    <time dateTime={date} className="text-sm text-zinc-500 dark:text-zinc-400">
                                        {formatDate(date)}
                                    </time>
                                    <h2 className="mt-2 text-2xl font-bold text-zinc-800 dark:text-zinc-100 group-hover:text-cyan-500 transition-colors">
                                        {title}
                                    </h2>
                                    <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">{excerpt}</p>
                                    <p className="mt-6 text-sm font-semibold text-cyan-600 dark:text-cyan-400 group-hover:underline">
                                        Read post →
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </article>
                ))}
            </div>
        </main>
    );
}
