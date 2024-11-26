import styled from 'styled-components';

export const NavbarContainer = styled.div<{ isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  background-color: #333333;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: 9999;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  /* Slide up when not visible */
  transform: ${({ isVisible }) =>
    isVisible ? 'translateY(0)' : 'translateY(-100%)'};
`;

export const NavbarTitle = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 15px;
`;

export const NavLink = styled.button`
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1em;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #35bcbf;
  }
`;
