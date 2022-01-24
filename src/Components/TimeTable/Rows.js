import React from 'react';
import { connect } from 'react-redux';
import { List } from 'semantic-ui-react';

const days = ['MO', 'TU', 'WE', 'TH', 'FR'];
const Times = [
	'01/17/2022 8:30:00',
	'01/17/2022 10:00:00',
	'01/17/2022 11:30:00',
	'01/17/2022 01:00:00',
	'01/17/2022 01:30:00',
	'01/17/2022 03:00:00',
	'01/17/2022 04:30:00',
];
function Rows(props) {
	const info = props.info.info;
	const daynum = props.daynum;
	var cols = props.day.map((slot, index) => (
		<td
			style={slot.length > 1 ? { background: '#f5ae33' } : null} //check length of course in slot if greater than 1 then change its background and print the list
			className={slot.length > 0 ? 'border' : null}
			key={Math.random()}>
			<div className="d-flex flex-column">
				{slot.map((course, colind) =>
					index === 0 ? (
						course
					) : (
						<a
							href={`https://calendar.google.com/calendar/r/eventedit?text=${
								info[course]?.title
							}&dates=${getDateTime(Times[index - 1])[0]}Z/${
								getDateTime(Times[index - 1])[1]
							}Z&details=${
								info[course]?.link + ' ' + info[course]?.desc
							}&recur=RRULE:FREQ%3DWEEKLY;BYDAY%3D${
								days[daynum]
							};UNTIL%3D20220502T000000Z&sf=true`}
							target={'_blank'}
							rel="noreferrer">
							{course}
						</a>
					)
				)}
			</div>
		</td>
	));
	return <tr>{cols}</tr>;
}

const getDateTime = slot => {
	const a = new Date(slot);
	const b = new Date(a.getTime() + 90 * 60000);
	const start = a
		.toISOString()
		.replaceAll('-', '')
		.replaceAll(':', '')
		.replaceAll('.', '')
		.slice(0, -3);
	const end = b
		.toISOString()
		.replaceAll('-', '')
		.replaceAll(':', '')
		.replaceAll('.', '')
		.slice(0, -3);
	return [start, end];
};

const mapStateToProps = state => ({
	info: state.info,
});

export default connect(mapStateToProps)(Rows);
