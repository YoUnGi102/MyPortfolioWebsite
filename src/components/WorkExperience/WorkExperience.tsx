import React from 'react';
import {
  ExperienceCard,
  ExperienceTitle,
  ExperienceSubTitle,
} from './WorkExperience.styles';
import { Section, SectionTitle, StyledText } from '../AboutMe/AboutMe.styles';

const WorkExperience: React.FC = () => {
  return (
    <Section>
      <SectionTitle>Work Experience</SectionTitle>
      <ExperienceCard>
        <ExperienceTitle>Full Stack Developer</ExperienceTitle>
        <ExperienceSubTitle>Wise Home, 2023</ExperienceSubTitle>
        <StyledText>
          Worked on developing scalable applications for building resource
          optimization. Built backend services using Node.js and PostgreSQL.
        </StyledText>
      </ExperienceCard>
      <ExperienceCard>
        <ExperienceTitle>Intern - Full Stack Developer</ExperienceTitle>
        <ExperienceSubTitle>Tech Startup, 2022</ExperienceSubTitle>
        <StyledText>
          Developed features for React frontend and Node.js backend. Integrated
          Redux for state management and TypeORM for database operations.
        </StyledText>
      </ExperienceCard>
    </Section>
  );
};

export default WorkExperience;
