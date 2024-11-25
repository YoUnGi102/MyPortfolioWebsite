import React, { useState } from 'react';
import {
  NavLink,
  NavbarTitle,
  NavbarContainer,
  Hamburger,
  DownloadButton,
  NavLinks,
} from './Navbar.styles';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <NavbarTitle>My Portfolio</NavbarTitle>

      <Hamburger onClick={toggleMenu}>{isOpen ? '✖' : '☰'}</Hamburger>

      <NavLinks isOpen={isOpen}>
        <NavLink to="/" onClick={() => setIsOpen(false)}>
          Projects
        </NavLink>
        <NavLink to="/about" onClick={() => setIsOpen(false)}>
          About Me
        </NavLink>
        <NavLink to="/contact" onClick={() => setIsOpen(false)}>
          Contact
        </NavLink>
        <DownloadButton
          href="/Tomas_Gres_CV.pdf"
          download
          onClick={() => setIsOpen(false)}
        >
          Download CV
        </DownloadButton>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
