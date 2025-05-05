import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { HashRouter, Route, Routes } from 'react-router-dom';
import AboutMe from '../components/Content/aboutMe/AboutMe';

const App: React.FC = () => {
  const [menuHeight, setMenuHeight] = useState(100);

  return (
    <HashRouter>
      <Navbar onMenuToggle={(height: number) => setMenuHeight(height)} />
      <div className="Content" style={{ marginTop: `${menuHeight + 100}px` }}>
        <Routes>
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
      </div>
      <Footer />
    </HashRouter>
  );
};

export default App;
