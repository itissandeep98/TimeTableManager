import React, { Component } from 'react'
import { Form, Input, Label, Row } from 'reactstrap'
import Header from './Header';
import TableData from "./Table";

export default class Main extends Component {
	constructor(props){
		super(props);
		this.state={
			database:""
		}
		this.onChange=this.onChange.bind(this);
	}
	onChange(e){
		this.setState({
			[e.target.id]:e.target.files[0]
		})
		
	}
	render() {
		return (
			<div>
				<Header/>
				<hr/>
				<div className="container">
					<Row>
						<Form>
							<Label htmlFor="database">Upload the database file</Label>
							<Input type="file" id="database" onChange={this.onChange} />
						</Form>
					</Row>
					<hr/>
					<Row>
						<TableData/>
					</Row>
				</div>
			</div>
		)
	}
}
