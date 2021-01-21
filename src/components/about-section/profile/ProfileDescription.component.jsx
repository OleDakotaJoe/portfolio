import React from "react";
import "./profile-description.styles.scss";

const ProfileDescription = () => {
	return (
		<div className="section-about__profile-description--container">
			<h3 className="section-about__profile-description section-about__profile-description--heading">
				Who Am I?
			</h3>
			<p className="section-about__profile-description section-about__profile-description--description">
				I am a budding front-end web developer, passionate about the industry. I
				have a growth mindset, and I push myself to consistently learn. I am
				also a self-taught chef, amateur photographer, father, and husband.
			</p>
		</div>
	);
};

export default ProfileDescription;
