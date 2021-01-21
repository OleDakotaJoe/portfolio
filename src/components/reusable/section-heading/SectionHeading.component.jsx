import React from "react";
import "./section-heading.styles.scss";

const SectionHeading = ({ children }) => {
	return <h2 className="component__section-heading">{children}</h2>;
};

export default SectionHeading;
