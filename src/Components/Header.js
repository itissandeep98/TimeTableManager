import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom';

const Header = () => { // main Header of the page
	return (
		<>
			<div className="container">
				<div className="row d-print-none">
					<div className="col">
						<img src={process.env.PUBLIC_URL + "/assets/images/IIIT-Delhi.png"} alt="IIIT-Delhi" className="img-fluid" />
					</div>
					<div className="col d-none d-lg-block" >
						<img src={process.env.PUBLIC_URL + "/assets/images/logo.png"} alt="logo" height={"80px"} className="float-right" />
					</div>
				</div>
			</div>
			<div className="navbar-dark  d-print-none">
				<div className="container">
					<Link to="/" >HOME</Link>
					<Link to="/ttpdf">TIMETABLE</Link>
					<a href="http://techtree.iiitd.edu.in/" target="_blank" rel="noopener noreferrer" >TECHTREE</a>
				</div>
			</div>
			<br />
		</>
	);
}


export default Header;