"use client"
import { jsonHeader } from '@/helpers/header'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function About() {

  const router = useRouter()

  const [loading,setLoading] = useState(true)
  const [updating,setUpdating] = useState(false)

  const [title,setTitle] = useState("")
  const [slogan,setSlogan] = useState("")
  const [about,setAbout] = useState("")
  const [resume,setResume] = useState("")
  const [facebook,setFacebook] = useState("")
  const [github,setGithub] = useState("")
  const [linkedIn,setLinkedIn] = useState("")
  const [mobile,setMobile] = useState("")
  const [email,setEmail] = useState("")
  const [houseAddr,setHouseAddr] = useState("")
  const [newPassword,setNewPassword] = useState("")
  const [oldPassword,setOldPassword] = useState("")

  const [aboutData,setAboutData] = useState({})

  const getAboutData = () => {
    axios.get("/api/user/get/all",jsonHeader).then(res=>{
      if(res.status === 200 && res.data.success === true) {
        setAboutData(res.data.data[0]);
      }else{
        setAboutData(null);
      }
      setLoading(false)
    }).catch(err=>{
      setLoading(false)
    })
  }

  const updateAbout = () => {
    const updatedData = {}
    if(title.trim()!==""){
      updatedData.title = title
    }
    if(slogan.trim()!==""){
      updatedData.slogan = slogan
    }
    if(about.trim()!==""){
      updatedData.about = about
    }
    if(resume.trim()!==""){
      updatedData.resume = resume
    }
    if(facebook.trim()!==""){
      updatedData.facebook = facebook
    }
    if(github.trim()!==""){
      updatedData.github = github
    }
    if(linkedIn.trim()!==""){
      updatedData.linkedin = linkedIn
    }
    if(mobile.trim()!==""){
      updatedData.mobile = mobile
    }
    if(email.trim()!==""){
      updatedData.email = email
    }
    if(houseAddr.trim()!==""){
      updatedData.houseAddr = houseAddr
    }
    if(newPassword.trim()!==""){
      updatedData.newPassword = newPassword
    }
    console.log("updated data: ",updatedData)
    updatedData.oldPassword = oldPassword
    setUpdating(true)
    axios.post("/api/user/add",updatedData,jsonHeader).then(res=>{
      setUpdating(false)
      if(res.status === 200 && res.data.success === true) {
        getAboutData()
        alert("Updated successfully")
      }else{
        alert("failed to update")
      }
    }).catch(err=>{
      setUpdating(false)
      alert("failed to update",err.message)
    })
  }


  const handleLogout = () =>{
    localStorage.removeItem("port_token");
    router.replace("/controle/login")
  }


  useEffect(()=>{
    getAboutData()
  },[])

  if(loading){
    return (
      <div className='bg-slate-900 px-3 py-4 rounded shadow shadow-slate-500'>
        <div className='flex justify-between items-center mb-5 pb-5 border-b border-slate-500'>
          <h1 className='text-2xl'>About Me</h1>
          <button className='text-slate-300 font-semibold text-sm' onClick={handleLogout}>logout</button>
        </div>
        <h3 className='text-slate-300 text-center mt-14'>Loading...</h3>
    </div>
    )
  }

  if(loading === false && aboutData===null) {
    return (
      <div className='bg-slate-900 px-3 py-4 rounded shadow shadow-slate-500'>
        <div className='flex justify-between items-center mb-5 pb-5 border-b border-slate-500'>
          <h1 className='text-2xl'>About Me</h1>
          <button className='text-slate-300 font-semibold text-sm' onClick={handleLogout}>logout</button>
        </div>
        <h3 className='text-red-500 text-center mt-14'>Failed to load</h3>
      </div>
    )
  }

  return (
    <div className='bg-slate-900 px-3 py-4 rounded shadow shadow-slate-500'>
        <div className='flex justify-between items-center mb-5 pb-5 border-b border-slate-500'>
          <h1 className='text-2xl'>About Me</h1>
          <button className='text-slate-300 font-semibold text-sm' onClick={handleLogout}>logout</button>
        </div>
        <input type='text' onChange={e=>setTitle(e.target.value)} defaultValue={aboutData.title} className='bg-slate-800 border-none outline-none focus:border-none focus:outline-none rounded w-full mb-3 px-3 py-2' placeholder='Enter Title' />
            <input type='text' onChange={e=>setResume(e.target.value)} defaultValue={aboutData.resume} className='bg-slate-800 border-none outline-none focus:border-none focus:outline-none rounded w-full mb-3 px-3 py-2' placeholder='Select Resume' />
            <textarea onChange={e=>setSlogan(e.target.value)} defaultValue={aboutData.slogan} className='bg-slate-800 border-none outline-none focus:border-none focus:outline-none rounded w-full mb-3 px-3 py-2' placeholder='Enter Slogan' />
            <textarea rows={4} onChange={e=>setAbout(e.target.value)} defaultValue={aboutData.about} className='bg-slate-800 border-none outline-none focus:border-none focus:outline-none rounded w-full mb-3 px-3 py-2' placeholder='Enter about' />
            <div className='grid grid-cols-2 gap-x-1'>
              <input type='text' onChange={e=>setFacebook(e.target.value)} defaultValue={aboutData.facebook} className='bg-slate-800 border-none outline-none focus:border-none focus:outline-none rounded w-full mb-3 px-3 py-2' placeholder='FAcebook Link' />
              <input type='text' onChange={e=>setLinkedIn(e.target.value)} defaultValue={aboutData.linkedin} className='bg-slate-800 border-none outline-none focus:border-none focus:outline-none rounded w-full mb-3 px-3 py-2' placeholder='Linkedin Link' />
            </div>
            <div className='grid grid-cols-2 gap-x-1'>
              <input type='text' onChange={e=>setGithub(e.target.value)} defaultValue={aboutData.github} className='bg-slate-800 border-none outline-none focus:border-none focus:outline-none rounded w-full mb-3 px-3 py-2' placeholder='Github Link' />
              <input type='text' onChange={e=>setMobile(e.target.value)} defaultValue={aboutData.mobile} className='bg-slate-800 border-none outline-none focus:border-none focus:outline-none rounded w-full mb-3 px-3 py-2' placeholder='Whatsapp Number' />
            </div>
            <div className='grid grid-cols-2 gap-x-1'>
              <input type='text' onChange={e=>setEmail(e.target.value)} defaultValue={aboutData.email} className='bg-slate-800 border-none outline-none focus:border-none focus:outline-none rounded w-full mb-3 px-3 py-2' placeholder='Email Address' />
              <input type='text' onChange={e=>setHouseAddr(e.target.value)} defaultValue={aboutData.houseAddr} className='bg-slate-800 border-none outline-none focus:border-none focus:outline-none rounded w-full mb-3 px-3 py-2' placeholder='House Address' />
            </div>
            <div className='grid grid-cols-2 gap-x-1'>
              <input type='text' onChange={e=>setNewPassword(e.target.value)} className='bg-slate-800 border-none outline-none focus:border-none focus:outline-none rounded w-full mb-3 px-3 py-2' placeholder='New Password' />
              <input type='text' onChange={e=>setOldPassword(e.target.value)} className='bg-slate-800 border-none outline-none focus:border-none focus:outline-none rounded w-full mb-3 px-3 py-2' placeholder='Old Password' />
            </div>
            <button className='px-3 py-2 text-white font-semibold bg-green-800 hover:bg-green-900 rounded' onClick={updateAbout} >{updating?"updating...":"Update"}</button>
    </div>
  )
}
