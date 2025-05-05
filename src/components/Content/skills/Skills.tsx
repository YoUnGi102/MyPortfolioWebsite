import data from '../../../data';
import SkillsCard from './SkillsCard';
import '../index.css';

const Skills = () => {
  return (
    <div className="Skills section-container">
      <h2 className="section-title">Skills</h2>
      <div className="section-content">
        {data.skills.map((skill) => (
          <SkillsCard name={skill.name} level={skill.level} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
