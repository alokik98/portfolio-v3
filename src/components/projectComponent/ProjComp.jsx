import ProjSkill from "../projectSkillsComponent/ProjSkill"

const ProjComp = ({ project, id }) => {
    return (
        <a href={project.web_link} rel="noreferrer" target="_blank">
            <div className="flex w-[40vw] md:w-full lg:w-full mb-12 bg-[#122B39] p-10 justify-around rounded-xl 
            min-h-[21.875rem] sm:w-full sm:flex-col sm:items-center 2xl:w-full ">
                <div className="w-[185px] p-2 mr-4 sm:mr-0 flex items-center bg-white rounded-2xl">
                    <img src={project.img} className="w-full" />
                </div>
                <div className="flex justify-around sm:justify-center flex-col w-1/2 sm:w-full sm:mt-5">
                    <h3 className="text-4xl mb-8 font-[600] sm:text-center sm:text-2xl md:text-3xl">{project.title}</h3>
                    <p className="text-justify">{project.description}</p>
                    {
                        project.credentails ? (
                            <>
                                <p>{project.credentails.email}</p>
                                <p>{project.credentails.pass}</p>
                            </>
                        ) : null
                    }
                    <div className="flex mt-10 font-bold flex-wrap justify-start items-center sm:justify-center gap-5">
                        {
                            project.skills.map((skill, i) => (
                                <ProjSkill skill={skill} key={i} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </a >
    )
}

export default ProjComp