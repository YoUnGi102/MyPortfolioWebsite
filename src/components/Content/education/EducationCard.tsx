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
    <div className="education-card">
      <div className="education-header">
        <img
          src={item.logo}
          alt={`${item.institution} logo`}
          className="education-logo"
        />
        <div>
          <h3 className="education-institution">{item.institution}</h3>
          <p className="education-type">{item.type}</p>
        </div>
      </div>
      <p className="education-major">{item.major}</p>
      <p className="education-location">{item.location}</p>
      <p className="education-dates">
        {item.start} – {item.end}
      </p>
    </div>
  );
};

export default EducationCard;
