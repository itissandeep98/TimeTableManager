import React, { Component } from 'react'
import TableData from './Table'
import { Form, Dropdown, Checkbox, Segment } from 'semantic-ui-react'
import { Spinner, Button } from 'reactstrap';
import { baseSchedule } from '../../shared/Schedule'
import '../../App.css'

export default class Plot extends Component {
	constructor(props) {
		super(props);
		this.state = {
			courses: [],
			schedule: JSON.parse(JSON.stringify(baseSchedule)),
			season: false
		}
		this.handleCourseChange = this.handleCourseChange.bind(this);
		this.updateSchedule = this.updateSchedule.bind(this);
		this.findpos = this.findpos.bind(this);
	}

	findpos(course) {  // finds all the positions of a particular course in the schedule
		var schedule = this.props.schedule["monsoon"];
		if (this.state.season) {
			schedule = this.props.schedule["winter"]
		}
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
		var temp = JSON.parse(JSON.stringify(baseSchedule))

		for (let i = 0; i < this.state.courses.length; i++) {
			var allpos = this.findpos(this.state.courses[i]) //get all coordinates for a particular course
			for (let pos = 0; pos < allpos.length; pos++) { // update at all the coordinates
				var x = allpos[pos][0];
				var y = allpos[pos][1]
				temp[x][y].push(this.state.courses[i])
			}
		}
		this.setState({
			schedule: temp
		})
	}

	handleCourseChange(event, result) {   // To handle the changes in the courses list
		const { value } = result || event.target;
		this.setState({
			...this.state.courses,
			courses: value
		}, () => this.updateSchedule());
	}

	onChange() {  // to handle the change in the season toggle
		this.setState({
			season: !this.state.season,
			courses: []
		})
	}


	render() {
		var courselist = null;
		if (this.props.isLoading) { // Loading Icon in the List until data is fetched
			courselist = [
				{ key: "loading", value: <Spinner />, text: <Spinner />, disabled: true }
			]
		}
		else if (this.props.errmess) {  // Error message in the list if data could not be fetched
			courselist = [
				{ key: "error", value: this.props.errmess, text: this.props.errmess, disabled: true }
			]
		}

		else { // select data based on the the season toggle
			courselist = this.props.courses["monsoon"]
			if (this.state.season) {
				courselist = this.props.courses["winter"]
			}
		}
		return (
			<div className="container">
				<Button onClick={() => window.print()} className="d-print-none printbutton"> 
					<span className="fa fa-file"/> Print To pdf
				</Button>
				<br/><br/>
				<div className="row">
					<TableData data={this.state.schedule} />
				</div>

				<Segment className="d-print-none">
					<div className="text-center">

						<Form>
							<Form.Field inline>
								<label>Monsoon</label>
								<Checkbox slider disabled checked={this.state.season} onChange={this.onChange.bind(this)} />
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
