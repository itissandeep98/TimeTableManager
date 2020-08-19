import React, { Component } from 'react'

export default class TTPDF extends Component {
	render() {
		return (
			<div className="text-center d-none d-md-block d-print-none">
				<embed 
					src="https://iiitd.ac.in/sites/default/files/docs/education/2020/Time%20Table%20Add%20Drop%20Monsoon%202020V1.pdf" 
					type="application/pdf" 
					width="100%" 
					height="770px" />
			</div>
		)
	}
}
