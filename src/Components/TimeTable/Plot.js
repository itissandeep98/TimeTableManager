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
		this.findpos=this.findpos.bind(this);
	}

	findpos(course){
		var schedule=this.props.schedule;
		var pos=[]
		for (let i = 1; i <= 5; i++) {
			for (let j = 1; j <= 5; j++) {
				if(schedule[i.toString()][j.toString()].includes(course)){
					pos.push([i,j])
				}
			}
		}
		return pos

	}
	updateSchedule(){
		var temp = [
			["", "9:00-10:30", "10:30-12", "12:00-1:30", "1:30-2:30", "2:30-4:00", "4:00-5:30"],
			["Mon", "", "", "", "", "", "",],
			["Tue", "", "", "", "", "", "",],
			["Wed", "", "", "", "", "", "",],
			["Thu", "", "", "", "", "", "",],
			["Fri", "", "", "", "", "", "",]
		]
		
			for (let i = 0; i < this.state.courses.length; i++) {
				var allpos=this.findpos(this.state.courses[i])
				for (let pos = 0; pos < allpos.length; pos++) {
					temp[allpos[pos][0]][allpos[pos][1]] = temp[allpos[pos][0]][allpos[pos][1]].concat(this.state.courses[i])
				}
			}
			
			this.setState({
				schedule:temp
			})

		
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
			courselist=this.props.courselist["monsoon"]
		
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
