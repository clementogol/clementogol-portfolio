'use client';

import React from 'react';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import ThemeToggle from './ThemeToggleButton';
import { Github } from 'lucide-react';
import DropdownMenu from './DropdownMenu';

const Header = () => (
  <header className="fixed w-full py-2 px-5 z-[100] md:p-4 backdrop-blur-md dark:text-zinc-50">
    <div className="mx-auto max-w-5xl">
      <nav className="flex items-center gap-5 text-base">
        <ScrollLink to="header" spy smooth offset={-200}>
          <button type="button" className="font-semibold">
            Clement Ogol
          </button>
        </ScrollLink>
        <div className="items-center gap-6 hidden md:flex">
          <ScrollLink to="works" spy smooth>
            <button type="button" className="hover:underline underline-offset-4">
              Works
            </button>
          </ScrollLink>
          <ScrollLink to="contact" spy smooth>
            <button type="button" className="hover:underline underline-offset-4">
              Contact
            </button>
          </ScrollLink>
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
        <DropdownMenu
          tags={[
            'About',
            'Contact',
            'Projects',
            'Resume',
            'View Source',
          ]}
        />
      </nav>
    </div>
  </header>
);

export default Header;
