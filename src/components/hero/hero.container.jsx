import React from "react";
import HeroBackground from "./hero-background/HeroBackground.component";
import HeroHeading from "./hero-heading/HeroHeading.component";

const HeroSection = () => {
	return (
		<div id="home">
			<HeroBackground />
			<HeroHeading />
		</div>
	);
};

export default HeroSection;
