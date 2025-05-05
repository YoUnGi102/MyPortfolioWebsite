import './ProjectCard.css';

export interface ProjectItem {
  logo: string;
  title: string;
  url: string;
  description: string;
  techStack: string[];
}

const ProjectCard = ({ item }: { item: ProjectItem }) => {
  return (
    <div className="project-card">
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
        <strong>Tech Stack:</strong>
        <ul>
          {item.techStack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>

      <div className="links">
        <a href={item.url} target="_blank" rel="noopener noreferrer" className="view-project-link">
          View Live
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
