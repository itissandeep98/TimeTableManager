import React from 'react'
import { Container } from 'reactstrap'

export function ImpLink(props) { // Links to show in the bottom of table
	return (
		<Container className="d-print-none implinks">
			<br />
			<h2>Important Links</h2>
			{props.offl_page &&
				<ul>
					<li>
						<a href={props.course_desc} target="_blank" rel="noopener noreferrer">Course Descriptions</a>
					</li>
					{/* <li>
					<a href="https://docs.google.com/document/d/1v8EJcxPvXgtNYNFtnUjrvdiP3F5UZMM3vqw7HcDsN7A" target="_blank" rel="noopener noreferrer">Review of electives</a>
				</li> */}
					<li>
						Current Time Table <a href={props.offl_page.link} target="_blank" rel="noopener noreferrer">({props.offl_page.sem})</a>
					</li>
				</ul>
			}
		</Container>
	);
}