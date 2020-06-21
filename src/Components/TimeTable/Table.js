import React, { Component } from 'react'
import { Table } from 'reactstrap'
import Rows from './Rows';

export default class TableData extends Component {
	render() {
		var data = this.props.data.slice(1);
		var headers = this.props.data[0]
		if (data) {
			var rows = data.map(course => {
				return <Rows course={course} />

			})

			var header = headers.map((field) => {
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
