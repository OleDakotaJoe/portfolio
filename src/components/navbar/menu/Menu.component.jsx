import React from "react";
import MenuList from "./MenuList.component";
import MenuButton from "./MenuButton.component";
import MobileMenu from "./MobileMenu.component";
const Menu = () => {
	return (
		<div>
			<MenuList>
				<MenuButton link="#home" internal content="Home" />
				<MenuButton link="#about" offset={82} internal content="About" />
				{/* <MenuButton link="#" content="Portfolio" /> */}
				<MenuButton link="#contact" internal content="Contact" />
			</MenuList>
			<MobileMenu />
		</div>
	);
};

export default Menu;
