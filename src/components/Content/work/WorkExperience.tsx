import data from '../../../data';
import '../index.css';
import WorkCard from './WorkCard';

const WorkExperience = () => {
  return (
    <div className="section-container">
      <h2 className="section-title">Work Experience</h2>
      <div className="section-content">
        {data.workExperience.map((item, index) => (
          <WorkCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
