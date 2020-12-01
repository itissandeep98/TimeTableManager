import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Spinner } from 'reactstrap'
import { extraFetchFirebase } from '../store/ActionCreators'

class TTPDF extends Component {
	componentDidMount() {
		this.props.fetchExtra()
	}
	render() {
		const { ttpdf } = this.props.extra.links
		return (
			<>
				{ttpdf ?
					<div className="text-center d-print-none">
						<embed
							src={ttpdf}
							type="application/pdf"
							width="100%"
							height="770px" />
					</div>
					:
					<Spinner />
				}
			</>
		)
	}
}
const mapStateToProps = (state) => {  // Redux props
	return {
		extra: state.extra
	}
}
const mapDispatchToProps = (dispatch) => ({ // Redux function
	fetchExtra: () => dispatch(extraFetchFirebase()),

})
export default connect(mapStateToProps, mapDispatchToProps)(TTPDF)