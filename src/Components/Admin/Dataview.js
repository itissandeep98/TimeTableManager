import React, { Component } from 'react'
import { FormGroup, Form } from 'reactstrap'

export default class Dataview extends Component {
	constructor(props) {
		super(props);

		this.textInput = null;
		this.setTextInputRef = element => { this.textInput = element; };

	}
	componentDidMount(){
		window.addEventListener("resize",()=>{
			this.handleKeyDown()
		})
		this.handleKeyDown()
	}

	handleKeyDown() {
		this.textInput.style.height = 'inherit';
		this.textInput.style.height = `${window.innerHeight-90}px`;
		this.textInput.style.width = `${this.textInput.parentElement.clientWidth-20}px`
	}

	render() {
		return (
			<Form>
				<FormGroup>
					<textarea  ref={this.setTextInputRef} />
				</FormGroup>
			</Form>
		)
	}
}
