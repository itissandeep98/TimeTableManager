import React, { Component } from 'react'
import Header from './Header'
import { withRouter, Switch, Route, Redirect } from 'react-router-dom'
import Plot from './TimeTable/Plot'
import {courseFetchAction, scheduleFetchAction} from '../store/ActionCreators'
import { connect } from 'react-redux'

class Main extends Component {

	render() {
		this.props.fetchCourse()
		this.props.fetchScehdule()
		return (
			<div>
				<Header />
				<Switch>
					<Route path="/home" 
						component={() => <Plot 
											courselist={this.props.courses.courses} 
											schedule={this.props.schedule.schedule}
										/>}
					/>
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