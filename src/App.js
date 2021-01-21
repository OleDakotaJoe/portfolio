import Navbar from "./components/navbar/Navigation.component";
import AboutSection from "./components/about-section/AboutSection.container";
import HeroSection from "./components/hero/hero.container";

function App() {
	return (
		<div className="site-wrapper">
			<Navbar />
			<HeroSection />
			<AboutSection />
		</div>
	);
}

export default App;
