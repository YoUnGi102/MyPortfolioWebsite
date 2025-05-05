import styled from 'styled-components';

export const NavbarContainer = styled.div<{ isVisible: boolean }>`
  position: fixed;
  box-sizing: border-box;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isVisible }) =>
    isVisible ? 'translateY(0)' : 'translateY(-100%)'};
  z-index: 1000;

  @media (max-width: 966px) {
    padding: 10px;
  }
`;

export const NavbarTitle = styled.h1`
  font-size: 1.5em;
  margin: 0;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 966px) {
    display: none;
  }
`;

export const NavLink = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 1em;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #35bcbf;
  }
`;

export const HamburgerMenu = styled.button`
  display: none;
  font-size: 1.5em;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;

  @media (max-width: 966px) {
    display: block;
  }
`;

export const MobileMenu = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  margin-top: 31px;
  padding: 30px 0;
  flex-direction: column;
  gap: 30px;
  position: absolute;
  box-sizing: border-box;
  top: 50px;
  left: 0;
  width: 100%;
  background-color: #333;
  padding: 20px;
  z-index: 999;

  @media (min-width: 967px) {
    display: none;
  }
`;
