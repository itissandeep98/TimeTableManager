import React from 'react'

export default function Rows({day}) {
	
	var cols = Object.keys(day).map((slot) => {
		return <td style={Array.isArray(day[slot]) && day[slot].length>1 ?{background:"#eb4034"}:null}>{typeof day[slot] === 'string' ? day[slot]:
					<ul>
						{day[slot].map((course)=>{
							return <li>{course}</li>
						})}
					</ul>}
				</td>
	})	
	return (
		<tr>
			{cols}
		</tr>
	)
}
