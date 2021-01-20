import React from "react";

const HamburgerButton = () => {
	return (
		<div className="header__navbar-hamburger-button--container">
			<input
				className="header__navbar-hamburger-button--checkbox"
				type="checkbox"
				id="menu-button"
			/>
			<label
				className="header__navbar-hamburger-button--checkbox-label"
				htmlFor="menu-button"
			></label>
			<div className="header__navbar-hamburger-button--button">&nbsp;</div>
		</div>
	);
};

export default HamburgerButton;
