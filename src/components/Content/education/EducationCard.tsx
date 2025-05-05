import React from 'react';
import './EducationCard.css'; // You can use the same styles or separate if preferred

type EducationItem = {
  logo: string;
  institution: string;
  major: string;
  type: string;
  location: string;
  start: string;
  end: string;
};

const EducationCard: React.FC<{ item: EducationItem }> = ({ item }) => {
  return (
    <div className="education-card" key={item.institution}>
      <img
        src={item.logo}
        alt={`${item.institution} logo`}
        className="logo"
      />
      <strong className='institution'>{item.institution}</strong>
      <p className='major'>{item.major}</p>
      <p className='type'>{item.type}</p>
      <p className='location'>{item.location}</p>
      <p className='duration'>{item.start} – {item.end}</p>
    </div>
  );
};

export default EducationCard;
