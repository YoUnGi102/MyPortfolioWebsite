import styled from 'styled-components';

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  perspective: 1000px; /* Creates the 3D effect */
  overflow: hidden;
`;

export const Carousel3DContent = styled.div<{
  totalItems: number;
  currentIndex: number;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
  transform: ${({ currentIndex, totalItems }) =>
    `rotateY(${(currentIndex * 360) / totalItems}deg)`};
  transition: transform 0.8s ease-in-out;
  width: 100%;
  height: 400px;
`;

export const CarouselCard = styled.div<{
  index: number;
  currentIndex: number;
  totalItems: number;
}>`
  position: absolute;
  width: 300px;
  height: 200px;
  background-color: #333;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transform: ${({ index, totalItems }) =>
    `rotateY(${(index * 360) / totalItems}deg) translateZ(500px)`};
  transition:
    transform 0.8s ease-in-out,
    opacity 0.3s ease;
  opacity: 1;
`;

export const ProjectThumbnail = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`;

export const ProjectInfo = styled.div`
  padding: 10px;
  color: #fff;
  text-align: center;
`;

export const ProjectTitle = styled.h3`
  margin: 0 0 10px;
  font-size: 1.2rem;
`;

export const ProjectDescription = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: #ccc;
`;

export const CarouselButton = styled.button<{ direction: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  ${({ direction }) => (direction === 'left' ? 'left: 0;' : 'right: 0;')}
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  color: #fff;
  width: 40px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 10;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(53, 188, 191, 0.8);
  }

  &:active {
    background-color: rgba(53, 188, 191, 1);
  }
`;
