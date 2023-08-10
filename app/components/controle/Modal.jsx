import React from 'react'
import {IoMdClose} from "react-icons/io"
export default function Modal({children,loading=false,show=false,footer=true,title="Modal Title",onAction=()=>{},onHide=()=>{},className="bg-white",btnTitle="add"}) {
  return (
    <div className={`bg-black/30 fixed backdrop-blur-[5px] left-0 top-0 bottom-0 right-0 z-[10000] h-full w-full flex justify-center items-center ${show?"block":"hidden"}`}>
        <div className={`min-h-[200px] min-w-[450px] max-w-[90%] sm:w-auto w-[90%] animate-zoomIn p-3 flex flex-col justify-around ${className} text-slate-200 bg-slate-900 md:max-w-[60%] sm:max-w-[70%]`}>
            <div className='flex justify-between items-center mb-5'>
                <h3 className='text-xl'>{title}</h3>
                <button onClick={onHide}><IoMdClose size={30} /></button>
            </div>
            {children}
            <div className={`${footer?"flex":"hidden"} justify-end mt-5`}>
                <button className='px-3 py-2 bg-slate-900 text-white font-semibold rounded mr-2' onClick={onHide}>close</button>
                <button onClick={onAction} className='px-3 py-2 bg-green-900 text-white font-semibold rounded'>{btnTitle}{loading?"ing...":""}</button>
            </div>
        </div>
    </div>
  )
}
