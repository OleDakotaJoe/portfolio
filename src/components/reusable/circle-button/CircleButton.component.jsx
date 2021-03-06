import React from "react";
import "./circle-button.styles.scss";

const CircleButton = ({ onClick, icon, altText, animated, inverted }) => {
	return (
		<div
			className={`component-circle-button ${
				inverted ? "component-circle-button--inverted " : ""
			}`}
			onClick={onClick}
		>
			<img
				className={`component-circle-button__image ${
					animated ? "component-circle-button__image--animated" : ""
				}`}
				src={"/assets/icons/" + icon}
				alt={altText}
			/>
		</div>
	);
};

export default CircleButton;
