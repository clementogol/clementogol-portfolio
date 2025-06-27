'use client';

import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import socials from '@/data/socials';

const Footer = () => {
  const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
  };

  const controls = useAnimation();

  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start('enter');
    }
  }, [controls, inView]);

  return (
    <footer className="px-5 mx-auto md:max-w-4xl">
      <motion.div
        className="flex flex-col md:flex-row justify-between gap-4 py-8 flex-wrap"
        ref={ref}
        variants={variants}
        animate={controls}
        initial="hidden"
        transition={{ duration: 0.7, type: 'tween', ease: 'easeInOut' }}
      >
        {
          socials.map((social) => (
            <Link href={social.link} key={social.name} target="_blank" rel="noopener noreferrer">
              <button type="button" className="flex w-full justify-center items-center py-4 md:py-0 md:h-14 md:w-32 text-sm font-semibold text-zinc-900 hover:text-teal-900 dark:text-zinc-100 font-mplus border border-zinc-500/70 dark:border-zinc-500/40 rounded-lg hover:bg-purple-900/5 dark:hover:bg-teal-900/10 dark:hover:text-teal-500 hover:border-teal-900/5 dark:hover:border-teal-900/10 transition duration-200 ease-in">
                {social.name}
              </button>
            </Link>
          ))
        }
      </motion.div>
      {/* --- Start of changed block --- */}
      <div className="relative flex justify-center my-8">
        {/* Optional: A faint horizontal line across the page */}
        <div className="hidden md:block absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-zinc-300 dark:bg-zinc-700" />
        
        {/* Container for the text. 'relative' makes it a positioning context.
            The padding and background color allow it to "cut" the line behind it.
            'inline-block' ensures its width fits the content. */}
        <div className="relative inline-block bg-zinc-50 dark:bg-zinc-900 px-6 py-2">
          
          {/* The glow effect. Positioned absolutely relative to the container above.
              -inset-2 makes it larger than the text container for a soft glow.
              -z-10 puts it behind the text container. */}
          <div className="absolute -inset-2 bg-green-200/50 dark:bg-teal-900/30 blur-xl -z-10" />
          
          <p className="relative text-sm text-center text-green-900 dark:text-zinc-50 font-mplus">
            ©
            {' '}
            {new Date().getFullYear()}
            {' '}
            Clement Ogol. All rights reserved.
          </p>
        </div>
      </div>
      {/* --- End of changed block --- */}
    </footer>
  );
};

export default Footer;
