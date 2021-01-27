import React from "react";

const BrandName = ({ link }) => {
	return (
		<h1 className="component-navigation__navbar-brand--name">
			<a href={link} className="component-navigation__navbar-brand--name">
				Steven Sheaves
			</a>
		</h1>
	);
};

export default BrandName;
