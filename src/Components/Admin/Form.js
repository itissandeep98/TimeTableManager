import React, { Component } from 'react'
import { Form, FormGroup, Input, Label, Col, Row } from 'reactstrap'
import { Dropdown, Button } from 'semantic-ui-react'
import { days } from '../../shared/Days'
import { times } from '../../shared/Time'

export default class Formview extends Component {
	render() {
		return (
			<div className="container text-center">
				<Form>
					<FormGroup>
						<Label>Course Name</Label>
						<Input />
					</FormGroup>
					<Row>
						<Col>
							<FormGroup>
								<Label>Course Code</Label>
								<Input />
							</FormGroup>
						</Col>
						<Col>
							<FormGroup>
								<Label>Acronym</Label>
								<Input />
							</FormGroup>
						</Col>
					</Row>
					<h3>Slots</h3>
					<FormGroup>
						<Row>
							<Col>
								<Dropdown
									placeholder="Select Day"
									fluid  search openOnFocus
									clearable selection
									options={days}/>
							</Col>
							<Col>
								<Dropdown
									placeholder="Start Time"
									fluid search openOnFocus
									clearable selection
									options={times} />
							</Col>
							<Col>
								<Dropdown
									placeholder="End Time"
									fluid search openOnFocus
									clearable selection
									options={times} />
							</Col>
							<Col>
								<Button icon floated="right" disabled><span className="fa fa-times-circle" /> </Button>
							</Col>
						</Row>
					</FormGroup>
					<Button primary disabled> Add</Button>
				</Form>
			</div>
		)
	}
}
