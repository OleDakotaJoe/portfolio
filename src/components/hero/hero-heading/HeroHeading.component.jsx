import React from "react";
import "./hero-heading.styles.scss";

import CustomButton from "../../reusable/custom-button/CustomButton.component";

const Heading = () => {
	const buttonStyle = {
		position: "relative",
		borderRadius: 0,
	};

	return (
		<div className="section-heading__container">
			<h1 className="section-heading__heading section-heading__heading--main">
				Hello, I'm&nbsp;
				<span className="section-heading__heading--highlighted-name">
					Steven Sheaves
				</span>
			</h1>
			<h2 className="section-heading__heading section-heading__heading--sub">
				I'm a front-end web developer.
			</h2>
			<div className="section-heading__heading section-heading__button">
				<CustomButton style={buttonStyle}>
					Enter here&nbsp;
					<span className="section-heading__heading section-heading__button--arrow">
						&#10140;
					</span>
				</CustomButton>
			</div>
		</div>
	);
};

export default Heading;
