// src/app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/ThemeProvider";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import ClientLayout from "@/components/ClientLayout";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// --- UPDATED METADATA OBJECT ---
export const metadata: Metadata = {
  // Your existing metadata
  title: 'Clement Ogol - AI Trainer | Data Analyst | Developer',
  description: 'Full-stack developer from Nairobi, Kenya, passionate about building data-driven digital solutions.',
  
  // New Open Graph and Twitter metadata
  openGraph: {
    title: 'Clement Ogol - AI Trainer | Data Analyst | Developer',
    description: 'Full-stack developer from Nairobi, Kenya, passionate about building data-driven digital solutions.',
    url: 'https://clementogol.com', // Your website URL
    siteName: 'Clement Ogol | Portfolio',
    images: [
      {
        url: 'https://clementogol.com/og-image.png', // IMPORTANT: Absolute URL to your image
        width: 1200,
        height: 630,
        alt: 'Clement Ogol - Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clement Ogol - AI Trainer | Data Analyst | Developer',
    description: 'Full-stack developer from Nairobi, Kenya, passionate about building data-driven digital solutions.',
    images: ['https://clementogol.com/og-image.png'], // IMPORTANT: Absolute URL to your image
  },
};
// --- END OF UPDATED METADATA ---

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-green-100 dark:bg-zinc-900`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <main className="pb-8 min-h-screen text-zinc-900 dark:text-zinc-300 break-words leading-6 transition-colors duration-500">
            <Header />
            <ClientLayout>
              {children}
            </ClientLayout>
            <Footer />
          </main>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
