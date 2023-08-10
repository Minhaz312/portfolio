"use client"
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function Login() {
    const router = useRouter()

    const [loginLoading, setLoginLoading] = useState(false)

    const [checkingAuth, setCheckingAuth] = useState(true)

    const [email,setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const handleOnLogin = () => {
        if(email===null || password===null || email.trim()==="" || password.trim()==="") {
            alert("Enter credential")
        }else{
            setLoginLoading(true)
            axios.post("/api/user/login",JSON.stringify({email,password})).then(res=>{
                setLoginLoading(false)
                if(res.status === 200 && res.data.success === true) {
                    localStorage.setItem("port_token",res.data.token)
                    router.replace("/controle/home")
                }else{
                }
            }).catch(err=>{
                setLoginLoading(false)
                alert("failed to login")
            })
        }
    }

    useEffect(()=>{
        console.log("token: ",localStorage.getItem("port_token"))
        if(localStorage.getItem("port_token")!==null){
            router.replace("/controle/home")
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
    <div className='w-full h-screen flex justify-center items-center bg-slate-900 text-white'>
        <div className='px-3 py-5 bg-slate-800'>
            <h1 className='text-2xl text-center my-5'>Login Form</h1>
            <input type="text" placeholder='Enter username' onChange={e=>setEmail(e.target.value.trim())} className='bg-slate-900 w-full border border-slate-500 rounded py-2 px-2 mb-3' />
            <input type="text" placeholder='Enter password' onChange={e=>setPassword(e.target.value.trim())} className='bg-slate-900 w-full border border-slate-500 rounded py-2 px-2 mb-3' />
            <button onClick={handleOnLogin} className='w-full my-5 bg-blue-900 text-sm font-semibold px-3 py-2'>{loginLoading?"authenticating...":"Login"}</button>
        </div>
    </div>
  )
}
