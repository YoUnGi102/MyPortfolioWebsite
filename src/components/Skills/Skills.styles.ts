import styled from 'styled-components';

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(150px, 1fr)
  ); /* Flexible columns */
  gap: 20px; /* Space between cards */
  width: 100%; /* Take full width of the container */
`;

export const SkillCard = styled.div`
  background-color: #333;
  border-radius: 8px;
  text-align: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  padding: 20px; /* Add padding for better spacing */
`;

export const SkillName = styled.div`
  font-size: 1em;
  margin-bottom: 8px;
`;

export const StarsContainer = styled.div`
  color: #35bcbf; /* Star color */
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

export const ToggleButton = styled.button`
  margin-top: 20px;
  box-sizing: border-box;
  padding: 10px 20px;
  background-color: #35bcbf;
  color: #ffffff;
  font-size: 1em;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition:
    background-color 0.3s,
    transform 0.2s;

  &:hover {
    background-color: #2ba9a8;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;
