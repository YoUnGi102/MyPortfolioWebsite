import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import AboutMe from './components/AboutMe/AboutMe';

const App: React.FC = () => {
  const [menuHeight, setMenuHeight] = useState(0);

  return (
    <>
      <Navbar
        onNavigate={(sectionId: any) => {
          const section = document.getElementById(sectionId);
          section?.scrollIntoView({ behavior: 'smooth' });
        }}
        onMenuToggle={(height: any) => setMenuHeight(height)}
      />
      <AboutMe menuHeight={menuHeight} />
    </>
  );
};

export default App;
