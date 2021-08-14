import React, { useEffect, useState } from 'react';
import TableData from './Table';
import { Dropdown, Segment } from 'semantic-ui-react';
import { Spinner, Button, Container, Row } from 'reactstrap';
import { baseSchedule } from '../../shared/Schedule';
import '../../App.css';

function Plot(props) {
	const [state, setState] = useState(JSON.parse(JSON.stringify(baseSchedule)));

	useEffect(() => {
		updateSchedule();
	}, [props.selectedCourses]);

	const findpos = course => {
		// finds all the positions of a particular course in the schedule
		var schedule = props.schedule['monsoon'];

		var pos = [];
		for (let i = 1; i <= 5; i++) {
			for (let j = 1; j <= 6; j++) {
				if (schedule[i.toString()][j.toString()].includes(course)) {
					pos.push([i, j]);
				}
			}
		}
		return pos;
	};

	const updateSchedule = () => {
		var temp = JSON.parse(JSON.stringify(baseSchedule));

		for (let i = 0; i < props.selectedCourses.length; i++) {
			var allpos = findpos(props.selectedCourses[i]); //get all coordinates for a particular course
			for (let pos = 0; pos < allpos.length; pos++) {
				// update at all the coordinates
				var x = allpos[pos][0];
				var y = allpos[pos][1];
				temp[x][y].push(props.selectedCourses[i]);
			}
		}
		setState(temp);
	};

	const handleCourseChange = (event, result) => {
		// To handle the changes in the courses list
		var { value } = result || event.target;
		value = value.filter(course => props.info[course]);

		props.addCourse(value);
	};

	const share = () => {
		if (navigator.share) {
			navigator
				.share({
					title: 'Time Table Manager',
					text: 'My Selected courses',
					url: window.location.href,
				})
				.catch(console.error);
		} else {
			navigator.clipboard.writeText(`${window.location.href}`);
		}
	};

	var courselist = null;
	if (props.isLoading) {
		// Loading Icon in the List until data is fetched
		courselist = [
			{ key: 'loading', value: 'loading', text: <Spinner />, disabled: true },
		];
	} else if (props.errmess) {
		// Error message in the list if data could not be fetched
		courselist = [
			{
				key: 'error',
				value: props.errmess,
				text: props.errmess,
				onClick: () => window.location.reload(),
			},
		];
	} else {
		courselist = Object.keys(props.info).map(acro => {
			const temp = {
				key: props.info[acro].id,
				text:
					props.info[acro].title + ' - ' + props.info[acro].code + ' - ' + acro,
				value: acro,
			};
			return temp;
		});
	}
	return (
		<Container>
			<Button
				onClick={e => window.print()}
				className="d-print-none printbutton rounded-pill mr-1 shadow">
				<span className="fa fa-file" /> Print
			</Button>
			<Button
				onClick={e => share()}
				className="d-print-none printbutton rounded-pill shadow">
				<span className="fa fa-share" /> Copy Url
			</Button>
			<div className="float-right d-print-none">
				<a
					href="https://github.com/itissandeep98/TimeTableManager"
					target="_blank"
					rel="noopener noreferrer"
					style={{ color: 'inherit' }}>
					<span className="fa  fa-github fa-3x" />
				</a>
			</div>
			<br />
			<br />
			<Row>
				<TableData data={state} />
			</Row>

			<Segment className="d-print-none">
				<Dropdown
					placeholder="Select Courses"
					fluid
					multiple
					defaultOpen
					search
					openOnFocus
					clearable
					selection
					options={courselist}
					value={props.selectedCourses}
					onChange={handleCourseChange}
				/>
			</Segment>
		</Container>
	);
}

export default Plot;
