import React from 'react';
import data from '../../../data';
import './EducationAndCourses.css';
import ImagePreviewModal from '../../ImagePreviewModal';
import EducationCard from './EducationCard';

const EducationAndCourses: React.FC = () => {
  return (
    <section className="section">
      <h2 className="section-title">Education</h2>
      <div className="grid">
        {data.education.map((edu) => (
          <EducationCard item={edu} />
        ))}
      </div>

      <h2 className="section-title" style={{ marginTop: '4rem' }}>
        Courses
      </h2>
      <div className="grid">
        {data.courses.map((course, idx) => <div className="course-card" key={idx}>
              <img
                src={course.logo}
                alt={`${course.institution} logo`}
                className="logo"
              />
              <strong>{course.title}</strong>
              <ImagePreviewModal src={course.file} alt={course.title} />
              <div className='verify'>
                <i>Achieved: {course.achieved}</i>
                <a href={""}>Verify</a>
              </div>
            </div>
          )
  }
      </div>
    </section>
  );
};

export default EducationAndCourses;
