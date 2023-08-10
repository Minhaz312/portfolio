"use client"
import { motion } from 'framer-motion'
import SkillItem from './SkillItem'

export default function Skills({skillList}) {
  const sortedList = skillList.sort((a,b)=>Number(a.priority)-Number(b.priority))
  return (
    <div className='w-full mx-auto px-3 md:w-10/12 lg:w-10/12 xl:w-8/12 md:px-0 sm:px-5 my-10 lg:my-14' id='skill'>
      <div className=''>
        <h1 className='text-center text-2xl md:text-5xl text-white font-bold'>My Skills</h1>
        <motion.img initial={{width:0}} animate={{width:400,transformOrigin:"center center",transition:{duration:0.33}}} src='/images/horizontal-gradient-line.png' className='mx-auto my-3' />
        <div className='my-14 flex flex-wrap gap-y-5 gap-x-5 justify-center'>
          {
            sortedList.map((item,i)=><SkillItem key={i} delay={i*0.1} skill={item} />)
          }
        </div>
      </div>
    </div>
  )
}
