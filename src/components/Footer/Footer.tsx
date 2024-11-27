// Footer.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FooterContainer, SocialIcons } from './Footer.styles';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <SocialIcons>
        <a
          href="https://github.com/Youngi102"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>
        <a
          href="https://linkedin.com/in/tomas-gres"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
        <a
          href="mailto:tomasgres2001@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope as any} /> Gmail
        </a>
      </SocialIcons>
    </FooterContainer>
  );
};

export default Footer;
