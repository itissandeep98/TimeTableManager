import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';
import '../App.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
	const [isNavOpen, setIsNavOpen] = useState(false)
	return (
		<>
			<Navbar dark expand="md">
				<div className="container">
					<NavbarToggler onClick={()=>setIsNavOpen(!isNavOpen)} />
					<NavbarBrand className="mr-auto" href="/">Time Table Creator</NavbarBrand>
					<Collapse isOpen={isNavOpen} navbar>
						<Nav navbar>
							<NavItem>
								<NavLink className="nav-link" to='/home'><span className="fa fa-home fa-lg" /> Home</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</div>
			</Navbar>
			<hr />
		</>
	);
}


export default Header;