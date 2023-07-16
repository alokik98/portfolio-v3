import "./App.css";
import About from "./sections/aboutmeSection/about";
import Experience from "./sections/experienceSection/experience";
import Main from "./sections/mainSection/main";
import ProjectSection from "./sections/projectSection/projectSection";

function App() {
	return (
		<>
			<div className="app">
				<Main />
				<div id="about">
					<About />
				</div>
				<div id="experience">
					<Experience />
				</div>
				<div id="projects">
					<ProjectSection />
				</div>
			</div>
		</>
	);
}

export default App;
