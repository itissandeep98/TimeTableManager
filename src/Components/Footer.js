import React, { useState } from 'react'
import { Button, Icon, Popup } from 'semantic-ui-react'
import Chat from './Chat'
import '../App.css'

const Footer = (props) => {
	const [open, setOpen] = useState(false)
	return (
		<div className="float-right d-print-none chat">
			<Popup
				content={<Chat resetFeedbackform={props.resetFeedbackform}/>}
				on='click'
				onClose={() => setOpen(false)}
				onOpen={() => setOpen(true)}
				open={open}
				trigger={<Button circular icon color='black' >
							<Icon name='chat' size="large" />
						</Button>}
				position="top right"
			/>


		</div>
	)
}
export default Footer
