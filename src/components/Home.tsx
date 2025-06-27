'use client';

import React, { useEffect } from 'react';
import { useAnimation, motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import SectionHeading from './SectionHeading';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import ShadowBlock from '@/components/ShadowBlock';
import ProjectsHeading from '@/components/ProjectsHeading';
import Contact from '@/components/Contact';
import Article from '@/components/Article';
import StickyNav from './chat/sticky-nav';

const Home = () => {
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
    <Article>
      <StickyNav />
      <div className="flex flex-col items-center md:flex-row my-8 md:my-14 gap-15" id="header">

        <div className="mt-4 md:mt-0">
          <div className="border-teal-900/40 border-2 rounded-full w-24 h-24 inline-block overflow-hidden">
            <Image
              src="/me.jpeg"
              alt="Clement Ogol's professional image"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="self-start text-zinc-900 dark:text-zinc-100 transition duration-500 ease-in-out">
          {/* <h2 className="text-3xl  font-semibold font-mplus">
            Hi, my name <br/> is Clement Ogol.
          </h2> */}
          <h2 className="text-3xl font-semibold font-mplus">
            Hello 
            <span className="inline-block animate-wave" style={{ transformOrigin: '70% 70%' }}>
              👋
            </span>
            <br/> my name is Clement Ogol.
          </h2>
          <p> AI Trainer | Data Analyst | Developer </p>
        </div>

      </div>
      <section className="mt-6">
        <SectionHeading>About me</SectionHeading>
        <p className="mb-6 dark:text-zinc-100 text-zinc-900 transition duration-500 ease-in-out">
          I am a full-stack developer from Nairobi, Kenya, passionate about building data-driven digital solutions. With a background in Information Technology and hands-on experience in AI training, data annotation, and web development, I enjoy transforming complex problems into simple, user-focused solutions.
        </p>
        <p className="dark:text-zinc-100 text-zinc-900 transition duration-500 ease-in-out">
          From leading AI video annotation projects to driving social media growth for brands, I thrive at the intersection of technology and impact. I leverage my skills in Python, React, and modern analytics to deliver high-quality results—on time and with best practices in mind. If you’re looking for a versatile technologist who’s ready to add value to your team, let’s connect.
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
      <motion.section
        id="contact"
        className="my-12 md:my-24"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 0.7, ease: 'easeInOut', type: 'tween' }}
      >
        <div className="relative mb-3 text-center">
          <SectionHeading overlay className="text-5xl md:text-8xl">Contact</SectionHeading>
          {/* <ShadowBlock /> */}
        </div>
        <div className="flex flex-col md:gap-3 justify-center text-center items-center text-zinc-900 dark:text-zinc-50 md:text-4xl font-semibold transition duration-500 ease-in-out">
          <p> And that&apos;s a wrap! </p>
          <p>
            <span> I look foward to </span>
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
