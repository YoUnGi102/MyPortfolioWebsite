import React from 'react';
import experienceData from '../../data/experience'; // Import the experience data
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
      {experienceData.map((experience, index) => (
        <ExperienceCard key={index}>
          <ExperienceTitle>{experience.title}</ExperienceTitle>
          <ExperienceSubTitle>{experience.subTitle}</ExperienceSubTitle>
          <StyledText>{experience.description}</StyledText>
        </ExperienceCard>
      ))}
    </Section>
  );
};

export default WorkExperience;
