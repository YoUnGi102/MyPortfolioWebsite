import React from 'react';
import './WorkCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

type WorkItem = {
  position: string;
  company: string;
  description: string;
  start: string;
  end: string;
  website: string;
  logo: string;
};

const WorkCard: React.FC<{ item: WorkItem }> = ({ item }) => {
  return (
    <div className="work-card">
      <div></div>
      <img height={100} src={item.logo} />
      <h3 className="work-position">{item.position}</h3>
      <a href={item.website} target="_blank">
        <p className="work-company">
          {item.company}{' '}
          <FontAwesomeIcon
            style={{ color: 'black', marginLeft: '10px' }}
            icon={faGlobe as IconDefinition}
          />
        </p>
      </a>

      <p className="work-description">{item.description}</p>
      <p className="work-dates">
        {item.start} – {item.end}
      </p>
    </div>
  );
};

export default WorkCard;
