import React, { Component } from 'react'
import { FormGroup, Form, Input } from 'reactstrap';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { sendChat } from '../store/ActionCreators';

class Chat extends Component {
	constructor(props){
		super(props);
		this.state={
			name:"",
			message:""
		}
		this.onChange=this.onChange.bind(this);
		this.onSubmit=this.onSubmit.bind(this);
	}

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	onSubmit(e){
		e.preventDefault()
		const data={
			emailto:"itissandeep98@gmail.com",
			message :"Name: "+this.state.name+"\nMessage: "+this.state.message,
			subject: "Message from TimeTableManager"
		}
		this.props.sendChat(data);
		this.setState({
			message:"",
			name:""
		})
	}

	render() {
		return (
			<div className="text-center">
				<Form onSubmit={this.onSubmit}>
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
							placeholder="Bug Report or Feature request"
							value={this.state.message}
							onChange={this.onChange}
						/>
					</FormGroup>
					<Button>Submit</Button>
				</Form>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
	sendChat: (data) => dispatch(sendChat(data)),
})

export default connect(null,mapDispatchToProps)(Chat);