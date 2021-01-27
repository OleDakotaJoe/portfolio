import React, { useEffect } from "react";
import AOS from "aos";

import Navbar from "./components/navbar/Navigation.component";
import AboutSection from "./components/about-section/AboutSection.container";
import HeroSection from "./components/hero/hero.container";
import ContactSection from "./components/contact-section/ContactSection.container";
import Footer from "./components/footer/Footer.container";
export const AnimationOffsetContext = React.createContext();

function App() {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			offset: 100,
			once: true,
		});
		AOS.refresh();
	});

	return (
		<div className="site-wrapper">
			<Navbar />
			<HeroSection />
			<AboutSection />
			<ContactSection />
			<Footer />
		</div>
	);
}

export default App;
