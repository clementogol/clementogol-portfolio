import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// FIX 1: Point to 'blogposts' instead of 'posts'
const postsDirectory = path.join(process.cwd(), 'blogposts');

export function getSortedPostsData() {
  // Check if directory exists
  if (!fs.existsSync(postsDirectory)) {
    console.warn(`Directory not found: ${postsDirectory}`);
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  
  // FIX 2: Filter for .mdx files and map them
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx')) // Only look for .mdx files
    .map((fileName) => {
      // FIX 3: Remove ".mdx" from file name to get slug
      const slug = fileName.replace(/\.mdx$/, '');

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      return {
        slug,
        ...(matterResult.data as { date: string; title: string; excerpt: string; coverImage: string }),
      };
    });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostData(slug: string) {
  // FIX 4: Append ".mdx" when looking for the specific file
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  
  // Verify file exists
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post not found: ${slug}`);
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  // Note: Since you are using MDX, if you have React components inside your text,
  // remark-html will ignore them. For standard text/images, this works fine.
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Calculate reading time
  const wordCount = matterResult.content.split(/\s+/g).length;
  const readingTime = Math.ceil(wordCount / 200) + ' min read';

  // Get Next/Prev posts for navigation
  const allPosts = getSortedPostsData();
  const currentIndex = allPosts.findIndex(post => post.slug === slug);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  return {
    slug,
    contentHtml,
    readingTime,
    prevPost,
    nextPost,
    frontmatter: matterResult.data as { title: string; date: string; coverImage: string; excerpt: string },
  };
}
