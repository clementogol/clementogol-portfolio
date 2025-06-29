"use client";

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from "next/navigation";
import React from "react";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="px-5 pt-14 mx-auto max-w-3xl"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
