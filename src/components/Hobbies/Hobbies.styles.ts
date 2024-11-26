import styled from 'styled-components';

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
