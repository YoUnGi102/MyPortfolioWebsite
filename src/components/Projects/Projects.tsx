import React, { useState } from 'react';
import projectsData, { Project } from '../../data/projects';
import {
  ProjectsGrid,
  ProjectCard,
  ProjectThumbnail,
  ProjectInfo,
  ProjectTitle,
  ProjectDescription,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalTechnologies,
} from './Projects.styles';
import { Section, SectionTitle } from '../AboutMe/AboutMe.styles';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <Section>
      <SectionTitle>Projects</SectionTitle>
      <ProjectsGrid>
        {projectsData.map((project, index) => (
          <ProjectCard key={index} onClick={() => handleCardClick(project)}>
            <ProjectThumbnail src={project.thumbnail} alt={project.title} />
            <ProjectInfo>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectsGrid>

      {/* Modal for showing project details */}
      {selectedProject && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalCloseButton onClick={closeModal}>&times;</ModalCloseButton>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.fullDescription}</p>
            <ModalTechnologies>
              <strong>Technologies Used:</strong>
              <ul>
                {selectedProject.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </ModalTechnologies>
            {selectedProject.githubLink && (
              <a
                href={selectedProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            )}
          </ModalContent>
        </ModalOverlay>
      )}
    </Section>
  );
};

export default Projects;
