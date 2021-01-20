import React, { useEffect } from "react";
import "./navigation.component.scss";
import Menu from "./menu/Menu.component";
import Brand from "./brand/Brand.component";

const Header = () => {
	useEffect(() => {
		const menu = document.getElementById("navbar-menu");
		const backdrop = document.getElementById("menu-backdrop");
		const checkbox = document.getElementById("menu-button");
		checkbox.addEventListener("change", displayMenu);
		function displayMenu() {
			if (checkbox.checked) {
				menu.classList.add("header__navbar-menu--active");
				backdrop.classList.add("header__navbar-menu-backdrop--active");
			} else {
				menu.classList.remove("header__navbar-menu--active");
				backdrop.classList.remove("header__navbar-menu-backdrop--active");
			}
		}
	});

	return (
		<header className="header" role="navigation">
			<nav className="header__navbar">
				<Brand />
				<Menu />
			</nav>
		</header>
	);
};

export default Header;
