import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
	return (
		<footer className="bg-custom-secondary px-5 pt-5 pb-0">
		<div className="container">
			<div className="row">
			<div className="col-md-4 p-3">
				<h3 className="primary-text-color">FOOTER</h3>
				<p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
			</div>
			
			<div className="col-md-4 p-3">
				<h3 className="primary-text-color">BLOG POSTS</h3>
				<div className="footer-link">
				<a href="#">go somewhere</a>
				<a href="#">get something</a>
				<a href="#">find something</a>
				</div>
			</div>
		
			<div className="col-md-4 p-3">
				<h3 className="primary-text-color">POPULAR TAGS</h3>
				<p className="d-flex">
					<a href="https://www.facebook.com/mdminhaz.shahidulalam/about">
						<FontAwesomeIcon icon={faFacebookSquare} style={{height: '30px',color: ' #3B5998',margin: '10px'}} />
					</a>
					<a href="https://www.linkedin.com/in/minhaz-khan-aa0a0119a/">
						<FontAwesomeIcon icon={faLinkedin} style={{height: '30px',color: ' #0E76A8',margin: '10px'}} />
					</a>
				{/* <i className="fa fa-facebook m-3" style="font-size: 30px;color: #3b5998;" aria-hidden="true"></i>
				<i className="fa fa-twitter m-3 text-primary" style="font-size: 30px;" aria-hidden="true"></i>
				<i className="fa fa-youtube m-3 text-danger" style="font-size: 30px;" aria-hidden="true"></i> */}
				</p>
			</div>
		
			</div>  
		</div>
		<div className="bg-custom-primary p-3 text-center text-white mb-0">
			<p>&copy;copyright 2021. All Right Reserved</p>
		</div>  
	</footer>
	)
}
