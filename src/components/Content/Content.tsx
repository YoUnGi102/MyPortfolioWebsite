import AboutMe from './aboutMe/MyJourney';

const Content = ({ menuHeight }: { menuHeight: number }) => {
  return (
    <div className="Content" style={{ marginTop: `${menuHeight}` }}>
      <AboutMe />
      {/* <WorkExperience />
      <Projects />
      <Education />
      <Certificates />
      <Skills /> */}
    </div>
  );
};

export default Content;
