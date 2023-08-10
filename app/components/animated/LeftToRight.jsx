"use client"
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion';

export default function LeftToRight({children,delay=0,duration=1}) {
    const ref = useRef()
    const isView = useInView(ref,{once:false});
  return (
    <motion.div ref={ref} animate={{opacity:isView?1:0,x:isView?0:-200,transition:{ease: "easeOut",delay:delay, duration: duration,type: "spring",stiffness:120}}} exit={{x:-200,opacity:0,transition:{ease: "easeOut",duration: 0.33}}} initial={{x:-200,opacity:0}}>{children}</motion.div>
  )
}