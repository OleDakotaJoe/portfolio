import React from "react";
import "./profile-image.styles.scss";
import image from "../../../assets/photos/10959349_10200195937618306_1684052236907503226_n.jpg";
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
