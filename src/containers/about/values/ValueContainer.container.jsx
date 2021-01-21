import React from "react";
import Value from "../../../components/about-section/values/Value.component";
import SectionHeading from "../../../components/reusable/section-heading/SectionHeading.component";
import "./value-container.styles.scss";

const ValueContainer = () => {
	return (
		<div className="section-about__values--container">
			<SectionHeading>My Values</SectionHeading>
			<div className="section-about__values--icon-container">
				{valueArray.map((value, index) => (
					<Value {...value} key={index} />
				))}
			</div>
		</div>
	);
};

const valueArray = [
	{
		imageName: "discipline.png",
		altText: "Discipline Icon",
		quote: "Accountability",
	},
	{ imageName: "change.png", altText: "Change Icon", quote: "Embrace Change" },
	{
		imageName: "growth.png",
		altText: "Growth Icon",
		quote: "Relentless Improvement",
	},
	{ imageName: "humility.png", altText: "Humble Face", quote: "Humilty" },
];

export default ValueContainer;
