"use client"
import React, { useEffect, useState } from 'react'
import FadeY from './animated/fade/FadeY'
import ReactConfetti from 'react-confetti'
import axios from 'axios'
import Link from 'next/link'

export default function HeroText({title,slogan,resume}) {
  const [congrates, setCongrates] = useState(false)
  const [downloading, setDownloading] = useState(false)
  const [size, setSize] = useState({height:1000,width:1000})

  const handleDownloadResume = () => {
    setDownloading(true)
    axios.get(`/storage/${resume}`,{responseType:"blob"}).then(res=>{
      console.log("res: ",res)
      const extension = res.data.type.split("/")[1]
      const src = URL.createObjectURL(res.data);
      const a = document.createElement("a");
      a.href = src;
      a.download = `shahidul-alam-minhaz(CV).${extension}`;
      document.body.appendChild(a);
      a.click();
      URL.revokeObjectURL(src)
      document.body.removeChild(a);
      setCongrates(true)
      setDownloading(false)
      setTimeout(()=>{
        console.log("setting congrates false")
        setCongrates(false)
      },[3000])
    }).catch(err=>{
      setDownloading(false)
      console.log(err)
      alert("Oh no! Failed to download. Try again please!")
    })
  }

  useEffect(()=>{
    const height = window.innerHeight;
    const width = window.innerWidth;
    setSize({height,width})
  },[])
  return (
    <div className='mt-20 mb-10 sm:mt-32'>
        {
          congrates?<ReactConfetti
          width={size.width}
          height={size.height}
        />:""
        }
        <FadeY duration={2} delay={0} y={-100}>
          <h1 className='text-4xl text-center text-white mb-5 font-extrabold 2xl:text-8xl xl:text-5xl sm:text-left' dangerouslySetInnerHTML={{__html:title}}></h1>
        </FadeY>
        <FadeY duration={2} delay={0.1}>
          <p className='text-sm text-center max-w-[600px] text-slate-300 sm:text-2xl sm:text-left'>{slogan}</p>
        </FadeY>
        <FadeY duration={2} delay={0.2}>
          <div className='flex gap-x-3 mt-8 justify-center sm:justify-start sm:mt-10'>
              <button className='bg-[url("/images/btn-background.svg")] bg-no-repeat px-5 py-2 text-white font-semibold rounded-3xl hover:opacity-80 transition' onClick={handleDownloadResume}>{downloading?"Downloading...":"Resume"}</button>
              <Link href="/#contact" className='bg-[url("/images/btn-background.svg")] bg-no-repeat px-5 py-2 text-white font-semibold rounded-3xl hover:opacity-80 transition'>Contact</Link>
          </div>
        </FadeY>
    </div>
  )
}
