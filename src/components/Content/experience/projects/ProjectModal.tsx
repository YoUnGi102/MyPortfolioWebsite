import React from 'react';
import { ProjectItem } from '../ProjectCard';
import './ProjectModal.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

interface ProjectModalProps {
  onClose: () => void;
  project?: ProjectItem | null;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ onClose, project }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ✕
        </button>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <h4>Tech Stack</h4>
        <ul>
          {project.techStack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
        <div className="project-link-container">
          {project.projectLinks?.length &&
            project.projectLinks.map((link) => (
              <a href={link.url} className="project-link" target={'_blank'}>
                {link.icon && (
                  <FontAwesomeIcon icon={link.icon as IconDefinition} />
                )}
                {` ${link.title}`}
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
