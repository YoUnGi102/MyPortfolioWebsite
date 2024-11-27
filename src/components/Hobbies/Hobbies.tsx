import React from 'react';
import {
  HobbiesGrid,
  HobbyCard,
  HobbyIcon,
  HobbyName,
  HobbyDescription,
} from './Hobbies.styles';
import { Section, SectionTitle } from '../AboutMe/AboutMe.styles';

const hobbies = [
  {
    name: 'Chess',
    icon: '♟️',
    description: 'Sharpening my mind through strategic gameplay.',
  },
  {
    name: 'Strength Training',
    icon: '🏋️',
    description: 'Building strength and endurance in the gym.',
  },
  {
    name: '3D Printing',
    icon: '🖨️',
    description: 'Designing and creating objects using 3D printers.',
  },
  {
    name: 'Automobiles',
    icon: '🚗',
    description: 'Exploring the engineering and design of cars.',
  },
];

const Hobbies: React.FC = () => {
  return (
    <Section>
      <SectionTitle>My Hobbies</SectionTitle>
      <HobbiesGrid>
        {hobbies.map((hobby, index) => (
          <HobbyCard key={index}>
            <HobbyIcon>{hobby.icon}</HobbyIcon>
            <HobbyName>{hobby.name}</HobbyName>
            <HobbyDescription>{hobby.description}</HobbyDescription>
          </HobbyCard>
        ))}
      </HobbiesGrid>
    </Section>
  );
};

export default Hobbies;
