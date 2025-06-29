// src/app/blog/[slug]/page.tsx

import { getPostData, getSortedPostsData } from '@/lib/posts';
import { formatDate } from '@/utils/formatDate';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

// Define the shape of the props for this page
type PageProps = {
    params: {
        slug: string;
    };
};

// This function tells Next.js all the possible 'slugs' so it can pre-render them at build time
export function generateStaticParams() {
    const posts = getSortedPostsData();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

// This function generates the dynamic metadata (like the <title> tag) for each post
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const awaitedParams = await params;
    const post = await getPostData(awaitedParams.slug);

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: post.frontmatter.title,
        description: post.frontmatter.excerpt,
    };
}

// This is the main component that renders the post content
export default async function PostPage({ params }: PageProps) {
    const awaitedParams = await params;
    const post = await getPostData(awaitedParams.slug);

    if (!post) {
        notFound(); // If the post doesn't exist, show a 404 page
    }

    const { frontmatter, content, readingTime } = post;

    return (
        <article className="prose prose-lg dark:prose-invert max-w-3xl mx-auto px-4 py-24 sm:py-32 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">{frontmatter.title}</h1>
                <div className="mt-4 text-base text-zinc-500 dark:text-zinc-400">
                    <span>Published on {formatDate(frontmatter.date)}</span>
                    <span className="mx-2">•</span>
                    <span>{readingTime}</span>
                </div>
            </div>

            {/* This is where the compiled MDX from your file gets rendered */}
            {content}
        </article>
    );
}
