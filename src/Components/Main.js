import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
	dataFetchInfoFirebase,
	dataFetchScheduleFirebase,
} from '../store/ActionCreators';
import Plot from './TimeTable/Plot';
import { ImpLink } from './ImpLinks';
import Chat from './Chat';
import InfoTable from './InfoTable';
import { Divider } from 'semantic-ui-react';
import { firebaseAnalytics } from '../config/fire';
import { Container } from 'reactstrap';
import { useHistory } from 'react-router-dom';

function Main(props) {
	const [state, setState] = useState([]);
	const history = useHistory();

	const addCourse = value => {
		setState([...value]);

		window.history.replaceState(
			null,
			null,
			'?' + JSON.stringify(value).replaceAll('"', '')
		);
	};

	const updateState = () => {
		if (history.location.search.length > 1) {
			const courses = Array.from(
				new Set(
					JSON.parse(
						decodeURI(
							history.location.search
								.slice(1)
								.replaceAll(',', '","')
								.replaceAll('[', '["')
								.replaceAll(']', '"]')
						)
					)
				)
			);
			window.history.replaceState(
				null,
				null,
				'?' + JSON.stringify(courses).replaceAll('"', '')
			);
			setState(courses);
		}
	};
	useEffect(() => {
		if (!props.info.info) {
			props.fetchInfo();
			props.fetchSchedule();
			firebaseAnalytics.logEvent('page_visited');
		}
		updateState();
		//eslint-disable-next-line
	}, []);

	return (
		<div>
			{props.info.info && props.schedule.schedule && (
				<Plot
					selectedCourses={state}
					addCourse={addCourse}
					schedule={props.schedule.schedule}
					isLoading={props.info.isLoading}
					errmess={props.info.errmess}
					info={props.info.info}
				/>
			)}

			<ImpLink {...props.extra.links} />

			<Container>
				<Divider horizontal>
					updated on {props.extra.links.last_updated}
				</Divider>
			</Container>

			<Chat resetFeedbackform={props.resetFeedbackform} />
			<InfoTable selectedCourses={state} info={props.info.info} />
		</div>
	);
}

const mapStateToProps = state => ({
	schedule: state.schedule,
	info: state.info,
	extra: state.extra,
});
const mapDispatchToProps = dispatch => ({
	// Redux functions
	fetchInfo: () => dispatch(dataFetchInfoFirebase()),
	fetchSchedule: () => dispatch(dataFetchScheduleFirebase()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
