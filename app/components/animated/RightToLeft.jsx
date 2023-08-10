"use client"
import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion';

export default function RightToLeft({children,delay=0,duration=1}) {
    const ref = useRef()
    const isView = useInView(ref,{once:true});
    const controls = useAnimation()


    const variants = {
        visible:{opacity:isView?1:0,x:isView?0:200,transition:{ease: "easeOut",delay:delay, duration: duration,type: "spring",stiffness:120}},
        hidden:{x:200,opacity:0}
    }

  return (
    <motion.div ref={ref} animate={{opacity:isView?1:0,x:isView?0:200,transition:{ease: "easeOut",delay:delay, duration: duration,type: "spring",stiffness:120}}} exit={{x:200,opacity:0,transition:{ease: "easeOut",delay:delay, duration: duration,type: "spring",stiffness:120}}} initial={{x:200,opacity:0}}>{children}</motion.div>
  )
}