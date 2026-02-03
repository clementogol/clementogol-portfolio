'use client';

import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';

export default function Comments() {
  const { theme } = useTheme();

  // If theme is undefined (during server render), default to system or light
  // to avoid hydration mismatch, though Giscus handles loading lazily usually.
  const currentTheme = theme === 'dark' ? 'dark' : 'light';

  return (
    <div className="mt-20 pt-10 border-t border-zinc-200 dark:border-zinc-800">
      <h3 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-8">
        Discussion & Reactions
      </h3>
      <Giscus
        id="comments"
        repo="clementogol/clementogol-portfolio" 
        repoId="R_kgDOPCU4Cw"                 
        category="General"                       
        categoryId="DIC_kwDOPCU4C84CsLpa"           
        mapping="pathname"
        reactionsEnabled="1"                     
        emitMetadata="0"
        inputPosition="top"
        theme={currentTheme}
        lang="en"
        loading="lazy"
      />
    </div>
  );
}
