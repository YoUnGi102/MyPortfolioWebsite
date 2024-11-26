import styled from 'styled-components';

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
