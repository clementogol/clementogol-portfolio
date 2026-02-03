'use client';

import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from './SectionHeading';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import ProjectsHeading from '@/components/ProjectsHeading';
import Contact from '@/components/Contact';
import Article from '@/components/Article';
import StickyNav from './chat/sticky-nav';
import { formatDate } from '@/utils/formatDate';

interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
}

interface HomeProps {
  latestPosts: Post[];
}

const Home = ({ latestPosts }: HomeProps) => {
  // Safe access to first post
  const latestPost = latestPosts && latestPosts.length > 0 ? latestPosts[0] : null;

  const variants = {
    hidden: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0 },
  };

  const contactControls = useAnimation();
  const [contactRef, contactInView] = useInView({ threshold: 0.5, triggerOnce: true });

  const blogControls = useAnimation();
  const [blogRef, blogInView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (contactInView) {
      contactControls.start('enter');
    }
  }, [contactControls, contactInView]);

  useEffect(() => {
    if (blogInView) {
      blogControls.start('enter');
    }
  }, [blogControls, blogInView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 80 },
    enter: { opacity: 1, y: 0 },
  };

  return (
    <Article>
      <StickyNav />
      {/* Header Section */}
      <div className="flex flex-col items-center md:flex-row my-8 md:my-14 gap-15" id="header">
        <div className="mt-4 md:mt-0">
          <div className="border-teal-900/40 border-2 rounded-full w-24 h-24 inline-block overflow-hidden relative">
            <Image
              src="/me.jpeg"
              alt="Clement Ogol"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="self-start text-zinc-900 dark:text-zinc-100 transition duration-500 ease-in-out md:ml-6">
          <h2 className="text-3xl font-semibold font-mplus">
            Hello{' '}
            <span className="inline-block animate-wave" style={{ transformOrigin: '70% 70%' }}>
              👋
            </span>
            <br /> my name is Clement Ogol.
          </h2>
          <p className="mt-2"> Certified Virtual Assistant | AI Trainer/Data Annotator </p>
        </div>
      </div>

      <section className="mt-6">
        <SectionHeading>About me</SectionHeading>
        <p className="mb-6 dark:text-zinc-100 text-zinc-900 transition duration-500 ease-in-out">
          I am a tech-driven Virtual Assistant with a background in IT and AI Operations. I help professionals optimize their businesses by blending traditional administrative support with modern web development and automation strategies.
        </p>
      </section>

      <section className="mt-6" id="works">
        <SectionHeading>Skills</SectionHeading>
        <Skills />
      </section>

      <section className="mt-8">
        <ProjectsHeading />
        <Projects />
      </section>

      {/* BLOG SECTION */}
      <motion.section
        id="blog"
        className="my-12 md:my-24"
        ref={blogRef}
        initial="hidden"
        animate={blogControls}
        variants={variants}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
      >
        <div className="relative mb-3 text-center">
          <SectionHeading overlay className="text-5xl md:text-8xl">Blog</SectionHeading>
        </div>
        <p className="mt-4 mb-16 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 text-center max-w-2xl mx-auto">
          Here’s the latest from my blog—where I share what’s on my mind from{' '}
          <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-500">
            cool tech finds
          </span>{' '}
          to the{' '}
          <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-500">
            real stories behind the code.
          </span>
        </p>

        {latestPost ? (
            <motion.div
              key={latestPost.slug}
              className="relative grid grid-cols-6 grid-rows-2 md:grid-rows-1 md:grid-cols-2 md:h-project rounded-md overflow-hidden shadow-2xl"
              variants={cardVariants}
              initial="hidden"
              animate={blogInView ? "enter" : "hidden"}
              transition={{ duration: 0.7, ease: 'easeInOut', type: 'tween' }}
            >
              <div className="absolute inset-0 bg-cyan-900 opacity-75 z-10" />
              <div className="absolute inset-0 z-0">
                 <Image
                    src="https://framerusercontent.com/images/0u1KOKQqa7zWlOeQzGyjGsYTIEU.png"
                    alt="Background texture"
                    fill
                    className="object-cover"
                 />
              </div>

              {/* Decorative Symbol */}
              <div className="absolute top-5 left-5 z-20 text-teal-300/70" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 2L2 2L2 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              <div className="row-span-1 col-span-6 md:col-span-1 z-40 px-6 flex flex-col justify-center my-8 md:my-10 text-zinc-50 font-mplus">
                <div>
                  <time dateTime={latestPost.date} className="text-xs font-bold uppercase tracking-wider text-teal-300">
                    {formatDate(latestPost.date)}
                  </time>
                  <h3 className="font-semibold text-xl md:text-2xl mt-2 mb-3 text-white">
                    {latestPost.title}
                  </h3>
                  <p className="text-base text-zinc-200 mb-6 line-clamp-3">
                    {latestPost.excerpt}
                  </p>
                  <Link href={`/blog/${latestPost.slug}`}>
                    <button className="relative self-start bg-zinc-50 text-cyan-900 font-semibold p-3 text-xs rounded-lg text-center shadow-md hover:shadow-zinc-200/20 hover:shadow-lg transition ease-in duration-100" type="button">
                      Read the Full Story
                    </button>
                  </Link>
                </div>
              </div>
              <div className="relative row-span-1 col-start-2 col-span-5 md:col-span-1 z-20 rounded-tl-md overflow-hidden mt-3 md:mt-14 flex items-center justify-center">
                <div className="relative w-[280px] h-[190px] md:w-[320px] md:h-[210px]">
                  <Image
                    src={latestPost.coverImage}
                    alt={`Cover image for ${latestPost.title}`}
                    fill
                    className="object-cover rounded-lg shadow-2xl border-4 border-white"
                  />
                </div>
              </div>
            </motion.div>
        ) : (
          <div className="text-center text-zinc-500">No blog posts found.</div>
        )}
        
        {latestPosts && latestPosts.length > 1 && (
            <div className="mt-20 flex justify-center">
                <Link href="/blog" className="group">
                    <button
                        type="button"
                        className="inline-flex items-center rounded-full bg-zinc-900 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 group-hover:bg-zinc-800"
                    >
                        <span className="text-teal-300">
                        Explore All Articles
                        </span>
                    </button>
                </Link>
            </div>
        )}
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="my-12 md:my-24"
        ref={contactRef}
        initial="hidden"
        animate={contactControls}
        variants={variants}
        transition={{ duration: 0.7, ease: 'easeInOut', type: 'tween' }}
      >
        <div className="relative mb-3 text-center">
          <SectionHeading overlay className="text-5xl md:text-8xl">
            Contact
          </SectionHeading>
        </div>
        <div className="flex flex-col md:gap-3 justify-center text-center items-center text-zinc-900 dark:text-zinc-50 md:text-4xl font-semibold transition duration-500 ease-in-out">
          <p> And that&apos;s a wrap! </p>
          <p>
            <span> I look forward to </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-teal-400 to-teal-600 transition duration-500 ease-in-out">
              chatting with you soon.
            </span>
          </p>
          <Contact />
        </div>
      </motion.section>
    </Article>
  );
};

export default Home;
