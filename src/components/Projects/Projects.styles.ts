import styled from 'styled-components';

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  width: 100%;
`;

export const ProjectCard = styled.div`
  background-color: #333;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;
  cursor: pointer;

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
  text-align: center;
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

/* Modal Styles */
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  position: relative;

  h2 {
    margin-top: 0;
    color: #333;
  }

  p {
    font-size: 1em;
    color: #555;
    margin: 10px 0 20px;
  }

  a {
    display: inline-block;
    margin-top: 20px;
    color: #35bcbf;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s;

    &:hover {
      color: #2ba9a8;
    }
  }
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
  color: #333;

  &:hover {
    color: #000;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #444;
  padding-bottom: 10px;

  h2 {
    margin: 0;
    font-size: 1.8em;
    color: #35bcbf; /* Accent color for the title */
  }

  button {
    background: none;
    border: none;
    font-size: 1.5em;
    color: #f5f5f5;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: #fff;
    }
  }
`;

export const ModalBody = styled.div`
  p {
    font-size: 1em;
    color: #ccc;
    margin: 0;
    line-height: 1.6;
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  a {
    color: #35bcbf;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s;

    &:hover {
      color: #2ba9a8;
    }
  }
`;

export const ModalTechnologies = styled.div`
  margin-top: 20px;

  strong {
    display: block;
    margin-bottom: 10px;
    color: #35bcbf; /* Accent color for technologies section */
  }

  ul {
    list-style: disc;
    padding-left: 20px;

    li {
      font-size: 0.9em;
      color: #ccc;
    }
  }
`;
