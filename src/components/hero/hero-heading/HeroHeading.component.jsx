import React from "react";
import "./hero-heading.styles.scss";

import AnchorLink from "react-anchor-link-smooth-scroll";

import CustomButton from "../../reusable/custom-button/CustomButton.component";

const Heading = () => {
	//todo come back to this later

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
			<AnchorLink offset={82} href="#about" style={{ textDecoration: "none" }}>
				<CustomButton arrow>Take a look</CustomButton>
			</AnchorLink>
		</div>
	);
};

export default Heading;
