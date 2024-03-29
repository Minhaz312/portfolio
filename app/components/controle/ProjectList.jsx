"use client"
import React, { useEffect, useState } from 'react'
import Modal from './Modal'
import axios from 'axios'
import { jsonHeader } from '@/helpers/header'
import { BiEdit } from 'react-icons/bi'
import { FaTrash } from 'react-icons/fa'

export default function ProjectList() {

    const [show, setShow] = useState(false)
    const [showEditModal, setShowEditModal] = useState(false)
    const [selectedProject, setSelectedProject] = useState(null)
    const [selectNewProjectType, setSelectNewProjectType] = useState("regular")

    const [projectList, setProjectList] = useState([])
    const [onGoingProject, setOngoingProject] = useState(null)
    const [loading,setLoading] = useState(true)
    const [actionLoading,setActionLoading] = useState(false)

    const [title,setTitle] = useState("")
    const [desc,setDesc] = useState("")
    const [priority,setPrority] = useState("")
    const [features,setFeatures] = useState("")
    const [thumbnile,setThumbnile] = useState("")
    const [github,setGithub] = useState("")
    const [live,setLive] = useState("null")
    const [techNames, setTechNames] = useState("")
    const [techColors, setTechColors] = useState("")

    const [titleUpdated,setTitleUpdated] = useState("")
    const [descUpdated,setDescUpdated] = useState("")
    const [priorityUpdated,setProrityUpdated] = useState("")
    const [featuresUpdated,setFeaturesUpdated] = useState("")
    const [thumbnileUpdated,setThumbnileUpdated] = useState("")
    const [githubUpdated,setGithubUpdated] = useState("")
    const [liveUpdated,setLiveUpdated] = useState("null")
    const [techNamesUpdated, setTechNamesUpdated] = useState("")
    const [techColorsUpdated, setTechColorsUpdated] = useState("")

    const getAllProject = () => {
        axios.get("/api/project/get/all",jsonHeader).then(res=>{
            setLoading(false)
            console.log("project res: ",res)
            if(res.status === 200 && res.data.success === true) {
                let sortedList = []
                if(res.data.data.length>0){
                    sortedList = res.data.data.sort((a,b)=>Number(a.priority)-Number(b.priority))
                }
                setProjectList(sortedList);
            }else{
                setProjectList(null)
            }
        }).catch(err=>{
            setLoading(false)
            setProjectList(null)
        })
        axios.get("/api/project/get/ongoing",jsonHeader).then(res=>{
            console.log("ongoing project res: ",res)
            if(res.status === 200 && res.data.success === true) {
                setOngoingProject(res.data.data);
            }else{
                setOngoingProject(null)
            }
        }).catch(err=>{
            setLoading(false)
            setOngoingProject(null)
        })
    }

    const handleAddNewProject = () => {
        if(title.trim()==="" || desc.trim()==="" || thumbnile.trim()==="" || github.trim()==="" || live.trim()==="" || techNames.trim()===""){
            alert("Provide all info")
        }else{
            let technologies = `${techNames.trim()}/${techColors.trim()}`;
            const links = `${github.trim()}|${live.trim()}`
            let data = {title,desc,thumbnile,links,technologies};
            setActionLoading(true)
            let url;
            if(selectNewProjectType==="regular"){
                url = "/api/project/add"
                data.priority = priority
            }else{
                url = "/api/project/add/ongoing"
                data.features = features
            }
            axios.post(url,data,jsonHeader).then(res=>{
                if(res.status === 200 && res.data.success === true) {
                    alert("Project Added")
                    getAllProject()
                }else{
                    alert("failed to add projcet")
                }
                setActionLoading(false)
            }).catch(err=>{
                setActionLoading(false)
                alert("failed to add projcet",err.message)
            })
        }
    }

    const handleCloseModal = () => {
        if(show){
            setShow(false)
        }else{
            setShow(true)
        };
    }
    const handleCloseEditModal = project => {
        if(showEditModal){
            setSelectedProject(null)
            setShowEditModal(false)
        }else{
            if(project==="ongoing"){
                setSelectedProject({...onGoingProject[0],type:"ongoing"})
            }else{
                setSelectedProject({...project,type:"regular"})
            }
            setShowEditModal(true)
        };
    }

    const handleEditProject = () => {
        let updatedData = {}
        updatedData.id = selectedProject.id;
        if(titleUpdated.trim()!==""){
            updatedData.title = titleUpdated
        }
        if(descUpdated.trim()!==""){
            updatedData.desc = descUpdated
        }
        if(priorityUpdated.trim()!=="" && selectedProject.type==="regular"){
            updatedData.priority = priorityUpdated
        }
        if(featuresUpdated.trim()!=="" && selectedProject.type==="ongoing"){
            updatedData.features = featuresUpdated
        }
        if(thumbnileUpdated.trim()!==""){
            updatedData.thumbnile = thumbnileUpdated
        }
        if(githubUpdated.trim()!=="" && liveUpdated.trim()!==""){
            updatedData.links = githubUpdated+"|"+liveUpdated
        }
        if(liveUpdated.trim()!=="" && githubUpdated.trim()===""){
            updatedData.links = selectedProject.links.split("|")[0]+"|"+liveUpdated
        }
        if(liveUpdated.trim()==="" && githubUpdated.trim()!==""){
            updatedData.links = githubUpdated+"|"+selectedProject.links.split("|")[1]
        }
        if(techNamesUpdated.trim()!==""){
            updatedData.technologies = techNamesUpdated
        }
        setActionLoading(true)
        let url = "/api/project/update";
        if(selectedProject.type==="ongoing"){
            url = "/api/project/update/ongoing"
        }
        axios.put(url,updatedData,jsonHeader).then(res=>{
            if(res.status === 200 && res.data.success === true) {
                getAllProject()
                alert("Updated successfully")
            }else{
                alert("Failed to update")
            }
            setActionLoading(false)
        }).catch(err=>{
            setActionLoading(false)
            alert("Failed to update",err.message)
        })
    }
    
    const handleDeleteProject = (id,type="regular") => {
        setActionLoading(true)
        let url = `/api/project/delete/${id}`
        if(type==="ongoing"){
            url = `/api/project/delete/ongoing`
        }
        axios.delete(url,jsonHeader).then(res=>{
            if(res.status === 200 && res.data.success === true) {
                getAllProject()
                alert("Deleted successfully")
            }else{
                alert("Failed to delete")
            }
            setActionLoading(false)
        }).catch(err=>{
            alert("Failed to delete",err.message)
            setActionLoading(false)
        })
    }

    useEffect(()=>{
        getAllProject()
    },[])

    if(loading){
        return (
            <div className='h-[200px] bg-slate-900 px-3 pt-2 rounded shadow shadow-slate-500'>
                <div className='flex justify-between items-center my-5'>
                    <h1 className='text-white text-2xl'>Project List</h1>
                    <button className='px-3 py-2 text-white font-semibold bg-green-800 hover:bg-green-900 rounded' onClick={handleCloseModal}>Add New</button>
                </div>
                <h3 className='text-xl text-white mt-14 text-center'>loading...</h3>
            </div>
        )
    }

    if(loading===false && projectList===null) {
        return (
            <div className='h-[200px] bg-slate-900 px-3 pt-2 rounded shadow shadow-slate-500'>
                <div className='flex justify-between items-center my-5'>
                    <h1 className='text-white text-2xl'>Project List</h1>
                    <button className='px-3 py-2 text-white font-semibold bg-green-800 hover:bg-green-900 rounded' onClick={handleCloseModal}>Add New</button>
                </div>
                <h3 className='text-md text-red-300 mt-14 text-center'>Failed to load projects</h3>
            </div>
        )
    }


  return (
    <>
        <Modal show={show} loading={actionLoading} onHide={handleCloseModal} onAction={handleAddNewProject} btnTitle="Add" title='Add New Project' className=''>
            <div className='mb-3'>
                <button className='px-2 py-1 bg-slate-700 text-white mr-1' onClick={()=>setSelectNewProjectType("ongoing")}>Ongoing</button>
                <button className='px-2 py-1 bg-slate-700 text-white mr-1' onClick={()=>setSelectNewProjectType("regular")}>Regular</button>
            </div>
            <div className='grid grid-cols-2 gap-x-3'>
                <div>
                    <input type='text' onChange={e=>setTitle(e.target.value)} className='bg-slate-700 mb-3 px-2 py-3 w-full' placeholder='Enter Title' />
                    {selectNewProjectType==="regular"&&<input type='text' onChange={e=>setPrority(e.target.value)} className='bg-slate-700 mb-3 px-2 py-3 w-full' placeholder='Enter Priority' />}
                    {selectNewProjectType==="ongoing"&&<input type='text' onChange={e=>setFeatures(e.target.value)} className='bg-slate-700 mb-3 px-2 py-3 w-full' placeholder='Enter Features' />}
                    <input type='text' onChange={e=>setGithub(e.target.value)} className='bg-slate-700 mb-3 px-2 py-3 w-full' placeholder='Github Link' />
                    <input type='text' onChange={e=>setLive(e.target.value)} className='bg-slate-700 mb-3 px-2 py-3 w-full' placeholder='Live Link' />
                </div>
                <div>
                    <input type='text' onChange={e=>setThumbnile(e.target.value)} className='bg-slate-700 mb-3 px-2 py-3 w-full' placeholder='Thumbnile Image' />
                    <input type='text' onChange={e=>setTechNames(e.target.value)} className='bg-slate-700 mb-3 px-2 py-3 w-full' placeholder='Tech Name List' />
                    <input type='text' onChange={e=>setTechColors(e.target.value)} className='bg-slate-700 mb-3 px-2 py-3 w-full' placeholder='Tech Color List' />
                </div>
            </div>
            <textarea rows={8} onChange={e=>setDesc(e.target.value)} className='bg-slate-700 mb-3 px-2 py-3 w-full' placeholder='Enter Description'></textarea>
        </Modal>
        {
            selectedProject&&(<Modal show={showEditModal} loading={actionLoading} onHide={handleCloseEditModal} onAction={handleEditProject} btnTitle="Update" title='Update Project' className=''>
                <div className='grid grid-cols-2 gap-x-3'>
                    <div>
                        <input type='text' onChange={e=>setTitleUpdated(e.target.value)} defaultValue={selectedProject.title} className='bg-slate-700 mb-3 px-2 py-3 w-full' placeholder='Enter Title' />
                        {selectedProject.type==="regular"&&(
                            <input type='text' onChange={e=>setProrityUpdated(e.target.value)} defaultValue={selectedProject.priority} className='bg-slate-700 mb-3 px-2 py-3 w-full' placeholder='Enter Priority' />
                        )}
                        {selectedProject.type==="ongoing"&&(
                            <input type='text' onChange={e=>setFeaturesUpdated(e.target.value)} defaultValue={selectedProject.features} className='bg-slate-700 mb-3 px-2 py-3 w-full' placeholder='Enter Features' />
                        )}
                        <input type='text' onChange={e=>setGithubUpdated(e.target.value)} defaultValue={selectedProject.links.split("|")[0]} className='bg-slate-700 mb-3 px-2 py-3 w-full' placeholder='Github Link' />
                        <input type='text' onChange={e=>setLiveUpdated(e.target.value)} defaultValue={selectedProject.links.split("|")[1]!=="null"?selectedProject.links.split("|")[1]:""} className='bg-slate-700 mb-3 px-2 py-3 w-full' placeholder='Live Link' />
                    </div>
                    <div>
                        <img src={`/storage/${selectedProject.thumbnile}`} className='h-[140px] w-auto mb-2' />
                        <input type='text' onChange={e=>setThumbnileUpdated(e.target.value)} defaultValue={selectedProject.thumbnile} className='bg-slate-700 mb-3 px-2 py-3 w-full' placeholder='Thumbnile Image' />
                        <input type='text' onChange={e=>setTechNamesUpdated(e.target.value)} defaultValue={selectedProject.technologies} className='bg-slate-700 mb-3 px-2 py-3 w-full' placeholder='Tech Name List' />
                    </div>
                </div>
                <textarea rows={8} onChange={e=>setDescUpdated(e.target.value)} defaultValue={selectedProject.desc} className='bg-slate-700 mb-3 px-2 py-3 w-full' placeholder='Enter Description'></textarea>
            </Modal>)
        }
        <div className=' bg-slate-900 px-3 py-2 rounded shadow shadow-slate-500'>
                <div className='flex justify-between items-center my-3 pb-3 border-b border-slate-500'>
                    <h1 className='text-white text-xl'>Project List</h1>
                    <button className='px-3 py-2 text-white font-semibold bg-green-800 hover:bg-green-900 rounded' onClick={handleCloseModal}>Add New</button>
                </div>
                <table className='table-auto text-center w-full'>
                <thead className='bg-slate-700'>
                    <tr>
                        <th className='py-3'>Title</th>
                        <th className='py-3 w-[120px]'>Priority</th>
                        <th className='py-3'>Thumbnile</th>
                        <th className='py-3'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {onGoingProject!==null&&onGoingProject.length>0&&(
                        <tr>
                        <td>{onGoingProject[0].title}</td>
                        <td className='text-[12px]'>{onGoingProject[0].features} features</td>
                        <td><img src={`/storage/${onGoingProject[0].thumbnile}`} className='w-auto h-[50px] object-cover' /></td>
                        <td className='py-3 pl-2'>
                            <button className='px-3 py-2 text-white font-semibold text-md' onClick={handleCloseEditModal.bind(this,"ongoing")}><BiEdit /></button>
                            <button className='px-3 py-2 text-red-600 font-semibold text-md' onClick={handleDeleteProject.bind(this,0,"ongoing")}>{actionLoading?"deleting...":<FaTrash />}</button>
                        </td>
                    </tr>
                    )}
                    
                    {
                        projectList.map((item,i)=><tr key={i} className='even:bg-slate-800 hover:bg-slate-900 transition-all cursor-pointer'>
                        <td className='py-3 pl-2'>{item.title}</td>
                        <td className='py-3 pl-2'>{item.priority}</td>
                        <td className='py-3 pl-2'><img src={`/storage/${item.thumbnile}`} className='w-[100px] h-[40px] object-cover' /></td>
                        <td className='py-3 pl-2'>
                            <button className='px-3 py-2 text-white font-semibold text-md' onClick={handleCloseEditModal.bind(this,item)}><BiEdit /></button>
                            <button className='px-3 py-2 text-red-600 font-semibold text-md' onClick={handleDeleteProject.bind(this,item.id)}>{actionLoading?"deleting...":<FaTrash />}</button>
                        </td>
                    </tr>)
                    }
                </tbody>
            </table>
        </div>
    </>
  )
}
