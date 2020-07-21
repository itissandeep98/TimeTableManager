import React from 'react'
import { List } from 'semantic-ui-react'

export default function Rows({day}) {
	
	var cols = day.map((slot) => {
		return <td 
					style={slot.length > 1 ? { background: "#eb4034" } : null} 
					className={slot.length > 0 ?"border":null}>
					{<List items={slot}/>}
				</td>
	})	
	return (
		<tr>
			{cols}
		</tr>
	)
}
