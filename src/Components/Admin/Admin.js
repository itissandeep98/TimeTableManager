import React, { Component } from 'react'
import Dataview from './Dataview';
import Formview from './Formview';
import CourseList from './CourseList';

class Admin extends Component {
	constructor(props){
		super(props)
		this.state={
			doc:[]
		}
		this.addCourse=this.addCourse.bind(this)
		this.deleteCourse=this.deleteCourse.bind(this)
	}

	componentDidMount(){
		document.title="Admin"
	}

	addCourse(course){
		const temp=this.state.doc.concat(course)
		this.setState({
			doc:temp
		})
	}

	deleteCourse(event,key){
		event.preventDefault()
		const temp=this.state.doc.filter(course=>course.key!==key)
		this.setState({
			doc:temp
		})
	}
	
	render() {
		return (
			<div className="constructor-fluid">
				<div className="row d-none d-md-flex">
					<div className="col-6">
						<Formview addCourse={this.addCourse}/>
						<br/><br/>
						<CourseList doc={this.state.doc} deleteCourse={this.deleteCourse}/>
					</div>
					<div className="col-6">
						<Dataview doc={this.state.doc}/>
					</div>
				</div>	
				<div className="container text-center d-md-none">
					<h1>This Page is not available for Small Screens</h1>
				</div>			
			</div>
		)
	}
}
export default Admin;
