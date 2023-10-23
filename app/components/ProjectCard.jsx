import React, { useRef } from 'react'
import {motion, useInView} from "framer-motion"
import Tilt from "react-parallax-tilt"
export default function ProjectCard({openModal,project,delay}) {
  const {title,desc,thumbnile,links,technologies} = project
  const techName = technologies.split("/")[0].split(",")
  const techColors = technologies.split("/")[1].split(",")
  const githubLink = links.split("|")[0]
  const liveLink = links.split("|")[1]
  let technologyList = []
  techName.map((item,i)=>{
    technologyList.push({name:item,color:techColors[i]})
  })
  const ref = useRef(null)
    const inView = useInView(ref,{once:true});
    const variants = {
      visible:{opacity:inView?1:0,y:inView?0:100,transition:{ease: "easeOut",delay:delay, duration: 0.33,type: "spring",stiffness:120}},
        hidden:{y:100,opacity:0}
    }

    let shortDescription = desc.replace( /(<([^>]+)>)/ig, '');;
    if(desc.length>250){
      const subStrOfDescription  =desc.substring(0,200).split(" ");
      subStrOfDescription.pop()
      shortDescription = subStrOfDescription.join(" ")
    }
  return (
    <motion.div ref={ref}
    className='bg-[#151030] p-3 col-span-12 rounded-3xl shadow shadow-primary lg:col-span-4 sm:col-span-6'
    variants={variants}
    initial="hidden"
    animate="visible"
    >
      <Tilt>
        <div>
          <div className='relative h-[250px] w-full rounded-2xl'>
            <img src={`/storage/${thumbnile}`} className='h-full w-full rounded-2xl' />
            <div className='absolute bottom-3 left-3 flex gap-x-3'>
              <a href={githubLink} target='_blank'>
                <img src='/images/github-icon.png' className='h-8 w-8 rounded-full' />
              </a>
              {
                liveLink==="null"?<button onClick={openModal}>
                <img src='/images/view-icon.png' className='h-8 w-8 rounded-full' />
              </button>:<a href={liveLink} target='_blank'>
                <img src='/images/view-icon.png' className='h-8 w-8 rounded-full' />
              </a>
              }
            </div>
          </div>
          <h1 className='text-2xl text-white my-3'>{title}</h1>
          <p className='text-slate-400'>{shortDescription}<span className={`text-slate-200 cursor-pointer ${desc.length>250?"inline-block":"hidden"}`} onClick={openModal}>...see more</span></p>
          <div className='flex flex-wrap gap-2 my-3'>
            {
              technologyList.map((item,i)=><p key={i} style={{color:item.color}} >#{item.name}</p>)
            }
          </div>
        </div>
      </Tilt>
    </motion.div>
  )
}
