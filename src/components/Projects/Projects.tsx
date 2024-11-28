import React, { useState } from 'react';
import projectsData, { Project } from '../../data/projects';
import {
  CarouselContainer,
  Carousel3DContent,
  CarouselCard,
  ProjectThumbnail,
  ProjectInfo,
  ProjectTitle,
  ProjectDescription,
  CarouselButton,
} from './Projects.styles';
import { Section, SectionTitle } from '../AboutMe/AboutMe.styles';

const Projects: React.FC = () => {
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

  return (
    <Section>
      <SectionTitle>Projects</SectionTitle>
      <CarouselContainer>
        <CarouselButton onClick={handlePrev} direction="left">
          {'<'}
        </CarouselButton>
        <Carousel3DContent
          totalItems={projectsData.length}
          currentIndex={currentIndex}
        >
          {projectsData.map((project, index) => (
            <CarouselCard
              key={index}
              index={index}
              currentIndex={currentIndex}
              totalItems={projectsData.length}
            >
              <ProjectThumbnail src={project.thumbnail} alt={project.title} />
              <ProjectInfo>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
              </ProjectInfo>
            </CarouselCard>
          ))}
        </Carousel3DContent>
        <CarouselButton onClick={handleNext} direction="right">
          {'>'}
        </CarouselButton>
      </CarouselContainer>
    </Section>
  );
};

export default Projects;
