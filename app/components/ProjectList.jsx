"use client"
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import Modal from './controle/Modal'
import Image from 'next/image'
import FadeY from './animated/fade/FadeY'
import OngoingProject from './OngoingProject'


export default function ProjectList({projectList,ongoingProject}) {
  const modalRef = useRef(null)
  const [show, setShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  let sortedList = []
  if(projectList.length>0){
      sortedList = projectList.sort((a,b)=>Number(a.priority)-Number(b.priority))
  }

  const handleShowModal = (project) => {
    if(show){
      setShow(false)
      setSelectedProject(null)
    } 
    else {
      setSelectedProject(project)
      setShow(true)
    }
  }

  return (
    <>
      {selectedProject&&(
        <Modal show={show} onHide={handleShowModal}  footer={false} title={selectedProject.title} className='max-w-[90%] sm:w-[60%] lg:w-[50%]'>
          <div className='grid grid-cols-12 gap-x-5'>
            <div className='col-span-12 lg:col-span-4'>
              <img src={`/storage/${selectedProject.thumbnile}`} className='w-full h-auto' />
            </div>
            <div className='col-span-12 lg:col-span-8'>
              <h3 className='mb-5 text-2xl text-white font-semibold'>Project Description</h3>
              <p dangerouslySetInnerHTML={{__html:selectedProject.desc}}></p>
              <div className='flex gap-x-3 mt-5'>
                <a href={selectedProject.links.split("|")[0]}>
                  <img src='/images/github-icon.png' className='h-8 w-8 rounded-full' />
                </a>
                <a href={selectedProject.links.split("|")[1]} className={`${selectedProject.links.split("|")[1]==="null"?"hidden":"flex"} justify-center items-center border border-red-800 text-[12px] px-2 bg--800 text-white rounded font-semibold text-red`}>
                      Live Link
                </a>
              </div>
              <div className='flex flex-wrap gap-2 my-3'>
                {
                  selectedProject.technologies.split("/")[0].split(",").map((item,i)=><p key={i} style={{color:selectedProject.technologies.split("/")[1].split(",")[i]}} >#{item}</p>)
                }
              </div>
            </div>
          </div>
        </Modal>
      )}
      <div className='className="w-full mx-auto px-3 scroll-mt-24 md:w-10/12 lg:w-10/12 xl:w-8/12 md:px-0 sm:px-5" my-10 lg:my-14' id='projects'>
        <div className=''>
          <h1 className='text-center text-2xl md:text-5xl text-white font-bold'>My Projects</h1>
          <p className='text-[#9585B8] text-center tracking-wider md:w-[500px] mx-auto my-4'>Following projects showcases my skills and experience through real-world examples of my work</p>
          <motion.img initial={{width:0}} animate={{width:400,transformOrigin:"center center",transition:{duration:0.33}}} src='/images/horizontal-gradient-line.png' className='mx-auto my-3' />
          {ongoingProject.length>0&&(
            <FadeY duration={0.3} delay={0.01}>
              <OngoingProject project={ongoingProject[0]} />
            </FadeY>
          )}
          <div className='grid grid-cols-12 gap-3 justify-center'>
            {
              sortedList.map((item,i)=><ProjectCard key={i} delay={i*0.1} openModal={handleShowModal.bind(this,item)} project={item} />)
            }
          </div>
        </div>
      </div>
    </>
  )
}
