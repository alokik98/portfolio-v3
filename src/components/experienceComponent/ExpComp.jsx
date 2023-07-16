import Skill from "../skillComponent/Skill";

const ExpComp = (props) => {
	const { year, link, company_with_post, desc, skills } = props;
	return (
		<div
			className="flex justify-between hover:bg-slate-800/50 hover:cursor-pointer rounded-lg p-5 mb-5"
			onClick={() => window.open(`${link}`, "_blank")}>
			<div className="text-end">
				<p className="text-lg text-slate-400">{year}</p>
			</div>
			<div className="flex flex-col w-3/5 justify-between">
				<a
					href={link}
					target="_blank"
					rel="noreferrer"
					className="hover:text-[#5EEAD4] text-white hover:underline">
					{company_with_post}
					<span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
							aria-hidden="true">
							<path
								fillRule="evenodd"
								d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
								clipRule="evenodd"></path>
						</svg>
					</span>
				</a>
				<p className="text-justify mt-10 text-md text-slate-300">
					{desc}
				</p>
				<div className="flex mt-10 font-bold flex-wrap justify-start items-center gap-5">
					{skills?.map((skill, index) => {
						return <Skill key={index} skill={skill} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default ExpComp;
