import React from "react";

const Bar = ({ imageName, altText, percent, description }) => {
	return (
		<div className="skills-graph__row">
			<div className="skills-graph__image--container">
				<img
					className="skills-graph__image"
					src={"/assets/icons/" + imageName}
					alt={altText}
				/>
			</div>
			<div className="skills-graph__bar--outer-container">
				<div className="skills-graph__bar--inner-container">
					<div
						className="skills-graph__bar"
						style={{ width: percent }}
						data-aos="grow-right"
						data-aos-anchor=".skills-graph"
					></div>
					<p className="skills-graph__image--description">{description}</p>
				</div>
			</div>
		</div>
	);
};

export default Bar;
