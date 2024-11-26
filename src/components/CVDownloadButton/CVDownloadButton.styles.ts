import styled from 'styled-components';

export const CVButton = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background-color: #35bcbf;
  color: #fff;
  text-decoration: none;
  font-size: 1.5em;
  border-radius: 50%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  transition:
    transform 0.3s,
    background-color 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    background-color: #2ba9a8;

    .tooltip {
      opacity: 1;
      visibility: visible;
    }
  }

  &:active {
    transform: scale(0.95);
  }

  .tooltip {
    position: absolute;
    bottom: 50px;
    right: 50%;
    transform: translateX(50%);
    background-color: #333;
    color: #fff;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 0.9em;
    opacity: 0;
    visibility: hidden;
    transition:
      opacity 0.3s,
      visibility 0.3s;
  }
`;
