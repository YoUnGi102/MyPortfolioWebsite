// AboutMe.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
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
  Skill,
  ExperienceCard,
  ExperienceTitle,
  ExperienceSubTitle,
  ContactButton,
  SocialIcons,
} from './AboutMe.styles';

const AboutMe: React.FC = () => {
  return (
    <AboutContainer>
      {/* Header Section */}
      <Header>
        <ProfileImage src="/profile.jpg" alt="Your Name" />
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
        <SkillsGrid>
          <Skill>React</Skill>
          <Skill>TypeScript</Skill>
          <Skill>Node.js</Skill>
          <Skill>GraphQL</Skill>
          <Skill>PostgreSQL</Skill>
          <Skill>Python</Skill>
        </SkillsGrid>
      </Section>

      {/* Experience Section */}
      <Section>
        <SectionTitle>Experience</SectionTitle>
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

      {/* Contact Section */}
      <Section>
        <SectionTitle>Contact Me</SectionTitle>
        <ContactButton>Contact Me</ContactButton>
        <SocialIcons>
          <a
            href="https://github.com/Youngi102"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/tomas-gres"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>
          <a
            href="mailto:tomasgres2001@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} /> Gmail
          </a>
        </SocialIcons>
      </Section>
    </AboutContainer>
  );
};

export default AboutMe;
