import React from 'react'
import { Col } from 'react-bootstrap'
import { Row } from 'react-bootstrap'

export default function Charge() {
	return (
		<div>
			<h4 className="py-3 mb-5 text-center primary-text-color" style={{borderBottom: '1px solid rgb(255,255,255,0.2)'}}>How Much I Charge</h4>
			<Row>
				<Col lg={4} md={6}>
					<div className="bg-custom-secondary charge-card">
						<ul className="charge-card text-center">
							<li>Basic</li>
							<li>Web Design</li>
							<li>Photography</li>
							<li>1GB Storage</li>
							<li>Mail Support</li>
							<li>
							<h2>$ 10</h2>
							<span className="">per month</span>
							</li>
							<li className="">
							<button className="charge-button">Sign Up</button>
							</li>
						</ul>
					</div>
				</Col>
				<Col lg={4} md={6}>
					<div className="bg-custom-secondary charge-card">
						<ul className="charge-card text-center">
							<li>Basic</li>
							<li>Web Design</li>
							<li>Photography</li>
							<li>1GB Storage</li>
							<li>Mail Support</li>
							<li>
							<h2>$ 10</h2>
							<span className="">per month</span>
							</li>
							<li className="">
							<button className="charge-button">Sign Up</button>
							</li>
						</ul>
					</div>
				</Col>
				<Col lg={4} md={6}>
					<div className="bg-custom-secondary charge-card">
						<ul className="charge-card text-center">
							<li>Basic</li>
							<li>Web Design</li>
							<li>Photography</li>
							<li>1GB Storage</li>
							<li>Mail Support</li>
							<li>
							<h2>$ 10</h2>
							<span className="">per month</span>
							</li>
							<li className="">
							<button className="charge-button">Sign Up</button>
							</li>
						</ul>
					</div>
				</Col>
			</Row>
		</div>
	)
}
