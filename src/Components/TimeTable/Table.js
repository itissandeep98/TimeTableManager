import React, { Component } from 'react'
import Rows from './Rows';
import { Table } from 'reactstrap';

export default class TableData extends Component {
	render() {
		var data = this.props.data.slice(1);
		var headers = this.props.data[0]
		if (data) {
			var rows = data.map(day => {
				return <Rows day={day} />

			})

			var header = headers.map((field) => {
				return <th >{field}</th>
			})

			return (
				<div className="col-12 text-center">
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
