import React from 'react';
import {
  Header,
  ProfileImage,
  Title,
  Subtitle,
} from '../AboutMe/AboutMe.styles';

const AboutHeader: React.FC = () => {
  return (
    <Header>
      <ProfileImage src="files/images/profile.jpg" alt="Tomas Gres" />
      <Title>Tomáš Greš</Title>
      <Subtitle>Software Engineer / Developer</Subtitle>
    </Header>
  );
};

export default AboutHeader;
