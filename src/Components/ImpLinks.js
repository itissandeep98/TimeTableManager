import React from 'react'
import { Divider } from 'semantic-ui-react';
import '../style.css'

export const ImpLink = () => { // Links to show in the bottom of table
	return (
		<div className="container d-print-none">
			<br/>
			<h2>Important Links</h2>
			<ul>
				<li>
					<a href="https://drive.google.com/drive/folders/1YqptkWKt6iKvoImkJYRlB_2yRH69K_D2" target="_blank" rel="noopener noreferrer">Course Descriptions</a>
				</li>
				{/* <li>
					<a href="https://docs.google.com/document/d/1v8EJcxPvXgtNYNFtnUjrvdiP3F5UZMM3vqw7HcDsN7A" target="_blank" rel="noopener noreferrer">Review of electives</a>
				</li> */}
				<li>
					Current Time Table <a href="https://iiitd.ac.in/academics/m2020" target="_blank" rel="noopener noreferrer">(Monsoon 2020)</a>
				</li>
			</ul>
			<Divider horizontal>updated on 19 Aug 2020</Divider>

		</div>
	);
}