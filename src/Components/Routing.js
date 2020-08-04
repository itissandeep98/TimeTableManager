
import React from 'react'
import { withRouter, Switch, Route, Redirect } from 'react-router-dom'
import Main from "./Main";
import Admin from './Admin';
import Header from './Header'


function Routing() {
	return(
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={()=> <Main/>}/>
				<Route exact path="/admin" component={() => <Admin />} />
				<Redirect to="/" />
			</Switch>
		</div>
	)
	
}

export default withRouter(Routing);
