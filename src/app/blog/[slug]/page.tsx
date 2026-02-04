import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getPostData, getSortedPostsData } from '@/lib/posts';
import { formatDate } from '@/utils/formatDate';
import Comments from '@/components/Comments';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import Article from '@/components/Article';
import { notFound } from 'next/navigation';

type Props = { params: Promise<{ slug: string }> };

// 1. Generate Static Params (Crucial for performance and static export)
export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// 2. Generate Metadata for SEO
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  try {
    const post = await getPostData(slug);
    return {
      title: `${post.frontmatter.title} | Clement Ogol`,
      description: post.frontmatter.excerpt,
    };
  } catch (e) {
    return {
      title: 'Post Not Found',
    };
  }
}

export default async function Post({ params }: Props) {
  const { slug } = await params;
  
  // Add try/catch to handle 404s gracefully
  let postData;
  try {
    postData = await getPostData(slug);
  } catch (error) {
    notFound(); // Triggers the Next.js 404 page
  }

  const { contentHtml, frontmatter, readingTime, prevPost, nextPost } = postData;

  return (
    // ADDED key={slug} below. 
    // This forces the Article component to remount (and animate) 
    // only when the specific post slug changes.
    <Article className="max-w-3xl mx-auto px-4 py-24" key={slug}>
      
      {/* Back to Blog */}
      <Link href="/blog" className="flex items-center text-sm font-medium text-zinc-500 hover:text-teal-500 transition-colors mb-10 group">
        <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
        Back to all posts
      </Link>

      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50 font-mplus leading-tight mb-4">
          {frontmatter.title}
        </h1>
        <div className="flex items-center gap-4 text-sm text-zinc-500 font-mono">
          <time>{formatDate(frontmatter.date)}</time>
          <span>•</span>
          <span className="flex items-center gap-1"><Clock className="w-3 h-3"/> {readingTime}</span>
        </div>
      </header>

      <div className="relative aspect-video mb-12 rounded-2xl overflow-hidden shadow-2xl">
        <Image 
          src={frontmatter.coverImage} 
          alt={frontmatter.title} 
          fill 
          className="object-cover" 
          priority 
        />
      </div>

      {/* --- Render the Markdown HTML --- */}
      <div 
        className="prose prose-zinc dark:prose-invert max-w-none mb-20 prose-headings:font-mplus prose-a:text-teal-500 prose-img:rounded-xl"
        dangerouslySetInnerHTML={{ __html: contentHtml }} 
      />

      {/* --- NAVIGATION SECTION --- */}
      <div className="grid grid-cols-2 gap-4 py-10 border-t border-zinc-200 dark:border-zinc-800">
        <div className="col-span-1">
          {prevPost && (
            <Link href={`/blog/${prevPost.slug}`} className="group block">
              <p className="text-xs text-zinc-500 mb-1 font-bold uppercase tracking-widest">Previous Article</p>
              <div className="flex items-center gap-2 text-zinc-800 dark:text-zinc-200 group-hover:text-teal-500 transition-colors font-semibold">
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                <span className="line-clamp-1">{prevPost.title}</span>
              </div>
            </Link>
          )}
        </div>
        <div className="col-span-1 text-right">
          {nextPost && (
            <Link href={`/blog/${nextPost.slug}`} className="group block">
              <p className="text-xs text-zinc-500 mb-1 font-bold uppercase tracking-widest">Next Article</p>
              <div className="flex items-center justify-end gap-2 text-zinc-800 dark:text-zinc-200 group-hover:text-teal-500 transition-colors font-semibold">
                <span className="line-clamp-1">{nextPost.title}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          )}
        </div>
      </div>

      <Comments />
    </Article>
  );
}
