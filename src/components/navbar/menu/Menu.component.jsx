import React, { useState } from "react";
import { getElementHeight } from "../../../utils/getCSSValues.utils";

import MenuList from "./MenuList.component";
import MenuButton from "./MenuButton.component";
import MobileMenu from "./MobileMenu.component";
export const MobileMenuContext = React.createContext();

const Menu = () => {
	const [isActive, setActive] = useState(false);
	const toggleMobileMenu = () => setActive(!isActive);
	const contextController = {
		isActive: isActive,
		toggleMobileMenu: toggleMobileMenu,
	};

	const getNavbarHeight = () => {
		return getElementHeight(document.getElementById("navbar"));
	};

	return (
		<div>
			<MobileMenuContext.Provider value={contextController}>
				<MenuList>
					<MenuButton link="#home" internal content="Home" />
					<MenuButton
						link="#about"
						offset={() => getNavbarHeight()}
						internal
						content="About"
					/>
					{/* <MenuButton link="#" content="Portfolio" /> */}
					<MenuButton link="#contact" internal content="Contact" />
				</MenuList>
				<MobileMenu />
			</MobileMenuContext.Provider>
		</div>
	);
};

export default Menu;
