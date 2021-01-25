import React from "react";
import "./value.styles.scss";

const ValueIcon = ({ imageName, altText }) => {
	return (
		<div
			className="section-about__value-card--icon-wrapper"
			data-aos="grow-bounce"
		>
			<img
				alt={altText}
				src={"/assets/icons/" + imageName}
				className="section-about__value-card--icon"
			/>
		</div>
	);
};

export default ValueIcon;
