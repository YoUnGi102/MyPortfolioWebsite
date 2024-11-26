import styled from 'styled-components';

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
