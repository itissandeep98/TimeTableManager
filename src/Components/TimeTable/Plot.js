import React, { Component } from 'react'
import TableData from './Table'
import { Form, Dropdown } from 'semantic-ui-react'
import { Spinner } from 'reactstrap';

export default class Plot extends Component {
	constructor(props){
		super(props);
		var schedule = [
			["", "9:00-10:30", "10:30-12", "12:00-1:30", "1:30-2:30", "2:30-4:00", "4:00-5:30"],
			["Mon", "", "", "", "", "", "",],
			["Tue", "", "", "", "", "", "",],
			["Wed", "", "", "", "", "", "",],
			["Thu", "", "", "", "", "", "",],
			["Fri", "", "", "", "", "", "",]
		]	
		this.state={
			courses:[],
			schedule,
			file:"",
		}
		this.handleCourseChange=this.handleCourseChange.bind(this);
		this.updateSchedule=this.updateSchedule.bind(this);
	}

	updateSchedule(){
		var temp=this.state.schedule
		if (this.state.courses[this.state.courses.length - 1]){
			temp[1][1]=temp[1][1].concat(this.state.courses[this.state.courses.length-1])
			this.setState({
				schedule:temp
			})		
		}

		
	}

	handleCourseChange(event, result) {
		const { value } = result || event.target;
		this.setState({
			...this.state.courses,
			courses: value
		},()=>this.updateSchedule());
	}

	
	render() {
		var courselist=[
			{key:"loading", value:<Spinner/>, text:<Spinner/>, disabled:true}
		]
		if(this.props.courselist)
			courselist=this.props.courselist
		
		return (
			<div className="container">
				
				<Form>
					<Form.Field>
					<Dropdown placeholder="Select Courses" fluid multiple search openOnFocus clearable selection options={courselist} value={this.state.courses} onChange={this.handleCourseChange} />
					</Form.Field>
				</Form>
				<hr/>
				<TableData data={this.state.schedule} />
			</div>
		)
	}
}
