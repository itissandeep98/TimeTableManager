import React, { Component } from 'react'
import { Form, FormGroup, Input, Label, Col, Row } from 'reactstrap'
import { Dropdown, Button } from 'semantic-ui-react'
import { days } from '../../shared/Days'
import { times } from '../../shared/Time'
import Slots from './Slots'

export default class Formview extends Component {
	constructor(props){
		super(props)
		this.onChange=this.onChange.bind(this)
		this.addslot=this.addslot.bind(this)
		this.deleteSlot = this.deleteSlot.bind(this)

	}
	
	onChange(e){
		this.props.onCoursechange(e.target.name,e.target.value)
	}

	
	addslot(slot){
		var temp = this.props.course.slots.concat(slot)
		this.props.onCoursechange("slots", temp)
	}

	deleteSlot(event,key){
		event.preventDefault()
		const temp = this.props.course.slots.filter(s=>s.key!==key)
		this.props.onCoursechange("slots", temp)
	}


	render() {
		const course=this.props.course
		const allslots = course.slots.map(s => (
			<FormGroup key={s.key}> 
				<Row>
					<Col>
						<Dropdown
							placeholder="Select Day"
							fluid 
							options={days} 
							value={s.day}
							disabled
						/>
					</Col>
					<Col>
						<Dropdown
							placeholder="Start Time"
							fluid 
							options={times} 
							value={s.stime}
							disabled
							/>
					</Col>
					<Col>
						<Dropdown
							placeholder="End Time"
							fluid 
							options={times} 
							value={s.etime}
							disabled
							/>
					</Col>
					<Col sm={2}>
						<Button icon floated="right" color="red" onClick={(e)=>this.deleteSlot(e,s.key)}><span className="fa fa-times-circle" /> </Button>
					</Col>
				</Row>
			</FormGroup>)
		)
		return (
			<div className="container text-center">
				<Form>
					<FormGroup>
						<Label>Course Name</Label>
						<Input value={course.text} name="text" onChange={this.onChange}/>
					</FormGroup>
					<Row>
						<Col>
							<FormGroup>
								<Label>Course Code</Label>
								<Input value={course.code} name="code" onChange={this.onChange}/>
							</FormGroup>
						</Col>
						<Col>
							<FormGroup>
								<Label>Acronym</Label>
								<Input value={course.value} name="value" onChange={this.onChange}/>
							</FormGroup>
						</Col>
					</Row>
					<h3>Slots</h3>
					<Slots addslot={this.addslot} slots={course.slots}/>
					{allslots}
					<Button primary onClick={this.props.addCourse} > Add</Button>
				</Form>
			</div>
		)
	}
}
