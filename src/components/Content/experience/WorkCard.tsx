import './WorkCard.css';

export interface WorkItem {
  logo: string;
  position: string;
  company: string;
  website: string;
  description: string;
  start: string;
  end: string;
}

const WorkCard = ({ item }: { item: WorkItem }) => {
  return (
    <div className="work-card">
      <div className="logo">
        <img src={item.logo} alt={`${item.company} logo`} />
      </div>

      <div className="position">
        <h3>{item.position}</h3>
      </div>

      <div className="company">
        <p>{item.company}</p>
      </div>

      <div className="duration">
        <p>
            {item.start} - {item.end || 'Present'}
        </p>
      </div>
      
      <div className="description">
        <p>
            {item.description.length > 200 ? `${item.description.slice(0, 200)}...` : item.description}
        </p>
      </div>
      

      <div className="links">
        <a href={item.website} target="_blank" rel="noopener noreferrer" className="view-website-link">
          Visit Company Website
        </a>
      </div>
    </div>
  );
};

export default WorkCard;
