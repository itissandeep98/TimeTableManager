import React, { Component } from 'react'
import { FormGroup, Form, Input } from 'reactstrap';
import { Button } from 'semantic-ui-react';
import { origUrl } from '../shared/baseUrl';
import axios from 'axios';

class Chat extends Component {

	onSubmit(e){
		e.preventDefault()
		const data={
			emailto:"itissandeep98@gmail.com",
			message :this.message.value,
			subject: "TimeTableManager: Message from " + this.name.value
		}
		axios.get(origUrl + "sendmail", { params: data });
		this.name.value="";
		this.message.value="";
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
							innerRef={(input) => this.name = input}
						/>
					</FormGroup>
					<FormGroup>
						<Input
							type="textarea"
							name="message"
							placeholder="Feedback"
							innerRef={(input) => this.message = input}
						/>
					</FormGroup>
					<Button circular floated positive> <span className="fa fa-paper-plane"/> Send</Button>
				</Form>
			</div>
		)
	}
}


export default Chat;