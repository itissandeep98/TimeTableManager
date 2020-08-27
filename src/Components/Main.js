import React, { Component } from 'react'
import { connect } from 'react-redux'
import { dataFetchInfoFirebase, dataFetchScheduleFirebase } from '../store/ActionCreators'
import Plot from './TimeTable/Plot'
import { ImpLink } from './ImpLinks'
import { actions } from 'react-redux-form'
import Chat from './Chat'
import InfoTable from './InfoTable'

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
				<ImpLink />
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
		info: state.info
	}
}
const mapDispatchToProps = (dispatch) => ({ // Redux functions
	resetFeedbackform: () => { dispatch(actions.reset('feedback')) },
	fetchInfo: () => dispatch(dataFetchInfoFirebase()),
	fetchSchedule: () => dispatch(dataFetchScheduleFirebase())

})

export default connect(mapStateToProps, mapDispatchToProps)(Main);