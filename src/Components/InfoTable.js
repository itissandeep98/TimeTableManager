import React, { Component } from 'react'
import { Table } from 'reactstrap'

export default class InfoTable extends Component {
	render() {
		const info=this.props.info
		if (this.props.selectedCourses.length===0){
			return<div/>
		}
		return (
			<div className="container text-center">
				<Table responsive className="border">
					<thead style={{ backgroundColor:"#a09e9e3b"}}>
						<tr>
							<td>Course Code</td>
							<td>Instructor</td>
							<td>Class Link</td>
							<td>Comments</td>
						</tr>
					</thead>
					<tbody>
						{this.props.selectedCourses.map(course=>(
							<tr>
								<td>{course}</td>
								<td>{info[course]["INST"]}</td>
								<td><a href={info[course]["LINK"]}>{info[course]["CLASS"]}</a></td>
								<td>{info[course]["DESC"]}</td>
							</tr>
						))}
					</tbody>

				</Table>
			</div>
		)
	}
}
