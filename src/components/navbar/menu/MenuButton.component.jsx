import React from "react";

const MenuButton = ({ link, content }) => {
	return (
		<li className="component-navigation__navbar-menu--option">
			<a href={link} className="component-navigation__navbar-menu--link">
				{content}
			</a>
		</li>
	);
};

export default MenuButton;
