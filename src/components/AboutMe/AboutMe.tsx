import React, { useRef } from 'react';
import AboutHeader from '../AboutHeader/AboutHeader';
import Skills from '../Skills/Skills';
import WorkExperience from '../WorkExperience/WorkExperience';
import Education from '../Education/Education';
import Projects from '../Projects/Projects';
import Hobbies from '../Hobbies/Hobbies';
import Navbar from '../Navbar/Navbar';
import CVDownloadButton from '../CVDownloadButton/CVDownloadButton';
import { AboutContainer } from './AboutMe.styles';

// TODO Add more skills

const AboutMe: React.FC<{ menuHeight: number }> = ({ menuHeight }: any) => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const hobbiesRef = useRef<HTMLDivElement>(null);

  const handleNavigate = (sectionId: string) => {
    const sectionRefs: Record<string, React.RefObject<HTMLDivElement>> = {
      about: aboutRef,
      skills: skillsRef,
      experience: experienceRef,
      education: educationRef,
      projects: projectsRef,
      hobbies: hobbiesRef,
    };

    const targetRef = sectionRefs[sectionId];
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <AboutContainer menuHeight={menuHeight}>
        <div ref={aboutRef}>
          <AboutHeader />
        </div>
        <div ref={skillsRef}>
          <Skills />
        </div>
        <div ref={experienceRef}>
          <WorkExperience />
        </div>
        <div ref={educationRef}>
          <Education />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={hobbiesRef}>
          <Hobbies />
        </div>
        <CVDownloadButton />
      </AboutContainer>
    </>
  );
};

export default AboutMe;
