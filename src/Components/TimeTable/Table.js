import React from 'react';
import Rows from './Rows';
import { Col, Table } from 'reactstrap';

function TableData(props) {
	var headers = props.data[0]; // get the header from schedule
	var data = props.data.slice(1); // get all data except the header

	if (data) {
		var rows = data.map((day, index) => (
			<Rows day={day} key={index} daynum={index} />
		)); // create all the rows

		var header = headers.map(field => <th key={field}>{field}</th>); // create the header of table

		return (
			<Col className="text-center">
				<Table striped hover responsive className="border">
					<thead>
						<tr>{header}</tr>
					</thead>
					<tbody>{rows}</tbody>
					<thead>
						<tr>{header}</tr>
					</thead>
				</Table>
			</Col>
		);
	} else {
		return (
			<h2>
				Something Wrong happend
				<span className="fa fa-filter" />
			</h2>
		);
	}
}

export default TableData;
