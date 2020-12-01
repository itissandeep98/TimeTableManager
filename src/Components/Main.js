import React, { Component } from 'react'
import { connect } from 'react-redux'
import { dataFetchInfoFirebase, dataFetchScheduleFirebase, extraFetchFirebase } from '../store/ActionCreators'
import Plot from './TimeTable/Plot'
import { ImpLink } from './ImpLinks'
import { actions } from 'react-redux-form'
import Chat from './Chat'
import InfoTable from './InfoTable'
import { Divider } from 'semantic-ui-react'
import { firebaseAnalytics } from "../config/fire";

class Main extends Component {
	constructor(props) {
		super(props)
		this.state = {
			selctedCourse: []
		}
		this.addCourse = this.addCourse.bind(this)
	}

	async addCourse(value) {
		return await this.setState({
			...this.state.selctedCourse,
			selctedCourse: value
		});
	}

	componentDidMount() {
		this.props.fetchInfo()
		this.props.fetchSchedule()
		this.props.fetchExtra()
		firebaseAnalytics.logEvent("page_visited")
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

				<div className="container">
					<Divider horizontal>updated on 27 Aug 2020</Divider>
				</div>

				<Chat resetFeedbackform={this.props.resetFeedbackform} />

				<InfoTable
					selectedCourses={this.state.selctedCourse}
					info={this.props.info.info}
				/>

			</div>
		)
	}
}
const mapStateToProps = (state) => {  // Redux props
	return {
		schedule: state.schedule,
		info: state.info,
		extra: state.extra
	}
}
const mapDispatchToProps = (dispatch) => ({ // Redux functions
	resetFeedbackform: () => { dispatch(actions.reset('feedback')) },
	fetchInfo: () => dispatch(dataFetchInfoFirebase()),
	fetchSchedule: () => dispatch(dataFetchScheduleFirebase()),
	fetchExtra: () => dispatch(extraFetchFirebase()),

})

export default connect(mapStateToProps, mapDispatchToProps)(Main);