import data from "../../../data"
import ProjectCard, { ProjectItem } from "./ProjectCard";
import WorkCard, { WorkItem } from "./WorkCard";

const Experience = () => {
    return <>
    <section>
        <h2>Work Experience</h2>
            <div className="work-list">
                {data.workExperience.map((work) => <WorkCard item={work as WorkItem}/>)}
            </div>
        </section>
        <section>
            <h2>Projects</h2>
            <div className="projects-list">
                {data.projects.map((project) => <ProjectCard item={project as ProjectItem}/>)}
            </div>
        </section>
    </>
}

export default Experience;