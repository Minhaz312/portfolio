import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
	return (
		<div>
			<div className="w3-container w3-padding-large bg-custom-primary">
			<h4 className="py-3 mb-5 text-center primary-text-color" style={{borderBottom:'1px solid rgb(255,255,255,0.2)'}}><b>Contact Me</b></h4>
			<div className="row">
			<div className="col-md-4 p-3">
				<div className=" bg-custom-secondary p-2 rounded text-center primary-text-color">
				<p>
					<FontAwesomeIcon icon={faEnvelope} style={{height: '30px !important'}} />
				</p>
				<p className="primary-text-color">minhazkhan312@gmail.com</p>
				</div>
			</div>
			<div className="col-md-4 p-3">
				<div className=" bg-custom-secondary p-2 rounded text-center  primary-text-color">
				<p>
					<FontAwesomeIcon icon={faMapMarkerAlt} style={{height: '30px !important'}} />
				</p>
				<p className="primary-text-color">Chattogram, Bangladesh</p>
				</div>
			</div>
			<div className="col-md-4 p-3">
				<div className=" bg-custom-secondary p-2 rounded text-center primary-text-color">
				<p>
					<FontAwesomeIcon icon={faPhone} style={{height: '30px !important'}} />
				</p>
				<p className="primary-text-color">01997785142</p>
				</div>
			</div>
			</div>
			<hr />
			{/* <div className="w-100 container-sm">
			<form action="">
				<div className="form-group">
				<input type="text" placeholder="Name" className="bg-custom-secondary primary-text-color border-0 form-control my-4" />
				<input type="text" placeholder="Name" className="bg-custom-secondary primary-text-color border-0 form-control my-4" />
				<input type="text" placeholder="Name" className="bg-custom-secondary primary-text-color border-0 form-control my-4" />
				<input type="text" placeholder="Name" className="bg-custom-secondary primary-text-color border-0 form-control my-4" />
				<input type="submit" value="SEND MESSAGE" className="bg-custom-secondary primary-text-color btn px-5 mx-md-auto my-4" />
				</div>
			</form>
			</div> */}
		</div>

		</div>
	)
}
