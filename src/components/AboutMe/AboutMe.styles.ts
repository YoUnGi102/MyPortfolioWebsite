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

export const StyledText = styled.p`
  font-size: 1em;
  color: #ddd;
  line-height: 1.6;
`;
