import React, { Component } from 'react'
import { FormGroup, Form, Input } from 'reactstrap';
import { Button } from 'semantic-ui-react';
import { origUrl } from '../shared/baseUrl';
import axios from 'axios';

class Chat extends Component {
	constructor(props){
		super(props);
		this.state={
			name:"",
			message:""
		}
		this.onChange=this.onChange.bind(this)
	}

	onChange(e){
		this.setState({
			[e.target.name]:e.target.value
		})
	}

	onSubmit(e){
		e.preventDefault()
		const data={
			emailto:"itissandeep98@gmail.com",
			message :this.state.message,
			subject: "TimeTableManager: Message from " + this.state.name
		}
		axios.get(origUrl + "sendmail", { params: data });
		this.setState({
			name:"",
			message:""
		})
	}

	render() {
		return (
			<div className="text-center">
				<Form onSubmit={this.onSubmit.bind(this)}>
					<FormGroup>
						<Input
							type="text" 
							name="name" 
							placeholder="Name" 
							value={this.state.name}
							onChange={this.onChange}
						/>
					</FormGroup>
					<FormGroup>
						<Input
							type="textarea"
							name="message"
							placeholder="Feedback"
							value={this.state.message}
							onChange={this.onChange}
						/>
					</FormGroup>
					<Button circular floated positive> <span className="fa fa-paper-plane"/> Send</Button>
				</Form>
			</div>
		)
	}
}


export default Chat;