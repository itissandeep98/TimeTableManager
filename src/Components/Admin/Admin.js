import React, { Component } from 'react'
import Dataview from './Dataview';
import Formview from './Form';

class Admin extends Component {

	componentDidMount(){
		document.title="Admin"
	}
	
	render() {
		return (
			<div className="constructor-fluid">
				<div className="row d-none d-md-flex">
					<div className="col-6">
						<Formview/>
					</div>
					<div className="col-6">
						<Dataview/>
					</div>
				</div>	
				<div className="container text-center d-md-none">
					<h1>This Page is not available for Small Screens</h1>
				</div>			
			</div>
		)
	}
}
export default Admin;
