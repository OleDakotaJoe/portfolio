import React from "react";

const MenuButton = ({ link, content }) => {
	return (
		<li className="header__navbar-menu--option">
			<a href={link} className="header__navbar-menu--link">
				{content}
			</a>
		</li>
	);
};

export default MenuButton;
