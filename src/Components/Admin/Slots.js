import React, { Component } from 'react'
import { FormGroup, Row, Col } from 'reactstrap';
import { Dropdown, Button } from 'semantic-ui-react';
import { days } from '../../shared/Days';
import { times } from '../../shared/Time';

export default class Slots extends Component {
	constructor(props) {
		super(props)
		this.state = {
			day: "",
			stime: "",
			etime: "",
		}
		this.onSlotChange = this.onSlotChange.bind(this)
		this.addslot = this.addslot.bind(this)
	}

	onSlotChange(event, result) {
		const { value } = result || event.target;
		this.setState({
			[result.name]: value
		})
	}

	addslot(e) {
		e.preventDefault()
		let key = 1;
		const slots=this.props.slots
		if (slots.length > 0)
			key = slots[slots.length - 1].key + 1
		const slot = {
			key: key,
			day: this.state.day,
			stime: this.state.stime,
			etime: this.state.etime
		}
		
		this.props.addslot(slot)
		this.setState({
			day: "",
			stime: "",
			etime: ""
		})
	}


	render() {
		return (
			<FormGroup>
				<Row>
					<Col>
						<Dropdown
							placeholder="Select Day"
							fluid search openOnFocus
							clearable selection
							options={days}
							value={this.state.day}
							onChange={this.onSlotChange}
							name="day"
						/>
					</Col>
					<Col>
						<Dropdown
							placeholder="Start Time"
							fluid search openOnFocus
							clearable selection
							options={times}
							value={this.state.stime}
							onChange={this.onSlotChange}
							name="stime"
							disabled={this.state.day === ""}
						/>
					</Col>
					<Col>
						<Dropdown
							placeholder="End Time"
							fluid search openOnFocus
							clearable selection
							options={times}
							value={this.state.etime}
							onChange={this.onSlotChange}
							name="etime"
							disabled={this.state.day === "" || this.state.stime === ""}
						/>
					</Col>
					<Col sm={2}>
						<Button icon floated="right" color="green" onClick={this.addslot} disabled={this.state.day === "" || this.state.stime === "" || this.state.etime === ""}><span className="fa fa-check" /> </Button>
					</Col>
				</Row>
			</FormGroup>
		)
	}
}
