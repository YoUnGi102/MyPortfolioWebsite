import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { CVButton } from './CVDownloadButton.styles';

const CVDownloadButton: React.FC = () => {
  return (
    <CVButton href="files/Tomas_Gres_CV.pdf" download>
      <FontAwesomeIcon icon={faFileDownload as any} />
      <span className="tooltip">Download CV</span>
    </CVButton>
  );
};

export default CVDownloadButton;
