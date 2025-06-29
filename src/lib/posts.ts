// src/lib/posts.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'; // We still need this for getSortedPostsData
import { compileMDX } from 'next-mdx-remote/rsc';
import readingTime from 'reading-time';
import Image from 'next/image';

// --- Step 1: Import ALL your custom components used in MDX files ---
import { InfoBox } from '@/components/ui/InfoBox';
import { YouTubeEmbed } from '@/components/ui/YouTubeEmbed';
import { Counter } from '@/components/ui/Counter';
import { Warning } from '@/components/ui/Warning'; 



// Get the directory for our blog posts
const postsDirectory = path.join(process.cwd(), 'blogposts');

// --- Step 2: Create the "dictionary" of components for the MDX renderer ---
const mdxComponents = {
  Image,
  InfoBox,
   Warning,
  YouTubeEmbed,
  Counter,
  // You can even add custom styles to default tags here if you want
  // h2: (props: any) => <h2 className="text-2xl font-bold" {...props} />,
};

// This function is fine as-is, no changes needed here.
export function getSortedPostsData() {
    // Get file names under /blogposts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".mdx" from file name to get id (the slug)
        const slug = fileName.replace(/\.mdx$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the slug
        return {
            slug,
            ...(matterResult.data as { title: string; date: string; excerpt: string; coverImage: string }),
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

// --- Step 3: Modify getPostData to use the components ---
export async function getPostData(slug: string) {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use compileMDX to process the file, parsing frontmatter and injecting components
    const { content, frontmatter } = await compileMDX<{
        title: string;
        date: string;
        excerpt: string;
        coverImage: string;
    }>({
        source: fileContents,
        components: mdxComponents, // THIS IS THE FIX: Pass the components here!
        options: {
            parseFrontmatter: true, // Let compileMDX handle frontmatter parsing
        },
    });

    // Calculate reading time from the original content string
    const stats = readingTime(fileContents);

    return {
        slug,
        frontmatter, // `frontmatter` now comes directly from compileMDX
        content,     // `content` is now a fully-baked React Component
        readingTime: stats.text,
    };
}
