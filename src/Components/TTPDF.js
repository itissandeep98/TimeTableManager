import React from 'react';
import { connect } from 'react-redux';
import { Spinner } from 'reactstrap';

function TTPDF(props) {
	const { ttpdf } = props.extra.links;
	return (
		<>
			{ttpdf ? (
				<div className="text-center d-print-none">
					<embed
						src={ttpdf}
						type="application/pdf"
						width="100%"
						height="770px"
					/>
				</div>
			) : (
				<Spinner />
			)}
		</>
	);
}

const mapStateToProps = state => ({
	extra: state.extra,
});
export default connect(mapStateToProps)(TTPDF);
