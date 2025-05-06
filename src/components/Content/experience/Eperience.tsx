import { useState } from 'react';
import data from '../../../data';
import ProjectCard, { ProjectItem } from './ProjectCard';
import ProjectModal from './projects/ProjectModal';
import WorkCard, { WorkItem } from './WorkCard';

const Experience = () => {

  const [projectDetail, setProjectDetail] = useState<ProjectItem | null>(null);

  const onClose = () => {
    setProjectDetail(null);
  } 

  return (
    <>
      <section>
        <h2>Work Experience</h2>
        <div className="work-list">
          {data.workExperience.map((work) => (
            <WorkCard item={work as WorkItem} />
          ))}
        </div>
      </section>
      <section>
        <h2>Projects</h2>
        <div className="projects-list">
          {data.projects.map((project: ProjectItem) =>
            <ProjectCard item={project as ProjectItem} onDetail={() => setProjectDetail(project)} />
          )}
          <ProjectModal project={projectDetail} onClose={onClose} />
        </div>
      </section>
    </>
  );
};

export default Experience;
