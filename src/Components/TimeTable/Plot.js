import React, { Component } from 'react'
import TableData from './Table'
import { Form, Dropdown } from 'semantic-ui-react'
import { Spinner } from 'reactstrap';

export default class Plot extends Component {
	constructor(props){
		super(props);
		this.state={
			course:[]
		}
		this.handleCourseChange=this.handleCourseChange.bind(this);
	}

	handleCourseChange(event, result) {
		const { value } = result || event.target;
		this.setState({
			...this.state.courses,
			courses: value
		});
	}
	
	render() {
		var schedule = [
			["", "9:00-10:30", "10:30-12", "12:00-1:30", "1:30-2:30", "2:30-4:00", "4:00-5:30"],
			["Mon", "", "", "", "", "", "",],
			["Tue", "", "", "", "", "", "",],
			["Wed", "", "", "", "", "", "",],
			["Thu", "", "", "", "", "", "",],
			["Fri", "", "", "", "", "", "",]
		]
		var courselist=[
			{key:"loading", value:<Spinner/>, text:<Spinner/>, disabled:"true"}
		]
		
		return (
			<div className="container">
				
				<Form>
					<Dropdown placeholder="Courses" fluid multiple search openOnFocus clearable selection options={courselist} value={this.state.courses} onChange={this.handleCourseChange} />
				</Form>
				<hr/>
				<TableData data={schedule} />
			</div>
		)
	}
}
