import React from 'react';
import './Description.css';
import Typewriter from '../../../animations/Typewritter';
import '../../../animations/hover-rays.scss';

const text =
  "Hi, I´m Tomáš.\nI'm a software engineer who loves building apps, learning tech, and staying active.";

const Description: React.FC = () => {
  return (
    <section className="description-container">
      <img
        className="profile-image"
        src="files/images/profile.jpg"
        alt="Tomas Gres"
      />
      <div className="description-text">
        <Typewriter lines={[text]} />
      </div>
    </section>
  );
};

export default Description;
