import React, { Component } from 'react'
import Header from './Header'
import Display from './Table/Display'
import { withRouter, Switch, Route, Redirect } from 'react-router-dom'
import Plot from './TimeTable/Plot'

class Main extends Component {
	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route path="/home" component={() => <Display />} />
					<Route path="/plot" component={() => <Plot/>} />
					<Redirect to="/home" />
				</Switch>
			</div>
		)
	}
}

export default withRouter(Main);