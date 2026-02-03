'use client';

import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
// 1. IMPORT THIS
import { usePathname } from 'next/navigation';

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

interface ArticleProps {
  children: React.ReactNode;
  className?: string;
}

const Article = ({ children, className }: ArticleProps) => {
  // 2. GET CURRENT URL
  const pathname = usePathname();

  return (
    <motion.article
      // 3. THE KEY FIX: Forces animation to run every time URL changes
      key={pathname} 
      
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ 
        duration: 0.4, 
        type: 'tween',
        ease:'easeInOut',
    }}
      style={{ position: 'relative' }}
      className={clsx("mt-10", className)}
    >
      {children}
    </motion.article>
  );
};

export default Article;
