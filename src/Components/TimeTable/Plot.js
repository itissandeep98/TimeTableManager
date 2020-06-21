import React, { Component } from 'react'
import TableData from './Table'

export default class Plot extends Component {
	
	render() {
		var schedule = [
			["", "9:00-10:30", "10:30-12", "12:00-1:30", "1:30-2:30", "2:30-4:00", "4:00-5:30"],
			["Mon", "", "", "", "", "", "",],
			["Tue", "", "", "", "", "", "",],
			["Wed", "", "", "", "", "", "",],
			["Thu", "", "", "", "", "", "",],
			["Fri", "", "", "", "", "", "",]
		]
		
		return (
			<div className="container">
				<TableData data={schedule} />
			</div>
		)
	}
}
