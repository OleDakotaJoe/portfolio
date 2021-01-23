import React from "react";

import AnchorLink from "react-anchor-link-smooth-scroll";

const MenuButton = ({ link, content, offset, internal }) => {
	const checkbox = document.getElementById("menu-button");

	const uncheck = () => {
		checkbox.checked = false;
	};
	const anchorElement = internal ? (
		<AnchorLink
			href={link}
			offset={offset}
			className="component-navigation__navbar-menu--link"
		>
			{content}
		</AnchorLink>
	) : (
		<a href={link} className="component-navigation__navbar-menu--link">
			{content}
		</a>
	);
	return (
		<li className="component-navigation__navbar-menu--option">
			{anchorElement}
		</li>
	);
};

export default MenuButton;
