import React, { Component } from 'react'
import { Table } from 'reactstrap'
import Rows from './Rows';

export default class TableData extends Component {
	render() {
		var Courses = this.props.Courses.slice(1);	
		var headers = this.props.Courses[0]		
		if (Courses) {
			var rows = Courses.map(course => {
				return <Rows course={course}/>
				
			})

			var header = Object.keys(headers).map((field)=>{
				return <th>{field}</th>
			})
			return (
				<div className="text-center">
					<Table striped bordered hover responsive>
						<thead>
							{header}
						</thead>
						<tbody>
							{rows}
						</tbody>
					</Table>
				</div>
			)
		}
		else {
			return <h2> Try Uploading the database file<span className="fa fa-filter" /></h2>
		}
	}
}
