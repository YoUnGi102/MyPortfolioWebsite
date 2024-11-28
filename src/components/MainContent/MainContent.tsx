import React from 'react';
import styled from 'styled-components';

const ContentContainer = styled.div<{ menuHeight: number }>`
  margin-top: ${({ menuHeight }) => `${menuHeight}px`};
  padding: 20px;
  transition: margin-top 0.3s ease-in-out;
`;

const MainContent: React.FC<{ menuHeight: number }> = ({ menuHeight }) => {
  return (
    <ContentContainer menuHeight={menuHeight}>
      <section id="about">About Me Content</section>
      <section id="skills">Skills Content</section>
      <section id="experience">Experience Content</section>
      <section id="education">Education Content</section>
      <section id="projects">Projects Content</section>
      <section id="hobbies">Hobbies Content</section>
    </ContentContainer>
  );
};

export default MainContent;
