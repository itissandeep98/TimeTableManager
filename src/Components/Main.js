import React, { Component } from 'react'
import { Form, Input, Label, Row, FormText } from 'reactstrap'
import Header from './Header';
import TableData from "./Table";

export default class Main extends Component {
	constructor(props){
		super(props);
		this.state={
			database:"",
			courses:""
		}
		this.onChange=this.onChange.bind(this);
	}
	onChange(e){
		this.setState({
			[e.target.id]:e.target.files[0]
		},()=>{
			var reader= new FileReader();
			reader.readAsText(this.state.database)
			reader.onloadend=()=>{
				var json=this.csvJSON(reader.result);
				this.setState({
					courses:json
				})
				
			}			
		})
		
	}

	csvJSON(csv) {
		
		var lines = csv.split("\n");

		var result = [];

		var headers = lines[0].split(",");

		for (var i = 0; i < lines.length; i++) {

			var obj = {};
			var currentline = lines[i].split(",");

			for (var j = 0; j < headers.length; j++) {
				obj[headers[j]] = currentline[j];
			}
			result.push(obj);
		}		
		return result;
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
							<FormText>Upload only valid CSV files</FormText>
						</Form>
					</Row>
				</div>
					<hr/>
					<TableData Courses={this.state.courses}/>
			</div>
		)
	}
}
