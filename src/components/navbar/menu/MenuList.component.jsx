import React, { useContext } from "react";
import { MobileMenuContext } from "./Menu.component.jsx";
const MenuList = (props) => {
	const { isActive } = useContext(MobileMenuContext);
	return (
		<ul
			className={`component-navigation__navbar-menu ${
				isActive ? "component-navigation__navbar-menu--active" : ""
			}`}
			id="navbar-menu"
		>
			{props.children}
		</ul>
	);
};

export default MenuList;
