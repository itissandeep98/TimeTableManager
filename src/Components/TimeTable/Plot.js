import React, { Component } from 'react'
import TableData from './Table'
import { Form, Dropdown, Checkbox, Segment } from 'semantic-ui-react'
import { Spinner } from 'reactstrap';

export default class Plot extends Component {
	constructor(props) {
		super(props);
		var schedule = [
			[[], ["9:00-10:30"], ["10:30-12"], ["12:00-1:30"], ["1:30-2:30"],[ "2:30-4:00"], ["4:00-5:30"]],
			[["Mon"], [], [], [], [], [], [],],
			[["Tue"], [], [], [], [], [], [],],
			[["Wed"], [], [], [], [], [], [],],
			[["Thu"], [], [], [], [], [], [],],
			[["Fri"], [], [], [], [], [], [],]
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
		var schedule = this.props.schedule["monsoon"];
		if(this.state.season){
			schedule=this.props.schedule["winter"]
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
		var temp = [
			[[], ["9:00-10:30"], ["10:30-12"], ["12:00-1:30"], ["1:30-2:30"],[ "2:30-4:00"], ["4:00-5:30"]],
			[["Mon"], [], [], [], [], [], [],],
			[["Tue"], [], [], [], [], [], [],],
			[["Wed"], [], [], [], [], [], [],],
			[["Thu"], [], [], [], [], [], [],],
			[["Fri"], [], [], [], [], [], [],]
		]

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
		var courselist = null;
		if (this.props.isLoading){
			courselist = [
				{ key: "loading", value: <Spinner />, text: <Spinner />, disabled: true }
			]
		}
		else if (this.props.errmess){
			courselist = [
				{ key: "error", value: this.props.errmess, text: this.props.errmess, disabled: true }
			]
		}

		else{
			courselist = this.props.courses["monsoon"]
			if(this.state.season){
				courselist = this.props.courses["winter"]
			}
		}
		return (
			<div className="container">
				{/* <div className="row ">
					<div className="col-2">
					<Button onClick={()=>{window.print()}}> Print</Button>
					</div>
				</div> */}
				<div className="row">
					<TableData data={this.state.schedule} />
				</div>

				<hr />
				<Segment>
				<div className="text-center">
					
					<Form>
						<Form.Field inline>
							<label>Monsoon</label>
							<Checkbox slider disabled checked={this.state.season} onChange={this.onChange.bind(this)}/>
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
