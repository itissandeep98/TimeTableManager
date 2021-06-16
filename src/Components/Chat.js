import React, { useState } from 'react';
import {
	FormGroup,
	Alert,
	PopoverBody,
	Form,
	Input,
	Container,
} from 'reactstrap';
import { Button, Icon } from 'semantic-ui-react';
import { origUrl } from '../shared/baseUrl';
import axios from 'axios';
import { UncontrolledPopover } from 'reactstrap';
import '../App.css';
import { firebaseAnalytics } from '../config/fire';

function Chat(props) {
	const [state, setState] = useState({ message: '', showA: false, type: '' });

	const handleKeyDown = e => {
		e.target.style.height = 'inherit';
		e.target.style.height = `${Math.min(e.target.scrollHeight + 30, 800)}px`;
		// e.target.style.width = `${window.innerWidth / 2 - 40}px`
	};

	const showAlert = (type, message) => {
		// for showing success message in the chat
		setState({ ...state, showA: true, message: message, type: type });
	};

	const toggleAlert = () => {
		// toggling the success alert
		setState({ ...state, showA: !state.showA });
	};

	const onSubmit = e => {
		e.preventDefault();
		// submit the feedback form. sends a request to my flask api with all the data which in turn sends me a mail
		const data = {
			emailto: 'itissandeep98@gmail.com',
			message: state.feedback,
			subject: 'TimeTableManager: Message from ' + state.name,
		};
		axios.get(origUrl + 'sendmail', { params: data }).then(resp => {
			showAlert('info', 'Feedback Sent ;)');
		});
		// props.resetFeedbackform();
		firebaseAnalytics.logEvent('feedback_sent');
	};

	const onChange = e => {
		setState({ ...state, [e.target.name]: e.target.value });
	};

	return (
		<Button
			id="chatbutton"
			circular
			icon
			color="black"
			className="d-print-none">
			<Icon name="chat" size="large" />
			<UncontrolledPopover trigger="legacy" placement="top" target="chatbutton">
				<PopoverBody className="text-center">
					<Container fluid className=" p-0">
						<p>
							Or mail directly at{' '}
							<a href="mailto:itissandeep98@gmail.com" target="blank">
								itissandeep98@gmail.com
							</a>
						</p>

						<Alert color={state.type} isOpen={state.showA} toggle={toggleAlert}>
							{state.message}
						</Alert>
						<Form>
							<FormGroup>
								<Input
									name="name"
									placeholder="Name"
									value={state.name}
									onChange={onChange}
								/>
							</FormGroup>
							<FormGroup>
								<Input
									type="textarea"
									name="feedback"
									placeholder="Feedback"
									rows={5}
									value={state.feedback}
									onChange={onChange}
									onKeyDown={handleKeyDown}
								/>
							</FormGroup>
							<Button circular positive onClick={onSubmit}>
								<span className="fa fa-paper-plane" /> Send
							</Button>
						</Form>
					</Container>
				</PopoverBody>
			</UncontrolledPopover>
		</Button>
	);
}

export default Chat;
