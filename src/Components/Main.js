import React, { Component } from 'react'
import { connect } from 'react-redux'
import { dataFetchAction } from '../store/ActionCreators'
import Header from './Header'
import Plot from './TimeTable/Plot'
import Footer from './Footer'
import { ImpLink } from './ImpLinks'
import { actions } from 'react-redux-form'

class Main extends Component {

	componentDidMount() {
		this.props.fetchData()
	}

	render() {
		return (
			<div>
				<Header />
				<Plot
					courses={this.props.courses.courses}
					schedule={this.props.schedule}
					isLoading={this.props.courses.isLoading}
					errmess={this.props.courses.errmess}
				/>
				<ImpLink />
				<Footer resetFeedbackform={this.props.resetFeedbackform}/>
				<div className="text-center d-none d-md-block d-print-none">
					<embed src={process.env.PUBLIC_URL + "/assets/ttv6.pdf"} type="application/pdf" width="70%" height="800px" />
				</div>
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
	resetFeedbackform: () => { dispatch(actions.reset('feedback')) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);