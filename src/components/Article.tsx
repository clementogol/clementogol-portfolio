'use client';

import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

// 1. We removed variants.exit because it requires AnimatePresence 
// in a parent component to work, which isn't present here.
const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
};

interface ArticleProps {
  children: React.ReactNode;
  className?: string;
}

const Article = ({ children, className }: ArticleProps) => {
  // 2. REMOVED usePathname. We rely on natural component mounting.

  return (
    <motion.article
      // 3. REMOVED key={pathname}. This was causing the "blank page" lock.
      initial="hidden"
      whileInView="enter" // Changed to whileInView to ensure it triggers even if load is delayed, or stick to 'animate'
      animate="enter"
      viewport={{ once: true }} // Ensures it runs once
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
