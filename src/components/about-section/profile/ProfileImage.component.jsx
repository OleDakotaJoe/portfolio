import React from "react";
import "./profile-image.styles.scss";
import image from "../../../assets/photos/male-close-up-silhouette-with-tie.png";
const ProfileImage = () => {
	return (
		<div className="section-about__profile--image-wrapper">
			<img
				src={image}
				alt="Steven Sheaves"
				className="section-about__profile--image"
			/>
		</div>
	);
};

export default ProfileImage;
