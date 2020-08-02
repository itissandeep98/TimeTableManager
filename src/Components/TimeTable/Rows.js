import React from 'react'
import { List } from 'semantic-ui-react'

export default function Rows({ day }) {

	var cols = day.map(slot => {
		return <td style={slot.length > 1 ? { background: "#eb4034" } : null} //check length of course in slot if greater than 1 then change its background and print the list
					className={slot.length > 0 ? "border" : null}
				>	
					{<List items={slot} />}
				</td>
	})
	return (
		<tr>
			{cols}
		</tr>
	)
}
