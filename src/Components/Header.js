import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

const Header = () => {
	// main Header of the page
	return (
		<>
			<Container>
				<Row className="row d-print-none">
					<Col>
						<img
							src={process.env.PUBLIC_URL + '/assets/images/IIIT-Delhi.png'}
							alt="IIIT-Delhi"
							className="img-fluid"
						/>
					</Col>
					<Col className="d-none d-lg-block">
						<img
							src={process.env.PUBLIC_URL + '/assets/images/logo.png'}
							alt="logo"
							height={'80px'}
							className="float-right"
						/>
					</Col>
				</Row>
			</Container>
			<div className="navbar-dark  d-print-none">
				<Container>
					<Link to="/">HOME</Link>
					<Link to="/ttpdf">TIMETABLE</Link>
					<a
						href="http://techtree.iiitd.edu.in/"
						target="_blank"
						rel="noopener noreferrer">
						TECHTREE
					</a>
				</Container>
			</div>
			<br />
		</>
	);
};

export default Header;
