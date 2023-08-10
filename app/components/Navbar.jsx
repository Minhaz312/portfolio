"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import FadeX from './animated/fade/FadeX'
import FadeIn from './animated/fade/FadeIn'
import FadeY from './animated/fade/FadeY'
import { motion,AnimatePresence } from 'framer-motion'
import { MdClose } from 'react-icons/md'

export default function Navbar({scrollPosition}) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  return (
    <nav className={`fixed z-[1000] w-full ${scrollPosition>200?"nav-blur":""}`}>
      <AnimatePresence>
        {
          mobileNavOpen===false&&(<motion.div initial={{y:-100}} exit={{y:-100,transition:{duration:0.33,delay:0}}} animate={{y:0,transition:{duration:0.33,delay:0.05}}} className='w-full navbar-bg-gradient py-3 block sm:flex justify-center items-center'>
          <FadeY y={10}>
            <div>
              <ul className='hidden items-center text-white gap-x-5 md:gap-x-14 sm:flex'>
                <li className='text-white transition text-sm hover:text-primary md:text-xl'>
                  <FadeX delay={0} x={-100}><Link href="/#home">Home</Link></FadeX>
                </li>  
                <li className='text-white transition text-sm hover:text-primary md:text-xl'>
                  <FadeX delay={0.1} x={-100}><Link href="/#about">About</Link></FadeX>
                </li>  
                <li className='text-white transition text-sm hover:text-primary md:text-xl'>
                  <FadeIn><Link href="/#home"><img src='/images/logo.svg' className='h-[50px] w-auto' /></Link></FadeIn>
                </li>  
                <li className='text-white transition text-sm hover:text-primary md:text-xl'>
                  <FadeX delay={0} x={100}><Link href="/#projects">Projects</Link></FadeX>
                </li>  
                <li className='text-white transition text-sm hover:text-primary md:text-xl'>
                  <FadeX delay={0.1} x={100}><Link href="/#contact">Contact</Link></FadeX>
                </li>  
              </ul>  
            </div>
          </FadeY>
            <div className='flex items-center justify-between w-full px-3 sm:hidden'>
              <FadeX x={-100}>
                <Link href="/#home"><img src='/images/logo.svg' className='h-[30px] w-auto' /></Link>
              </FadeX>
              <FadeX x={-80}>
                <HiMenuAlt3 size={30} color='#ffffff' className='cursor-pointer' onClick={()=>setMobileNavOpen(true)} />
              </FadeX>
            </div>
        </motion.div>)}
        {mobileNavOpen===true&&(<motion.div initial={{y:300}} exit={{y:300,transition:{duration:0.33,delay:0}}} animate={{y:0,transition:{duration:0.33,delay:0.05}}} className='navbar-bg-gradient py-3 flex justify-between items-center w-full px-3'>
          <ul className='flex items-center text-white gap-x-5 md:gap-x-14'>
            <li className='text-white transition text-sm hover:text-primary md:text-xl'>
              <FadeX delay={0} x={0}><Link href="/#home">Home</Link></FadeX>
            </li>  
            <li className='text-white transition text-sm hover:text-primary md:text-xl'>
              <FadeX delay={0.01} x={0}><Link href="/#about">About</Link></FadeX>
            </li>   
            <li className='text-white transition text-sm hover:text-primary md:text-xl'>
              <FadeX delay={0.02} x={0}><Link href="/#projects">Projects</Link></FadeX>
            </li>  
            <li className='text-white transition text-sm hover:text-primary md:text-xl'>
              <FadeX delay={0.03} x={0}><Link href="/#contact">Contact</Link></FadeX>
            </li>  
          </ul>  
          <MdClose size={30} color='#ffffff' className='cursor-pointer' onClick={()=>setMobileNavOpen(false)} />
        </motion.div>)}
      </AnimatePresence>
    </nav>
  )
}
