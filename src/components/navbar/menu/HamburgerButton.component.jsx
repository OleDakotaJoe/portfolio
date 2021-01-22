import React from "react";

const HamburgerButton = () => {
	return (
		<div className="component-navigation__navbar-hamburger-button--container">
			<input
				className="component-navigation__navbar-hamburger-button--checkbox"
				type="checkbox"
				id="menu-button"
			/>
			<label
				className="component-navigation__navbar-hamburger-button--checkbox-label"
				htmlFor="menu-button"
			></label>
			<div className="component-navigation__navbar-hamburger-button--button">
				&nbsp;
			</div>
		</div>
	);
};

export default HamburgerButton;
