import React, { useContext } from "react";
import { MobileMenuContext } from "./Menu.component.jsx";

const MenuBackdrop = () => {
	const { isActive } = useContext(MobileMenuContext);

	return (
		<div
			className={`component-navigation__navbar-menu-backdrop ${
				isActive ? "component-navigation__navbar-menu-backdrop--active" : ""
			}`}
			id="menu-backdrop"
		></div>
	);
};

export default MenuBackdrop;
