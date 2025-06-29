import { getPostData, getSortedPostsData } from '@/lib/posts';
import { formatDate } from '@/utils/formatDate';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Comments from '@/components/Comments';

type PageParams = { slug: string };
type PageProps = { params: Promise<PageParams> };

export function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostData(slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt,
  };
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostData(slug);

  if (!post) notFound();

  const { frontmatter, content, readingTime } = post;

  return (
    <div className="max-w-3xl mx-auto px-4 py-24 sm:py-32 sm:px-6 lg:px-8">
      <article className="prose prose-lg dark:prose-invert">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">{frontmatter.title}</h1>
          <div className="mt-4 text-base text-zinc-500 dark:text-zinc-400">
            <span>Published on {formatDate(frontmatter.date)}</span>
            <span className="mx-2">•</span>
            <span>{readingTime}</span>
          </div>
        </div>
        {content}
      </article>

      <div className="mt-16 border-t border-zinc-200 dark:border-zinc-700 pt-12">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
          Comments
        </h2>
        <div className="mt-4">
          <Comments />
        </div>
      </div>
    </div>
  );
}
