import React from 'react'
import { Col, Row } from 'react-bootstrap'


export default function Projects() {
	return (
		<div>
			<h4 className="py-3 mb-5 text-center primary-text-color" style={{borderBottom: '1px solid rgb(255,255,255,0.2)'}}>My Projects</h4>
			<Row>
				<Col lg={4} md={6}>
					<div className="project-card">
						<img src="/images/ecomm-backend.PNG" style={{width: '100%',height: '300px'}} />
						<div className="project-details" style={{color: '#e4f0fc !important'}}>
							<p style={{color: '#00d6d8 !important'}}><b>Lorem Ipsum</b></p>
							<p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
							<a href="#" className="btn bg-custom-lightPrimary text-dark font-weight-bold my-3 btn-sm">Details</a>
						</div>
					</div>
				</Col>
				<Col lg={4} md={6}>
					<div className="project-card">
						<img src="/images/ecomm-backend.PNG" style={{width: '100%',height: '300px'}} />
						<div className="project-details" style={{color: '#e4f0fc !important'}}>
							<p style={{color: '#00d6d8 !important'}}><b>Lorem Ipsum</b></p>
							<p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
							<a href="#" className="btn bg-custom-lightPrimary text-dark font-weight-bold my-3 btn-sm">Details</a>
						</div>
					</div>
				</Col>
				<Col lg={4} md={6}>
					<div className="project-card">
						<img src="/images/ecomm-backend.PNG" style={{width: '100%',height: '300px'}} />
						<div className="project-details" style={{color: '#e4f0fc !important'}}>
							<p style={{color: '#00d6d8 !important'}}><b>Lorem Ipsum</b></p>
							<p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
							<a href="#" className="btn bg-custom-lightPrimary text-dark font-weight-bold my-3 btn-sm">Details</a>
						</div>
					</div>
				</Col>
			</Row>
		</div>
	)
}
