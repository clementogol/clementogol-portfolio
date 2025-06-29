'use client';

import React from 'react';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { usePathname } from 'next/navigation'; // Import the usePathname hook

import ThemeToggle from './ThemeToggleButton';
import { Github } from 'lucide-react';
import DropdownMenu from './DropdownMenu';

const Header = () => {
  // Get the current URL path. e.g., '/', '/blog', '/blog/my-post'
  const pathname = usePathname();
  // Check if we are on the main homepage
  const isHomePage = pathname === '/';

  return (
    <header className="fixed w-full py-2 px-5 z-[100] md:p-4 backdrop-blur-md dark:text-zinc-50">
      <div className="mx-auto max-w-5xl">
        <nav className="flex items-center gap-5 text-base">
          {/* This link will scroll to the top on the homepage, or navigate to the homepage from other pages */}
          {isHomePage ? (
            <ScrollLink to="header" spy smooth offset={-200} className="cursor-pointer">
              <span className="font-semibold">Clement Ogol</span>
            </ScrollLink>
          ) : (
            <Link href="/" className="font-semibold">
              Clement Ogol
            </Link>
          )}

          {/* === DESKTOP NAVIGATION === */}
          <div className="items-center gap-6 hidden md:flex">
            {/* Works Link */}
            {isHomePage ? (
              <ScrollLink to="works" spy smooth className="cursor-pointer hover:underline underline-offset-4">
                Works
              </ScrollLink>
            ) : (
              <Link href="/#works" className="hover:underline underline-offset-4">
                Works
              </Link>
            )}

            {/* Contact Link */}
            {isHomePage ? (
              <ScrollLink to="contact" spy smooth className="cursor-pointer hover:underline underline-offset-4">
                Contact
              </ScrollLink>
            ) : (
              <Link href="/#contact" className="hover:underline underline-offset-4">
                Contact
              </Link>
            )}

            {/* --- NEW BLOG LINK ---
                This is a standard Next.js Link because the blog is a separate page.
            */}
            {/* Blog Link */}
            {isHomePage ? (
              <ScrollLink
                to="blog"
                spy
                smooth
                offset={-80} // adjust offset for your header height if needed
                className="cursor-pointer hover:underline underline-offset-4"
              >
                Blog
              </ScrollLink>
) : (
  <Link href="/#blog" className="hover:underline underline-offset-4">
    Blog
  </Link>
)}


            {/* Resume and Source links remain the same */}
            <Link
              href="https://drive.google.com/file/d/1Y3WOTzptmODPiyXEaoKqiMryFxt_07PO/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline underline-offset-4"
            >
              Resume
            </Link>
            <Link
              href="https://github.com/clementogol/clementogol-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              <span className="hover:underline underline-offset-4">Source</span>
            </Link>
          </div>

          <div className="flex-1" />
          <ThemeToggle />
          
          {/* === MOBILE NAVIGATION === 
              You already had 'Blog' here, which is perfect! 
              You will need to apply the same smart-linking logic inside your DropdownMenu component.
          */}
          <DropdownMenu
            tags={[
              'Works',
              'Contact',
              'Blog', // This is correctly placed
              'Resume',
              'Source',
            ]}
          />
        </nav>
      </div>
    </header>
  );
};

export default Header;
