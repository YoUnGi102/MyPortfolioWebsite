// Education.styles.ts
import styled from 'styled-components';

export const EducationContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const SectionTitle = styled.h2`
  font-size: 2em;
  color: #444;
  text-align: center;
  margin-bottom: 20px;
`;

export const EducationCard = styled.div`
  background-color: #f7f7f7;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const InstitutionLogo = styled.a`
  flex-shrink: 0;
  display: inline-block;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const EducationDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Institution = styled.h3`
  font-size: 1.5em;
  color: #333;
  margin: 0;
`;

export const Program = styled.h4`
  font-size: 1.2em;
  color: #666;
  margin: 10px 0 0;
`;

export const Location = styled.p`
  font-size: 1em;
  color: #777;
  margin: 5px 0;
`;

export const Duration = styled.p`
  font-size: 1em;
  color: #555;
  margin: 5px 0 0;
`;
