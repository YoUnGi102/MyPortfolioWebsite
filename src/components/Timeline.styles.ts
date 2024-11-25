import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const GitHubIcon = styled(FontAwesomeIcon)`
  font-size: 1.5em;
  color: #333;
  margin-left: 10px;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #555;
  }
`;

// Container for the timeline with centered layout
export const TimelineContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

// Timeline.styles.ts
export const TimelineEntryContainer = styled.div<{ isEven: boolean }>`
  display: flex;
  flex-direction: ${({ isEven }) => (isEven ? 'row-reverse' : 'row')};
  align-items: center;
  gap: 20px;
  padding: 20px;
  cursor: pointer; // Makes it clear the container is clickable
  transition: background-color 0.2s ease;
  border-radius: 10px;

  &:hover {
    background-color: #f0f0f0; // Subtle hover effect
    transform: scale(1.05);
  }
`;

// Thumbnail with a larger size to make it more visible
export const Thumbnail = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
  }
`;

export const ProjectInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const YearLabel = styled.h2`
  font-size: 1.5em;
  color: #888;
  margin: 0 0 10px 0;
`;

export const ProjectTitle = styled.h3`
  font-family: 'Georgia', serif;
  font-size: 1.2em;
  color: #555;
  margin-top: 0;
`;

export const ProjectDescription = styled.p`
  font-size: 1em;
  color: #444;
  line-height: 1.6;
`;

export const ModalContent = styled.div`
  padding: 20px;
  color: #444;
  background-color: #f7f9fc;
  position: relative;
`;

export const ModalTitle = styled.h2`
  font-size: 1.5em;
  margin-right: 60px;
  color: #444;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5em;
  color: #888;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #333;
  }
`;

// Styled component for technologies section
export const TechnologiesContainer = styled.div`
  margin-top: 15px;
`;

export const TechnologyTag = styled.span`
  display: inline-block;
  background-color: #e0e0e0;
  color: #333;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.9em;
  margin: 0 5px 5px 0;
`;
