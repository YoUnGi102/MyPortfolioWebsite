import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { CVButton } from './CVDownloadButton.styles';

const CVDownloadButton: React.FC = () => {
  return (
    <CVButton href="/Tomas_Gres_CV.pdf" download>
      <FontAwesomeIcon icon={faFileDownload} />
      <span className="tooltip">Download CV</span>
    </CVButton>
  );
};

export default CVDownloadButton;
