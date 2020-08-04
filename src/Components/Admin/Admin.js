import React, { Component } from 'react'
import Dataview from './Dataview';
import Formview from './Formview';
import CourseList from './CourseList';

class Admin extends Component {
	constructor(props){
		super(props)
		this.state={
			doc:[],
			course:{
				value: "",
				key: "",
				acro: "",
				slots: []
			}
		}
		this.addCourse=this.addCourse.bind(this)
		this.deleteCourse=this.deleteCourse.bind(this)
		this.editCourse = this.editCourse.bind(this)
		this.onCoursechange = this.onCoursechange.bind(this)
	}

	componentDidMount(){
		document.title="Admin"
	}

	onCoursechange(tag,val){
		const temp={...this.state.course}
		temp[tag]=val
		this.setState({
			course:temp
		})
	}

	addCourse(e){
		e.preventDefault()
		const temp=this.state.doc.concat(this.state.course)
		this.setState({
			doc:temp,
			course: {
				value: "",
				key: "",
				acro: "",
				slots: []
			}
		})
	}

	deleteCourse(event,key){
		event.preventDefault()
		const temp=this.state.doc.filter(course=>course.key!==key)
		this.setState({
			doc:temp
		})
	}

	editCourse(event,key){
		event.preventDefault();
		const temp=this.state.doc.filter(course=>course.key===key)[0]
		this.deleteCourse(event,key)
		this.setState({
			course:temp
		})

	}
	
	render() {
		return (
			<div className="constructor-fluid">
				<div className="row d-none d-md-flex">
					<div className="col-6">
						<Formview addCourse={this.addCourse} course={this.state.course} onCoursechange={this.onCoursechange}/>
						<br/><br/>
						<CourseList doc={this.state.doc} deleteCourse={this.deleteCourse} editCourse={this.editCourse}/>
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
