import React from "react";
import "./value.styles.scss";

const ValueIcon = ({ imageName, altText }) => {
	return (
		<img
			alt={altText}
			src={"/assets/icons/" + imageName}
			className="section-about__value-card--icon"
		/>
	);
};

export default ValueIcon;
