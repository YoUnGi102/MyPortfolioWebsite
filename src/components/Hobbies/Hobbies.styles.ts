import styled from 'styled-components';

export const HobbiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  width: 100%;
`;

export const HobbyCard = styled.div`
  background-color: #333;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const HobbyIcon = styled.div`
  font-size: 3em;
  margin-bottom: 10px;
`;

export const HobbyName = styled.h3`
  font-size: 1.5em;
  margin-bottom: 8px;
`;

export const HobbyDescription = styled.p`
  font-size: 1em;
  color: #ccc;
`;
