import React, { useState, useEffect } from 'react';
import {
  NavbarContainer,
  NavLinks,
  NavLink,
  NavbarTitle,
} from './Navbar.styles';

const Navbar: React.FC<{
  onNavigate: (sectionId: string) => void;
}> = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false); // Hide navbar when scrolling down
      } else {
        setIsVisible(true); // Show navbar when scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <NavbarContainer isVisible={isVisible}>
      <NavbarTitle>My Portfolio</NavbarTitle>
      <NavLinks>
        <NavLink onClick={() => onNavigate('about')}>About Me</NavLink>
        <NavLink onClick={() => onNavigate('skills')}>Skills</NavLink>
        <NavLink onClick={() => onNavigate('experience')}>
          Work Experience
        </NavLink>
        <NavLink onClick={() => onNavigate('education')}>Education</NavLink>
        <NavLink onClick={() => onNavigate('projects')}>Projects</NavLink>
        <NavLink onClick={() => onNavigate('hobbies')}>Hobbies</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
