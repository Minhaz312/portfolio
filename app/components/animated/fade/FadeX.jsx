"use client"
import { useInView, motion } from 'framer-motion'
import React, { useRef } from 'react'


export default function FadeX({children,duration=1,delay=0,x=100,stiffness=100}) {
  const ref = useRef(null)
  const inView = useInView(ref,{once:true});

  const variants = {
    hidden:{x:x,origin:0,opacity:0},
    visible:{x:inView?0:x,opacity:inView?1:0.1,transition:{ease: "easeIn",delay:delay, duration: duration,type: "spring",stiffness:stiffness}}
  }

  return (
    <motion.div ref={ref} animate="visible" variants={variants} initial="hidden">
      {children}
    </motion.div>
  )
}
