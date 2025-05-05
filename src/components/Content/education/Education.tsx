import data from '../../../data';
import '../index.css';
import EducationCard from './EducationCard';

const Education = () => {
  return (
    <div className="Education section-container">
      <h2 className="section-title">Education</h2>
      <div className="section-content">
        {data.education.map((education) => (
          <EducationCard item={education} />
        ))}
      </div>
    </div>
  );
};

export default Education;
