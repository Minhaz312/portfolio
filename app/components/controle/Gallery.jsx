"use client"
import { formHeader, jsonHeader } from '@/helpers/header'
import axios from 'axios'
import copy from 'copy-to-clipboard'
import React, { useEffect, useState } from 'react'
import { BiSolidFilePdf } from 'react-icons/bi'
import { FaTrash } from 'react-icons/fa'
import { FcFolder } from 'react-icons/fc'
import { MdContentCopy } from 'react-icons/md'
const FileRender = ({file}) => {
    const extension = file.split(".")[1];
    if(extension===undefined){
        return <FcFolder size={50} />
    }else if(extension==="pdf"){
        return (
            <BiSolidFilePdf className='w-full h-[50px]' color='#ffffff' />
        )
    }else {
        return <img src={`/storage/${file}`} className='w-full h-[50px]' />
    }
}
export default function Gallery() {
    const [loading,setLoading] = useState(true)
    const [actionLoading, setActionLoading] = useState(false)
    const [galleryList, setGalleryList] = useState([])
    const getAllGalleryItem = () => {
        setLoading(true);
        axios.get("/api/gallery/get",jsonHeader).then(res=>{
            if(res.status === 200 && res.data.success===true) {
                let list = []
                res.data.data.map(item=>{
                    if(item.split(".")[1]!==undefined){
                        list.push(item)
                    }
                })
                setGalleryList(list);
            }
            setLoading(false)
        }).catch(err=>{
            console.log(err)
            setLoading(false)
            setGalleryList(null)
        })
    }

    const handleUploadGalleryItem = e => {
        let file = e.target.files[0];
        if(file){
            const reader = new FileReader()
            reader.onload = e =>{
                file = e.target.result
            }
            reader.readAsArrayBuffer(file);
            console.log("file type: ",typeof file)
            const formData = new FormData();
            formData.append("file",file);
            setActionLoading(true)
            axios.post("/api/gallery/add",formData,formHeader).then(res=>{
                if(res.status===200 && res.data.success === true) {
                    getAllGalleryItem()
                }else{
                    alert("Failed to upload")
                }
                setActionLoading(false)
                console.log(res)
            }).catch(err=>{
                console.log(err)
                setActionLoading(false)
                alert("Failed to upload",err.message)
            })
        }else{
            alert("Please select a file!")
        }
    }
    const handleDeleteGalleryItem = name => {
        axios.delete(`/api/gallery/delete/${name}`,jsonHeader).then(res=>{
            if(res.status===200 && res.data.success === true) {
                getAllGalleryItem()
                alert("deleted successfully")
            }else{
                alert("Failed to delete")
            }
            console.log(res)
        }).catch(err=>{
            console.log(err)
            alert("Failed to upload",err.message)
        })
    }

    useEffect(()=>{
        getAllGalleryItem()
    },[])

  if(loading){
    return (
        <div className='bg-slate-900 my-5 p-3 rounded shadow shadow-slate-500'>
            <div className='flex justify-between items-center my-3 border-b border-b-slate-600 mb-3 pb-3'>
                <h1 className='text-2xl'>Gallery</h1>
                <label>
                    <input type='file' hidden onChange={handleUploadGalleryItem} />
                    <button className='px-3 py-2 text-sm font-semibold text-white bg-green-800 hover:bg-green-900 rounded-md'>upload</button>
                </label>
            </div>
            <div className='grid grid-cols-12 gap-3 animate-pulse'>
                {
                    [1,2,3,4,5,6,7,8,9,10,11,12].map((item,i)=><div key={i} className='bg-slate-700 xl:col-span-2 lg:col-span-3 md:col-span-3 sm:col-span-4 col-span-6 object-cover py-3 rounded-md h-[160px] w-full'></div>)
                }
            </div>
        </div>
    )
  }
  if(galleryList===null){
    return <div>
        <h3>Failed to load gallery</h3>
    </div>
  }
  
  return (
    <div className='bg-slate-900 my-5 p-3 rounded shadow shadow-slate-500'>
        <div className='flex justify-between items-center my-3 border-b border-b-slate-600 mb-3 pb-3'>
            <h1 className='text-2xl'>Gallery</h1>
            <label className='cursor-pointer px-3 py-2 text-sm font-semibold text-white bg-green-800 hover:bg-green-900 rounded-md'>
                <input type='file' className='hidden absolute bg-transparent w-full h-full' onChange={handleUploadGalleryItem} />
                <span>{actionLoading?"uploading...":"upload"}</span>
            </label>
        </div>
        <div className='grid xl:grid-cols-8 grid-cols-12 gap-3'>
            {
                galleryList.map((item,i)=><div key={i} className='bg-slate-700 hover:bg-slate-600 xl:col-span-1 lg:col-span-3 md:col-span-3 sm:col-span-4 col-span-6 object-cover py-3 rounded-md'>
                    <FileRender file={item} />
                    {/* <p className='text-[12px] text-white mt-3 text-center'>{item}</p> */}
                    <div className='flex justify-between items-center mt-3'>
                        <button onClick={handleDeleteGalleryItem.bind(this,item)} className='px-3 py-1 text-red-400 rounded-md font-semibold text-sm'><FaTrash /></button>
                        <button onClick={()=>copy(item)} className='px-3 py-1 text-white-200 rounded-md font-semibold text-sm'><MdContentCopy /></button>
                    </div>
                </div>)
            }
        </div>
    </div>
  )
}
