// Education.tsx
import React from 'react';
import {
  EducationContainer,
  SectionTitle,
  EducationCard,
  InstitutionLogo,
  EducationDetails,
  Institution,
  Program,
  Location,
  Duration,
} from './Education.styles';

const Education: React.FC = () => {
  return (
    <EducationContainer>
      <SectionTitle>Education</SectionTitle>
      <EducationCard>
        <InstitutionLogo
          href="https://www.via.dk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/education/via_logo.png"
            alt="VIA University College Logo"
          />
        </InstitutionLogo>
        <EducationDetails>
          <Institution>VIA University College Horsens</Institution>
          <Program>Software Technology Engineering</Program>
          <Location>Horsens, Denmark</Location>
          <Duration>Sep 2021 - Jan 2025</Duration>
        </EducationDetails>
      </EducationCard>

      <EducationCard>
        <InstitutionLogo
          href="https://www.spse-po.sk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/education/spse_logo.png"
            alt="Secondary Vocational School Logo"
          />
        </InstitutionLogo>
        <EducationDetails>
          <Institution>
            Secondary Vocational School of Electrical Engineering
          </Institution>
          <Program>Information and Networking Technologies</Program>
          <Location>Prešov, Slovakia</Location>
          <Duration>2017 - 2021</Duration>
        </EducationDetails>
      </EducationCard>
    </EducationContainer>
  );
};

export default Education;
