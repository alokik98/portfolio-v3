import ProjComp from "../../components/projectComponent/ProjComp";
import CyberFiction from "../../assets/projectImages/CyberFiction.png";
import EvolutionGym from "../../assets/projectImages/EvolutionGym.png";
import MoviesFinder from "../../assets/projectImages/MoviesFinder.png";
import QuoteMachine from "../../assets/projectImages/QuoteMachine.png";
import HTMLInterpreter from "../../assets/projectImages/HTMLInterpreter.png"


const ProjectSection = () => {

	const projects = [
		{
			img: CyberFiction,
			web_link: "https://animation-website-2.vercel.app/",
			title: "CyberFiction Clone",
			description: "A basic clone of website featured on awards. Learn more about GSAP and locomotive Scroll",
			credentails: {},
			skills: ["GSAP", "Locomotive Scroll", "Canvas", "JavaScript"],
		},
		{
			img: EvolutionGym,
			web_link: "https://gym-fitness-typescript.vercel.app/",
			title: "Evolutionary Gym",
			description: "A gym website landing page created to learn TypeScript with React.",
			credentails: {},
			skills: ["TypeScript", "React", "CSS"],
		},
		{
			img: MoviesFinder,
			web_link: "https://movies-finder-9b6fd.web.app/",
			title: "Movies Finder",
			description: "A website created using TMDB API to fetch and show movies and tv shows information.",
			credentails: {
				email: "Email: demoUser@gmail.com",
				pass: "Pass: demoUser@12345",
			},
			skills: ["Firebase", "React", "CSS", "Redux"],
		},
		{
			img: QuoteMachine,
			web_link: "https://random-quote-machine-wine.vercel.app/",
			title: "Random Quote Machine",
			description: "A simple WebApp created as a project to learn about the working of API’s.",
			credentails: {},
			skills: ["React", "JavaScript", "CSS"],
		},
		{
			img: HTMLInterpreter,
			web_link: "https://html-live-interpreter.vercel.app/",
			title: "HTML Live Interpreter",
			description: "A basic website to understand the working of HTML, CSS, Javascript.",
			credentails: {},
			skills: ["HTML", "CSS", "JavaScript"],
		}
	]

	return (
		<div className="mt-5 mb-5">
			<hr />
			<div className="flex min-h-[50vh] mt-24 justify-between sm:flex-col">
				<div className="w-1/2 sm:w-full sm:mb-5">
					<header className="text-4xl">Projects</header>
				</div>
				<div className="md:w-2/3 2xl:w-[70%]">
					{
						projects.map((project, i) => (
							<ProjComp project={project} id={i + 1} key={i} />
						))
					}
				</div>
			</div>
		</div>
	);
};

export default ProjectSection;
