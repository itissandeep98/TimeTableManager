import React from 'react'
import { List } from 'semantic-ui-react'

export default function Rows({day}) {
	
	var cols = Object.keys(day).map((slot) => {
		return <td 
					style={day[slot].length > 1 ? { background: "#eb4034" } : null} 
					className={day[slot].length > 0 ?"border":null}>
					{<List items={day[slot]}/>}
				</td>
	})	
	return (
		<tr>
			{cols}
		</tr>
	)
}
