import React from "react";

import "./customButton.styles.scss";

const CustomButton = ({ children, inverted, ...otherProps }) => (
	<button
		className={`${inverted ? "inverted" : ""} custom-button`}
		{...otherProps}
	>
		{children}
	</button>
);

const styles = {};

export default CustomButton;
