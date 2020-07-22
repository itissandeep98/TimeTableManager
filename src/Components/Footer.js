import React, { useState } from 'react'
import { Button, Icon, Popup } from 'semantic-ui-react'
import { Navbar, NavItem, Nav } from 'reactstrap'
import Chat from './Chat'

const Footer = () => {
	const [open, setOpen] = useState(false)
	return (
		<div className="text-center d-print-none">
			<Navbar>
				<Nav navbar/>
				<Nav navbar>
					<NavItem>
						<Popup
							content={<Chat/>}
							on='click'
							onClose={() => setOpen(false)}
							onOpen={() => setOpen(true)}
							open={open}
							trigger={<Button circular icon color='black' >
										<Icon name='chat' size="large" />
									</Button>}
							position="top right"
							
						/>
					</NavItem>
				</Nav>
			</Navbar>
			
		</div>
	)
}
export default Footer
