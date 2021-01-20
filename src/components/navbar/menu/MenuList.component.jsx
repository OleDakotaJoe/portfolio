import React from "react";

const MenuList = (props) => {
	return (
		<ul className="header__navbar-menu" id="navbar-menu">
			{props.children}
		</ul>
	);
};

export default MenuList;
