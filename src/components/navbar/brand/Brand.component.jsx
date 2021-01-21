import React from "react";
import BrandLogo from "./BrandLogo.component";
import BrandName from "./BrandName.component";

const fnName = () => {
	return (
		<div className="component__navbar-brand">
			<BrandLogo />
			<BrandName />
		</div>
	);
};

export default fnName;
