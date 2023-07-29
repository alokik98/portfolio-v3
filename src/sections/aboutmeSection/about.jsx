const About = () => {
	return (
		<div className="mt-5">
			<hr />
			<div className="flex min-h-[50vh] mt-24 justify-between sm:flex-col">
				<div className="w-1/2 sm:mb-5 sm:w-full">
					<header className="text-4xl">About Me</header>
				</div>
				<div className="text-justify w-1/2 sm:w-full flex flex-col justify-between text-xl">
					<p className=" sm:mb-5 md:mb-8">
						In 2019, I was introduced to the world of web
						development through a college project in which we
						created an Augmented Reality project.
					</p>
					<p className=" sm:mb-5 md:mb-8">
						Currently, my primary focus is on developing websites
						for our clients at <span className="text-teal-300">VoxOMos</span>. During my free time, I
						actively seek out knowledge about emerging web trends,
						languages, and frameworks in the market.
					</p>
					<p className=" sm:mb-5 md:mb-8">
						When I&apos;m not working or expanding my skill set, you
						can usually find me watching anime, playing table
						tennis, hanging out with friends, or keeping up with the
						latest TV shows and movies.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
