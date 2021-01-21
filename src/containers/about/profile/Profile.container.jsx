import React from "react";
import "./profile.styles.scss";

import ProfileDescription from "../../../components/about-section/profile/ProfileDescription.component";
import ProfileImage from "../../../components/about-section/profile/ProfileImage.component";

const Profile = () => {
	return (
		<div className="section-about__profile--container">
			<ProfileImage />
			<ProfileDescription />
		</div>
	);
};

export default Profile;
