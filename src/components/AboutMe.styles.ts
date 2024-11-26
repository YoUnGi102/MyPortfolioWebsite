import styled from 'styled-components';

export const AboutContainer = styled.div`
  width: 80%;
  margin: 60px auto;
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
  color: #f5f5f5;
  margin: 0;
`;

export const Subtitle = styled.h2`
  font-size: 1.5em;
  color: #888;
  margin: 0;
`;

export const Section = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SectionTitle = styled.h2`
  font-size: 2em;
  color: #f5f5f5;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  font-size: 1em;
  color: #ddd;
  line-height: 1.6;
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 20px;
`;

export const SkillCard = styled.div`
  background-color: #333;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
  color: #fff;
`;

export const SkillName = styled.div`
  font-size: 1em;
  margin-bottom: 8px;
`;

export const StarsContainer = styled.div`
  color: #35bcbf; /* Gold color for stars */
  font-size: 1.2em;
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;

  span {
    font-size: 1em;
    color: #f5f5f5;
  }
`;

export const FilterButton = styled.button<{ active: boolean }>`
  padding: 5px 10px;
  background-color: ${({ active }) => (active ? '#35bcbf' : '#444')};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #555;
  }
`;

/* Work Experience Section */
export const ExperienceCard = styled.div`
  background-color: #333;
  padding: 20px;
  border-radius: 8px;
  color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
`;

export const ExperienceTitle = styled.h3`
  font-size: 1.5em;
  color: #f5f5f5;
  margin: 0 0 10px 0;
`;

export const ExperienceSubTitle = styled.h4`
  font-size: 1.2em;
  color: #888;
  margin: 0 0 10px 0;
`;

/* Education Section */
export const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const EducationCard = styled.div`
  background-color: #333;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  gap: 20px;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
`;

export const InstitutionLogo = styled.a`
  display: block;
  width: 80px;
  height: 80px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const EducationDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Institution = styled.h3`
  font-size: 1.2em;
  color: #f5f5f5;
  margin: 0;
`;

export const Program = styled.h4`
  font-size: 1em;
  color: #ccc;
  margin: 0;
`;

export const Location = styled.p`
  font-size: 0.9em;
  color: #888;
  margin: 0;
`;

export const Duration = styled.p`
  font-size: 0.9em;
  color: #777;
  margin: 0;
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

export const ProjectCard = styled.div`
  background-color: #333;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.03);
  }
`;

export const ProjectThumbnail = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

export const ProjectInfo = styled.div`
  padding: 10px;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.2em;
  color: #f5f5f5;
  margin: 0 0 5px;
`;

export const ProjectDescription = styled.p`
  font-size: 0.9em;
  color: #ccc;
  margin: 0;
`;

export const HobbiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
`;

export const HobbyCard = styled.div`
  background-color: #333;
  color: #f5f5f5;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 1em;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CVButton = styled.a`
  position: fixed;
  bottom: 80px;
  right: 20px;
  width: 80px;
  height: 80px;
  background-color: #35bcbf;
  color: #fff;
  text-decoration: none;
  font-size: 2.5em; /* Adjust icon size */
  border-radius: 50%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition:
    transform 0.3s,
    background-color 0.3s;
  cursor: pointer;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: scale(1.1);
    background-color: #2ba9a8;

    .tooltip {
      opacity: 1;
      visibility: visible;
    }
  }

  &:active {
    transform: scale(0.95);
  }

  .tooltip {
    position: absolute;
    bottom: 80px;
    right: -20px;
    background-color: #333;
    color: #fff;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 0.5em;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition:
      opacity 0.3s,
      visibility 0.3s;
    z-index: 10000;
  }
`;
