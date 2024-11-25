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
} from './Timeline.styles';
Modal.setAppElement('#root');

const Timeline = () => {
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
          onClick={() => openModal(project)} // Handle click on the entire container
          role="button" // Improves accessibility
          tabIndex={0} // Makes it keyboard-navigable
          onKeyDown={(e) => e.key === 'Enter' && openModal(project)} // Handle "Enter" key for accessibility
        >
          <Thumbnail src={project.thumbnail} alt={project.title} />
          <ProjectInfo>
            <YearLabel>{project.year}</YearLabel>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
          </ProjectInfo>
        </TimelineEntryContainer>
      ))}

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        {selectedProject && (
          <ModalContent>
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            <ModalTitle>{selectedProject.title}</ModalTitle>
            <p>{selectedProject.description}</p>

            <TechnologiesContainer>
              <h4>Technologies Used:</h4>
              {selectedProject.technologies.map((tech, index) => (
                <TechnologyTag key={index}>{tech}</TechnologyTag>
              ))}
            </TechnologiesContainer>
          </ModalContent>
        )}
      </Modal>
    </TimelineContainer>
  );
};

export default Timeline;
