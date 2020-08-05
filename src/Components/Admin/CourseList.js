import React, { useState } from 'react'
import { Accordion, Icon, Button, ButtonGroup } from 'semantic-ui-react';

export default function CourseList({doc,deleteCourse,editCourse}) {
		const [active, setactive] = useState(-1)
		const changeactive=(key)=>{
			if(active===key){
				setactive(-1)
			}
			else{
				setactive(key)
			}
		}
		return (
			<div className="container">
				<h2 className="text-center">All Courses</h2>
				{doc.map(course=>(
					<Accordion key={course.key} fluid styled>
						<Accordion.Title active={active===course.key} onClick={()=>changeactive(course.key)}>
							<Icon name='dropdown' />
							{course.text}							
						</Accordion.Title>
						
						<Accordion.Content active={active === course.key} >
							<strong>Acronym: </strong> <p>{course.value}</p>
							<strong>Course Code: </strong> <p>{course.code}</p>
							<strong>Slots: </strong> <ul>{course.slots.map(s=><li>{s.day} {s.stime}-{s.etime}</li>)}</ul>
							<ButtonGroup >
								<Button fluid color="olive" onClick={(e) => editCourse(e, course.key)}>
									Edit
							</Button>
							<Button fluid color="google plus" onClick={(e)=>deleteCourse(e,course.key)}>
								Delete
							</Button>
							</ButtonGroup>
						</Accordion.Content>
					</Accordion>
				))}
			</div>
		)
	}

