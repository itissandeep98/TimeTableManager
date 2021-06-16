import React, { Component } from 'react'
import Dataview from './Dataview';
import Formview from './Formview';
import CourseList from './CourseList';
import { Col, Container, Input, Row } from 'reactstrap';

class Admin extends Component {
	constructor(props) {
		super(props)
		this.state = {
			doc: [],
			course: {
				key: "",
				text: "",
				value: "",
				code: "",
				slots: []
			}
		}
		this.addCourse = this.addCourse.bind(this)
		this.deleteCourse = this.deleteCourse.bind(this)
		this.editCourse = this.editCourse.bind(this)
		this.onCoursechange = this.onCoursechange.bind(this)
	}

	componentDidMount() {
		document.title = "Admin"
	}

	onCoursechange(tag, val) {
		const temp = { ...this.state.course }
		temp[tag] = val
		this.setState({
			course: temp
		})
	}

	addCourse(e) {
		e.preventDefault()
		let key = 1;
		const doc = this.state.doc
		if (doc.length > 0)
			key = doc[doc.length - 1].key + 1
		const course = this.state.course
		course.key = key
		const temp = this.state.doc.concat(course)

		this.setState({
			doc: temp,
			course: {
				key: "",
				text: "",
				value: "",
				code: "",
				slots: []
			}
		})
	}

	deleteCourse(event, key) {
		event.preventDefault()
		const temp = this.state.doc.filter(course => course.key !== key)
		this.setState({
			doc: temp
		})
	}

	editCourse(event, key) {
		event.preventDefault();
		const temp = this.state.doc.filter(course => course.key === key)[0]
		this.deleteCourse(event, key)
		this.setState({
			course: temp
		})

	}
	fileHandler = (event) => {
		const file = event.target.files[0];
		console.log(file);
		const reader = new FileReader();
		reader.onload = (evt) => {
			const a=evt.target.result
			
			var rows=a.split()
			var data={}
			console.log(rows.length);
		};
		reader.readAsBinaryString(file);

	};

	render() {
		return (
			<Container fluid>
				<Row className=" d-none d-md-flex">
					<Col>
						<Input
							type="file"
							onChange={this.fileHandler}
							accept=".csv"
						/>
						{/* <Formview addCourse={this.addCourse} course={this.state.course} onCoursechange={this.onCoursechange} />
						<br /><br />
						<CourseList doc={this.state.doc} deleteCourse={this.deleteCourse} editCourse={this.editCourse} /> */}
					</Col>
					<Col>
						<Dataview doc={this.state.doc} />
					</Col>
				</Row>
				<Container className="text-center d-md-none">
					<h1>This Page is not available for Small Screens</h1>
				</Container>
			</Container>
		)
	}
}
export default Admin;
