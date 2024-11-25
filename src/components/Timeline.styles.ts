import styled from 'styled-components';

export const TimelineContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  color: #f5f5f5;
`;

export const TimelineEntryContainer = styled.div<{ isEven: boolean }>`
  display: flex;
  flex-direction: ${({ isEven }) => (isEven ? 'row-reverse' : 'row')};
  align-items: center;
  gap: 20px;
  padding: 20px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #2c2c2c;
  }
`;

export const Thumbnail = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const YearLabel = styled.h4`
  font-size: 1em;
  color: #888;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.5em;
  color: #ffffff;
`;

export const ProjectDescription = styled.p`
  font-size: 1em;
  color: #cccccc;
`;

export const ModalContent = styled.div`
  color: #fff;
  background-color: #333333;
  padding: 20px;
  border-radius: 8px;
  position: relative;
`;

export const ModalTitle = styled.h2`
  font-size: 1.8em;
  margin-bottom: 10px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.5em;
  color: #ffffff;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #aaaaaa;
  }
`;

export const FullDescription = styled.p`
  font-size: 1em;
  margin: 20px 0;
  line-height: 1.6;
`;

export const TechnologiesContainer = styled.div`
  margin-top: 20px;
`;

export const TechnologyTag = styled.span`
  background-color: #555;
  color: #ffffff;
  padding: 5px 10px;
  margin-right: 5px;
  border-radius: 4px;
  font-size: 0.9em;
`;

export const GithubLink = styled.a`
  display: inline-block;
  margin-top: 20px;
  color: #35bcbf;
  font-size: 1.1em;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
