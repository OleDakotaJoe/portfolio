import React, { useState } from "react";
import "./tile.styles.scss";

const Tile = ({ imageName, frontText, backText, altText }) => {
	const [isFlipped, setFlipped] = useState(false);
	return (
		<div
			onMouseEnter={() => setFlipped(true)}
			onMouseLeave={() => setFlipped(false)}
			className="section-about__tile"
		>
			<div
				className={`section-about__tile section-about__tile--side section-about__tile--front ${
					isFlipped ? "section-about__tile--front--flipped" : null
				}`}
			>
				<img
					className="section-about__tile--icon"
					src={"/assets/icons/" + imageName}
					alt={altText}
				/>
				<span className="section-about__tile--front-text">{frontText}</span>
			</div>
			<div
				className={`section-about__tile section-about__tile--side section-about__tile--back ${
					isFlipped ? "section-about__tile--back--flipped" : null
				}`}
			>
				<span className="section-about__tile--back-text">{backText}</span>
			</div>
		</div>
	);
};

export default Tile;
