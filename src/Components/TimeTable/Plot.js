import React, { Component } from 'react'
import TableData from './Table'
import { Form, Dropdown, Checkbox, Segment } from 'semantic-ui-react'
import { Spinner } from 'reactstrap';

export default class Plot extends Component {
	constructor(props) {
		super(props);
		var schedule = [
			["", "9:00-10:30", "10:30-12", "12:00-1:30", "1:30-2:30", "2:30-4:00", "4:00-5:30"],
			["Mon", "", "", "", "L", "", "",],
			["Tue", "", "", "", "U", "", "",],
			["Wed", "", "", "", "N", "", "",],
			["Thu", "", "", "", "C", "", "",],
			["Fri", "", "", "", "H", "", "",]
		]
		this.state = {
			courses: [],
			schedule,
			season:false
		}
		this.handleCourseChange = this.handleCourseChange.bind(this);
		this.updateSchedule = this.updateSchedule.bind(this);
		this.findpos = this.findpos.bind(this);
	}

	findpos(course) {
		var schedule = this.props.schedule;
		var pos = []
		for (let i = 1; i <= 5; i++) {
			for (let j = 1; j <= 6; j++) {
				if (schedule[i.toString()][j.toString()].includes(course)) {
					pos.push([i, j])
				}
			}
		}
		return pos

	}
	updateSchedule() {
		var temp = [
			["", "9:00-10:30", "10:30-12", "12:00-1:30", "1:30-2:30", "2:30-4:00", "4:00-5:30"],
			["Mon", "", "", "", "L", "", "",],
			["Tue", "", "", "", "U", "", "",],
			["Wed", "", "", "", "N", "", "",],
			["Thu", "", "", "", "C", "", "",],
			["Fri", "", "", "", "H", "", "",]
		]

		for (let i = 0; i < this.state.courses.length; i++) {
			var allpos = this.findpos(this.state.courses[i]) //get all coordinates for a particular course
			for (let pos = 0; pos < allpos.length; pos++) { // update at all the coordinates
				var x = allpos[pos][0];
				var y = allpos[pos][1]
				temp[x][y] = temp[x][y].concat(this.state.courses[i])
				temp[x][y] = temp[x][y].concat(", ")
			}
		}

		this.setState({
			schedule: temp
		})
	}

	handleCourseChange(event, result) {
		const { value } = result || event.target;
		this.setState({
			...this.state.courses,
			courses: value
		}, () => this.updateSchedule());
	}

	onChange(){
		this.setState({
			season:!this.state.season,
			courses:[]
		})
	}


	render() {
		var courselist = [
			{ key: "loading", value: <Spinner />, text: <Spinner />, disabled: true }
		]
		if (this.props.courselist){
			courselist = this.props.courselist["monsoon"]
			if(this.state.season){
				courselist = this.props.courselist["winter"]
			}
		}
		return (
			<div className="container">

				<TableData data={this.state.schedule} />
				<hr />
				<Segment>
				<div className="text-center">
					
					<Form>
						<Form.Field inline>
							<label>Monsoon</label>
							<Checkbox slider checked={this.state.season} onChange={this.onChange.bind(this)}/>
							<label>Winter</label>
						</Form.Field>
					</Form>
					
				</div>

				<Dropdown
					placeholder="Select Courses"
					fluid multiple search openOnFocus
					clearable selection options={courselist}
					value={this.state.courses}
					onChange={this.handleCourseChange}
				/>
				</Segment>

			</div>
		)
	}
}
