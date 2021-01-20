import React from "react";
import MenuList from "./MenuList.component";
import MenuButton from "./MenuButton.component";
import MobileMenu from "./MobileMenu.component";
const Menu = () => {
	return (
		<div>
			<MenuList>
				<MenuButton link="#" content="Home" />
				<MenuButton link="#" content="About" />
				<MenuButton link="#" content="Portfolio" />
				<MenuButton link="#" content="Contact" />
			</MenuList>
			<MobileMenu />
		</div>
	);
};

export default Menu;
