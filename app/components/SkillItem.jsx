"use client"
import React, { useRef } from 'react'
import {motion, useInView} from "framer-motion"

export default function SkillItem({skill,delay=0}) {
    const ref = useRef(null)
    const inView = useInView(ref,{once:true});
    const variants = {
      visible:{opacity:inView?1:0,y:inView?0:100,transition:{ease: "easeOut",delay:delay, duration: 0.33,type: "spring",stiffness:120}},
        hidden:{y:100,opacity:0}
    }
  return (
    <motion.div ref={ref}
    variants={variants}
    initial="hidden"
    animate="visible"
    whileHover={{scale:1.2,rotate:"360deg",transition:{duration:0.1}}}
    className='skill-item w-[90px] h-[90px] md:w-[120px] md:h-[120px] bg-[#160D45] rounded-full p-2 flex items-center justify-center text-white'>
        <div className='w-full h-full rounded-full p-3 md:p-5'>
            <img src={`/storage/${skill.icon}`} className='h-full w-full object-contain' />
        </div>
    </motion.div>
  )
}
