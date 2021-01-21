import React from "react";
import "./profile.styles.scss";

import ProfileDescription from "./ProfileDescription.component";
import ProfileImage from "./ProfileImage.component";

const Profile = () => {
	return (
		<div className="section-about__profile--container">
			<ProfileImage />
			<ProfileDescription />
		</div>
	);
};

export default Profile;
