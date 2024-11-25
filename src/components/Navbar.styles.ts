// Navbar.styles.ts
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #333333;
  color: #ffffff;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  gap: 15px;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #333333;
    padding: 20px;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 16px;
  text-decoration: none;
  color: #ffffff;
  font-size: 1em;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
  &:hover {
    color: #aaaaaa;
  }
`;

export const DownloadButton = styled(NavLink).attrs({ as: 'a' })`
  background-color: #c35446;
  border-radius: 8px;
  color: #ffffff;
  text-decoration: none;
  font-size: 1em;
  font-weight: 500;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

export const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5em;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const NavbarTitle = styled.h1`
  font-size: 1.8em;
  font-weight: bold;
  color: #ffffff;
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  transition: color 0.3s ease;

  &:hover {
    color: #aaaaaa;
  }

  @media (max-width: 768px) {
    font-size: 1.5em;
    letter-spacing: 1px;
  }
`;
