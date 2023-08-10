"use client"
import { useInView, motion } from 'framer-motion'
import React, { useRef } from 'react'


export default function FadeY({children,duration=1,delay=0,y=100,stiffness=100}) {
  const ref = useRef(null)
  const inView = useInView(ref,{once:true});

  const variants = {
    hidden:{y:y,origin:0,opacity:0},
    visible:{y:inView?0:y,opacity:inView?1:0.1,transition:{ease: "easeIn",delay:delay, duration: duration,type: "spring",stiffness:stiffness}}
  }

  return (
    <motion.div ref={ref} animate="visible" variants={variants} initial="hidden">
      {children}
    </motion.div>
  )
}
