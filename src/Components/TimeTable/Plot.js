import React, { Component } from 'react'
import TableData from './Table'
import { Dropdown, Segment } from 'semantic-ui-react'
import { Spinner, Button } from 'reactstrap';
import { baseSchedule } from '../../shared/Schedule'
import '../../App.css'
import { firebaseAnalytics } from '../../config/fire';

export default class Plot extends Component {
	constructor(props) {
		super(props);
		this.state = {
			schedule: JSON.parse(JSON.stringify(baseSchedule)),
		}
		this.handleCourseChange = this.handleCourseChange.bind(this);
		this.updateSchedule = this.updateSchedule.bind(this);
		this.findpos = this.findpos.bind(this);
	}

	findpos(course) {  // finds all the positions of a particular course in the schedule
		var schedule = this.props.schedule["monsoon"];

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

		for (let i = 0; i < this.props.selectedCourses.length; i++) {
			var allpos = this.findpos(this.props.selectedCourses[i]) //get all coordinates for a particular course
			for (let pos = 0; pos < allpos.length; pos++) { // update at all the coordinates
				var x = allpos[pos][0];
				var y = allpos[pos][1]
				temp[x][y].push(this.props.selectedCourses[i])
			}
		}
		this.setState({
			schedule: temp
		})
	}

	handleCourseChange(event, result) {   // To handle the changes in the courses list
		const { value } = result || event.target;
		this.props.addCourse(value).then(e => this.updateSchedule())
	}

	print() {
		for (let i = 0; i < this.props.selectedCourses.length; i++) {
			firebaseAnalytics.logEvent(this.props.selectedCourses[i])
		}
		window.print()
	}

	render() {
		var courselist = null;
		if (this.props.isLoading) { // Loading Icon in the List until data is fetched
			courselist = [
				{ key: "loading", value: "loading", text: <Spinner />, disabled: true }
			]
		}
		else if (this.props.errmess) {  // Error message in the list if data could not be fetched
			courselist = [
				{ key: "error", value: this.props.errmess, text: this.props.errmess, onClick: () => window.location.reload() }
			]
		}

		else {
			courselist = Object.keys(this.props.info).map(acro => {
				const temp = {
					key: this.props.info[acro].id,
					text: this.props.info[acro].title + " - " + this.props.info[acro].code + " - " + acro,
					value: acro,
				}
				return temp
			})
		}

		return (
			<div className="container">
				<Button onClick={(e) => this.print()} className="d-print-none printbutton">
					<span className="fa fa-file" /> Print To pdf
				</Button>
				<br /><br />
				<div className="row">
					<TableData data={this.state.schedule} />
				</div>

				<Segment className="d-print-none">
					<Dropdown
						placeholder="Select Courses"
						fluid multiple search openOnFocus clearable selection
						options={courselist}
						value={this.props.selectedCourses}
						onChange={this.handleCourseChange}

					/>
				</Segment>
			</div>
		)
	}
}
