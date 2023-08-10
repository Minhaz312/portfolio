"use client"
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import {AnimatePresence, motion} from "framer-motion"
import { BsWhatsapp } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { BiLogoFacebook,BiLogoLinkedin } from 'react-icons/bi'
import LeftToRight from './animated/LeftToRight'
import RightToLeft from './animated/RightToLeft'
import axios from 'axios'
import ReactConfetti from 'react-confetti'
export default function Contact({info}) {

  const ref = useRef(null)

  const [userMobile,setUserMobile] = useState("")
  const [userMail,setUserMail] = useState("")
  const [message,setMessage] = useState("");

  const [response,setResponse] = useState(null)

  const [loading,setLoading] = useState(false)
  const isValidEmail = email => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return email.match(emailRegex)===null?true:false;
  }
  const handleSendMail = () => {
    if(userMobile.trim()==="" || userMail.trim()==="" ||  isValidEmail(userMail.trim())===true || message.trim()===""){
      setResponse(400)
      console.log("invalid data")
    }else{
      let modifiedNumber = userMobile;
      if(userMobile.indexOf("+88")!==0){
        modifiedNumber = "+88"+userMobile;
      }
      if(modifiedNumber.indexOf("+88019")===0 || modifiedNumber.indexOf("+88018")===0 || modifiedNumber.indexOf("+88017")===0 || modifiedNumber.indexOf("+88013")===0){
        if(modifiedNumber.length===14){
          const data = {userMail,message:message.concat(` my mobile: ${modifiedNumber}`)};
            console.log("data: ",data)
            setLoading(true)
            const template_params = {
              from_name:userMail,
              to_name:"minhazcse312@gmail.com",
              message:message.concat(` my mobile: ${modifiedNumber}`)
            }
            
            emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,template_params,process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY).then(res=>{
              console.log("res: ",res)
              if(res.status === 200) {
                setResponse(200)
              }else{
                setResponse(500)
              }
              setLoading(false)
              setTimeout(()=>{
                setResponse(null)
              },[5000])
            }).catch(err=>{
              console.error(err)
              setResponse(500)
              setTimeout(()=>{
                setResponse(null)
              },[5000])
              setLoading(false)
            })
        }
      }else{
          setResponse(400)
          console.log("invalid number")
      }
    }
  }

  return (
    <div className="w-full mx-auto scroll-mt-24 px-3 md:w-10/12 lg:w-10/12 xl:w-8/12 md:px-0 sm:px-5" id="contact">
      <div ref={ref} className=' overflow-hidden min-h-[600px] h-auto  py-10 bg-[#050816]/10 primary-shadow rounded-2xl backdrop-blur-sm mx-auto px-3 w-full'>
        <div className={`${response===200?"hidden":"block"}`}>
          <h1 className='text-center text-2xl md:text-5xl text-white font-bold'>Contact Me</h1>
          <motion.img initial={{width:0}} animate={{width:400,transformOrigin:"center center",transition:{duration:0.33}}} src='/images/horizontal-gradient-line.png' className='mx-auto my-3' />
        </div>
        <div className='my-3 h-full w-full flex justify-center items-center flex-col gap-3'>
          <AnimatePresence>
            {
              response===200 && (
                <div className='z-[20]'>
                  <ReactConfetti height={ref.current.clientHeight} width={ref.current.clientWidth} />
                  <motion.div initial={{scale:0,height:0,opacity:0}} animate={{scale:1.5,opacity:1,height:"100%",delay:0.1}} exit={{scale:0,opacity:0,transition:{delay:0,stiffness:0}}} transition={{duration:0.53,delay:0.1,stiffness:200,type:"spring"}} className='h-full w-full mt-14 md:mt-32 text-center'>
                    <div>
                      <h1 className='text-md sm:text-2xl text-green-500'>Thank you for contacting</h1>
                      <h1 className='text-[13px] sm:text-md text-slate-300'>I will response you soon</h1>
                    </div>
                  </motion.div>
                </div>
              )
            }
          </AnimatePresence>
        </div>
          <AnimatePresence>
            {
              response===null||response===400?
              <div className={`grid grid-cols-12 px-5`}>
                <div className='col-span-12 sm:col-span-6'>
                    <LeftToRight delay={0.33}>
                    <div>
                      <div className='my-3'>
                        <input type='text' className='bg-transparent p-2 rounded outline-none focus:outline-none text-white w-full border border-primary/50 focus:border-primary transition-all' onChange={e=>setUserMobile(e.target.value.trim())} value={userMobile} placeholder='Enter Mobile' />
                        <p className={`text-red-400 ${userMobile.trim()===""&&response===400?"block":"hidden"} text-[13px] mt-0.5 tracking-wider`}>Can i have your number please?</p>
                      </div>
                      <div className='my-3'>
                        <input type='text' className='bg-transparent p-2 rounded outline-none focus:outline-none text-white w-full border border-primary/50 focus:border-primary transition-all' onChange={e=>setUserMail(e.target.value.trim())} value={userMail} placeholder='Enter Email' />
                          <p className={`text-red-400 ${userMail.trim()===""&&response===400?"block":"hidden"} text-[13px] mt-0.5 tracking-wider`}>Can i have your mail address please?</p>
                      </div>
                      <div className='my-3'>
                        <textarea onChange={e=>setMessage(e.target.value)} className='bg-transparent p-2 rounded outline-none focus:outline-none text-white w-full border border-primary/50 focus:border-primary transition-all' placeholder='Write your message...' rows={7}></textarea>
                          <p className={`text-red-400 ${message.trim()===""&&response===400?"block":"hidden"} text-[13px] mt-0.5 tracking-wider`}>Maybe you forgot to write message!</p>
                      </div>
                      <button className='bg-[url("/images/btn-background.svg")] bg-no-repeat px-5 py-2 text-white font-semibold rounded-3xl hover:opacity-80 transition' onClick={handleSendMail}>{loading?"Sending...":"Send Message"}</button>
                    </div>
                    </LeftToRight>
                </div>
                  <div className='col-span-12 sm:col-span-6 flex justify-center items-center mt-10 sm:mt-0'>
                      <RightToLeft delay={0.33}>
                        <a href="/" className='flex items-center mb-5 gap-x-3 text-slate-400'>
                        <BsWhatsapp className='text-[25px] md:text-[30px]' color='#d4d4d4' />
                        <p className='text-md sm:text-xl'>{info.mobile}</p>
                        </a>
                        <a href="mailto:minhazkhan312@gmail.com" className='flex items-center mb-5 gap-x-3 text-slate-400'>
                        <FiMail className='text-[25px] md:text-[30px]' color='#d4d4d4' />
                        <p className='text-md sm:text-xl'>{info.email}</p>
                        </a>
                        <a href="/" className='flex items-center mb-5 gap-x-3 text-slate-400'>
                        <HiOutlineLocationMarker className='text-[25px] md:text-[30px]' color='#d4d4d4' />
                        <p className='text-md sm:text-xl'>{info.houseAddr}</p>
                        </a>
                        <a href="https://www.facebook.com/mdminhaz.shahidulalam/" className='flex items-center mb-5 gap-x-3 text-slate-400'>
                        <BiLogoFacebook className='text-[25px] md:text-[30px]' color='#d4d4d4' />
                        <p className='text-md sm:text-xl'>Facebook.com</p>
                        </a>
                        <a href="https://www.linkedin.com/in/minhaz-khan-aa0a0119a/" className='flex items-center mb-5 gap-x-3 text-slate-400'>
                        <BiLogoLinkedin className='text-[25px] md:text-[30px]' color='#d4d4d4' />
                        <p className='text-md sm:text-xl'>LinkedIn.com</p>
                        </a>
                      </RightToLeft> 
                  </div>
                </div>
              :""
            }
            </AnimatePresence>        
      </div>
    </div>
  )
}