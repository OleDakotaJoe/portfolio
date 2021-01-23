import React from "react";
import "./tile-board.styles.scss";
import Tile from "./Tile.component";
import SectionHeading from "../../reusable/section-heading/SectionHeading.component";

const TileBoard = () => {
	return (
		<div>
			<SectionHeading>Skills and Technologies</SectionHeading>
			<div className="section-about__tile-board--container">
				{tileArray.map((tile, index) => (
					<Tile {...tile} key={index} />
				))}
			</div>
		</div>
	);
};

const tileArray = [
	{
		frontText: "HTML5",
		backText: "3 Years of Experience",
		imageName: "html5.png",
		altText: "HTML5 Icon",
	},
	{
		frontText: "CSS3",
		backText: "3 Years of Experience",
		imageName: "css-3.png",
		altText: "CSS Icon",
	},
	{
		frontText: "JavaScript",
		backText: "2 Years of Experience",
		imageName: "javascript.png",
		altText: "JavaScript Icon",
	},
	{
		frontText: "node.js",
		backText: "Beginner - 6 Months Cumulative",
		imageName: "nodejs.png",
		altText: "Node Icon",
	},
	{
		frontText: "Sass",
		backText: "1 Year of Experience",
		imageName: "sass.png",
		altText: "Sass Icon",
	},
	{
		frontText: "React",
		backText: "1 Year of Experience",
		imageName: "atom.png",
		altText: "React Icon",
	},
	{
		frontText: "SQL ",
		backText: "About 2 Years of Experience",
		imageName: "postgresql.png",
		altText: "PostgreSQL icon",
	},
	{
		frontText: "Java",
		backText: "About 6 Months of Experience",
		imageName: "java.png",
		altText: "Java Icon",
	},
	{
		frontText: "Git",
		backText: "2 Years of Experience",
		imageName: "git.png",
		altText: "Git Icon",
	},
];

export default TileBoard;
