import React, { useState } from 'react';
import Modal from 'react-modal';
import projects, { Project } from '../data/projects';
import {
  TimelineContainer,
  TimelineEntryContainer,
  Thumbnail,
  ProjectInfo,
  YearLabel,
  ProjectTitle,
  ProjectDescription,
  ModalContent,
  ModalTitle,
  CloseButton,
  TechnologiesContainer,
  TechnologyTag,
  GithubLink,
  FullDescription,
} from './Timeline.styles';

Modal.setAppElement('#root');

const Timeline: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <TimelineContainer>
      {projects.map((project, index) => (
        <TimelineEntryContainer
          key={index}
          isEven={index % 2 === 0}
          onClick={() => openModal(project)}
        >
          <Thumbnail src={project.thumbnail} alt={project.title} />
          <ProjectInfo>
            <YearLabel>{project.year}</YearLabel>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
          </ProjectInfo>
        </TimelineEntryContainer>
      ))}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            maxWidth: '500px',
            margin: 'auto',
            padding: '20px',
            borderRadius: '10px',
            backgroundColor: '#333',
            color: '#fff',
            position: 'relative',
          },
        }}
      >
        {selectedProject && (
          <ModalContent>
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            <ModalTitle>{selectedProject.title}</ModalTitle>
            <YearLabel>{selectedProject.year}</YearLabel>

            <p>{selectedProject.description}</p>

            {/* Full Description */}
            <FullDescription>{selectedProject.fullDescription}</FullDescription>

            {/* Technologies Used */}
            <TechnologiesContainer>
              <h4>Technologies Used:</h4>
              {selectedProject.technologies.map((tech, index) => (
                <TechnologyTag key={index}>{tech}</TechnologyTag>
              ))}
            </TechnologiesContainer>

            {/* GitHub Link (Optional) */}
            {selectedProject.githubLink && (
              <GithubLink
                href={selectedProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </GithubLink>
            )}
          </ModalContent>
        )}
      </Modal>
    </TimelineContainer>
  );
};

export default Timeline;
