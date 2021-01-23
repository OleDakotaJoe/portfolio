import React, { useState } from "react";

import "./customButton.styles.scss";
import arrowIcon from "../../../assets/icons/right-arrow.png";

const CustomButton = ({ children, inverted, arrow, ...otherProps }) => {
	const [isHovered, setHovered] = useState(false);

	const arrowElement = (
		<img
			src={arrowIcon}
			alt="Arrow Icon"
			className={`component-button__arrow ${
				isHovered ? "component-button__arrow--hover" : ""
			}`}
		></img>
	);
	const animate = (boolean) => {
		setHovered(boolean);
	};

	return (
		<button
			onMouseEnter={() => animate(true)}
			onMouseLeave={() => animate(false)}
			className={`${inverted ? "inverted" : ""} ${
				inverted && isHovered ? "inverted--hover" : ""
			}
			component-button ${isHovered ? "component-button--hover " : ""}`}
			{...otherProps}
		>
			&nbsp;
			{children}
			&nbsp;
			{arrow ? arrowElement : null}
		</button>
	);
};

export default CustomButton;
