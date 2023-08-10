"use client"
import Modal from './Modal'
import { jsonHeader } from '@/helpers/header'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaTrash } from 'react-icons/fa'

export default function SkillList() {

    const [loading,setLoading] = useState(true)
    const [actionLoading,setActionLoading] = useState(false)

    const [show,setShow] = useState(false)
    const [name,setName] = useState(null)
    const [color,setColor] = useState(null)
    const [priority,setPriority] = useState(null)
    const [icon,setIcon] = useState(null)

    const [skillList,setSkillList] = useState([])

    // const skillList = [
    //     {id:1,name:"ReactJS",icon:"react.png",priority:1,color:"#61dbf"},
    //     {id:2,name:"ReactJS",icon:"react.png",priority:1,color:"#61dbf"},
    //     {id:3,name:"ReactJS",icon:"react.png",priority:1,color:"#61dbf"},
    // ]
    const handleShowModal = () => {
        if(show) setShow(false)
        else setShow(true)
    }

    const handleGetAllSkills = () => {
        axios.get("/api/skills/get",jsonHeader).then(res=>{
            if(res.status === 200 && res.data.success === true) {
                let sortedList = []
                if(res.data.data.length>0){
                    sortedList = res.data.data.sort((a,b)=>Number(a.priority)-Number(b.priority))
                }
                setSkillList(sortedList);
                setLoading(false)
            }else{
                setLoading(false)
                setSkillList(null)
            }
        }).catch(err=>{
            setLoading(false)
            setSkillList(null)
        })
    }

    const handleAddNewSkill = () => {
        if(name===null || name==="" || color===null || color==="" || icon===null || icon==="" || priority===null || priority===""){
            alert("Enter all fileds value")
        }else{
            setActionLoading(true)
            const data = {name,color,priority,icon}
            axios.post("/api/skills/add",data,jsonHeader).then(res=>{
                if(res.status === 200 && res.data.success === true) {
                    handleGetAllSkills()
                    setShow(false)
                }else{
                    alert("Failed to add skill")
                }
                setActionLoading(false)
            }).catch(err=>{
                alert("Failed to add skill")
                setActionLoading(false)
            })
        }
    }

    const handleDeleteSkill = id => {
        setActionLoading(true)
        axios.delete(`/api/skills/delete/${id}`,jsonHeader).then(res=>{
            if(res.status === 200 && res.data.success === true) {
                handleGetAllSkills()
                alert("skill deleted")
            }else{
                alert("Failed to delete skill")
            }
            setActionLoading(false)
        }).catch(err=>{
            alert("Failed to delete skill",err.message)
            setActionLoading(false)
        })
    }


    useEffect(()=>{
        handleGetAllSkills()
    },[])

    if(loading){
        return (
            <div className='bg-slate-900 my-5 p-3'>
                <h1 className='text-2xl'>Gallery</h1>
                <div className='grid xl:grid-cols-7 md:grid-cols-6 sm:grid-cols-5 grid-cols-2 gap-3 animate-pulse'>
                    {
                        new Array(16).map((item,i)=><div key={i} className='bg-slate-700 rounded-md h-[160px] w-full '></div>)
                    }
                </div>
            </div>
        )
      }
      if(skillList===null){
        return (
            <div className='bg-slate-900 my-5 p-3 h-[300px]'>
                <h1 className='text-2xl'>Gallery</h1>
                <p className='text-red-400 text-sm my-3 text-center mt-14'>Failed to load</p>
            </div>
        )
      }

  return (
    <>
        <Modal show={show} onHide={handleShowModal} loading={actionLoading} onAction={handleAddNewSkill} title='Add New Skill' className='bg-slate-700'>
            <input type='text' onChange={e=>setName(e.target.value)} className='bg-transparent focus:border-b focus:border-b-slate-100 focus:outline-none my-3 w-full border-b py-2 border-slate-400' placeholder='Skill Name' />
            <input type='text' onChange={e=>setIcon(e.target.value)} className='bg-transparent focus:border-b focus:border-b-slate-100 focus:outline-none my-3 w-full border-b py-2 border-slate-400' placeholder='Skill Icon' />
            <input type='text' onChange={e=>setPriority(e.target.value)} className='bg-transparent focus:border-b focus:border-b-slate-100 focus:outline-none my-3 w-full border-b py-2 border-slate-400' placeholder='Skill Priority' />
            <input type='text' onChange={e=>setColor(e.target.value)} className='bg-transparent focus:border-b focus:border-b-slate-100 focus:outline-none my-3 w-full border-b py-2 border-slate-400' placeholder='Skill Color' />
        </Modal>
        <div className='bg-slate-900 px-3 py-2 mb-5 rounded shadow shadow-slate-500'>
            <div className='flex justify-between items-center my-3 border-b border-b-slate-600 mb-3 pb-3'>
                <h1 className='text-2xl'>Skils</h1>
                <button className='px-3 py-2 text-sm font-semibold text-white bg-green-800 hover:bg-green-900 rounded-md' onClick={handleShowModal}>Add New</button>
            </div>
            {
                skillList.length>0?<div className='grid xl:grid-cols-7 md:grid-cols-6 sm:grid-cols-5 grid-cols-2 gap-3'>
                {
                    skillList.map((skill,i)=><div key={i} className='bg-slate-700 hover:bg-slate-600 py-3 rounded-md'>
                        <img src={`/storage/${skill.icon}`} className='w-full h-[60px] object-cover' />
                        <div className='flex justify-between items-center px-2'>
                        <p className={`text-[13px] text-[${skill.color}] mt-2 text-center`}>{skill.name}</p>
                        </div>
                        <div className='flex justify-between items-center mt-1 mx-1'>
                            <button onClick={handleDeleteSkill.bind(this,skill.id)} className='px-3 py-1 text-red-400 rounded-md font-semibold text-sm'>{actionLoading?"deleting...":<FaTrash />}</button>
                            {/* <button className='px-3 py-1 text-slate-200 rounded-md font-semibold text-sm'><BiEdit /></button> */}
                            <p className={`text-md font-bold text-white text-center`}>{skill.priority}</p>
                        </div>
                    </div>)
                }
            </div>:<h3 className='text-slate-300 text-center mt-14 text-sm'>No skill added yet</h3>
            }
            
        </div>
    </>
  )
}
