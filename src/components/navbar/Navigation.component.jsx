import React, { useEffect } from "react";
import "./navigation.component.scss";
import Menu from "./menu/Menu.component";
import Brand from "./brand/Brand.component";

const Navbar = () => {
	//TODO Make This more react-friendly
	useEffect(() => {
		const menu = document.getElementById("navbar-menu");
		const backdrop = document.getElementById("menu-backdrop");
		const checkbox = document.getElementById("menu-button");
		checkbox.addEventListener("change", displayMenu);
		function displayMenu() {
			if (checkbox.checked) {
				menu.classList.add("component-navigation__navbar-menu--active");
				backdrop.classList.add(
					"component-navigation__navbar-menu-backdrop--active"
				);
			} else {
				menu.classList.remove("component-navigation__navbar-menu--active");
				backdrop.classList.remove(
					"component-navigation__navbar-menu-backdrop--active"
				);
			}
		}
	});

	return (
		<header className="component-navigation" role="navigation">
			<nav className="component-navigation__navbar">
				<Brand />
				<Menu />
			</nav>
		</header>
	);
};

export default Navbar;
