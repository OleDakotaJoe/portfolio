import React from "react";
import "./value.styles.scss";
import ValueIcon from "./ValueIcon.component";
import ValueQuote from "./ValueQuote.component";

const Value = ({ imageName, quote, altText }) => {
	return (
		<div className="section-about__value-card--container">
			<ValueIcon imageName={imageName} altText={altText} />
			<ValueQuote quote={quote} />
		</div>
	);
};

export default Value;
