import React from "react";
import "./about-section.styles.scss";
import Bio from "./bio/Bio.container";
import Profile from "./profile/Profile.container";
import SkillsGraph from "./skills-graph/SkillsGraph.container";
import ValueContainer from "./values/ValueContainer.container";

const AboutSection = () => {
	return (
		<section className="section-about" id="about">
			<Bio />
			<ValueContainer />
			<div className="section-about__skills-profile-container">
				<Profile />
				<SkillsGraph />
			</div>
		</section>
	);
};

export default AboutSection;
