'use client';

import React, { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

const Comments = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { resolvedTheme } = useTheme();

    // --- 👇 THIS IS THE CORRECTED THEME LOGIC 👇 ---
    // It detects if you are on localhost or in production
    const giscusTheme = (() => {
        const isProd = process.env.NODE_ENV === 'production';

        // 1. In PRODUCTION, use your custom CSS theme from your domain.
        if (isProd) {
            // Make sure this domain is correct when you deploy!
            return 'https://clementogol.com/giscus-theme.css'; 
        }

        // 2. In DEVELOPMENT (localhost), use built-in themes that work locally.
        if (resolvedTheme === 'dark') {
            return 'transparent_dark'; // For dark mode
        }
        
        // Use transparent_light for light mode to ensure text is dark and readable.
        return 'transparent_light'; 
    })();
    // --- 👆 END OF CORRECTION 👆 ---

    useEffect(() => {
        // Prevents script from being added twice
        if (!ref.current || ref.current.hasChildNodes()) return;

        const scriptElem = document.createElement('script');
        scriptElem.src = 'https://giscus.app/client.js';
        scriptElem.async = true;
        scriptElem.crossOrigin = 'anonymous';

        // Your details are correct!
        scriptElem.setAttribute('data-repo', 'clementogol/clementogol-portfolio');
        scriptElem.setAttribute('data-repo-id', 'R_kgDOPCU4Cw');
        scriptElem.setAttribute('data-category', 'General');
        scriptElem.setAttribute('data-category-id', 'DIC_kwDOPCU4C84CsLpa');
        scriptElem.setAttribute('data-mapping', 'pathname');
        scriptElem.setAttribute('data-strict', '0');
        scriptElem.setAttribute('data-reactions-enabled', '1');
        scriptElem.setAttribute('data-emit-metadata', '0');
        scriptElem.setAttribute('data-input-position', 'top');
        scriptElem.setAttribute('data-lang', 'en');
        scriptElem.setAttribute('data-loading', 'lazy');

        // This now uses our smart theme logic
        scriptElem.setAttribute('data-theme', giscusTheme);

        ref.current.appendChild(scriptElem);

    }, [giscusTheme]); // Re-run effect if the theme changes

    // I've removed the mt-16 from here and put it on the parent div in page.tsx
    // This makes the component more reusable.
    return <section ref={ref} className="w-full" />;
};

export default Comments;
