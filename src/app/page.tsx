// src/app/page.tsx

import Home from "@/components/Home";
import { Metadata } from "next";
import ParticleBackground from "@/components/ParticleBackground";
import { getSortedPostsData } from "@/lib/posts"; // <-- 1. IMPORT

export const metadata: Metadata = {
  title: "Clement Ogol | Portfolio",
  description: "Full-stack web developer with a focus on remote work",
  keywords: ["web development", "full-stack", "remote work", "portfolio"],
  authors: [{ name: "Clement Ogol", url: "#" }],
  openGraph: {
    title: "Clement Ogol | Portfolio",
    description: "Full-stack web developer with a focus on remote work",
    type: "website",
    siteName: "Clement Ogol | Portfolio",
    images: [
      {
        url: "https://pbs.twimg.com/profile_images/1833515410576031744/LNegYt5C_400x400.jpg",
        width: 800,
        height: 600,
        alt: "Clement Ogol | Portfolio",
      },
    ],
  },
};

export default function HomePage() {
  // 2. GET THE LATEST POSTS
  const latestPosts = getSortedPostsData().slice(0, 3);

  return (
    <>
      <ParticleBackground />
      {/* 3. PASS THE POSTS AS A PROP */}
      <Home latestPosts={latestPosts} />
    </>
  );
}
