import React, { Component } from 'react'
import Rows from './Rows';
import { Table } from 'semantic-ui-react';

export default class TableData extends Component {
	render() {
		var data = this.props.data.slice(1);
		var headers = this.props.data[0]
		if (data) {
			var rows = data.map(course => {
				return <Rows course={course} />

			})

			var header = headers.map((field) => {
				return <Table.HeaderCell >{field}</Table.HeaderCell>
			})

			return (
				<div className="text-center">
					<Table celled striped definition selectable responsive>
						<Table.Header>
							{header}
						</Table.Header>
						<Table.Body>
							{rows}
						</Table.Body>
					</Table>
				</div>
			)
		}
		else {
			return <h2> Try Uploading the database file<span className="fa fa-filter" /></h2>
		}
	}
}
