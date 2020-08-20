import React, { Component } from 'react'
import { connect } from 'react-redux'
import { dataFetchAction } from '../store/ActionCreators'
import Plot from './TimeTable/Plot'
import { ImpLink } from './ImpLinks'
import { actions } from 'react-redux-form'

import Chat from './Chat'
import InfoTable from './InfoTable'

class Main extends Component {
	constructor(props){
		super(props)
		this.state={
			selctedCourse:[]
		}
		this.addCourse=this.addCourse.bind(this)
	}

	async addCourse(value){
		return await this.setState({
			...this.state.selctedCourse,
			selctedCourse: value
		});
	}

	componentDidMount() {
		this.props.fetchData() // fetch all the data when the webpage is loaded
	}

	render() {
		return (
			<div>
				
				<Plot
					selectedCourses={this.state.selctedCourse}
					addCourse={this.addCourse}
					courses={this.props.courses.courses}
					schedule={this.props.schedule.schedule}
					isLoading={this.props.courses.isLoading}
					errmess={this.props.courses.errmess}
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
		courses: state.courses,
		schedule: state.schedule,
		info:state.info
	}
}
const mapDispatchToProps = (dispatch) => ({ // redux functions
	fetchData: () => dispatch(dataFetchAction()),
	resetFeedbackform: () => { dispatch(actions.reset('feedback')) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);