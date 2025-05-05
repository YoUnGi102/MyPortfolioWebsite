import React, { useState, useEffect, useRef } from 'react';
import {
  NavbarContainer,
  NavLinks,
  NavLink,
  NavbarTitle,
  HamburgerMenu,
  MobileMenu,
} from './Navbar.styles';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC<{
  onMenuToggle?: (menuHeight: number) => void; // Notify about menu height
}> = ({ onMenuToggle }) => {
  const navigate = useNavigate();

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
      onMenuToggle(menuHeight);
    }
  }, [isMobileMenuOpen, onMenuToggle]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleNavigation = (sectionId: string) => {
    navigate(sectionId);
    setIsMobileMenuOpen(false); // Close menu after navigation
  };

  return (
    <NavbarContainer isVisible={isVisible}>
      <NavbarTitle>My Portfolio</NavbarTitle>
      <HamburgerMenu onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? '✖' : '☰'}
      </HamburgerMenu>
      <NavLinks>
        <NavLink onClick={() => handleNavigation('about-me')}>About Me</NavLink>
        <NavLink onClick={() => handleNavigation('education')}>
          Education
        </NavLink>
        <NavLink onClick={() => handleNavigation('experience')}>
          Experience
        </NavLink>
      </NavLinks>
      <MobileMenu ref={mobileMenuRef} isOpen={isMobileMenuOpen}>
        <NavLink onClick={() => handleNavigation('about-me')}>About Me</NavLink>
        <NavLink onClick={() => handleNavigation('education')}>
          Education
        </NavLink>
        <NavLink onClick={() => handleNavigation('experience')}>
          Experience
        </NavLink>
      </MobileMenu>
    </NavbarContainer>
  );
};

export default Navbar;
