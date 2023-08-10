import React from 'react'
import {IoMdClose} from "react-icons/io"
export default function Modal({children,show=false,footer=true,title="Modal Title",onHide=()=>{},className="bg-white",btnTitle="add"}) {
  return (
  <dialog className="modal">
    <form method="dialog" className="modal-box">
      <h3 className="font-bold text-lg">Hello!</h3>
      <p className="py-4">Press ESC key or click the button below to close</p>
      <div className="modal-action">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </div>
    </form>
  </dialog>
  )
}
