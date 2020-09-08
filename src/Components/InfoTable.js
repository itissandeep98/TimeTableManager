import React, { Component } from 'react'
import { Table } from 'reactstrap'

export default class InfoTable extends Component {
	render() {
		const info = this.props.info
		if (this.props.selectedCourses.length === 0) {
			return <div />
		}
		return (
			<div className="container text-center">
				<Table responsive className="border">
					<thead style={{ backgroundColor: "#a09e9e3b" }}>
						<tr>
							<td>Course Code</td>
							<td>Instructor</td>
							<td>Class Link</td>
							<td>Comments</td>
						</tr>
					</thead>
					<tbody>
						{this.props.selectedCourses.map(code => (
							<tr>
								<td>{code}</td>
								<td>{info[code].inst}</td>
								<td><a href={info[code].link} target="_blank" rel="noopener noreferrer">{info[code].link}</a></td>
								<td>{info[code].desc}</td>
							</tr>
						))}
					</tbody>

				</Table>
			</div>
		)
	}
}
