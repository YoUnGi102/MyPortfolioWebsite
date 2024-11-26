import React from 'react';
import { Section, SectionTitle } from '../AboutMe/AboutMe.styles';
import { HobbiesContainer, HobbyCard } from './Hobbies.styles';
const hobbies = [
  'Cycling',
  'Reading Sci-Fi Books',
  'Photography',
  'Gaming',
  'Cooking',
  'Traveling',
];

const Hobbies: React.FC = () => {
  return (
    <Section>
      <SectionTitle>Hobbies</SectionTitle>
      <HobbiesContainer>
        {hobbies.map((hobby, index) => (
          <HobbyCard key={index}>{hobby}</HobbyCard>
        ))}
      </HobbiesContainer>
    </Section>
  );
};

export default Hobbies;
