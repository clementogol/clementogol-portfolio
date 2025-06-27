import Home from "@/components/Home";
import { Metadata } from "next";
import ParticleBackground from "@/components/ParticleBackground";

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
        url: "https://pbs.twimg.com/profile_images/1545149127054475269/Y5LEA7cQ_400x400.jpg",
        width: 800,
        height: 600,
        alt: "Clement Ogol | Portfolio",
      },
    ],
  },
};

// export default function HomePage() {

//   return (
//     <>
//     <Home />
//     </> 
//   );
// }

// app/page.tsx

export default function HomePage() {
  return (
    <>
      {/* Add the particle background component here */}
      <ParticleBackground />

      {/* Your main content component */}
      <Home />
    </>
  );
}
