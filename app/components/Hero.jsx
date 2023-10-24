"use client"
import React,{Suspense, useEffect, useState} from 'react'
import Navbar from './Navbar'
import HeroText from './HeroText'
import HeroComputer from './HeroComputer'
import { BsArrowDown } from "react-icons/bs"
import {motion} from "framer-motion"
import StarLine from './StarLine'
import Image from 'next/image'

export default function Hero({about}) {
  const {title,slogan,resume,github,linkedin} = about;
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const currentPosition = window.pageYOffset;
    setScrollPosition(currentPosition);
  };

  

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <section>
        <img src='/images/hero-bg-image.png' className='max-h-screen w-full object-cover -z-10 absolute top-0 left-0 right-0 bottom-0' />
        <Navbar scrollPosition={scrollPosition} />
        <div className="w-full mx-auto px-3 md:w-10/12 lg:w-10/12 xl:w-8/12 md:px-0 sm:px-5">
          <div className='flex flex-row '>
            <div className='mt-20 mb-10 sm:mt-32 min-w-[16px]'>
              <StarLine duration={1} delay={0.1} />
            </div>
            <HeroText resume={resume} title={title} slogan={slogan} github={github} linkedin={linkedin} />
          </div>
        </div>
          <motion.div animate={{y:[0,20,0]}} transition={{duration: 8,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0.1}}>
            <HeroComputer />
            </motion.div>
          <div className={`${scrollPosition>200?"hidden":"block"} absolute right-1/2 sm:right-10 bottom-5 text-slate-400 flex items-center gap-y-3 flex-col`}>
            <motion.div animate={{y:[0,20,0]}} transition={{duration: 5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0.1}}
            >
              <BsArrowDown className='text-[15px] sm:text-[40px]' />
            </motion.div>
            <p className='hidden tracking-[6px] uppercase sm:block'>scroll</p>
          </div>
    </section>
  )
}
