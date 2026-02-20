import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getPostData, getSortedPostsData } from '@/lib/posts';
import { formatDate } from '@/utils/formatDate';
import Comments from '@/components/Comments';
import { ArrowLeft, ArrowRight, Clock, Calendar } from 'lucide-react';
import Article from '@/components/Article';
import { notFound } from 'next/navigation';

type Props = { params: Promise<{ slug: string }> };

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
    
    // Quick Fix: We treat frontmatter as 'any' to allow both 'excerpt' and 'summary'
    // This stops TypeScript from complaining about the missing property.
    const data = post.frontmatter as any;

    return {
      title: `${data.title} | Clement Ogol`,
      description: data.excerpt || data.summary,
      openGraph: {
        images: [data.coverImage],
      },
    };
  } catch (e) {
    return {
      title: 'Post Not Found',
    };
  }
}

export default async function Post({ params }: Props) {
  const { slug } = await params;
  
  let postData;
  try {
    postData = await getPostData(slug);
  } catch (error) {
    notFound();
  }

  // prevPost and nextPost DO NOT have 'frontmatter' inside them. 
  // They are flat objects.
  const { contentHtml, readingTime, prevPost, nextPost, frontmatter } = postData;
  const { title, date, coverImage } = frontmatter;

  return (
    <Article className="max-w-3xl mx-auto px-4 py-12 md:py-24" key={slug}>
      
      {/* Back Button */}
      <Link 
        href="/blog" 
        className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors mb-8 group"
      >
        <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
        Back to all posts
      </Link>

      {/* Header */}
      <header className="mb-10">
        <h1 className="text-3xl md:text-5xl font-extrabold text-zinc-900 dark:text-zinc-50 font-mplus leading-tight mb-6 tracking-tight">
          {title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-500 font-medium">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-zinc-400" />
            <time dateTime={date}>{formatDate(date)}</time>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-zinc-400"/> 
            <span>{readingTime || '5 min read'}</span>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      {coverImage && (
        <div className="relative aspect-video w-full mb-12 rounded-2xl overflow-hidden shadow-xl ring-1 ring-zinc-900/5 dark:ring-white/10">
          <Image 
            src={coverImage} 
            alt={title} 
            fill 
            className="object-cover" 
            priority 
          />
        </div>
      )}

      {/* MAIN CONTENT */}
      <div 
        className="
          prose prose-lg prose-zinc dark:prose-invert max-w-none mb-20 
          prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-zinc-900 dark:prose-headings:text-zinc-100
          prose-a:text-teal-600 dark:prose-a:text-teal-400 prose-a:no-underline hover:prose-a:underline
          prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8 prose-img:w-full
          prose-blockquote:border-l-4 prose-blockquote:border-teal-500 prose-blockquote:pl-4 prose-blockquote:italic
          prose-strong:font-bold prose-strong:text-zinc-900 dark:prose-strong:text-white
        "
        dangerouslySetInnerHTML={{ __html: contentHtml }} 
      />

      <hr className="border-zinc-200 dark:border-zinc-800 mb-10" />
      
      {/* Navigation Footer */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <div className="col-span-1">
          {prevPost ? (
            <Link href={`/blog/${prevPost.slug}`} className="group block p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-teal-500/50 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-all">
              <p className="text-xs text-zinc-500 mb-2 font-bold uppercase tracking-widest">Previous Article</p>
              <div className="flex items-center gap-2 text-zinc-800 dark:text-zinc-200 group-hover:text-teal-600 dark:group-hover:text-teal-400 font-semibold">
                <ArrowLeft className="w-4 h-4 flex-shrink-0 transition-transform group-hover:-translate-x-1" />
                {/* FIXED: Removed .frontmatter here */}
                <span className="line-clamp-2">{prevPost.title}</span>
              </div>
            </Link>
          ) : <div/>}
        </div>

        <div className="col-span-1 text-right">
          {nextPost && (
            <Link href={`/blog/${nextPost.slug}`} className="group block p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-teal-500/50 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-all">
              <p className="text-xs text-zinc-500 mb-2 font-bold uppercase tracking-widest">Next Article</p>
              <div className="flex items-center justify-end gap-2 text-zinc-800 dark:text-zinc-200 group-hover:text-teal-600 dark:group-hover:text-teal-400 font-semibold">
                {/* FIXED: Removed .frontmatter here */}
                <span className="line-clamp-2">{nextPost.title}</span>
                <ArrowRight className="w-4 h-4 flex-shrink-0 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          )}
        </div>
      </div>

      <Comments />
    </Article>
  );
}
