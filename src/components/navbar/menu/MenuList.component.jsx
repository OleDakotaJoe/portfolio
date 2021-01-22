import React from "react";

const MenuList = (props) => {
	return (
		<ul className="component-navigation__navbar-menu" id="navbar-menu">
			{props.children}
		</ul>
	);
};

export default MenuList;
