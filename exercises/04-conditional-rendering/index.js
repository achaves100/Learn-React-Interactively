import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Alert = props => {
	console.log("will show the property show value: ", props.show);
	if (props.show == false) {
		return null;
	} else {
		return (
			<div className="alert alert-danger" role="alert">
				{props.text}
			</div>
		);
	}
};

Alert.propTypes = {
	color: PropTypes.string,
	text: PropTypes.string
};

ReactDOM.render(
	<div>
		<Alert show={true} text="This is a primary alert-check it out!" />
		<Alert show={false} text="This is a primary alert-check it out!" />
	</div>,
	document.querySelector("#myDiv")
);
