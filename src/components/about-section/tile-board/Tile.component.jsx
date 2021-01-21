import React from "react";
import "./tile.styles.scss";

const Tile = ({ imageName, frontText, backText, altText }) => {
	return (
		<div className="section-about__tile">
			<div className="section-about__tile section-about__tile--side section-about__tile--front">
				<img
					className="section-about__tile--icon"
					src={"/assets/icons/" + imageName}
					alt={altText}
				/>
				<span className="section-about__tile--front-text">{frontText}</span>
			</div>
			<div className="section-about__tile section-about__tile--side section-about__tile--back">
				<span className="section-about__tile--back-text">{backText}</span>
			</div>
		</div>
	);
};

export default Tile;
