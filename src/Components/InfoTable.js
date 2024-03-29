import React from 'react';
import { Container, Table } from 'reactstrap';

function InfoTable(props) {
	const info = props.info;
	if (props.selectedCourses.length === 0) {
		return <div />;
	}

	const extractcode = code => code?.split('/')[0];

	return (
		<Container className="text-center">
			<Table responsive className="border">
				<thead style={{ backgroundColor: '#a09e9e3b' }}>
					<tr>
						<td>Course Code</td>
						<td>Instructor</td>
						<td>Venue</td>
						{/* <td>Class Link</td>
						<td>Comments</td> */}
					</tr>
				</thead>
				{info && (
					<tbody>
						{props.selectedCourses.map(
							(code, index) =>
								info[code] && (
									<tr key={index}>
										<td>
											<a
												href={
													'http://techtree.iiitd.edu.in/viewDescription/filename?=' +
													extractcode(info?.[code]?.code)
												}
												target="_blank"
												rel="noopener noreferrer">
												{info[code].code} - {code}
											</a>
										</td>
										<td>{info[code].inst}</td>
										<td>{info[code].desc}</td>
										{/* <td>
											<a
												href={info[code].link}
												target="_blank"
												rel="noopener noreferrer">
												{info[code].link}
											</a>
										</td>
										<td>{info[code].desc}</td> */}
									</tr>
								)
						)}
					</tbody>
				)}
			</Table>
		</Container>
	);
}

export default InfoTable;
