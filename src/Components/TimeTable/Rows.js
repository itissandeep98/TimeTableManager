import React from 'react'
import { Table } from 'semantic-ui-react'

export default function Rows({course}) {
	var cols = Object.keys(course).map((field) => {
		return <Table.Cell >{course[field]}</Table.Cell>
	})	
	return (
		<Table.Row>
			{cols}
		</Table.Row>
	)
}
