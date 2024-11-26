import React from 'react';
import projectsData from '../../data/projects';
import {
  ProjectsGrid,
  ProjectCard,
  ProjectThumbnail,
  ProjectInfo,
  ProjectTitle,
  ProjectDescription,
} from '../Projects/Projects.styles';
import { Section, SectionTitle } from '../AboutMe/AboutMe.styles';

const Projects: React.FC = () => {
  return (
    <Section>
      <SectionTitle>Projects</SectionTitle>
      <ProjectsGrid>
        {projectsData.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectThumbnail src={project.thumbnail} alt={project.title} />
            <ProjectInfo>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </Section>
  );
};

export default Projects;
