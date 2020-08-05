import React, { Component } from 'react'
import { FormGroup, Form } from 'reactstrap'
import { Button } from 'semantic-ui-react';


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

	downloadFile(e,doc){
		e.preventDefault()

		const element = document.createElement("a");
		const file = new Blob([doc], { type: 'text/plain' });
		element.href = URL.createObjectURL(file);
		element.download = "db.json";
		document.body.appendChild(element); // Required for this to work in FireFox
		element.click();
		
	}

	copyText(e){
		e.preventDefault()
		let text=this.textInput
		text.select()
		text.setSelectionRange(0, 99999); /*For mobile devices*/
		document.execCommand("copy");		
	}

	render() {
		let docs=JSON.stringify(this.props.doc,null,4)
		
		return (
			<Form>
				<Button onClick={(e)=>this.downloadFile(e,docs)}>Download</Button>
				<Button onClick={(e)=>this.copyText(e)}>Copy</Button>
				<br /><br />
				<FormGroup>
					<textarea  ref={this.setTextInputRef} value={docs} readOnly/>
				</FormGroup>
			</Form>
		)
	}
}
