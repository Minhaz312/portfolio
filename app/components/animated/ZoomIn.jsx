"use client"
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion';

export default function ZoomIn({children,delay=0.1,duration=1.5,opacity=[0,1],className}) {
    const ref = useRef()
    const isView = useInView(ref,{once:true});


    const variants = {
        visible:{opacity:isView?opacity[1]:opacity[0],scale:isView?1:0.5,transition:{ease: "easeOut",delay:delay, duration: duration,type: "spring",stiffness:120}},
        hidden:{opacity:opacity[0],origin:0,scale:0.5}
    }


  return (
    <motion.div className={className} ref={ref} animate="visible" variants={variants} initial="hidden">{children}</motion.div>
  )
}