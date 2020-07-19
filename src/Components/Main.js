import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Switch, Route, Redirect } from 'react-router-dom'
import { dataFetchAction } from '../store/ActionCreators'
import Header from './Header'
import Plot from './TimeTable/Plot'
import Footer from './Footer'

class Main extends Component {
	
	componentDidMount(){
		this.props.fetchData()
	}
	
	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route path="/home" 
						component={() => <Plot 
											courses={this.props.courses.courses} 
											schedule={this.props.schedule}
											isLoading={this.props.courses.isLoading}
											errmess={this.props.courses.errmess}
										/>}
					/>
					<Redirect to="/home" />
				</Switch>
				<Footer/>
			</div>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		courses: state.courses,
		schedule: state.schedule.schedule,
	}
}
const mapDispatchToProps = (dispatch) => ({
	fetchData: () => dispatch(dataFetchAction()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));