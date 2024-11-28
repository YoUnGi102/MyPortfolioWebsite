import React, { useState, useEffect, useRef } from 'react';
import {
  NavbarContainer,
  NavLinks,
  NavLink,
  NavbarTitle,
  HamburgerMenu,
  MobileMenu,
} from './Navbar.styles';

const Navbar: React.FC<{
  onNavigate: (sectionId: string) => void;
  onMenuToggle?: (menuHeight: number) => void; // Notify about menu height
}> = ({ onNavigate, onMenuToggle }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (onMenuToggle && mobileMenuRef.current) {
      const menuHeight = isMobileMenuOpen
        ? mobileMenuRef.current.offsetHeight
        : 0;
      onMenuToggle(menuHeight); // Pass height to parent
    }
  }, [isMobileMenuOpen, onMenuToggle]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleNavigation = (sectionId: string) => {
    onNavigate(sectionId);
    setIsMobileMenuOpen(false); // Close menu after navigation
  };

  return (
    <NavbarContainer isVisible={isVisible}>
      <NavbarTitle>My Portfolio</NavbarTitle>
      <HamburgerMenu onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? '✖' : '☰'}
      </HamburgerMenu>
      <NavLinks>
        <NavLink onClick={() => handleNavigation('about')}>About Me</NavLink>
        <NavLink onClick={() => handleNavigation('skills')}>Skills</NavLink>
        <NavLink onClick={() => handleNavigation('experience')}>
          Work Experience
        </NavLink>
        <NavLink onClick={() => handleNavigation('education')}>
          Education
        </NavLink>
        <NavLink onClick={() => handleNavigation('projects')}>Projects</NavLink>
        <NavLink onClick={() => handleNavigation('hobbies')}>Hobbies</NavLink>
      </NavLinks>
      <MobileMenu ref={mobileMenuRef} isOpen={isMobileMenuOpen}>
        <NavLink onClick={() => handleNavigation('about')}>About Me</NavLink>
        <NavLink onClick={() => handleNavigation('skills')}>Skills</NavLink>
        <NavLink onClick={() => handleNavigation('experience')}>
          Work Experience
        </NavLink>
        <NavLink onClick={() => handleNavigation('education')}>
          Education
        </NavLink>
        <NavLink onClick={() => handleNavigation('projects')}>Projects</NavLink>
        <NavLink onClick={() => handleNavigation('hobbies')}>Hobbies</NavLink>
      </MobileMenu>
    </NavbarContainer>
  );
};

export default Navbar;
