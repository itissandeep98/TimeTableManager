import React, { Component } from 'react'
import Header from './Header'
import { withRouter, Switch, Route, Redirect } from 'react-router-dom'
import Plot from './TimeTable/Plot'
import {courseFetchAction} from '../store/ActionCreators'
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
	}

	render() {
		setInterval(this.collectCourse, 60000); //fetch course every 1 min only if courses list is empty
		return (
			<div>
				<Header />
				<Switch>
					<Route path="/home" component={() => <Plot courselist={this.props.courses.courses}/>} />
					<Redirect to="/home" />
				</Switch>
			</div>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		courses: state.courses,
	}
}
const mapDispatchToProps = (dispatch) => ({
	fetchCourse: () => dispatch(courseFetchAction()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));