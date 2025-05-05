import React from 'react';
import data from '../../../data';
import './EducationAndCourses.css';
import EducationCard from './EducationCard';
import CourseCard from './CourseCard';

const EducationAndCourses: React.FC = () => {
  return (
    <section className="section">
      <h2 className="section-title">Education</h2>
      <div className="education-grid">
        {data.education.map((edu) => (
          <EducationCard item={edu} />
        ))}
      </div>

      <h2 className="section-title" style={{ marginTop: '4rem' }}>
        Courses
      </h2>
      <div className="course-grid">
        {data.courses.map((course) => (
          <CourseCard item={course} />
        ))}
      </div>
    </section>
  );
};

export default EducationAndCourses;
