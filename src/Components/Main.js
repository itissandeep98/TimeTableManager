import React, { Component } from 'react';
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

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selctedCourse: [],
		};
		this.addCourse = this.addCourse.bind(this);
	}

	async addCourse(value) {
		return await this.setState({
			...this.state.selctedCourse,
			selctedCourse: value,
		});
	}

	componentDidMount() {
		this.props.fetchInfo();
		this.props.fetchSchedule();
		firebaseAnalytics.logEvent('page_visited');
	}

	render() {
		return (
			<div>
				<Plot
					selectedCourses={this.state.selctedCourse}
					addCourse={this.addCourse}
					schedule={this.props.schedule.schedule}
					isLoading={this.props.info.isLoading}
					errmess={this.props.info.errmess}
					info={this.props.info.info}
				/>

				<ImpLink {...this.props.extra.links} />

				<Container>
					<Divider horizontal>
						updated on {this.props.extra.links.last_updated}
					</Divider>
				</Container>

				<Chat resetFeedbackform={this.props.resetFeedbackform} />

				<InfoTable
					selectedCourses={this.state.selctedCourse}
					info={this.props.info.info}
				/>
			</div>
		);
	}
}
const mapStateToProps = state => {
	// Redux props
	return {
		schedule: state.schedule,
		info: state.info,
		extra: state.extra,
	};
};
const mapDispatchToProps = dispatch => ({
	// Redux functions
	fetchInfo: () => dispatch(dataFetchInfoFirebase()),
	fetchSchedule: () => dispatch(dataFetchScheduleFirebase()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
