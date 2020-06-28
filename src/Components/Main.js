import React, { Component } from 'react'
import Header from './Header'
import { withRouter, Switch, Route, Redirect } from 'react-router-dom'
import Plot from './TimeTable/Plot'
import {courseFetchAction, scheduleFetchAction} from '../store/ActionCreators'
import { connect } from 'react-redux'

class Main extends Component {
	constructor(props) {
		super(props);
		this.collectCourse = this.collectCourse.bind(this);
	}

	collectCourse() {		
		if (!this.props.courses.courses) {
			this.props.fetchCourse()
		}
		if (!this.props.schedule.schedule) {
			this.props.fetchScehdule()
		}
	}

	render() {
		setInterval(this.collectCourse, 10000); //fetch course every 10 sec only if courses list or schedule is empty
		return (
			<div>
				<Header />
				<Switch>
					<Route path="/home" component={() => <Plot courselist={this.props.courses.courses} schedule={this.props.schedule.schedule}/>} />
					<Redirect to="/home" />
				</Switch>
			</div>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		courses: state.courses,
		schedule: state.schedule,
	}
}
const mapDispatchToProps = (dispatch) => ({
	fetchCourse: () => dispatch(courseFetchAction()),
	fetchScehdule: ()=>dispatch(scheduleFetchAction()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));