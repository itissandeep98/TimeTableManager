import React from 'react'

export default function Rows({course}) {
	var cols = Object.keys(course).map((field) => {
		return <td>{course[field]}</td>
	})	
	return (
		<tr key={course[Object.keys(course)[0]]}>
			{cols}
		</tr>
	)
}
