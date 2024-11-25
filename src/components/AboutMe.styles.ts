// AboutMe.styles.ts
import styled from 'styled-components';

export const AboutContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Header = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h1`
  font-size: 2.5em;
  color: #333;
  margin: 0;
`;

export const Subtitle = styled.h2`
  font-size: 1.5em;
  color: #666;
  margin: 0;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SectionTitle = styled.h2`
  font-size: 2em;
  color: #444;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  font-size: 1em;
  color: #555;
  line-height: 1.6;
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 10px;
`;

export const Skill = styled.div`
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
  font-size: 0.9em;
  color: #333;
`;

export const ExperienceCard = styled.div`
  background-color: #f7f7f7;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ExperienceTitle = styled.h3`
  font-size: 1.2em;
  color: #444;
  margin: 0;
`;

export const ExperienceSubTitle = styled.h4`
  font-size: 1em;
  color: #666;
  margin: 5px 0;
`;

export const ContactButton = styled.button`
  padding: 10px 20px;
  background-color: #444;
  color: #fff;
  font-size: 1em;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }
`;

// AboutMe.styles.ts
export const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 1.2em;
    color: #444;
    transition: color 0.3s ease;

    &:hover {
      color: #333;
    }
  }
`;
