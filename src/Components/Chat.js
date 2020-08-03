import React, { Component } from 'react'
import { FormGroup, Alert, PopoverBody } from 'reactstrap';
import { Button, Icon } from 'semantic-ui-react';
import { origUrl } from '../shared/baseUrl';
import axios from 'axios';
import { Control, Form } from 'react-redux-form';
import { UncontrolledPopover } from 'reactstrap'
import '../App.css'

class Chat extends Component {
	constructor(props) {
		super(props);
		this.state = {
			message: "",
			showA: false,
			type: "",
		}
		this.showAlert = this.showAlert.bind(this);
		this.onSubmit = this.onSubmit.bind(this)
		this.toggleAlert = this.toggleAlert.bind(this);


	}


	showAlert(type, message) { // for showing success message in the chat
		this.setState({
			showA: true,
			message: message,
			type: type
		})
	}

	toggleAlert() {  // toggling the success alert
		this.setState({
			showA: !this.state.showA
		})
	}

	onSubmit(values) {  // submit the feedback form. sends a request to my flask api with all the data which in turn sends me a mail
		const data = {
			emailto: "itissandeep98@gmail.com",
			message: values.message,
			subject: "TimeTableManager: Message from " + values.name
		}
		axios.get(origUrl + "sendmail", { params: data })
			.then(resp => {
				this.showAlert("info", "Feedback Sent ;)")
			});
		this.props.resetFeedbackform()
	}

	render() {
		return (
			<Button id="chatbutton" circular icon color='black'>
				<Icon name='chat' size="large" />
				<UncontrolledPopover trigger="legacy" placement="top" target="chatbutton">
					<PopoverBody className="text-center">
						<Alert color={this.state.type} isOpen={this.state.showA} toggle={this.toggleAlert}>
							{this.state.message}
						</Alert>
						<Form model='feedback' onSubmit={(values) => this.onSubmit(values)}>
							<FormGroup>
								<Control.text
									model=".name"
									className="form-control feed-input"
									name="name"
									placeholder="Name"

								/>
							</FormGroup>
							<FormGroup>
								<Control.textarea
									model=".message"
									className="form-control feed-input"
									name="message"
									placeholder="Feedback"
									rows={5}
								/>
							</FormGroup>
							<Button circular floated positive> <span className="fa fa-paper-plane" /> Send</Button>
						</Form>
					</PopoverBody>
				</UncontrolledPopover>
			</Button>
		)
	}
}


export default Chat;