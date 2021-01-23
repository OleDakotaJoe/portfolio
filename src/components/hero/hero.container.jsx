import React from "react";
import "./hero.styles.scss";
import HeroBackground from "./hero-background/HeroBackground.component";
import HeroHeading from "./hero-heading/HeroHeading.component";

const HeroSection = () => {
	return (
		<div className="section-hero" id="home">
			<HeroBackground />
			<HeroHeading />
		</div>
	);
};

export default HeroSection;
