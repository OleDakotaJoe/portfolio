import React from "react";
import "./bio.styles.scss";

import AnchorLink from "react-anchor-link-smooth-scroll";

import BioHeading from "./BioHeading.component";
import BioContent from "./BioContent.component";
import CustomButton from "../../reusable/custom-button/CustomButton.component";

const Bio = () => {
	return (
		<div
			data-aos="slide-up-fade"
			data-aos-id="about"
			className="section-about__bio-container"
		>
			<BioHeading />
			<BioContent />
			<AnchorLink href="#contact" className="section-about__contact-button">
				<CustomButton inverted arrow>
					Contact Me
				</CustomButton>
			</AnchorLink>
		</div>
	);
};

export default Bio;
