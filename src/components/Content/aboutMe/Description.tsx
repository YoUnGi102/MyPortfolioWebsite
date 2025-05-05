import React from 'react';
import styled from 'styled-components';

const DescriptionContainer = styled.section`
  width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto auto auto;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;

  *:nth-child(1) {
    grid-column: 1 span;
  }

  *:nth-child(2) {
    grid-column: 3 span;
    width: 100%;
  }

  @media (max-width: 966px) {
    *:nth-child(1) {
      grid-column: 4 span;
    }

    *:nth-child(2) {
      grid-column: 4 span;
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ProfileImage = styled.img`
  width: clamp(300px, 20vw, 450px);
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 50%;
  justify-self: center;
`;

const Text = styled.div`
  margin: auto;
  font-size: 1.2rem;
  line-height: 1.6;
  color: #333;
`;

const Description: React.FC = () => {
  return (
    <DescriptionContainer>
      <ProfileImage src="files/images/profile.jpg" alt="Your Name" />
      <Text>
        <p>
          Hi, I'm a passionate software engineer with a strong background in
          mathematics, physics, and computer science. I enjoy building impactful
          applications, learning new technologies, and sharing knowledge with
          others. Outside of coding, I have a deep interest in fitness, healthy
          living, and personal development.
        </p>
      </Text>
    </DescriptionContainer>
  );
};

export default Description;
