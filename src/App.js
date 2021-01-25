import { useEffect } from "react";
import AOS from "aos";

import Navbar from "./components/navbar/Navigation.component";
import AboutSection from "./components/about-section/AboutSection.container";
import HeroSection from "./components/hero/hero.container";
import ContactSection from "./components/contact-section/ContactSection.container";

function App() {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			offset: 100,
			once: true,
		});
		AOS.refresh();
	}, []);

	return (
		<div className="site-wrapper">
			<Navbar />
			<HeroSection />
			<AboutSection />
			<ContactSection />
		</div>
	);
}

export default App;
