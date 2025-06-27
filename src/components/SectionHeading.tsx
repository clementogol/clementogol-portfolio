import React from 'react';

interface SectionHeadingProps {
  children: React.ReactNode;
  overlay?: boolean;
  className?: string;
}

const paintSplashSVG = (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    viewBox="0 0 200 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{ zIndex: 0 }}
  >
    <path
      d="M20 40 Q40 10 80 20 Q120 35 180 10 Q195 20 190 50 Q100 60 20 40 Z"
      fill="#A7F3D0" // Pick a color or use Tailwind e.g. 'bg-emerald-200'
      opacity="0.5"
    />
  </svg>
);

const SectionHeading = ({ children, overlay, className }: SectionHeadingProps) => (
  <div className="relative inline-block">
    {paintSplashSVG}
    <h2
      className={`
        relative z-10 px-6 py-3 font-bold font-mplus text-2xl md:text-3xl
        ${overlay ? 'text-zinc-500 dark:text-zinc-100 opacity-70 dark:opacity-60' : 'text-zinc-900 dark:text-zinc-50'}
        ${className || ''}
      `}
      style={{ /* Add extra styles here if needed */ }}
    >
      {children}
    </h2>
  </div>
);

export default SectionHeading;
