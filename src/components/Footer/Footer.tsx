// Footer.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FooterContainer, SocialIcons } from './Footer.styles';
import data from '../../data';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <SocialIcons>
        {data.socialLinks.map((social) => (
          <a
            key={social.title}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer">
            <FontAwesomeIcon icon={social.icon as IconDefinition} />{' '}
            {social.title}
          </a>
        ))}
      </SocialIcons>
    </FooterContainer>
  );
};

export default Footer;
