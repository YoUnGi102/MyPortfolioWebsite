import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import './ProjectCard.css';

export interface ProjectLink {
  icon?: IconDefinition,
  title: string;
  url: string;
}

export interface ProjectItem {
  logo: string;
  title: string;
  description: string;
  techStack: string[];
  projectLinks?: ProjectLink[]; 
}

const ProjectCard = ({ item, onDetail }: { item: ProjectItem, onDetail: () => void }) => {
  return (
    <div className="project-card" key={item.title}>
      <div className="logo">
        <img src={item.logo} alt={`${item.title} logo`} />
      </div>

      <div className="title">
        <h3>{item.title}</h3>
      </div>

      <div className="description">
        <p>
          {item.description.length > 200
            ? `${item.description.slice(0, 200)}...`
            : item.description}
        </p>
      </div>

      <div className="tech-stack">
          {item.techStack.map((tech, index) => (
            <span className="tech-skill" key={index}>
              {tech}
            </span>
          ))}
      </div>

      <button className="links" onClick={onDetail}>View Details</button>
    </div>
  );
};

export default ProjectCard;
