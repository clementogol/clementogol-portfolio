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
  mint: 'bg-[#dbfce7]',
  white: 'bg-white',
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

  // Animation for the Tech Service (formerly Weather App)
  const floatingVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.9, rotate: '8deg' },
    visible: {
      opacity: 1,
      y: [-5, 5],
      scale: 1,
      rotate: '-4deg',
      transition: {
        y: {
          duration: 3,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        },
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
        className="object-cover opacity-50"
      />
      {/* TEXT LEFT */}
      <div className="row-span-1 col-span-6 md:col-span-1 z-40 px-6 flex flex-col justify-center my-8 md:my-10 text-zinc-50 font-mplus">
        <div>
          <h2 className="font-semibold text-2xl md:text-3xl mb-2">{project.title}</h2>
          
          {/* Service Tagline (Replaces the "View Live" link) */}
          <div className="flex items-center gap-3 mb-4">
             <span className="text-xs font-bold p-2 bg-white/20 backdrop-blur-sm rounded-md text-white border border-white/30 uppercase tracking-wider">
                Available Now
              </span>
          </div>

          <p className="text-base md:text-lg mb-6 leading-relaxed opacity-90">{project.description}</p>
          
          {/* Call to Action Button */}
          <Link href={project.liveUrl} target="_blank">
            <button className={`relative self-start bg-zinc-50 ${txtColors[project.theme]} font-bold px-6 py-3 text-sm rounded-lg text-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200`} type="button">
              Book Consultation 📅
            </button>
          </Link>
        </div>
      </div>

      {/* IMAGE RIGHT */}
      <div className="relative row-span-1 col-start-2 col-span-5 md:col-span-1 z-20 rounded-tl-md overflow-hidden mt-3 md:mt-14 flex items-center justify-center">
        
        {/* TECH VA SERVICE: Floating Phone Animation */}
        {project.type === 'overlay' && project.tag === 'tech-va' && (
          <motion.img
            src={`/images/works/${project.thumbnail}`}
            alt={`${project.title} main`}
            width={210}
            height={420}
            className="relative rounded-xl shadow-2xl border-4 border-white"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={floatingVariants}
          />
        )}

        {/* SOCIAL MEDIA SERVICE: Two stacked images */}
        {project.type === 'overlay' && project.tag !== 'tech-va' && (
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
            {project.thumbnail2 && (
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
            )}
          </div>
        )}

        {/* ADMIN SERVICE: Full layout */}
        {project.type === 'full' && (
          <Image
            src={`/images/works/${project.thumbnail}`}
            alt={project.title}
            fill
            className={`object-cover ${project.tag === 'admin-ops' ? 'object-left' : 'object-center'}`}
          />
        )}
      </div>
    </motion.div>
  );
};

export default Project;
