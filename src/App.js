import Navbar from "./components/navbar/Navigation.component";
import AboutSection from "./containers/about/AboutSection.container";
import HeroSection from "./containers/hero/hero.container";

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
