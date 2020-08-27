import React, { Component } from 'react'
import Rows from './Rows';
import { Table } from 'reactstrap';

export default class TableData extends Component {
	render() {
		var headers = this.props.data[0] // get the header from schedule
		var data = this.props.data.slice(1);  // get all data except the header

		if (data) {
			var rows = data.map(day => <Rows day={day} key={Math.random()} />)   // create all the rows


			var header = headers.map(field => <th key={field}>{field}</th>) // create the header of table


			return (
				<div className="col-12 text-center">
					<Table striped hover responsive className="border">
						<thead>
							<tr>
								{header}
							</tr>
						</thead>
						<tbody>
							{rows}
						</tbody>
						<thead>
							<tr>
								{header}
							</tr>
						</thead>
					</Table>
				</div>
			)
		}
		else {
			return <h2> Something Wrong happend<span className="fa fa-filter" /></h2>
		}
	}
}
