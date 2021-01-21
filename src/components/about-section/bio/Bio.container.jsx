import React from "react";
import "./bio.styles.scss";
import BioHeading from "./BioHeading.component";
import BioContent from "./BioContent.component";
import CustomButton from "../../reusable/custom-button/CustomButton.component";

const Bio = () => {
	return (
		<div className="section-about__bio-container">
			<BioHeading />
			<BioContent />
			<div className="section-about__contact-button">
				<CustomButton inverted>
					Contact Me&nbsp;
					<span className="section-about__contact-button section-about__contact-button--arrow">
						&#10140;
					</span>
				</CustomButton>
			</div>
		</div>
	);
};

export default Bio;
