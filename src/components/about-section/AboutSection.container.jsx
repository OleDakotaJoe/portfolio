import React from "react";
import "./about-section.styles.scss";
import Bio from "./bio/Bio.container";
import Profile from "./profile/Profile.container";
import TileBoard from "./tile-board/TileBoard.container";
import ValueContainer from "./values/ValueContainer.container";

const AboutSection = () => {
	return (
		<section className="section-about">
			<Bio />
			<ValueContainer />
			<div className="section-about__skills-profile-container">
				<Profile />
				<TileBoard />
			</div>
		</section>
	);
};

export default AboutSection;
