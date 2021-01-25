import React from "react";
import Bar from "./Bar.component";
import "./skills-graph.styles.scss";
import Timeline from "./Timeline.component";
import SectionHeading from "../../reusable/section-heading/SectionHeading.component";

const SkillsGraph = () => {
	return (
		<div data-aos="slide-in-from-right">
			<SectionHeading>Skills and Technologies</SectionHeading>
			<div className="skills-graph">
				{skillArray.map((skill) => (
					<Bar {...skill} />
				))}
				<Timeline />
			</div>
		</div>
	);
};

export default SkillsGraph;

const skillArray = [
	{
		description: "HTML5",
		percent: "100%",
		imageName: "html5.png",
		altText: "HTML5 Icon",
	},
	{
		description: "CSS3",
		percent: "100%",
		imageName: "css-3.png",
		altText: "CSS Icon",
	},
	{
		description: "Javascript",
		percent: "66%",
		imageName: "javascript.png",
		altText: "JavaScript Icon",
	},
	{
		description: "node.js",
		percent: "17%",
		imageName: "nodejs.png",
		altText: "Node Icon",
	},
	{
		description: "Sass",
		percent: "33%",
		imageName: "sass.png",
		altText: "Sass Icon",
	},
	{
		description: "React",
		percent: "33%",
		imageName: "atom.png",
		altText: "React Icon",
	},
	{
		description: "SQL ",
		percent: "60%",
		imageName: "postgresql.png",
		altText: "PostgreSQL icon",
	},
	{
		description: "Java",
		percent: "22%",
		imageName: "java.png",
		altText: "Java Icon",
	},
	{
		description: "Git",
		percent: "66%",
		imageName: "git.png",
		altText: "Git Icon",
	},
];
