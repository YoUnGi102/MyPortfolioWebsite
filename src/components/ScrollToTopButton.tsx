import React, { useEffect, useState } from 'react';
import './ScrollToTopButton.css';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

const ScrollToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button className="scroll-to-top-button" onClick={scrollToTop}>
      <FontAwesomeIcon
        className={'up-arrow'}
        icon={faArrowUp as IconDefinition}
      />
    </button>
  );
};

export default ScrollToTopButton;
