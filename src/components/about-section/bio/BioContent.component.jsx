import React from "react";
import "./bio-content.styles.scss";

const BioContent = () => {
	return (
		<div className="section-about__content section-about__content-container">
			<p className="section-about__content section-about__content-text section-about__content-text--p1">
				Hey there! Nice to meet you. Let me introduce myself:
				<br />
				<br />I am a dynamic, capable and self-taught front-end Web Developer
				with back-end experience as well. Currently working towards a Bachelor
				of Science in Computer Science with a solid foundation in web
				development principles across multiple frameworks. I am passionate about
				clean design, intutive and responsive UI, animations and effects, and
				lightning-fast rendering.
			</p>
			<p className="section-about__content section-about__content-text section-about__content-text--p2">
				Before I began to pursue web-development I spent 8 years as a restaurant
				manager for various companies. During that time, I learned many of the
				values which have helped me to be successful as a developer: discipline,
				patience, perseverence, relentless self improvement, consistently
				embracing change, leadership, and humilty.
			</p>
		</div>
	);
};

export default BioContent;
