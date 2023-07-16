import ExpComp from "../../components/experienceComponent/ExpComp";
import resume from "../../resume.pdf";
const Experience = () => {
	return (
		<div className="mt-5 mb-5">
			<hr />
			<div className="flex h-[50vh] mt-24 justify-between">
				<div className="w-1/2">
					<header className="text-4xl">Experience</header>
				</div>
				<div className="text-justify w-1/2 flex flex-col justify-between text-xl">
					<ExpComp
						year="2022 - PRESENT"
						company_with_post="FrontEnd Developer · VoxOMos"
						desc="Deliver high-quality, robust production code for a diverse array of projects for clients and in-house."
						skills={[
							"React",
							"Django",
							"JavaScript",
							"HTML",
							"CSS",
						]}
						link="https://voxomos.ai"
					/>
					<ExpComp
						year="2021 - 2022"
						company_with_post="Intern · Replicon"
						desc="I have acquired knowledge of testing methodologies and have experience using various accessibility testing tools such as NVDA and axeDeveloper. I successfully identified and reported 5 bugs in the application using Jira."
						skills={["JIRA", "axeDeveloper", "NVDA"]}
						link="https://www.replicon.com/"
					/>
					<a
						href={resume}
						target="_blank"
						rel="noreferrer"
						className="hover:tracking-wider cursor-pointer hover:underline ">
						View full Résumé
					</a>
				</div>
			</div>
		</div>
	);
};

export default Experience;
