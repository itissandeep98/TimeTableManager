import React from 'react'
import { Table } from 'semantic-ui-react'

export default function Rows({course}) {
	var cols = Object.keys(course).map((field) => {
		return <td >{course[field]}</td>
	})	
	return (
		<tr>
			{cols}
		</tr>
	)
}
