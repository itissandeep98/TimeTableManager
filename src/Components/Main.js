import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Switch, Route, Redirect } from 'react-router-dom'
import { courseFetchAction, scheduleFetchAction } from '../store/ActionCreators'
import Header from './Header'
import Plot from './TimeTable/Plot'

class Main extends Component {
	
	componentDidMount(){
		if(!this.props.courses)
			this.props.fetchCourse()
		if(!this.props.schedule)
			this.props.fetchScehdule()
	}
	render() {
	
		return (
			<div>
				<Header />
				<Switch>
					<Route path="/home" 
						component={() => <Plot 
											courselist={this.props.courses} 
											schedule={this.props.schedule}
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
		courses: state.courses.courses,
		schedule: state.schedule.schedule,
	}
}
const mapDispatchToProps = (dispatch) => ({
	fetchCourse: () => dispatch(courseFetchAction()),
	fetchScehdule: ()=>dispatch(scheduleFetchAction()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));