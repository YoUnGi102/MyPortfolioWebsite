import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable'; // Import the library
import projectsData, { Project } from '../../data/projects';
import {
  CarouselContainer,
  CarouselContent,
  CarouselCard,
  SideButton,
  CarouselDots,
  CarouselDot,
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
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  // Configure swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext, // Swipe left moves to the next project
    onSwipedRight: handlePrev, // Swipe right moves to the previous project
    trackMouse: true, // Optional: Enables mouse dragging for desktop
  });

  return (
    <Section>
      <SectionTitle>Projects</SectionTitle>
      <CarouselContainer {...swipeHandlers}>
        <SideButton direction="left" onClick={handlePrev}>
          {'<'}
        </SideButton>
        <CarouselContent currentIndex={currentIndex}>
          {projectsData.map((project, index) => (
            <CarouselCard
              key={index}
              isActive={index === currentIndex}
              onClick={() => handleCardClick(project)}
            >
              <ProjectThumbnail src={project.thumbnail} alt={project.title} />
              <ProjectInfo>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
              </ProjectInfo>
            </CarouselCard>
          ))}
        </CarouselContent>
        <SideButton direction="right" onClick={handleNext}>
          {'>'}
        </SideButton>
      </CarouselContainer>

      {/* Dots Navigation */}
      <CarouselDots>
        {projectsData.map((_, index) => (
          <CarouselDot
            key={index}
            isActive={index === currentIndex}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </CarouselDots>

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
