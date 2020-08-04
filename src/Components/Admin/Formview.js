import React, { Component } from 'react'
import { Form, FormGroup, Input, Label, Col, Row } from 'reactstrap'
import { Dropdown, Button } from 'semantic-ui-react'
import { days } from '../../shared/Days'
import { times } from '../../shared/Time'
import Slots from './Slots'

export default class Formview extends Component {
	constructor(props){
		super(props)
		this.state={
			coursename:"",
			coursecode: "",
			acronym: "",
			slots:[]
		}
		this.onChange=this.onChange.bind(this)
		this.addslot=this.addslot.bind(this)
		this.deleteSlot = this.deleteSlot.bind(this)
		this.addCourse = this.addCourse.bind(this)

	}

	onChange(e){
		this.setState({
			[e.target.name]:e.target.value
		})

	}

	
	addslot(slot){
		var temp=this.state.slots.concat(slot)
		this.setState({
			slots:temp,
		})
	}

	deleteSlot(event,key){
		event.preventDefault()
		const temp=this.state.slots.filter(s=>s.key!==key)
		this.setState({
			slots:temp
		})
	}

	addCourse(event){
		event.preventDefault();
		const course={
			key:this.state.coursecode,
			value:this.state.coursename,
			acro:this.state.acronym,
			slots:this.state.slots
		}
		this.props.addCourse(course)
		this.setState({
			coursename: "",
			coursecode: "",
			acronym: "",
			slots: []
		})
	}

	render() {
		const allslots = this.state.slots.map(s => (
			<FormGroup key={s.key}> 
				<Row>
					<Col>
						<Dropdown
							placeholder="Select Day"
							fluid search openOnFocus
							clearable selection
							options={days} 
							value={s.day}
							disabled
						/>
					</Col>
					<Col>
						<Dropdown
							placeholder="Start Time"
							fluid search openOnFocus
							clearable selection
							options={times} 
							value={s.stime}
							disabled
							/>
					</Col>
					<Col>
						<Dropdown
							placeholder="End Time"
							fluid search openOnFocus
							clearable selection
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
						<Input value={this.state.coursename} name="coursename" onChange={this.onChange}/>
					</FormGroup>
					<Row>
						<Col>
							<FormGroup>
								<Label>Course Code</Label>
								<Input value={this.state.coursecode} name="coursecode" onChange={this.onChange}/>
							</FormGroup>
						</Col>
						<Col>
							<FormGroup>
								<Label>Acronym</Label>
								<Input value={this.state.acronym} name="acronym" onChange={this.onChange}/>
							</FormGroup>
						</Col>
					</Row>
					<h3>Slots</h3>
					<Slots addslot={this.addslot} slots={this.state.slots}/>
					{allslots}
					<Button primary onClick={this.addCourse} > Add</Button>
				</Form>
			</div>
		)
	}
}
