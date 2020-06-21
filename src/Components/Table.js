import React, { Component } from 'react'
import { Table } from 'reactstrap'

export default class TableData extends Component {
	render() {
		var Courses = this.props.Courses;
		console.log(Courses);
		
		if (Courses) {
			var Courselist = Courses.map(course => {
				return (
					<tr key={course["Serial Number"]}>
						<td>{course["Course Name"]}</td>
						<td>{course["Prerequisites"]}</td>
						<td>{course["Course Code"]} </td>
						<td>{course["Professor"]} </td>
					</tr>
				)
			})
			return (
				<div className="container">
					<Table striped bordered hover responsive>
						<thead>
							<th>Course Name</th>
							<th>Prerequisites</th>
							<th>Course Code</th>
							<th>Professor</th>
						</thead>
						<tbody>
							{Courselist}
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
