import React, { useContext } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { MobileMenuContext } from "./Menu.component.jsx";

const MenuButton = ({ link, content, offset, internal }) => {
	const { isActive, toggleMobileMenu } = useContext(MobileMenuContext);

	const closeMobileMenu = () => {
		if (isActive) {
			toggleMobileMenu();
		}
	};

	const anchorElement = internal ? (
		<AnchorLink
			href={link}
			offset={offset}
			className="component-navigation__navbar-menu--link"
		>
			{content}
		</AnchorLink>
	) : (
		<a href={link} className="component-navigation__navbar-menu--link">
			{content}
		</a>
	);
	return (
		<li
			onClick={closeMobileMenu}
			className="component-navigation__navbar-menu--option"
		>
			{anchorElement}
		</li>
	);
};

export default MenuButton;
