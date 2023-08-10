"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import About from '../../components/controle/About'
import SkillList from '../../components/controle/SkillList'
import ProjectList from '../../components/controle/ProjectList'
import Gallery from '../../components/controle/Gallery'


export const dynamic = "force-dynamic"

export default function Home() {
  const router = useRouter()

    const [checkingAuth, setCheckingAuth] = useState(true)

  useEffect(()=>{
      if(localStorage.getItem("port_token")===null){
          router.replace("/controle/login")
          setCheckingAuth(false)
      }else{
          setCheckingAuth(false)
      }
  },[])
  if(checkingAuth){
      return (
        <div className='w-full h-screen flex justify-center items-center bg-slate-900 text-white'>
            Please wait...
        </div>
      )
  }
  return (
    <div className='w-full grid grid-cols-12 p-5 gap-2 text-white'>
        <div className='col-span-12 lg:col-span-6 md:col-span-6 p-2'>
            <SkillList />
            <About />
        </div>               
        <div className='lg:col-span-6 col-span-12 p-2'>
            <ProjectList />
            <Gallery />
        </div>        
    </div>
  )
}
