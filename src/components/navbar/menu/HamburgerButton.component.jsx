import React, { useContext } from "react";
import { MobileMenuContext } from "./Menu.component.jsx";
const HamburgerButton = () => {
	const { toggleMobileMenu, isActive } = useContext(MobileMenuContext);

	return (
		<div
			className="component-navigation__navbar-hamburger-button--container"
			onClick={toggleMobileMenu}
		>
			<div
				className={`component-navigation__navbar-hamburger-button--button ${
					isActive
						? "component-navigation__navbar-hamburger-button--button--active"
						: ""
				}`}
			>
				&nbsp;
			</div>
		</div>
	);
};

export default HamburgerButton;
