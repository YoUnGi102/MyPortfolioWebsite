import ImagePreviewModal from '../../ImagePreviewModal';
import './CourseCard.css';

export interface CourseItem {
  title: string;
  logo: string;
  institution: string;
  file: string;
  achieved: string;
  verify: string;
}

const CourseCard = ({ item }: { item: CourseItem }) => {
  return (
    <div className="course-card" key={item.title}>
      <img src={item.logo} alt={`${item.institution} logo`} className="logo" />
      <strong className="title">{item.title}</strong>
      <ImagePreviewModal src={item.file} alt={item.title} />
      <p className="achieved">Achieved: {item.achieved}</p>
      <a className="verify" href={item.verify}>
        Verify
      </a>
    </div>
  );
};

export default CourseCard;
