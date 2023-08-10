"use clinet"
import React, { useRef } from 'react'
import {motion,useInView} from 'framer-motion'
export default function StarLine({duration=0.5,delay=0,double=false,horizontal=false}) {
    const ref = useRef(null)
    const inView = useInView(ref,{once:true});
  return (
    <div className='mr-5 flex flex-col items-center'>
        <div className={`${double?"block":"hidden"} h-[200px] w-1`}>
            <motion.div ref={ref} initial={{height:0}} animate={{height:inView?"200px":0,transition:{duration:duration,delay:delay}}} className='h-[200px] w-1 line-gradient rotate-180'>.</motion.div>
        </div>
        <motion.div ref={ref} initial={{opacity:0}} animate={{opacity:inView?1:0,transition:{duration:duration,delay:delay}}} className='h-4 w-4 rounded-full bg-black circle-shadow'></motion.div>
        <div className='h-[200px] w-1'>
        <motion.div ref={ref} initial={{height:0}} animate={{height:inView?"200px":0,transition:{duration:duration,delay:delay}}} className='h-[200px] w-1 line-gradient'>.</motion.div>
        </div>
    </div>
  )
}
