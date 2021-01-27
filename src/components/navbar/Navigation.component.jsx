import React from "react";
import "./navigation.component.scss";
import Menu from "./menu/Menu.component";
import Brand from "./brand/Brand.component";

const Navbar = () => {
	return (
		<header className="component-navigation" role="navigation">
			<nav className="component-navigation__navbar" id="navbar">
				<Brand />
				<Menu />
			</nav>
		</header>
	);
};

export default Navbar;
