'use client'

import React, { useEffect } from 'react';
import { useAnimation, motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Image from 'next/image';
import type { Project } from '@/data/projects';

const bgColors: Record<string, string> = {
  orange: 'bg-orange-600',
  green: 'bg-green-600',
  blue: 'bg-blue-400',
  purple: 'bg-purple-600',
  cyan: 'bg-cyan-900',
  yellow: 'bg-yellow-400',
};

const txtColors: Record<string, string> = {
  orange: 'text-orange-600',
  green: 'text-green-600',
  blue: 'text-blue-500',
  purple: 'text-purple-600',
  cyan: 'text-cyan-900',
  yellow: 'text-yellow-600',
};

const pageVariants: Variants = {
  hidden: { opacity: 0, x: 0, y: 80 },
  enter: { opacity: 1, x: 0, y: 0 },
};

interface ProjectProps {
  project: Project;
}

const Project = ({ project }: ProjectProps) => {
  const controls = useAnimation();

  const [ref, inView] = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      controls.start('enter');
    }
  }, [controls, inView]);

  // New, creative animation for the Weather App
  const weatherAppVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.9, rotate: '8deg' },
    visible: {
      opacity: 1,
      y: [-5, 5], // This creates the floating effect
      scale: 1,
      rotate: '-4deg', // Settle at a nice angle
      transition: {
        // Transition for the floating (y-axis) animation
        y: {
          duration: 3,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        },
        // Springy transition for the entry animation (everything else)
        rotate: { type: 'spring', stiffness: 100, damping: 15 },
        scale: { type: 'spring', stiffness: 100, damping: 15 },
        opacity: { duration: 0.5 },
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="relative grid grid-cols-6 grid-rows-2 md:grid-rows-1 md:grid-cols-2 md:h-project rounded-md overflow-hidden"
      variants={pageVariants}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.7, ease: 'easeInOut', type: 'tween' }}
    >
      <div className={`absolute inset-0 ${bgColors[project.theme]} opacity-75 z-10`} />
      <Image
        src="https://framerusercontent.com/images/0u1KOKQqa7zWlOeQzGyjGsYTIEU.png"
        alt={project.theme}
        fill
      />
      {/* TEXT LEFT, Consistent across ALL projects */}
      <div className="row-span-1 col-span-6 md:col-span-1 z-40 px-6 flex flex-col justify-center my-8 md:my-10 text-zinc-50 font-mplus">
        <div>
          <h2 className="font-semibold text-xl md:text-xl mb-2">{project.title}</h2>
          <div className="flex items-center gap-3 mb-4">
            {project.sourceUrl && (
              <Link href={project.liveUrl} target="_blank" className="text-right">
                <span className="text-xs font-bold text-white hover:underline underline-offset-4 decoration-zinc-300 transition ease-in duration-100">
                  View Live Project <span className="font-bold ml-1">↗</span>
                </span>
              </Link>
            )}
            {!project.sourceUrl && (
              <span className="text-xs font-bold p-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-50 to-teal-500">
                Client Project
              </span>
            )}
          </div>
          <p className="text-base md:text-lg mb-4">{project.description}</p>
          <Link href={project.sourceUrl ? project.sourceUrl : project.liveUrl} target="_blank">
            <button className={`relative self-start bg-zinc-50 ${txtColors[project.theme]} font-semibold p-3 text-xs rounded-lg text-center shadow-md hover:shadow-zinc-200/20 hover:shadow-lg transition ease-in duration-100`} type="button">
              {project.sourceUrl ? 'View Source Code' : 'View Live Project'}
            </button>
          </Link>
        </div>
      </div>
      {/* IMAGE RIGHT */}
      <div className="relative row-span-1 col-start-2 col-span-5 md:col-span-1 z-20 rounded-tl-md overflow-hidden mt-3 md:mt-14 flex items-center justify-center">
        
        {/* NEW UNIFIED LOGIC FOR OVERLAY PROJECTS */}

        {/* WEATHER APP: uses the new single-image floating animation */}
        {project.type === 'overlay' && project.tag === 'wa' && (
          <motion.img
            src={`/images/works/${project.thumbnail}`}
            alt={`${project.title} main`}
            width={210}
            height={420} // Adjusted height for better aspect ratio
            className="relative rounded-xl shadow-2xl border-4 border-white"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={weatherAppVariants}
          />
        )}

        {/* OTHER OVERLAY PROJECTS: two images stacked, for bouldering etc */}
        {project.type === 'overlay' && project.tag !== 'wa' && (
          <div className="relative w-full h-72 md:h-80 flex items-center justify-center">
            <Image
              src={`/images/works/${project.thumbnail}`}
              alt={`${project.title} main`}
              width={260}
              height={180}
              className="absolute left-8 top-8 shadow-lg rounded-md z-10 border border-white"
              style={{
                boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
              }}
            />
            <Image
              src={`/images/works/${project.thumbnail2}`}
              alt={`${project.title} alt`}
              width={260}
              height={180}
              className="absolute left-24 top-0 shadow-xl rounded-md z-20 border border-white"
              style={{
                boxShadow: '0 16px 48px rgba(0,0,0,0.22)',
              }}
            />
          </div>
        )}

        {/* Other layouts remain the same */}
        {project.type === 'full' && (
          <Image
            src={`/images/works/${project.thumbnail}`}
            alt={project.title}
            fill
          />
        )}
        {/* ... (rest of your other project types remain unchanged) ... */}
      </div>
    </motion.div>
  );
};

export default Project;
