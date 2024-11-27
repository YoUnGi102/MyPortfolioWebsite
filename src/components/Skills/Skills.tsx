import React, { useState } from 'react';
import skillsData from '../../data/skills';
import {
  SkillsGrid,
  SkillCard,
  SkillName,
  StarsContainer,
  FilterContainer,
  FilterButton,
  ToggleButton,
} from './Skills.styles';
import { Section, SectionTitle } from '../AboutMe/AboutMe.styles';

const Skills: React.FC = () => {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [sortOption, setSortOption] = useState<
    'a-z' | 'z-a' | 'high-low' | 'low-high'
  >('high-low');

  // Filtered skills based on the best skills toggle
  const filteredSkills = showAllSkills
    ? skillsData
    : skillsData.filter((skill) => skill.stars >= 4);

  // Sorting logic
  const sortedSkills = [...filteredSkills].sort((a, b) => {
    if (sortOption === 'high-low') return b.stars - a.stars; // Sort by stars descending
    if (sortOption === 'low-high') return a.stars - b.stars; // Sort by stars ascending
    if (sortOption === 'a-z') return a.name.localeCompare(b.name); // Sort alphabetically (A-Z)
    if (sortOption === 'z-a') return b.name.localeCompare(a.name); // Sort alphabetically (Z-A)
    return 0;
  });

  return (
    <Section>
      <SectionTitle>Skills</SectionTitle>

      {/* Sorting and Filtering Options */}
      <FilterContainer>
        <span>Sort by:</span>
        <FilterButton
          onClick={() => setSortOption('high-low')}
          active={sortOption === 'high-low'}
        >
          High to Low
        </FilterButton>
        <FilterButton
          onClick={() => setSortOption('low-high')}
          active={sortOption === 'low-high'}
        >
          Low to High
        </FilterButton>
        <FilterButton
          onClick={() => setSortOption('a-z')}
          active={sortOption === 'a-z'}
        >
          A-Z
        </FilterButton>
        <FilterButton
          onClick={() => setSortOption('z-a')}
          active={sortOption === 'z-a'}
        >
          Z-A
        </FilterButton>
      </FilterContainer>

      {/* Skills Grid */}
      <SkillsGrid>
        {sortedSkills.map((skill, index) => (
          <SkillCard key={index}>
            <SkillName>{skill.name}</SkillName>
            <StarsContainer>
              {'★'.repeat(skill.stars)}
              {'☆'.repeat(5 - skill.stars)}
            </StarsContainer>
          </SkillCard>
        ))}
      </SkillsGrid>

      {/* Toggle Button */}
      <ToggleButton onClick={() => setShowAllSkills(!showAllSkills)}>
        {showAllSkills ? 'Show Top Skills Only' : 'Show All Skills'}
      </ToggleButton>
    </Section>
  );
};

export default Skills;
