import React, { Component } from 'react'
import TableData from './Table'
import { Form, Dropdown, Input } from 'semantic-ui-react'
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
		this.onChange = this.onChange.bind(this);
	}
	updateSchedule(){
		var temp=this.state.schedule
		temp[1][1]=temp[1][1].concat(this.state.courses[this.state.courses.length-1])
		this.setState({
			schedule:temp
		})		
		
	}

	onChange(e) {
		this.setState({
			[e.target.id]: e.target.files[0]
		}, () => {
			var reader = new FileReader();
			reader.readAsText(this.state.file)
			reader.onloadend = () => {
				var json = this.csvJSON(reader.result);
				this.setState({
					timetable: json
				})

			}
		})

	}

	handleCourseChange(event, result) {
		const { value } = result || event.target;
		this.setState({
			...this.state.courses,
			courses: value
		},()=>this.updateSchedule());
	}

	csvJSON(csv) {

		var lines = csv.split("\n");

		var result = [];

		var headers = lines[0].split(",");

		for (var i = 0; i < lines.length; i++) {

			var obj = {};
			var currentline = lines[i].split(",");

			for (var j = 0; j < headers.length; j++) {
				currentline[j] = currentline[j].replace("\r","")
				obj[headers[j]] = currentline[j].split(" ");
			}
			result.push(obj);
		}
		return result;
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
						<Input type="file" id="file" onChange={this.onChange} />
					</Form.Field>
					<Form.Field>
					<Dropdown placeholder="Courses" fluid multiple search openOnFocus clearable selection options={courselist} value={this.state.courses} onChange={this.handleCourseChange} />
					</Form.Field>

				</Form>
				<hr/>
				<TableData data={this.state.schedule} />
			</div>
		)
	}
}
