import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom';

const Header = () => { // main Header of the page
	return (
		<>
			<div className="navbar-dark text-center d-print-none">
				<Link to="/"><h1 style={{color:"#fff"}}> Time Table Creator</h1></Link>
			</div>
			<br/>
		</>
	);
}


export default Header;