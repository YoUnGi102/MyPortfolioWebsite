// AboutMe.tsx
import React, { useState } from 'react';
import skillsData, { Skill } from '../data/skills'; // Import skills
import projectsData, { Project } from '../data/projects'; // Import projects
import {
  AboutContainer,
  Header,
  ProfileImage,
  Title,
  Subtitle,
  Section,
  SectionTitle,
  Text,
  SkillsGrid,
  SkillCard,
  SkillName,
  StarsContainer,
  FilterContainer,
  FilterButton,
  EducationContainer,
  EducationCard,
  InstitutionLogo,
  EducationDetails,
  Institution,
  Program,
  Location,
  Duration,
  ExperienceCard,
  ExperienceTitle,
  ExperienceSubTitle,
  ProjectsGrid,
  ProjectCard,
  ProjectThumbnail,
  ProjectInfo,
  ProjectTitle,
  ProjectDescription,
} from './AboutMe.styles';

const AboutMe: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>(skillsData); // Load skills from data
  const [sortOption, setSortOption] = useState<
    'high-low' | 'low-high' | 'a-z' | 'z-a' | 'three-plus'
  >('high-low');

  // Sorting and filtering logic for skills
  const processedSkills = skills
    .filter((skill) => (sortOption === 'three-plus' ? skill.stars >= 3 : true)) // Filter for 3+ stars
    .sort((a, b) => {
      if (sortOption === 'high-low') return b.stars - a.stars; // High to Low (Stars)
      if (sortOption === 'low-high') return a.stars - b.stars; // Low to High (Stars)
      if (sortOption === 'a-z') return a.name.localeCompare(b.name); // A-Z
      if (sortOption === 'z-a') return b.name.localeCompare(a.name); // Z-A
      return 0;
    });

  return (
    <AboutContainer>
      {/* Header Section */}
      <Header>
        <ProfileImage src="/profile.jpg" alt="Tomas Gres" />
        <Title>Tomáš Greš</Title>
        <Subtitle>Software Engineer / Developer</Subtitle>
      </Header>

      {/* Biography Section */}
      <Section>
        <SectionTitle>About Me</SectionTitle>
        <Text>
          I'm a software engineer / developer with experience in back-end and
          front-end development.
        </Text>
      </Section>

      {/* Skills Section */}
      <Section>
        <SectionTitle>Skills</SectionTitle>
        <FilterContainer>
          <span>Sort by:</span>
          <FilterButton
            onClick={() => setSortOption('high-low')}
            active={sortOption === 'high-low'}
          >
            High to Low (Experience)
          </FilterButton>
          <FilterButton
            onClick={() => setSortOption('low-high')}
            active={sortOption === 'low-high'}
          >
            Low to High (Experience)
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
          <FilterButton
            onClick={() => setSortOption('three-plus')}
            active={sortOption === 'three-plus'}
          >
            3+ Stars
          </FilterButton>
        </FilterContainer>

        <SkillsGrid>
          {processedSkills.map((skill, index) => (
            <SkillCard key={index}>
              <SkillName>{skill.name}</SkillName>
              <StarsContainer>
                {'★'.repeat(skill.stars)}
                {'☆'.repeat(5 - skill.stars)}
              </StarsContainer>
            </SkillCard>
          ))}
        </SkillsGrid>
      </Section>

      {/* Work Experience Section */}
      <Section>
        <SectionTitle>Work Experience</SectionTitle>
        <ExperienceCard>
          <ExperienceTitle>Full Stack Developer</ExperienceTitle>
          <ExperienceSubTitle>Wise Home, 2023</ExperienceSubTitle>
          <Text>
            Worked on developing scalable applications for building resource
            optimization. Built backend services using Node.js and PostgreSQL.
          </Text>
        </ExperienceCard>
        <ExperienceCard>
          <ExperienceTitle>Intern - Full Stack Developer</ExperienceTitle>
          <ExperienceSubTitle>Tech Startup, 2022</ExperienceSubTitle>
          <Text>
            Developed features for React frontend and Node.js backend.
            Integrated Redux for state management and TypeORM for database
            operations.
          </Text>
        </ExperienceCard>
      </Section>

      {/* Education Section */}
      <Section>
        <SectionTitle>Education</SectionTitle>
        <EducationContainer>
          <EducationCard>
            <InstitutionLogo
              href="https://www.via.dk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/education/via_logo.png"
                alt="VIA University College Logo"
              />
            </InstitutionLogo>
            <EducationDetails>
              <Institution>VIA University College Horsens</Institution>
              <Program>Software Technology Engineering</Program>
              <Location>Horsens, Denmark</Location>
              <Duration>Sep 2021 - Jan 2025</Duration>
            </EducationDetails>
          </EducationCard>

          <EducationCard>
            <InstitutionLogo
              href="https://www.spse-po.sk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/education/spse_logo.png"
                alt="Secondary Vocational School Logo"
              />
            </InstitutionLogo>
            <EducationDetails>
              <Institution>
                Secondary Vocational School of Electrical Engineering
              </Institution>
              <Program>Information and Networking Technologies</Program>
              <Location>Prešov, Slovakia</Location>
              <Duration>2017 - 2021</Duration>
            </EducationDetails>
          </EducationCard>
        </EducationContainer>
      </Section>

      {/* Projects Section */}
      <Section>
        <SectionTitle>Projects</SectionTitle>
        <ProjectsGrid>
          {projectsData.map((project, index) => (
            <ProjectCard key={index}>
              <ProjectThumbnail src={project.thumbnail} alt={project.title} />
              <ProjectInfo>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
              </ProjectInfo>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Section>
    </AboutContainer>
  );
};

export default AboutMe;
