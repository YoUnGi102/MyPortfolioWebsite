import styled, { keyframes } from 'styled-components';

export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  overflow: hidden;
`;

export const CarouselContent = styled.div<{ currentIndex: number }>`
  display: flex;
  width: 90%;
  margin: 0 5%;
  transition: transform 0.5s ease-in-out;
  transform: ${({ currentIndex }) => `translateX(-${currentIndex * 100}%)`};
`;

export const CarouselCard = styled.div<{ isActive: boolean }>`
  flex: 0 0 100%; /* Full width for each card */
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transform: ${({ isActive }) => (isActive ? 'scale(1)' : 'scale(0.9)')};
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #333;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  height: 450px;
  box-sizing: border-box;
`;

export const SideButton = styled.button<{ direction: 'left' | 'right' }>`
  position: absolute;
  top: 0;
  bottom: 0;
  ${({ direction }) => (direction === 'left' ? 'left: 0;' : 'right: 0;')}
  width: 30px;
  background-color: rgba(35, 35, 35, 0.5);
  color: #fff;
  border: none;
  cursor: pointer;
  display: flex;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;
  z-index: 1; /* Ensure buttons are above other content */

  &:hover {
    background-color: rgba(53, 188, 191, 0.8);
  }

  &:active {
    background-color: rgba(53, 188, 191, 1);
  }
`;

export const CarouselDots = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;

export const CarouselDot = styled.button<{ isActive: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ isActive }) => (isActive ? '#35bcbf' : '#ccc')};
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #35bcbf;
  }
`;

export const ProjectThumbnail = styled.img`
  width: 100%;
  max-width: 300px;
  height: 200px;
  border-radius: 8px;
  object-fit: cover;
  margin-bottom: 15px;
`;

export const ProjectInfo = styled.div`
  text-align: center;
  color: #fff;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin: 0 0 10px;
`;

export const ProjectDescription = styled.p`
  font-size: 0.9rem;
  color: #ccc;
  margin: 0;
`;

// Modal animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease-in-out;
`;

export const ModalContent = styled.div`
  background-color: #333;
  color: #fff;
  width: 90%;
  max-width: 500px;
  border-radius: 8px;
  padding: 20px;
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  animation: ${fadeIn} 0.3s ease-in-out;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #35bcbf;
  }
`;

export const ModalTechnologies = styled.div`
  margin-top: 20px;

  strong {
    display: block;
    margin-bottom: 10px;
    color: #fff;
    font-size: 1.2em;
  }

  ul {
    padding-left: 20px;
    list-style: disc;

    li {
      margin-bottom: 5px;
      color: #ccc;
      font-size: 1em;
    }
  }
`;
